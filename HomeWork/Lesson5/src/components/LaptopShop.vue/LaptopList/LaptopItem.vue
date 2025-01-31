<template>
  <div class="item">
    <div>
      <div><img :src="laptop.image" alt="Image" /></div>
    </div>
    <div class="item-info">
      <h2>{{ laptop.name }}</h2>
      <div>Ваша економія: {{ laptop.price - laptop.discountedPrice }} ₴</div>
      <div>
        <s>{{ laptop.price }} ₴</s>
      </div>
      <div>{{ laptop.discountedPrice }} ₴</div>
      <button @click="buy">Купити</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LaptopItem",
  props: {
    laptop: {
      type: Object,
      required: true
    }
  },
  methods: {
    buy() {
      this.$emit("buy", this.laptop.id);
    }
  }
};
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
}
.item-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.item {
  border: 1px solid red;
}
</style>
