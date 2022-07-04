<script setup lang="ts">
import { computed, reactive, ref, watchEffect } from "vue";

const input = reactive({
  value: "",
  text: "",
});

const message = computed(() => (input.value === "" ? "" : input.text));

const checkNumber = (value: string) => {
  return /^\d+$/.test(value);
};

const checkValue = (value: string) => {
  console.log("checkValue", value);
  console.log("length", value.length);
  return !/[2-9]/g.test(value);
};

watchEffect(() => {
  if (checkNumber(input.value) && checkValue(input.value)) {
    input.text = "valid";
  } else {
    input.text = "invalid";
  }
});
</script>

<template>
  <main class="main">
    <input type="text" v-model="input.value" />
    {{ message }}
  </main>
</template>

<style scoped>
.main {
  padding: 20px;
}
</style>
