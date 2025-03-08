import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      productList: [
        { id: 1, productName: "Хліб", price: 25 },
        { id: 2, productName: "Молоко", price: 40 },
        { id: 3, productName: "Яйця", price: 55 },
        { id: 4, productName: "Цукор", price: 38 },
        { id: 5, productName: "Сіль", price: 15 },
        { id: 6, productName: "Макарони", price: 30 },
        { id: 7, productName: "Рис", price: 50 }
      ],
      productsInBasketList: [],
      currency: "uah"
    };
  },
  getters: {
    productList: ({ productList }) => productList,
    productsInBasketList: ({ productsInBasketList }) => productsInBasketList,
    totalPrice: ({ productsInBasketList }) =>
      productsInBasketList.reduce((sum, el) => sum + el.price * el.quantity, 0),
    currentCurrency: ({ currency }) => currency
  },
  mutations: {
    addToProductsInBasketList(state, val) {
      state.productsInBasketList.push(val);
    },
    addToExistingProductInBasketList(state, val) {
      state.productsInBasketList.find((el) => el.id === val).quantity++;
    },
    removeItemFromProductInBasketList(state, val) {
      state.productsInBasketList = state.productsInBasketList.filter(
        (el) => el.id !== val
      );
    },
    changeCurrency(state, val) {
      state.currency = val;
    }
  },

  actions: {
    addToProductsInBasketList({ commit }, val) {
      commit("addToProductsInBasketList", val);
    },
    addToExistingProductInBasketList({ commit }, val) {
      commit("addToExistingProductInBasketList", val);
    },
    removeItemFromProductInBasketList({ commit }, val) {
      commit("removeItemFromProductInBasketList", val);
    },
    changeCurrency({ commit }, val) {
      commit("changeCurrency", val);
    }
  }
});

export default store;
