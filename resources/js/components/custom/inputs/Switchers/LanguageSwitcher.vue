<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { usePage, router } from '@inertiajs/vue3';
import Button from 'primevue/button';
import Menu from 'primevue/menu';
import Image from 'primevue/image';

const { locale } = useI18n();

const page = usePage();
const languagesMap = computed<Record<string, string>>(() => {
    const langs = (page.props as any)?.languages as Record<string, string> | undefined;
    if (langs && typeof langs === 'object' && Object.keys(langs).length > 0) {
        return langs;
    }
    return { en: 'English', it: 'Italiano' };
});
const availableLanguages = computed<string[]>(() => {
    return Object.keys(languagesMap.value);
});

if ((page.props as any).locale) {
    locale.value = (page.props as any).locale as string;
}

const menu = ref<any>(null);

function getFlagUrl(lang: string): string {
    const map: Record<string, string> = {
        it: 'https://cdn.countryflags.com/thumbs/italy/flag-round-250.png',
        en: 'https://cdn.countryflags.com/thumbs/united-kingdom/flag-round-250.png'
    };
    return map[lang] || 'https://cdn.countryflags.com/thumbs/united-nations/flag-round-250.png';
}

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

function getLanguageLabel(lang: string): string {
    return languagesMap.value[lang] || lang.toUpperCase();
}

function switchLanguage(lang: string): void {
    locale.value = lang;

    try {
        window.dispatchEvent(new CustomEvent('language:changed', { detail: lang }));
        (window as any).laravelCookieConsent?.updateTexts?.(lang);
    } catch {
    }

    const props = page.props as any;
    const alias = props?.tenant?.alias as string | undefined;

    const url = alias ? `/${alias}/settings/language` : '/settings/language';

    router.post(url, {
        locale: lang
    }, {
        preserveState: true,
        preserveScroll: true,
        only: []
    });
}

function toggleMenu(event: Event): void {
    (menu.value as any)?.toggle(event);
}

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
</style>
