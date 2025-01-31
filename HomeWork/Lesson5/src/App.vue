<template>
  <div>
    <product-cards-list></product-cards-list>
    <laptop-shop />
  </div>
</template>

<script>
import ProductCardsList from "./components/ProductCardsList";
import LaptopShop from "./components/LaptopShop.vue";

export default {
  name: "App",
  components: {
    ProductCardsList,
    LaptopShop
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-bottom: 50px;
}
</style>
