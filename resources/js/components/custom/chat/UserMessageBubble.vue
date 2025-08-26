<script setup lang="ts">
defineProps<{
    message: { content: string }
}>();
</script>

<template>
    <div class="message-wrapper">
        <div class="message-bubble">
            <p class="message-content">{{ message.content }}</p>
        </div>
    </div>
</template>

<style scoped>
.message-wrapper {
    display: flex;
    justify-content: flex-end;
    width: 100%;
}

.message-bubble {
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    max-width: 85%;

    background-color: dodgerblue;
    color: var(--surface-0);

    border-bottom-right-radius: 0.25rem;
}

.message-content {
    white-space: pre-wrap;
    word-wrap: break-word;
    text-align: left;
}
</style>
