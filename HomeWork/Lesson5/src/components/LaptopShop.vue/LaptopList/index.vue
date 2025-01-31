<template>
  <div class="laptop-list">
    <laptop-item
      v-for="i of laptopList"
      :key="i.id"
      :laptop="i"
      class="laptop-item"
      @buy="$emit('buy', $event)"
    />
  </div>
</template>

<script>
import LaptopItem from "./LaptopItem.vue";
export default {
  name: "LaptopList",
  components: {
    LaptopItem
  },
  props: {
    laptopList: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.laptop-list {
  display: flex;
  gap: 30px;
}
.laptop-item {
  display: flex;
  gap: 10px;
}
</style>
