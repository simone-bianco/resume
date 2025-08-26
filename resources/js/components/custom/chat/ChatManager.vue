<script setup lang="ts">
import { ref } from 'vue';
import ChatBubble from './ChatBubble.vue';
import Chat from './Chat.vue';
import { ChatMessage } from '@/types/dto';

const props = withDefaults(defineProps<{
    bubbleBottom?: string,
    bubbleRight?: string,
    windowBottom?: string,
    windowRight?: string,
    chatHistory?: ChatMessage[]
}>(), {
    chatHistory: () => [],
    bubbleBottom: '2rem',
    bubbleRight: '2rem',
    windowBottom: '2rem',
    windowRight: '2rem',
});

const isChatOpen = ref(false);
</script>

<template>
    <div>
        <ChatBubble
            v-if="!isChatOpen"
            class="fixed-chat-element"
            :style="{ bottom: bubbleBottom, right: bubbleRight }"
            @open-chat="isChatOpen = true"
        />
        <Chat
            v-else
            class="fixed-chat-element"
            :style="{ bottom: windowBottom, right: windowRight }"
            :chat-history="props.chatHistory"
            @close-chat="isChatOpen = false"
        />
    </div>
</template>

<style scoped>
.fixed-chat-element {
    position: fixed;
    z-index: 1000;
}
</style>
