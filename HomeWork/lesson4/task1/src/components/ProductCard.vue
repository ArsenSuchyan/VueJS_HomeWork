<template>
  <div>
    <img :src="product.imageUrl" key="product.id" alt="Image" />
    <h2>{{ product.name }}</h2>
    <button>Залишити відгук</button>
    <div v-if="product.inStock" class="green">Є в наявності</div>
    <div v-else class="red">Немає в наявності</div>
    <div v-if="product.originalPrice">
      <div>
        <s>{{ product.originalPrice }}$</s>
      </div>
      <div>{{ product.price }}$</div>
    </div>
    <div v-else>{{ product.price }}$</div>
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
img {
  width: 250px;
  height: 250px;
}
.green {
  color: green;
  font-size: 20px;
  font-weight: 600;
}
.red {
  color: red;
  font-size: 20px;
  font-weight: 600;
}
h2 {
  height: 50px;
}
</style>
