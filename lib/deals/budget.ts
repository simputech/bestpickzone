export type BudgetState = { budget: number | null; budgetExclusive: boolean; budgetIssue: 'invalid' | 'currency' | null };
export const emptyBudget: BudgetState = { budget: null, budgetExclusive: false, budgetIssue: null };

/** User-authored amounts only. Newest explicit amount wins; ordinary replies retain state. */
export function readBudget(messages: string[], previous: BudgetState = emptyBudget): BudgetState {
  let state = previous;
  for (const message of messages) {
    let text = message;
    const reset = [...text.matchAll(/\b(no budget(?: limit)?|remove (?:my |the )?budget|budget is unlimited|ignore (?:my |the )?budget)\b/gi)].at(-1);
    if (reset) {
      state = { ...emptyBudget };
      text = text.slice(reset.index! + reset[0].length);
    }
    if (/[€£¥]|\b(EUR|GBP|CAD|AUD|euros?|pounds?)\b|(?:CA|AU|C|A)\$/i.test(text)) {
      state = { budget: null, budgetExclusive: false, budgetIssue: 'currency' };
      continue;
    }
    const amounts = [...text.matchAll(/(?:\b(under|below|less than|up to|at most|max(?:imum)?(?:\s+(?:is|of))?|budget(?:\s+(?:of|is|to))?)\s*\$?\s*|\$\s*)(-?\d[\d,]*(?:\.\d+)?)(\s*[kK]\b)?|(\d[\d,]*(?:\.\d+)?)\s*(?:US dollars?|USD|dollars?|bucks?)\b/gi)];
    const match = amounts.at(-1);
    if (!match) continue;
    const raw = match[2] || match[4];
    const validGrouping = !raw.includes(',') || /^\d{1,3}(?:,\d{3})+(?:\.\d+)?$/.test(raw);
    const amount = Number(raw.replace(/,/g, '')) * (match[3] ? 1000 : 1);
    state = validGrouping && Number.isFinite(amount) && amount >= 0 && amount <= 100000 && Math.abs(amount * 100 - Math.round(amount * 100)) < 1e-6
      ? { budget: amount, budgetExclusive: /^(under|below|less than)$/i.test(match[1] || ''), budgetIssue: null }
      : { budget: null, budgetExclusive: false, budgetIssue: 'invalid' };
  }
  return state;
}
