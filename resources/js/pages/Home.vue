<script setup lang="ts">
import GuestLayout from '@/layouts/GuestLayout.vue';
import Hero from '@/components/custom/home/Hero.vue';
import Skills from '@/components/custom/home/Skills.vue';
import Experience from '@/components/custom/home/Experience.vue';
import ChatManager from '@/components/custom/chat/ChatManager.vue';
import { ChatMessage } from '@/types/dto';

const props = withDefaults(defineProps<{ chatHistory?: ChatMessage[] }>(), {
    chatHistory: () => []
});

</script>

<template>
    <GuestLayout>
        <Hero class="mt-10 md:mt-24" />

        <Skills />

        <Experience />

        <ChatManager :chatHistory="props.chatHistory" class="mb-10" />
    </GuestLayout>
</template>

<style>
</style>
