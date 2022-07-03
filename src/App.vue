<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useTheme } from "./composables";
const { toggleTheme, userTheme } = useTheme();
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
    <input type="checkbox" :onChange="toggleTheme" />
    {{ userTheme }}
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  padding: 2rem;

  font-weight: normal;
}
</style>
