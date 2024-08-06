import { create } from "zustand";

interface ConversationState {
    selectedConversation: any;
    setSelectedConversation: (selectedConversation: any) => void;
    messages: any[];
    setMessages: (messages: any[]) => void;
    [Symbol.iterator](): Iterator<any>;
}

const useConversation = create<ConversationState>((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({
        selectedConversation
    }),
    messages: [],
    setMessages: (messages) => set({
        messages
    }),
    [Symbol.iterator]() {
        let index = 0;
        const values = [
            this.selectedConversation,
            this.setSelectedConversation,
            this.messages,
            this.setMessages
        ];
        return {
            next: () => ({
                value: values[index++],
                done: index > values.length
            })
        };
    }
}))

export default useConversation;