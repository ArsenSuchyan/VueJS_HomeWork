<template>
  <div>
    <div><img :src="laptop.image" alt="Image" /></div>
    <div>{{ laptop.name }}</div>
    <div class="price">{{ laptop.price }} ₴</div>
    <div>Продавець: {{ laptop.store }}</div>
    <div>Бренд: {{ laptop.brand }}</div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    laptop: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
img {
  width: 300px;
  height: 300px;
}
.price {
  color: red;
  font-weight: 600;
}
</style>
