"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Shared, minimal analytics store. Only the public tracking endpoint receives data.
const endpoint = "https://dubbo-ewaste-app.vercel.app/api/analytics";
function enabled() {
  return !navigator.globalPrivacyControl && navigator.doNotTrack !== "1";
}
function send(event, page, target) {
  if (!enabled()) return;
  const body = JSON.stringify({ event, page, target });
  try {
    if (navigator.sendBeacon && navigator.sendBeacon(endpoint, new Blob([body], { type: "text/plain" }))) return;
    void fetch(endpoint, { method: "POST", headers: { "Content-Type": "text/plain" },
      body, mode: "cors", credentials: "omit", keepalive: true }).catch(() => undefined);
  } catch { /* Analytics must not interfere with the website. */ }
}
export function AnalyticsTracker() {
  const pathname = usePathname();
  useEffect(() => { if (pathname) send("page_view", pathname); }, [pathname]);
  useEffect(() => {
    function handleClick(event) {
      if (!(event.target instanceof Element)) return;
      const el = event.target.closest("a,button,[data-analytics-event]");
      if (!el || el.closest("[data-no-analytics]")) return;
      let target = el.getAttribute("data-analytics-event") || (el.tagName === "BUTTON" ? "button" : "interaction");
      if (el instanceof HTMLAnchorElement) {
        try {
          const url = new URL(el.href);
          target = url.origin === location.origin ? url.pathname : "external:" + url.hostname;
        } catch { target = "link"; }
      }
      send("click", location.pathname, target);
    }
    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);
  return null;
}
