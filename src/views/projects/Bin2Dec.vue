<script setup lang="ts">
import { useBinaryConversion } from "@/composables";
const { input } = useBinaryConversion();
</script>

<template>
  <main class="main">
    <input
      class="input"
      type="text"
      v-model="input.value"
      :placeholder="input.placeholder"
    />
    <span class="result" v-show="input.value"> {{ input.text }} </span>
  </main>
</template>

<style scoped>
.main {
  padding: 20px;
  display: grid;
  grid: max-content 1fr / 1fr;
  justify-items: center;
}

.input {
  width: 100%;
  height: 10%;
  display: grid;
  place-items: center;
  background: var(--color-primary-darkest-alpha);
  color: var(--color-primary-lightest);
  padding: 25px;
}

.result {
  background: var(--color-primary-alpha);
  color: var(--text-color);
  padding: 25px;
  border-radius: 10px;
  font-size: 1.5rem;
  place-self: center;
  transition: all 2s ease;
  width: 75%;
  text-align: center;
}
</style>
