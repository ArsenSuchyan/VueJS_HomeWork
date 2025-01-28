<template>
  <div>
    <p>{{ message.messageText }}</p>
    <button @click="like">Like</button>
    <button @click="dislike">Dislike</button>
    <div>Likes: {{ message.likes }}</div>
    <div>Dislikes: {{ message.dislikes }}</div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "MessageItem",
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  methods: {
    like() {
      this.$emit("like");
    },
    dislike() {
      this.$emit("dislike");
    }
  }
};
</script>

<style></style>
