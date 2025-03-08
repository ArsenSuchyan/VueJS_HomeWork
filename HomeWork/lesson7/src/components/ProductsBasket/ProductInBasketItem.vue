<template>
  <div class="item">
    <div v-if="currency === 'uah'">
      {{ productInBasketItem.productName }} -
      {{ productInBasketItem.price * productInBasketItem.quantity }} грн
    </div>
    <div v-else>
      {{ productInBasketItem.productName }} -
      {{
        (
          (productInBasketItem.price / usdRate) *
          productInBasketItem.quantity
        ).toFixed(2)
      }}
      дол
    </div>
    <div>{{ productInBasketItem.quantity }} од.</div>
    <button @click="remove">Відмовитись</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { usdRate } from "@/constants/constants";
export default {
  name: "ProductInBasketItem",
  props: {
    productInBasketItem: {
      type: Object,
      default: () => ({})
    },
    currency: {
      type: String,
      default: "uah"
    }
  },
  methods: {
    remove() {
      this.$emit("removeItem", this.productInBasketItem.id);
    }
  },
  computed: {
    usdRate() {
      return usdRate;
    }
  }
};
</script>

<style scoped>
.item {
  display: flex;
  gap: 15px;
  justify-content: space-between;
}
</style>
