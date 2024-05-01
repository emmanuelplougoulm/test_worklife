<template>
  <input type="text" v-model="inputValue" @input="updateInputValue" />
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
});

const inputValue = ref(props.modelValue.value);

const updateInputValue = (event) => {
  inputValue.value = event.target.value;
  emit("update:modelValue", { value: inputValue.value });
};
</script>
