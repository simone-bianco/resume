// resources/js/Composables/useAppHead.ts
import { useHead, useSeoMeta } from '@unhead/vue';
import { computed, unref } from 'vue';
import { useI18n } from 'vue-i18n';
import { usePage } from '@inertiajs/vue3';

// Definiamo un tipo per i dati che la nostra funzione accetterà
export interface AppHeadInput {
  title?: import('vue').MaybeRef<string | undefined>;
  description?: import('vue').MaybeRef<string | undefined>;
  image?: import('vue').MaybeRef<string | undefined>; // URL completo dell'immagine per i social
  canonicalUrl?: import('vue').MaybeRef<string | undefined>;
}

function toHtmlLang(locale: string): string {
  if (!locale) return 'en-US';
  if (locale.includes('-')) return locale;
  const map: Record<string, string> = { it: 'it-IT', en: 'en-US' };
  return map[locale] || `${locale}-${locale.toUpperCase()}`;
}

function toOgLocale(locale: string): string {
  if (!locale) return 'en_US';
  if (locale.includes('-')) {
    const [l, r] = locale.split('-');
    return `${l}_${r.toUpperCase()}`;
  }
  const map: Record<string, string> = { it: 'it_IT', en: 'en_US' };
  return map[locale] || `${locale}_${locale.toUpperCase()}`;
}

function ensureAbsolute(baseOrigin: string, urlish: string): string {
  if (!urlish) return '';
  if (/^https?:\/\//i.test(urlish)) return urlish;
  const path = urlish.startsWith('/') ? urlish : `/${urlish}`;
  return `${baseOrigin}${path}`;
}

export function useAppHead(input: AppHeadInput) {
  const appName = (import.meta as any).env?.VITE_APP_NAME as string | undefined;
  if (!appName) {
    console.error('[Head] VITE_APP_NAME is not defined. og:site_name and title branding may be incomplete.');
  }
  const { locale } = useI18n();
  const inertiaPage = usePage();

  const baseOrigin = computed(() => {
    const ziggyUrl = (((inertiaPage.props as any)?.ziggy?.url as string) || (typeof window !== 'undefined' ? window.location.origin : '')) as string;
    return String(ziggyUrl).replace(/\/+$/, '');
  });

  const currentPath = computed(() => {
    const p = (inertiaPage as any)?.url as string | undefined;
    if (typeof p === 'string' && p.length > 0) {
      return p.split('#')[0];
    }
    const zigLoc = ((inertiaPage.props as any)?.ziggy?.location as string) || '';
    if (zigLoc) {
      try { return new URL(zigLoc).pathname; } catch { /* ignore */ }
    }
    if (typeof window !== 'undefined') {
      return window.location.pathname + window.location.search + window.location.hash;
    }
    return '/';
  });

  // Usiamo 'computed' per rendere i valori reattivi.
  // Se passi un ref(), si aggiornerà automaticamente.
  const rawTitle = computed(() => {
    const ti = (unref(input.title) ?? '').toString().trim();
    if (!ti) {
      console.error('[Head] Missing page title in useAppHead input.');
      return undefined;
    }
    return ti;
  });
  const pageDescription = computed(() => {
    const desc = (unref(input.description) ?? '').toString().trim();
    if (desc) return desc;
    const l = String((locale as any).value || '').toLowerCase();
    const def = l.startsWith('it')
      ? 'Curriculum e portfolio di Simone Bianco: esperienze, competenze e progetti nel mondo del software backend.'
      : 'Curriculum and portfolio of Simone Bianco: experience, skills, and backend software projects.';
    return def;
  });
  const pageImage = computed(() => {
    let img = (unref(input.image) ?? '').toString().trim();
    let envOg = ((import.meta as any).env?.VITE_OG_IMAGE as string | undefined) || 'https://media.licdn.com/dms/image/v2/D4E03AQHhj7pqmUFcLA/profile-displayphoto-shrink_800_800/B4EZNpAFmiG8Ac-/0/1732633451311?e=1759363200&v=beta&t=9_MkmK6rIOX2WUXz_vGPo41y2TOBPIMVaiBLx6WTc4w';
    if (envOg) {
      envOg = envOg.trim();
      if ((envOg.startsWith('"') && envOg.endsWith('"')) || (envOg.startsWith('\'') && envOg.endsWith('\''))) {
        envOg = envOg.slice(1, -1);
      }
    }
    if (!img && envOg) {
      img = envOg;
    }
    if (!img) {
      console.error('[Head] Missing social image URL (og/twitter). Define input.image or VITE_OG_IMAGE in your environment.');
      return undefined;
    }
    return ensureAbsolute(baseOrigin.value, img);
  });
  const pageUrl = computed(() => {
    const url = (unref(input.canonicalUrl) ?? '').toString().trim();
    if (url) {
      return ensureAbsolute(baseOrigin.value, url);
    }
    // Derive absolute canonical from Inertia/Ziggy without logging an error
    const pathOnly = currentPath.value.split('#')[0];
    const normalized = pathOnly.startsWith('/') ? pathOnly : `/${pathOnly}`;
    return `${baseOrigin.value}${normalized}`;
  });

  const htmlLang = computed(() => {
    const l = String((locale as any).value || '');
    if (!l) {
      console.error('[Head] Missing locale; html lang attribute will be omitted.');
      return undefined;
    }
    return toHtmlLang(l);
  });
  const ogLocale = computed(() => {
    const l = String((locale as any).value || '');
    if (!l) {
      console.error('[Head] Missing locale; og:locale will be omitted.');
      return undefined as unknown as string;
    }
    return toOgLocale(l);
  });

  // useHead per i tag generici
  useHead({
    title: rawTitle,
    link: [
      {
        rel: 'canonical',
        href: pageUrl,
      },
    ],
    htmlAttrs: {
      lang: () => htmlLang.value,
    },
  });

  // useSeoMeta è un helper per i tag SEO e Social
  useSeoMeta({
    // Title e Description base: title è gestito da useHead
    description: pageDescription,

    // Open Graph
    ogTitle: rawTitle,
    ogDescription: pageDescription,
    ogImage: pageImage,
    ogUrl: pageUrl,
    ogType: 'website',
    ogLocale: ogLocale,
    ogSiteName: computed(() => appName || undefined),

    // Twitter Cards
    twitterCard: 'summary_large_image',
    twitterTitle: rawTitle,
    twitterDescription: pageDescription,
    twitterImage: pageImage,
  });
}
