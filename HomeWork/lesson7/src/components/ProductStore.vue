<template>
  <div class="main">
    <product-list class="item" />
    <products-in-basket-list class="item" />
    <currency-selector class="item" />
  </div>
</template>

<script>
import ProductList from "./ProductsList/index.vue";
import ProductsInBasketList from "./ProductsBasket/index.vue";
import CurrencySelector from "./CurrencySelector.vue";

export default {
  name: "ProductStore",
  components: { ProductList, ProductsInBasketList, CurrencySelector }
};
</script>

<style scoped>
.main {
  display: flex;
  gap: 40px;
}
.item {
  width: 300px;
}
</style>
