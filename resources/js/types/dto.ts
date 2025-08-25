export interface ChatMessage {
    id: number | string;
    author: 'user' | 'assistant' | string;
    type: 'text' | 'thinking' | 'error' | string;
    content: string;
}
