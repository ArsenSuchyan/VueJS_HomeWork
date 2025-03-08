<template>
  <div>
    <div v-if="currency === 'uah'">
      {{ product.productName }} - {{ product.price }} грн
    </div>
    <div v-else>
      {{ product.productName }} - {{ (product.price / usdRate).toFixed(2) }} дол
    </div>
    <button @click="buy">Купити</button>
  </div>
</template>

<script>
import { usdRate } from "@/constants/constants";
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      default: () => ({})
    },
    currency: {
      type: String,
      default: "hrn"
    }
  },
  methods: {
    buy() {
      this.$emit("buyItem", this.product.id);
    }
  },
  computed: {
    usdRate() {
      return usdRate;
    }
  }
};
</script>

<style lang="scss" scoped></style>
