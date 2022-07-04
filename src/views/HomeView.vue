<script setup lang="ts">
import { reactive } from "vue";
import projectReadme from "@/assets/README.md";

const data = reactive({
  projectName: "Bin2Dec",
  projectDesc: "Convert binary to decimal",
  imgUrl:
    "https://24.media.tumblr.com/46450d8bccae150d92651f3dbf6f4380/tumblr_n1ufyacjl41qza1qzo1_500.gif",
});
</script>

<template>
  <main class="main">
    <article class="article-title">
      <img
        alt="App ideias logo"
        class="logo"
        :src="data.imgUrl"
        width="125"
        height="125"
      />
      <h1 class="project-title">{{ data.projectName }}</h1>
    </article>
    <article class="article-description">
      <project-readme class="project-readme"></project-readme>
    </article>
  </main>
</template>

<style scoped>
.main {
  display: grid;
  grid: 1fr / max-content 1fr;
  background: var(--color-background);
  transition: color 0.5s, background-color 0.5s;
  width: 100%;
  place-items: center;
}

.main article details {
  height: 75vh;
  overflow-y: auto;
}

.article-title {
  display: grid;
  place-items: center;
  padding-left: 50px;
}

.article-description {
  overflow-y: auto;
  height: 70vh;
  padding: 5px;
  margin: 20px;
  border-left: 5px double var(--color-text);
  transition: border-left 0.5s;
}

.logo {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background: var(--color-primary-mute);
  transition: color 0.5s, background-color 0.5s, box-shadow 1s;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 5px 5px var(--color-primary-lightest);
}

.dark-theme .logo {
  background: var(--color-primary-lightest);
  box-shadow: 0 5px 5px var(--color-primary-darkest);
}

.project-readme {
  overflow-y: auto;
}

.project-readme >>> h1 {
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background: var(--color-primary);
  transition: color 0.5s, background-color 0.5s, box-shadow 1s;
  border-radius: 25px;
  box-shadow: 0 5px 5px var(--color-primary-lightest);
  text-align: center;
  margin-bottom: 15px;
}
</style>
