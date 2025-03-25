import { ContextTracker } from "@lezer/lr";

const keywords = new Set(["let", "true", "false", "null"]);

export const keywordContext = new ContextTracker({
  start: false,
  shift(context, term) {
    return keywords.has(term.toLowerCase());
  }
});