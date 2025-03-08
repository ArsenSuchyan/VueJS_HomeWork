<template>
  <div>
    <div>Оберіть валюту</div>
    <select v-model="currentCurrency">
      <option value="uah">UAH</option>
      <option value="usd">USD</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CurrencySelector",
  methods: {
    ...mapActions(["changeCurrency"])
  },
  computed: {
    currentCurrency: {
      set(val) {
        this.changeCurrency(val);
      }
    }
  }
};
</script>

<style scoped></style>
