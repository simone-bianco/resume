// resources/js/Composables/useAppHead.ts
import { useHead, useSeoMeta } from '@unhead/vue';
import { computed, unref } from 'vue';
import { useI18n } from 'vue-i18n';

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

export function useAppHead(input: AppHeadInput) {
  const appName = (import.meta as any).env?.VITE_APP_NAME || 'Simone Bianco';
  const { t, locale } = useI18n();

  // Usiamo 'computed' per rendere i valori reattivi.
  // Se passi un ref(), si aggiornerà automaticamente.
  const pageTitle = computed(() => {
    const ti = unref(input.title);
    return ti ? `${ti} | ${appName}` : appName;
  });
  const pageDescription = computed(() => {
    const desc = unref(input.description);
    return desc || t('meta.default_description');
  });
  const pageImage = computed(() => {
    const img = unref(input.image);
    if (img) return img;
    const origin = typeof window !== 'undefined' && (window as any).location?.origin
      ? (window as any).location.origin
      : 'https://simone-bianco.dev';
    return `${origin}/default-social-image.jpg`;
  });
  const pageUrl = computed(() => {
    const url = unref(input.canonicalUrl);
    return url || (typeof window !== 'undefined' ? window.location.href : '');
  });

  const htmlLang = computed(() => toHtmlLang(String((locale as any).value || 'en')));
  const ogLocale = computed(() => toOgLocale(String((locale as any).value || 'en')));

  // useHead per i tag generici
  useHead({
    title: pageTitle,
    link: [
      {
        rel: 'canonical',
        href: pageUrl,
      },
    ],
    htmlAttrs: {
      lang: htmlLang,
    },
  });

  // useSeoMeta è un helper per i tag SEO e Social
  useSeoMeta({
    // Title e Description base: title è gestito da useHead
    description: pageDescription,

    // Open Graph
    ogTitle: pageTitle,
    ogDescription: pageDescription,
    ogImage: pageImage,
    ogUrl: pageUrl,
    ogType: 'website',
    ogLocale: ogLocale,
    ogSiteName: appName,

    // Twitter Cards
    twitterCard: 'summary_large_image',
    twitterTitle: pageTitle,
    twitterDescription: pageDescription,
    twitterImage: pageImage,
  });
}
