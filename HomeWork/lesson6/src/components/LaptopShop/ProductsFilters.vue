<template>
  <div>
    <h2>Фільтри</h2>
    <div class="filters">
      <div :class="{ checked: !isStoreChecked }" class="filter">
        <h3>Продавець</h3>
        <input v-model.lazy.trim="searchedStoreValue" type="text" />
      </div>
      <div :class="{ checked: !isBrandChecked }" class="filter">
        <h3>Бренд</h3>
        <input v-model.lazy.trim="searchedBrandValue" type="text" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsFilters",
  props: {
    searchedStore: {
      type: String,
      required: true
    },
    searchedStoreModifiers: { default: () => ({}) },
    searchedBrand: {
      type: String,
      required: true
    },
    searchedBrandModifiers: { default: () => ({}) }
  },
  data() {
    return {
      isStoreChecked: false,
      isBrandChecked: false
    };
  },
  computed: {
    searchedStoreValue: {
      get() {
        return this.searchedStore;
      },
      set(newVal) {
        if (this.searchedStoreModifiers.check) {
          if (newVal.length > 0) {
            this.isStoreChecked = true;
          } else this.isStoreChecked = false;
        }
        this.$emit("update:searchedStore", newVal);
      }
    },
    searchedBrandValue: {
      get() {
        return this.searchedBrand;
      },
      set(newVal) {
        if (this.searchedBrandModifiers.check) {
          if (newVal.length > 0) {
            this.isBrandChecked = true;
          } else this.isBrandChecked = false;
        }
        this.$emit("update:searchedBrand", newVal);
      }
    }
  }
};
</script>

<style scoped>
.checked {
  border: 2px solid green;
}
.filters {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.filter {
  padding: 5px;
}
p {
  margin-bottom: 40px;
}
</style>
