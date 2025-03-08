<template>
  <div class="main">
    <div class="list">
      <product-in-basket-item
        v-for="product in productsInBasketList"
        :key="product.id"
        :productInBasketItem="product"
        :currency="currentCurrency"
        @removeItem="handleRemove"
      />
    </div>
    <div v-if="currentCurrency === 'uah'">
      Разом до оплати: {{ totalPrice }} грн
    </div>
    <div v-else>
      Разом до оплати: {{ (totalPrice / usdRate).toFixed(2) }} дол
    </div>
  </div>
</template>

<script>
import ProductInBasketItem from "./ProductInBasketItem.vue";
import { mapActions, mapGetters } from "vuex";
import { usdRate } from "@/constants/constants";
export default {
  name: "ProductsInBasketList",
  components: {
    ProductInBasketItem
  },
  computed: {
    ...mapGetters(["productsInBasketList", "totalPrice", "currentCurrency"]),
    usdRate() {
      return usdRate;
    }
  },
  methods: {
    ...mapActions(["removeItemFromProductInBasketList"]),
    handleRemove(productId) {
      this.removeItemFromProductInBasketList(productId);
    }
  }
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
