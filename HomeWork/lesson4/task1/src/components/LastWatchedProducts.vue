<template>
  <div>
    <h2>Останні переглянуті товари</h2>
    <div class="product-cards">
      <product-card
        v-for="productItem in electronics"
        :key="productItem.id"
        :product="productItem"
        class="product-card"
      ></product-card>
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  name: "LastWatchedProducts",
  components: { ProductCard },
  props: {},
  data() {
    return {
      electronics: [
        {
          id: 1,
          name: "Apple MacBook Air M2",
          imageUrl:
            "https://dzvinok.ua/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/a/p/apple_macbook_air_m2_a2682_mlxw3uaa_-foto2.webp",
          inStock: true,
          price: 1199
        },
        {
          id: 2,
          name: "Samsung 4K UHD Smart TV",
          imageUrl:
            "https://images.prom.ua/3970650076_w600_h600_3970650076.jpg",
          inStock: false,
          price: 899
        },
        {
          id: 3,
          name: "Sony Noise Cancelling Headphones",
          imageUrl:
            "https://sonyimages.blob.core.windows.net/productr/large/WHCH720NB.CE7_0.png",
          inStock: true,
          price: 249,
          originalPrice: 299
        }
      ]
    };
  }
};
</script>

<style scoped>
.product-cards {
  display: flex;
  gap: 60px;
}
.product-card {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 250px;
}
</style>
