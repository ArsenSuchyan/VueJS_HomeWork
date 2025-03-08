<template>
  <div class="product-list">
    <productItem
      v-for="product of productList"
      :key="product.id"
      :product="product"
      :currency="currentCurrency"
      @buyItem="handleBuy"
      class="product-item"
    />
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "ProductsList",
  components: {
    ProductItem
  },
  computed: {
    ...mapGetters(["productList", "productsInBasketList", "currentCurrency"])
  },
  methods: {
    ...mapActions([
      "addToProductsInBasketList",
      "addToExistingProductInBasketList"
    ]),
    handleBuy(addedProductId) {
      let addedProduct = this.productList.find(
        (el) => el.id === addedProductId
      );
      if (this.productsInBasketList.find((el) => el.id === addedProductId)) {
        this.addToExistingProductInBasketList(addedProductId);
      } else {
        let addedProductCopy = { ...addedProduct, quantity: 1 };

        this.addToProductsInBasketList(addedProductCopy);
      }
    }
  }
};
</script>

<style scoped>
.product-list {
}
.product-item {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}
</style>
