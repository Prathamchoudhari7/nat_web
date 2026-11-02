/** Seconds until the preloader curtain starts to lift (matches globals.css). */
const CURTAIN_START = 1.35;

/**
 * Extra delay for hero entrance animations so they play as the curtain lifts
 * rather than unseen beneath it. Only affects Motion transitions, which are
 * never part of the server-rendered markup, so hydration is unaffected.
 */
export function introDelay() {
  if (typeof document === "undefined") return 0;
  return document.documentElement.dataset.intro === "play" ? CURTAIN_START : 0;
}
