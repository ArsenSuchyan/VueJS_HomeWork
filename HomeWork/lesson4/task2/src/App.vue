<template>
  <div>
    <label>
      Введіть повідомлення
      <input v-model.trim="enteredMessage" type="text" />
    </label>
    <button @click="sendMessage(this.enteredMessage)">Send</button>
    <div>
      <message-item
        v-for="(messageItem, ind) in sendedMessages"
        :key="ind"
        :message="messageItem"
        @like="messageItem.likes++"
        @dislike="messageItem.dislikes++"
      ></message-item>
    </div>
  </div>
</template>

<script>
import MessageItem from "./components/MessageItem.vue";

export default {
  name: "App",
  components: {
    MessageItem
  },
  data() {
    return {
      enteredMessage: null,
      sendedMessages: []
    };
  },
  methods: {
    sendMessage(message) {
      if (this.enteredMessage) {
        const newMessage = {
          messageText: message,
          likes: 0,
          dislikes: 0
        };
        this.sendedMessages.push(newMessage);
        this.enteredMessage = null;
      }
    }
  }
};
</script>

<style></style>
