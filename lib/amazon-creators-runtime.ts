/** In-process limits only: a multi-instance deployment additionally needs a shared account-wide limiter. */
export class AmazonRequestGate {
  private tail: Promise<void> = Promise.resolve()
  private queued = 0
  private nextRequestAt = 0
  private cooldownUntil = 0
  private day = ''
  private dailyRequests = 0

  constructor(
    private readonly now: () => number = Date.now,
    private readonly sleep: (ms: number) => Promise<void> = ms => new Promise(resolve => setTimeout(resolve, ms)),
    private readonly intervalMs = 1100,
    private readonly dailyLimit = 8640,
    private readonly maxWaitMs = 12_000,
  ) {}

  pause(ms: number) {
    this.cooldownUntil = Math.max(this.cooldownUntil, this.now() + Math.max(ms, 1000))
  }

  async acquire(): Promise<boolean> {
    if (this.queued >= 12 || this.cooldownUntil > this.now()) return false
    const requestedAt = this.now()
    this.queued++
    const attempt = this.tail.then(async () => {
      if (this.cooldownUntil > this.now()) return false
      const wait = Math.max(0, this.nextRequestAt - this.now())
      if (this.now() - requestedAt + wait > this.maxWaitMs) return false
      if (wait) await this.sleep(wait)
      if (this.cooldownUntil > this.now()) return false
      const day = new Date(this.now()).toISOString().slice(0, 10)
      if (day !== this.day) { this.day = day; this.dailyRequests = 0 }
      if (this.dailyRequests >= this.dailyLimit) return false
      this.dailyRequests++
      this.nextRequestAt = this.now() + this.intervalMs
      return true
    })
    this.tail = attempt.then(() => {}, () => {})
    try { return await attempt } finally { this.queued-- }
  }
}

/** Never serves stale values, never writes API payloads or images to disk. */
export class AmazonMemoryCache<T> {
  private readonly entries = new Map<string, { expiresAt: number; value: T }>()
  constructor(private readonly maxEntries = 512, private readonly now: () => number = Date.now) {}

  get(key: string): T | undefined {
    const entry = this.entries.get(key)
    if (!entry) return undefined
    if (entry.expiresAt <= this.now()) { this.entries.delete(key); return undefined }
    return entry.value
  }

  set(key: string, value: T, ttlMs: number) {
    const now = this.now()
    for (const [entryKey, entry] of this.entries) if (entry.expiresAt <= now) this.entries.delete(entryKey)
    this.entries.delete(key)
    while (this.entries.size >= this.maxEntries) this.entries.delete(this.entries.keys().next().value!)
    // All callers use <= six hours; the guard prevents an accidental policy-breaking TTL.
    this.entries.set(key, { value, expiresAt: now + Math.min(Math.max(ttlMs, 0), 6 * 60 * 60 * 1000) })
  }
}

export function amazonRetryDelay(value: string | null, now = Date.now()) {
  if (!value) return 60_000
  const seconds = Number(value)
  const delay = Number.isFinite(seconds) ? seconds * 1000 : Date.parse(value) - now
  return Number.isFinite(delay) ? Math.min(Math.max(delay, 60_000), 24 * 60 * 60 * 1000) : 60_000
}
