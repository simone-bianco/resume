<script setup lang="ts">
import GuestLayout from '@/layouts/GuestLayout.vue';
import Card from 'primevue/card';
import { Divider } from 'primevue';
import { useI18n } from 'vue-i18n';
import { route } from 'ziggy-js';

const { t } = useI18n();

const projectEnter = {
    enterClass: 'animate-enter fade-in-10 slide-in-from-b-12 animate-duration-1000'
};

const projects = [
    {
        titleKey: 'projects.items.ammiraglio.title',
        categoryKey: 'dnafactory',
        bodyKey: 'projects.items.ammiraglio.body',
        linkPlaceholderKey: 'projects.linkPlaceholder.private'
    },
    {
        titleKey: 'projects.items.dieteincloud.title',
        categoryKey: 'dnafactory',
        bodyKey: 'projects.items.dieteincloud.body',
        link: 'https://www.dieteincloud.it'
    },
    {
        titleKey: 'projects.items.gruppoedico.title',
        categoryKey: 'dnafactory',
        bodyKey: 'projects.items.gruppoedico.body',
        link: 'https://www.gruppoedico.it/',
        linkPlaceholderKey: 'projects.linkPlaceholder.private'
    },
    {
        titleKey: 'projects.items.mensa.title',
        categoryKey: 'dnafactory',
        bodyKey: 'projects.items.mensa.body',
        link: 'https://institute.mensa.it/',
        linkPlaceholderKey: 'projects.linkPlaceholder.private'
    },
    {
        titleKey: 'projects.items.editorial_builder.title',
        categoryKey: 'dnafactory',
        bodyKey: 'projects.items.editorial_builder.body',
        linkPlaceholderKey: 'projects.linkPlaceholder.private'
    },
    {
        titleKey: 'projects.items.efarma.title',
        categoryKey: 'dnafactory',
        bodyKey: 'projects.items.efarma.body',
        link: 'https://www.efarma.com'
    },
    {
        titleKey: 'projects.items.astrolume.title',
        categoryKey: 'dnafactory',
        link: 'https://astrolume.ai',
        bodyKey: 'projects.items.astrolume.body',
        linkPlaceholderKey: 'projects.linkPlaceholder.private'
    },
    {
        titleKey: 'projects.items.blog_suggestions_ai.title',
        categoryKey: 'dnafactory',
        bodyKey: 'projects.items.blog_suggestions_ai.body',
        linkPlaceholderKey: 'projects.linkPlaceholder.private'
    },
    {
        titleKey: 'projects.items.desk_helper_ai.title',
        categoryKey: 'dnafactory',
        bodyKey: 'projects.items.desk_helper_ai.body',
        linkPlaceholderKey: 'projects.linkPlaceholder.private'
    },
    {
        titleKey: 'projects.items.resume_ai.title',
        categoryKey: 'personal',
        bodyKey: 'projects.items.resume_ai.body',
        link: 'https://github.com/simone-bianco/resume'
    },
    {
        titleKey: 'projects.items.laravel_rules.title',
        categoryKey: 'personal',
        bodyKey: 'projects.items.laravel_rules.body',
        link: 'https://github.com/simone-bianco/laravel-rules'
    },
    {
        titleKey: 'projects.items.hrm.title',
        categoryKey: 'universita',
        bodyKey: 'projects.items.hrm.body',
        link: route('thesis'),
        linkPlaceholderKey: 'projects.linkPlaceholder.legacy'
    },
];

const sections = [
    { key: 'dnafactory', titleKey: 'projects.groupTitles.dnafactory' },
    { key: 'personal', titleKey: 'projects.groupTitles.personal' },
    { key: 'universita', titleKey: 'projects.groupTitles.universita' },
];
</script>

<template>
    <GuestLayout>
        <section class="px-4 py-16 sm:py-24">
            <div class="container mx-auto max-w-3xl">
                <div class="text-center mb-10">
                    <h2 class="text-3xl sm:text-4xl font-bold text-[var(--text-color)]">{{ t('projects.sectionTitle') }}</h2>
                </div>

                <div v-for="sec in sections" :key="sec.key" class="mb-12">
                    <div v-if="projects.some(p => p.categoryKey === sec.key)">
                        <div class="section-title">
                            <h3 class="text-2xl font-semibold text-[var(--text-color)]">{{ t(sec.titleKey) }}</h3>
                            <div class="title-underline"></div>
                        </div>
                        <div class="flex flex-col gap-6 mt-6">
                            <Card v-for="(p, idx) in projects.filter(pr => pr.categoryKey === sec.key)" :key="`${sec.key}-${idx}`"
                                  class="project-card" v-animateonscroll="projectEnter">
                                <template #title>
                                    {{ t(p.titleKey) }}
                                </template>
                                <template #subtitle>
                                    <div class="project-subtitle">
                                        <span>{{ t(`projects.categories.${p.categoryKey}`) }}</span>
                                    </div>
                                    <Divider />
                                </template>
                                <template #content>
                                    <p class="project-body">{{ t(p.bodyKey) }}</p>
                                </template>
                                <template v-if="p.link || p.linkPlaceholderKey" #footer>
                                    <div class="project-footer">
                                        <a v-if="p.link" :href="p.link" target="_blank" rel="noopener noreferrer"
                                           class="project-link">{{ p.link }}</a>
                                        <span v-else class="project-link-placeholder">{{ t(p.linkPlaceholderKey) }}</span>
                                    </div>
                                </template>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </GuestLayout>
</template>

<style scoped>
.project-card {
    border-radius: 1rem;
    border: 1px solid var(--surface-700);
    color: var(--text-color);
    transition: box-shadow var(--hover-transition-duration, 400ms) cubic-bezier(0.25, 0.8, 0.25, 1),
                border-color var(--hover-transition-duration, 400ms) ease;
}

/* Uniform illumination on hover, NO zoom/scale/translate */
.project-card:hover {
    box-shadow: 0 15px 40px rgba(var(--primary-color-rgb), 0.2);
    border-color: var(--primary-color);
}

.project-body { color: var(--text-color); line-height: 1.6; }
.project-subtitle { color: var(--text-color); }

.project-footer { margin-top: 0.5rem; }
.project-link { color: var(--primary-color); text-decoration: underline; word-break: break-all; }
.project-link-placeholder { color: var(--surface-400); font-style: italic; }

.section-title { display: flex; flex-direction: column; gap: 0.35rem; }
.title-underline {
    width: 250px;
    height: 4px;
    border-radius: 9999px;
    background: linear-gradient(90deg, var(--primary-color), rgba(var(--primary-color-rgb), 0.4));
    box-shadow: 0 0 14px 2px rgba(var(--primary-color-rgb), 0.35);
}
</style>
