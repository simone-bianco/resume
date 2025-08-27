// resources/js/Composables/useAppHead.ts
import { useHead, useSeoMeta } from '@unhead/vue';
import { computed } from 'vue';

// Definiamo un tipo per i dati che la nostra funzione accetterà
export interface AppHeadInput {
  title?: string;
  description?: string;
  image?: string; // URL completo dell'immagine per i social
  canonicalUrl?: string;
}

export function useAppHead(input: AppHeadInput) {
  const appName = (import.meta as any).env?.VITE_APP_NAME || 'Simone Bianco';

  // Usiamo 'computed' per rendere i valori reattivi.
  // Se passi un ref(), si aggiornerà automaticamente.
  const pageTitle = computed(() => (input.title ? `${input.title} | ${appName}` : appName));
  const pageDescription = computed(
    () =>
      input.description ||
      'Simone Bianco — Backend Software Engineer. Portfolio, progetti, competenze e contatti.'
  );
  const pageImage = computed(() => {
    if (input.image) return input.image;
    const origin = typeof window !== 'undefined' && (window as any).location?.origin
      ? (window as any).location.origin
      : 'https://simone-bianco.dev';
    return `${origin}/default-social-image.jpg`;
  });
  const pageUrl = computed(
    () => input.canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '')
  );

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
      lang: 'it-IT',
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
    ogLocale: 'it_IT',
    ogSiteName: appName,

    // Twitter Cards
    twitterCard: 'summary_large_image',
    twitterTitle: pageTitle,
    twitterDescription: pageDescription,
    twitterImage: pageImage,
  });
}
