<template>
  <div class="main">
    <comparison-lists
      productName="Мобільні телефони"
      :productList="smartphones"
    ></comparison-lists>
    <last-watched-products></last-watched-products>
  </div>
</template>

<script>
import ComparisonLists from "./components/ComparisonLists.vue";
import LastWatchedProducts from "./components/LastWatchedProducts.vue";

export default {
  name: "App",
  components: {
    ComparisonLists,
    LastWatchedProducts
  },
  data() {
    return {
      smartphones: [
        {
          id: 1,
          model: "iPhone 15 Pro",
          imageUrl:
            "https://img.jabko.ua/image/cache/catalog/products/2023/09/122244/1-1397x1397.jpg.webp"
        },
        {
          id: 2,
          model: "Samsung Galaxy S23 Ultra",
          imageUrl:
            "https://www.samsung-online.com.ua/uploads/shop/products/large/174be31b074a0543550836f6e940c57f.jpg"
        },
        {
          id: 3,
          model: "Google Pixel 8 Pro",
          imageUrl:
            "https://pixophone.com/image/cache/catalog/product-upload/thumb_828686_default_big-567x517.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.main {
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
