<template>
  <div class="card-list">
    <product-card
      v-for="item of berriesList"
      :key="item.id"
      :product="item"
      class="card-item"
    ></product-card>
    <laptop-shop />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import { berriesList } from "../../constants/constants.js";
export default {
  name: "ProductCardsList",
  components: {
    ProductCard
  },
  props: {},
  computed: {
    berriesList() {
      return berriesList;
    }
  }
};
</script>

<style scoped>
.card-list {
  display: flex;
  gap: 30px;
  margin-bottom: 50px;
}
.card-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
