<template>
  <!-- v-modal так делаем двустороннее связывание, далее создаем пропс, который ожидает  -->
  <!-- modalValue - тип строка -->
  <select v-model="modelValue" @change="changeOption">
    <option disabled>Выберите из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  data() {
    return {
      modelValue: {
        type: String,
      },
    };
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style></style>
