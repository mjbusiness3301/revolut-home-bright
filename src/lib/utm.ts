/**
 * Captures UTM parameters from the current URL and stores them in sessionStorage.
 * Call this on app load or landing pages.
 */
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

export function captureUtmParams(): UtmParams {
  const params = new URLSearchParams(window.location.search);
  const utms: UtmParams = {};

  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) {
      utms[key] = value;
    }
  });

  // Only store if we found at least one UTM param
  if (Object.keys(utms).length > 0) {
    sessionStorage.setItem("utm_params", JSON.stringify(utms));
  }

  return utms;
}

export function getStoredUtmParams(): UtmParams {
  try {
    const stored = sessionStorage.getItem("utm_params");
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}
