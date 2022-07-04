<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useAside, useTheme } from "./composables";
const { toggleAside } = useAside();
const { toggleTheme, userTheme } = useTheme();
</script>

<template>
  <aside class="aside">
    <div class="aside-overlay" :onClick="toggleAside"></div>
    <nav class="navbar">
      <RouterLink to="/">🏠 Home</RouterLink>
      <RouterLink to="/about">✨ Outros projetos</RouterLink>
      <a class="theme" :onClick="toggleTheme">
        {{ userTheme === "dark-theme" ? "🌙" : "🌞" }}
        Mudar o tema
      </a>
    </nav>

    <RouterView />
  </aside>
</template>

<style>
@import "@/assets/variables.css";
@import "@/assets/base.css";

#app {
  font-weight: normal;
  display: grid;
  grid: 1fr / 0.5fr 1fr;
}

.aside {
  display: grid;
  grid: max-content 1fr / 1fr;
  align-items: center;
  justify-items: center;
  background: var(--color-background);
  transition: color 0.5s, background-color 0.5s;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  border-right: 1px solid var(--color-primary-darkest);
  z-index: 5;
  position: relative;
}

.aside-overlay {
  background: var(--color-text);
  color: var(--color-primary-darkest);
  position: absolute;
  height: 100%;
  width: 10px;
  top: 0;
  right: 0;
  z-index: 4;
}

.dark-theme .aside-overlay {
  background: var(--color-text-light);
  color: var(--color-text);
}

.navbar {
  display: grid;
  grid: repeat(2, 1fr) / repeat(2, 1fr);
  width: 100%;
  padding: 25px;
  gap: 25px;
  border-bottom: 1px solid var(--color-primary-lightest);
  box-shadow: 0 5px 5px var(--color-primary-alpha);
  background: var(--color-primary-alpha);
}

.navbar a {
  text-decoration: none;
  color: var(--color-text);
  font-size: 1.2rem;
  font-weight: bold;
  transition: color 0.5s, text-shadow 0.25s;
  background-color: var(--color-primary-darkest-alpha);
  padding: 5px;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
}

.navbar a.router-link-exact-active,
.navbar a.router-link-active {
  color: var(--color-primary-mute);
}

.navbar a:hover {
  color: var(--color-primary-lightest);
  text-shadow: 0 0 25px var(--color-primary-lightest);
}

.navbar .theme {
  grid-column: span 2;
}

.project-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-text);
  text-shadow: 0 0 25px var(--color-primary-lightest);
  margin-bottom: 25px;
}

.project-title::before {
  content: "Projeto";
  display: block;
  width: 100px;
  height: 2px;
  margin: 0 auto;
  margin-bottom: 25px;
  margin-right: 50px;
}
</style>
