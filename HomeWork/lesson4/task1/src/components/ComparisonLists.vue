<template>
  <div>
    <h2>Списки порівнянь</h2>
    <div>
      <h3>{{ productName }}</h3>
      <p>Кількість товарів: {{ productList.length }}</p>
      <div class="product-list">
        <img
          v-for="product of productList"
          :key="product.id"
          :src="product.imageUrl"
          alt="Image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComparisonLists",
  props: {
    productName: {
      type: String,
      required: true
    },
    productList: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
img {
  width: 200px;
}
.product-list {
  display: flex;
  gap: 30px;
}
</style>
