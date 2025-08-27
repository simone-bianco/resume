<script setup lang="ts">
import GuestLayout from '@/layouts/GuestLayout.vue';
import Hero from '@/components/custom/home/Hero.vue';
import Skills from '@/components/custom/home/Skills.vue';
import Experience from '@/components/custom/home/Experience.vue';
import { useAppHead } from '@/composables/useAppHead';

useAppHead({
    title: 'Curriculum',
    description: 'Curriculum e portfolio di Simone Bianco: esperienze, competenze e progetti nel mondo del software backend.',
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
