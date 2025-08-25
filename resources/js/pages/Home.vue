<script setup lang="ts">
import GuestLayout from '@/layouts/GuestLayout.vue';
import Hero from '@/components/custom/home/Hero.vue';
import Skills from '@/components/custom/home/Skills.vue';
import Experience from '@/components/custom/home/Experience.vue';
import ChatManager from '@/components/custom/chat/ChatManager.vue';

</script>

<template>
    <GuestLayout>
        <Hero class="mt-10 md:mt-24" />

        <Skills />

        <Experience />

        <ChatManager />
    </GuestLayout>
</template>

<style>
</style>
