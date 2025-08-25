<script setup lang="ts">
import ProgressSpinner from 'primevue/progressspinner';
import Image from 'primevue/image';
import avatar from '@/assets/images/avatar.png';

// Riceve il messaggio e gestisce i suoi diversi stati (text, thinking, error)
defineProps<{
    message: { type: string, content: string }
}>();
</script>

<template>
    <div class="message-wrapper">
        <Image :src="avatar" class="w-8 h-8 rounded-full flex-shrink-0" />
        <div class="message-bubble" :class="{ 'bubble-danger': message.type === 'error' }">
            <ProgressSpinner v-if="message.type === 'thinking'" style="width: 20px; height: 20px" strokeWidth="6" />
            <p class="message-content">{{ message.content }}</p>
        </div>
    </div>
</template>

<style scoped>
.message-wrapper {
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;
    max-width: 85%;
    align-self: flex-start; /* Si posiziona sulla sinistra */
}

.message-bubble {
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--surface-700);
    color: var(--surface-0);
    border-bottom-left-radius: 0.25rem;
}

.message-content {
    white-space: pre-wrap;
    word-wrap: break-word;
}

.bubble-danger {
    background-color: var(--red-800);
    color: var(--red-100);
    border: 1px solid var(--red-600);
}
</style>
