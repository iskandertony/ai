import { makeAutoObservable } from "mobx";

class ChatStore {
    chatHistory = {};

    constructor() {
        makeAutoObservable(this);
    }

    addMessageToChat(topic, message) {
        if (!this.chatHistory[topic]) {
            this.chatHistory[topic] = [];
        }
        this.chatHistory[topic].push(message);
    }

    getChatHistory(topic) {
        return this.chatHistory[topic] || [];
    }
}

const chatStore = new ChatStore();
export default chatStore;
