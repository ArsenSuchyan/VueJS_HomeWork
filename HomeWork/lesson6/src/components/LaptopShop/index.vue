<template>
  <div class="body">
    <products-filters
      v-model:searchedStore.check="selectedStore"
      v-model:searchedBrand.check="selectedBrand"
    />
    <product-list :laptopsList="filteredLaptopList" />
  </div>
</template>

<script>
import ProductList from "./ProductList/index.vue";
import ProductsFilters from "./ProductsFilters.vue";
import { laptops } from "@/constants/laptops.js";

export default {
  name: "LaptopShop",
  components: {
    ProductList,
    ProductsFilters
  },
  data() {
    return {
      selectedStore: null,
      selectedBrand: null
    };
  },
  methods: {
    getFilteredLaptopsList() {
      let filteredLaptopList = [];
      if (this.selectedStore && this.selectedBrand) {
        filteredLaptopList = laptops.filter(
          (el) =>
            el.store
              .toLocaleLowerCase()
              .includes(this.selectedStore.toLocaleLowerCase()) &&
            el.brand
              .toLocaleLowerCase()
              .includes(this.selectedBrand.toLocaleLowerCase())
        );
      } else if (this.selectedStore) {
        filteredLaptopList = laptops.filter((el) =>
          el.store
            .toLocaleLowerCase()
            .includes(this.selectedStore.toLocaleLowerCase())
        );
      } else if (this.selectedBrand) {
        filteredLaptopList = laptops.filter((el) =>
          el.brand
            .toLocaleLowerCase()
            .includes(this.selectedBrand.toLocaleLowerCase())
        );
      }

      return filteredLaptopList;
    }
  },
  computed: {
    filteredLaptopList() {
      if (this.selectedStore || this.selectedBrand) {
        return this.getFilteredLaptopsList();
      } else {
        return laptops;
      }
    }
  }
};
</script>

<style scoped>
.body {
  display: flex;
  gap: 40px;
  margin-top: 50px;
}
p {
  margin-bottom: 40px;
}
</style>
