<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { usePage, router } from '@inertiajs/vue3';
import Button from 'primevue/button';
import Menu from 'primevue/menu';
import Image from 'primevue/image';

// Get i18n instance
const { locale } = useI18n();

// Get available languages from Inertia props
const page = usePage();
const languagesMap = computed<Record<string, string>>(() => page.props.languages || { en: 'English', it: 'Italiano' });
const availableLanguages = computed<string[]>(() => {
    return Object.keys(languagesMap.value);
});

// Set initial locale from Inertia props if available
if ((page.props as any).locale) {
    locale.value = (page.props as any).locale as string;
}

// Reference to the menu
const menu = ref<any>(null);

// Helper: map language code to a CountryFlags.com image URL
function getFlagUrl(lang: string): string {
    // Using round icons from cdn.countryflags.com as requested
    const map: Record<string, string> = {
        it: 'https://cdn.countryflags.com/thumbs/italy/flag-round-250.png',
        en: 'https://cdn.countryflags.com/thumbs/united-kingdom/flag-round-250.png'
    };
    return map[lang] || 'https://cdn.countryflags.com/thumbs/united-nations/flag-round-250.png';
}

// Menu items for language selection
interface LanguageItem {
    label: string;
    lang: string;
    flagUrl: string;
    command: () => void;
}

const items = computed<LanguageItem[]>(() => {
    if (!Array.isArray(availableLanguages.value)) {
        return [];
    }

    return availableLanguages.value.map((lang) => ({
        label: getLanguageLabel(lang),
        lang,
        flagUrl: getFlagUrl(lang),
        command: () => switchLanguage(lang)
    }));
});

// Get language label
function getLanguageLabel(lang: string): string {
    return languagesMap.value[lang] || lang.toUpperCase();
}

// Switch language
function switchLanguage(lang: string): void {
    // Update the locale in the i18n instance
    locale.value = lang;

    // Determine tenant alias from Inertia props (authoritative)
    const props = page.props as any;
    const alias = props?.tenant?.alias as string | undefined;

    // Construct the appropriate URL based on actual tenant context
    const url = alias ? `/${alias}/settings/language` : '/settings/language';

    // Use Inertia's router to post to the language update endpoint
    router.post(url, {
        locale: lang
    }, {
        preserveState: true,
        preserveScroll: true,
        only: []
    });
}

// Toggle menu
function toggleMenu(event: Event): void {
    (menu.value as any)?.toggle(event);
}

// Current language flag URL
const currentFlagUrl = computed<string>(() => getFlagUrl(locale.value));
</script>

<template>
    <div class="language-switcher">
        <Button @click="toggleMenu" size="large" variant="text">
            <Image :src="currentFlagUrl" alt="current language" width="25" height="25" style="display:inline-block;" />
        </Button>
        <Menu ref="menu" :model="items" :popup="true">
            <template #item="{ item, props }">
                <a v-bind="props.action" class="flex align-items-center gap-2 w-full">
                    <Image :src="item.flagUrl" :alt="item.lang + ' flag'" width="18" height="18" />
                    <span>{{ item.label }}</span>
                    <i v-if="item.lang === locale" class="pi pi-check ml-auto"></i>
                </a>
            </template>
        </Menu>
    </div>
</template>

<style scoped>
/* Nessun colore personalizzato: lo stile è gestito dal tema */
</style>
