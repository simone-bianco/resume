// resources/js/composables/useGoogleAnalytics.ts
import { useScript } from '@unhead/vue';
import { router } from '@inertiajs/vue3';

/**
 * Google Analytics integration using Unhead's useScript.
 * - Loads gtag.js lazily (after a small delay) to avoid blocking rendering.
 * - Sets up window.dataLayer and window.gtag like the official snippet.
 * - Queues calls until the script is loaded.
 * - Tracks Inertia client-side navigations.
 */
let __gaInitialized = false;

export function useGoogleAnalytics() {
  const GA_MEASUREMENT_ID = (import.meta as any).env?.VITE_GA_ID as string | undefined;
  if (!GA_MEASUREMENT_ID) {
    console.error('[GA] VITE_GA_ID is not defined. Google Analytics will not be initialized.');
    return;
  }

  if (typeof window === 'undefined') {
    return;
  }
  if (__gaInitialized) {
    return;
  }
  __gaInitialized = true;

  const w = window as any;

  // Initialize dataLayer and gtag like the official snippet
  w.dataLayer = w.dataLayer || [];
  w.gtag =
    w.gtag ||
    function () {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer.push(arguments);
    };

  // Load gtag.js with a delayed trigger to avoid impacting initial load
  const { proxy } = useScript(
    {
      src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
      async: true,
      key: 'ga-gtag',
      tagPosition: 'bodyClose',
    },
    {
      trigger: new Promise<void>((resolve) => setTimeout(resolve, 2000)),
    }
  );

  // Keep proxy in sync with window globals so queued calls are consistent (guard if proxy is available)
  if (proxy && typeof proxy === 'object') {
    (proxy as any).dataLayer = w.dataLayer;
    (proxy as any).gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer.push(arguments);
    };
  }

  // Initial GA config events (will be queued until script ready)
  w.gtag('js', new Date());
  w.gtag('config', GA_MEASUREMENT_ID);

  // Track Inertia navigations
  router.on('success', () => {
    try {
      w.gtag('config', GA_MEASUREMENT_ID, {
        page_path: window.location.pathname + window.location.search + window.location.hash,
      });
    } catch {
      /* no-op */
    }
  });
}
