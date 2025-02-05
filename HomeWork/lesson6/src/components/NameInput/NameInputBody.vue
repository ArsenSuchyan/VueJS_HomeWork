<template>
  <div>
    <p>
      Задача 4. Розробити компонент для вводу віку користувача та імені. Робити
      форматування при заданні відповідних модифікаторів відповідних полів
      input: ім’я користувача - у випадку порожнього поля (червони фон) вік (вік
      менший за 18 – колір фону червоний, інакше – зелений).
    </p>
    <label
      >Введіть своє ім'я
      <input v-model.lazy="nameValue" type="text" :class="{ red: !isEntered }"
    /></label>
    <label
      >Введіть свій вік
      <input v-model.lazy="ageValue" type="number" :class="isAdult"
    /></label>
  </div>
</template>

<script>
export default {
  name: "NameInputBody",
  props: {
    name: {
      type: String,
      required: true
    },
    nameModifiers: { default: () => ({}) },
    age: { type: Number, required: true },
    ageModifiers: { default: () => ({}) }
  },
  data() {
    return {
      isEntered: null,
      isAdult: null
    };
  },
  computed: {
    nameValue: {
      get() {
        return this.name;
      },
      set(newVal) {
        if (this.nameModifiers.isEmpty) {
          if (newVal.length === 0) {
            this.isEntered = false;
          } else this.isEntered = true;
        }
        this.$emit("update:name", newVal);
      }
    },
    ageValue: {
      get() {
        return this.age;
      },
      set(newVal) {
        if (this.ageModifiers.isAdult) {
          if (newVal < 18) {
            this.isAdult = "not-adult";
          } else this.isAdult = "adult";
        }
        this.$emit("update:age", newVal);
      }
    }
  }
};
</script>

<style scoped>
.red {
  background-color: red;
}
.not-adult {
  background-color: red;
}
.adult {
  background-color: green;
}
p {
  margin-bottom: 30px;
}
</style>
