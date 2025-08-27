<script setup lang="ts">
import GuestLayout from '@/layouts/GuestLayout.vue';
import Hero from '@/components/custom/home/Hero.vue';
import Skills from '@/components/custom/home/Skills.vue';
import Experience from '@/components/custom/home/Experience.vue';
import { useAppHead } from '@/composables/useAppHead';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

useAppHead({
    title: t('meta.home_title') as unknown as string,
});

</script>

<template>
    <GuestLayout>
        <Hero class="mt-10 md:mt-24" />

        <Experience />

        <Skills />
    </GuestLayout>
</template>

<style>
</style>
