<template>
  <div class="laptop-list">
    <product-card
      v-for="laptop of laptopsList"
      :key="laptop.id"
      :laptop="laptop"
    ></product-card>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  name: "ProductList",
  components: {
    ProductCard
  },
  props: {
    laptopsList: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.laptop-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  row-gap: 20px;
  padding: 50px;
}
</style>
