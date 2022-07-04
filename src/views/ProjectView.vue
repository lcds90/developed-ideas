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
    <span v-if="input.value"> {{ input.text }} </span>
  </main>
</template>

<style scoped>
.main {
  padding: 20px;
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
</style>
