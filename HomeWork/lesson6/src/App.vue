<template>
  <div class="body">
    <name-input v-model:name.isEmpty="userName" v-model:age.isAdult="userAge" />

    <p>
      Задача 5. Спробуйте відтворити фрагмент. Компонент ProductsFilters через
      v-model повертає 2 значення фільтра: продавець, бренд. При заданні
      модифікатора “check” відображати секцію зеленою рамкою, якщо фільтр з
      відповідної секції (продавець чи бренд) не обрано.
    </p>
    <laptop-shop />
  </div>
</template>

<script>
import NameInput from "./components/NameInput/index.vue";
import LaptopShop from "./components/LaptopShop/index.vue";
export default {
  name: "App",
  components: {
    NameInput,
    LaptopShop
  }
};
</script>

<style scoped>
.body {
  margin-top: 50px;
}
* {
  margin-bottom: 40px;
}
</style>
