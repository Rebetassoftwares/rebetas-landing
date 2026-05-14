const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID || "";
const CLARITY_ID = import.meta.env.VITE_CLARITY_ID || "";

export function saveUtmParams() {
  const params = new URLSearchParams(window.location.search);

  const hasTrackingParams =
    params.has("utm_source") ||
    params.has("utm_medium") ||
    params.has("utm_campaign") ||
    params.has("utm_content") ||
    params.has("utm_term") ||
    params.has("fbclid");

  if (!hasTrackingParams) {
    return JSON.parse(localStorage.getItem("landing_utm_data") || "{}");
  }

  const utmData = {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_content: params.get("utm_content") || "",
    utm_term: params.get("utm_term") || "",
    fbclid: params.get("fbclid") || "",
  };

  localStorage.setItem("landing_utm_data", JSON.stringify(utmData));
  return utmData;
}

export function initMetaPixel() {
  if (!META_PIXEL_ID || window.fbq) return;

  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js",
  );

  window.fbq("init", META_PIXEL_ID);
  window.fbq("track", "PageView");
}

export function trackMeta(eventName, data = {}) {
  if (!window.fbq) return;

  const savedUtm = JSON.parse(localStorage.getItem("landing_utm_data") || "{}");

  window.fbq("track", eventName, {
    ...savedUtm,
    ...data,
  });
}

export function initClarity() {
  if (!CLARITY_ID || window.clarity) return;

  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", CLARITY_ID);
}
