<template>
  <div>
    <h1>Корзина</h1>
    <div class="chosen-items-list">
      <chosen-item
        v-for="i of chosenProductsList"
        :key="i"
        :chosenItemID="i"
        @delete="$emit('delete', $event)"
      />
    </div>
    <div v-if="chosenProductsList.length">
      Загальна сума: {{ overallSum }} ₴
    </div>
  </div>
</template>

<script>
import ChosenItem from "./ChosenItem.vue";
import { laptops } from "../../../constants/constants.js";
export default {
  name: "ChosenProducts",
  components: {
    ChosenItem
  },
  props: {
    chosenProductsList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    overallSum() {
      let sum = 0;
      laptops.forEach((laptop) => {
        this.chosenProductsList.forEach((chosenLaptopID) => {
          if (laptop.id === chosenLaptopID) {
            sum += laptop.discountedPrice;
          }
        });
      });
      return sum;
    }
  }
};
</script>

<style scoped>
.chosen-items-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 20px;
}
</style>
