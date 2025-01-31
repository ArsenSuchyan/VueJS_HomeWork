<template>
  <div>
    <laptop-list :laptop-list="laptopList" @buy="addToChosen" />
    <chosen-products
      :chosenProductsList="chosenProductsID"
      @delete="removeFromChosen"
    />
  </div>
</template>

<script>
import { laptops } from "../../constants/constants.js";
import LaptopList from "./LaptopList";
import ChosenProducts from "./ChosenProducts";

export default {
  name: "LaptopShop",
  components: {
    LaptopList,
    ChosenProducts
  },
  computed: {
    laptopList() {
      return laptops;
    }
  },
  data() {
    return {
      chosenProductsID: []
    };
  },
  methods: {
    addToChosen(addedID) {
      if (!this.chosenProductsID.includes(addedID))
        this.chosenProductsID.push(addedID);
    },
    removeFromChosen(removedID) {
      this.chosenProductsID = this.chosenProductsID.filter(
        (el) => el !== removedID
      );
    }
  }
};
</script>

<style scoped></style>
