<template>
  <div class="card">
    <div>
      <a :href="product.shopUrl"><img :src="product.imageUrl" alt="Image" /></a>
    </div>
    <a :href="product.shopUrl">{{ product.name }}</a>
    <div v-if="product.inStock" class="green">В наявності</div>
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
export default {
  name: "ProductCard",

  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.card {
  width: 300px;
}
img {
  width: 200px;
}
.green {
  color: green;
}
</style>
