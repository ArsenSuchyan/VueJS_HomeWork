<template>
  <div>
    <name-input-body
      v-model:name.isEmpty="userName"
      v-model:age.isAdult="userAge"
    />
    <div>Ім'я: {{ userName }}</div>
    <div>Вік: {{ userAge }}</div>
  </div>
</template>

<script>
import NameInputBody from "./NameInputBody.vue";

export default {
  name: "NameInput",
  components: {
    NameInputBody
  },
  data() {
    return {
      userName: null,
      userAge: null
    };
  }
};
</script>

<style scoped></style>
