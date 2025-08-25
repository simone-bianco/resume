<script setup lang="ts">
import { ref } from 'vue';
import ChatBubble from './ChatBubble.vue';
import ChatWindow from './ChatWindow.vue';

defineProps({
    bubbleBottom: { type: String, default: '2rem' },
    bubbleRight: { type: String, default: '2rem' },
    windowBottom: { type: String, default: '2rem' },
    windowRight: { type: String, default: '2rem' }
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
        <ChatWindow
            v-else
            class="fixed-chat-element"
            :style="{ bottom: windowBottom, right: windowRight }"
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
