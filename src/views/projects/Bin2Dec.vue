<script setup lang="ts">
import { useBinaryConversion } from "@/composables";
const { input } = useBinaryConversion();
</script>

<template>
  <main class="main">
    <section>
      <input
        class="input"
        type="text"
        v-model="input.value"
        :placeholder="input.placeholder"
      />
    </section>
    <section class="result">
      <span v-if="input.value">{{ input.text }}</span>
      <span v-else>aguardando valor ser inserido</span>
    </section>
  </main>
</template>

<style lang="scss" scoped>
* {
  font-family: "Courier New", Courier, monospace;
}

.main {
  padding: 20px;
  display: grid;
  grid: 0.5fr 1fr / 1fr;
  justify-items: center;
  height: 100%;
  width: 100%;
}

section {
  width: 100%;
  display: grid;
  place-items: center;
}

.input {
  width: 100%;
  height: 25px;
  display: grid;
  place-items: center;
  background: var(--color-primary-alpha);
  color: var(--color-text);
  padding: 25px;

  &:placeholder-shown {
    color: white !important;
  }

  &::placeholder {
    color: var(--color-primary-mute);
    font-weight: 500;
    font-style: italic;
  }
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
  height: 100px;
  text-align: center;
  transition: all 2s ease;
  font-weight: 200;
}
</style>
