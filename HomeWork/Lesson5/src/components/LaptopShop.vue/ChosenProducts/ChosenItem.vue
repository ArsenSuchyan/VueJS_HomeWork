<template>
  <div class="chosen-item">
    <div>{{ chosenLaptop.name }} - {{ chosenLaptop.discountedPrice }} ₴</div>
    <button @click="removeFromChosen">X</button>
  </div>
</template>

<script>
import { laptops } from "../../../constants/constants.js";
export default {
  name: "ChosenItem",
  props: {
    chosenItemID: {
      type: Number,
      required: true
    }
  },
  computed: {
    chosenLaptop() {
      return laptops.find((el) => el.id === this.chosenItemID);
    }
  },
  methods: {
    removeFromChosen() {
      this.$emit("delete", this.chosenItemID);
    }
  }
};
</script>

<style scoped>
.chosen-item {
  display: flex;
  gap: 5px;
}
</style>
