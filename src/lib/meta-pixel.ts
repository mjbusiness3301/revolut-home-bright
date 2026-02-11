/**
 * Meta Pixel helper — thin wrapper around fbq() so we get type‑safety
 * and a single place to maintain pixel calls.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type StandardEvent =
  | "PageView"
  | "Lead"
  | "CompleteRegistration"
  | "InitiateCheckout"
  | "AddToCart"
  | "Purchase"
  | "ViewContent";

export function trackPixelEvent(
  event: StandardEvent,
  params?: Record<string, unknown>,
) {
  if (typeof window !== "undefined" && window.fbq) {
    if (params) {
      window.fbq("track", event, params);
    } else {
      window.fbq("track", event);
    }
  }
}
