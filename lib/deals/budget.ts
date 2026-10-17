export type BudgetState = { budget: number | null; budgetExclusive: boolean; budgetIssue: 'invalid' | 'currency' | null };
export const emptyBudget: BudgetState = { budget: null, budgetExclusive: false, budgetIssue: null };

const currencyBefore = /(?:\b(USD|US dollars?|dollars?|EUR|GBP|CAD|AUD|euros?)(?:\s*\$)?|(\$|€|£|¥|CA\$|AU\$|US\$|C\$|A\$))\s*$/i;
const currencyAfter = /^\s*(USD|US dollars?|dollars?|bucks?|EUR|GBP|CAD|AUD|euros?|pounds?)\b/i;
const limitBefore = /\b(under|below|less than|up to|at most|max(?:imum)?(?:\s+(?:is|of))?|budget(?:\s+(?:of|is|to))?)\s*:?\s*$/i;
const measurementAfter = /^\s*(?:watts?|w|kw|volts?|v|amps?|amperes?|mah|wh|grams?|g|kg|kilograms?|lbs?|pounds?|ounces?|oz|ml|liters?|litres?|l|quarts?|qt|cups?|mm|cm|millimeters?|millimetres?|centimeters?|centimetres?|meters?|metres?|m|inch(?:es)?|in|feet|foot|ft|rpm|db|decibels?|hz|mhz|seconds?|secs?|minutes?|mins?|hours?|days?|years?|gb|mb|tb|ports?|percent)\b|^\s*[%"″′]/i;

/** Parse monetary context, not product dimensions. Newest explicit budget wins. */
export function readBudget(messages: string[], previous: BudgetState = emptyBudget): BudgetState {
  let state = previous;
  for (const message of messages) {
    let text = message;
    const reset = [...text.matchAll(/\b(no budget(?: limit)?|remove (?:my |the )?budget|budget is unlimited|ignore (?:my |the )?budget)\b/gi)].at(-1);
    if (reset) {
      state = { ...emptyBudget };
      text = text.slice(reset.index! + reset[0].length);
    }
    const candidates = [...text.matchAll(/-?\d(?:[\d,]*\d)?(?:\.\d+)?(\s*[kK]\b)?/g)].flatMap(match => {
      const before = text.slice(0, match.index!);
      const after = text.slice(match.index! + match[0].length);
      const prefix = before.match(currencyBefore);
      const context = (prefix ? before.slice(0, prefix.index) : before).match(limitBefore);
      const budgetContext = /^budget/i.test(context?.[1] || '');
      // “under $20, maximum 200 watts” and “below 500 grams” are not budget revisions.
      // A bare “pounds” can be weight; only explicit budget context treats it as currency.
      if (measurementAfter.test(after) && !(budgetContext && /^\s*pounds?\b/i.test(after))) return [];
      const suffix = after.match(currencyAfter);
      if (!prefix && !suffix && !context) return [];
      const currencies = [prefix?.[0].trim(), suffix?.[1]].filter((value): value is string => !!value);
      const explicit = currencies.length > 0 || budgetContext;
      const revision = !!context && /\b(?:actually|now|instead)\s*$/i.test(before.slice(0, context.index));
      return [{ raw: match[0].replace(/\s*[kK]$/, ''), scale: match[1] ? 1000 : 1,
        exclusive: /^(under|below|less than)$/i.test(context?.[1] || ''),
        foreign: currencies.some(currency => !/^(?:\$|USD(?:\s*\$)?|US\$|US dollars?|dollars?|bucks?)$/i.test(currency)), explicit, revision }];
    });
    // A later bare comparison in the same request must not displace a clear monetary cap.
    const monetary = candidates.filter(candidate => candidate.explicit);
    const match = (monetary.length ? candidates.filter(candidate => candidate.explicit || candidate.revision) : candidates.filter((candidate, index) => index === 0 || candidate.revision)).at(-1);
    if (!match) continue;
    if (match.foreign) {
      state = { budget: null, budgetExclusive: false, budgetIssue: 'currency' };
      continue;
    }
    const validGrouping = !match.raw.includes(',') || /^\d{1,3}(?:,\d{3})+(?:\.\d+)?$/.test(match.raw);
    const amount = Number(match.raw.replace(/,/g, '')) * match.scale;
    state = validGrouping && Number.isFinite(amount) && amount >= 0 && amount <= 100000 && Math.abs(amount * 100 - Math.round(amount * 100)) < 1e-6
      ? { budget: amount, budgetExclusive: match.exclusive, budgetIssue: null }
      : { budget: null, budgetExclusive: false, budgetIssue: 'invalid' };
  }
  return state;
}
