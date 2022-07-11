<script setup lang="ts">
import { onMounted, reactive } from "vue";
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

<style lang="scss" scoped>
.main {
  display: grid;
  grid: 1fr / max-content 1fr;
  background-image: var(--color-background);
  transition: color 0.5s, background-image 0.5s;
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
  // border-left: 5px double var(--color-text);
  transition: border-left 0.5s;
  direction: rtl !important;
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

  :deep(h1) {
    font-size: 1.5em;
    font-weight: bold;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background: var(--color-primary-alpha);
    transition: color 0.5s, background-color 0.5s, box-shadow 1s;
    border-radius: 25px;
    box-shadow: 0 5px 5px var(--color-primary-darkest);
    text-align: center;
    margin-bottom: 15px;
  }

  :deep(h2) {
    font-size: 1.2em;
    font-weight: bold;
    margin: 25px;
    outline: 0;
    background: var(--color-primary-alpha);
    color: var(--color-text);
    transition: color 0.5s, background-color 0.5s, box-shadow 1s;
    border-radius: 10px;
    border: 1px solid var(--color-text);
    text-align: center;
    margin-bottom: 15px;
  }

  :deep(blockquote) {
    font-size: 0.7em;
    font-style: italic;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    transition: color 0.5s, background-color 0.5s, box-shadow 1s;
    border-radius: 5px;
    background: grey;
    color: white;
    border-bottom: 0.5px solid var(--color-text);
    text-align: center;
    margin: 15px;
    width: 50%;
    margin-left: 25%;
  }

  :deep(.paragraph),
  :deep(.requires) {
    font-size: 0.85em;
    line-height: 1.5em;
    padding: 5px;
    border-bottom: 0.5px solid var(--color-text);
    transition: color 0.5s, background-color 0.5s, box-shadow 1s;
    text-align: justify;
  }

  :deep(.requires) {
    text-align: left;
    color: var(--color-primary);
    font-weight: bolder;
    letter-spacing: 0.5px;
    background: var(--color-primary-alpha);
    border-bottom: 0;
    margin-block: 25px;
    padding-inline: 25px;
    padding-block: 10px;
  }

  :deep(ul) {
    list-style: none;
    padding: 0;
    margin: 5px 10px;
    border: 0;
    outline: 0;
    transition: color 0.5s, background-color 0.5s, box-shadow 1s;
    border-radius: 5px;
    border-bottom: 4px dotted var(--color-text);
    text-align: left;
  }

  :deep(li) {
    font-size: 0.85em;
    line-height: 1.5em;
    padding: 5px;
    transition: color 0.5s, background-color 0.5s, box-shadow 1s;
  }

  :deep(a) {
    font-weight: 600;
    color: var(--color-primary);
    text-decoration: none;
    transition: color 0.5s, background-color 0.5s, padding 1s, font-size 1.25s;

    &:hover {
      color: var(--color-primary-darkest);
      text-decoration: underline;
      background: var(--color-primary-alpha);
      padding: 1.5px;
      font-size: 1.1em;
    }
  }
}
</style>
