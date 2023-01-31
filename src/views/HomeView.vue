<script setup lang="ts">
import { ref } from "vue";
import codeView from '../components/codeView/code.vue';
import codeListView from './codeListView/index.vue';
const code = ref(`{
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
    "vue-global-api"
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    endOfLine: "auto",
    "prettier/prettier": ["error", { "endOfLine": "auto" }]
  },
}`)
</script>

<template>
  <div class="home">
    <main class="home-main">
      {{ code }}
      <codeView v-model="code" />
      <codeListView />
    </main>
    <footer class="home-footer"></footer>
    <header class="home-header">
      code
    </header>
  </div>
</template>
<style lang="less" scoped>
.home {
  &-header {
    width: 100%;
    height: 38px;
    box-sizing: border-box;
    border-bottom: 1px solid #000;
    padding: 0 1em;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    background-image: radial-gradient(transparent 1px, #fff 1px);
    background-size: 4px 4px;
    backdrop-filter: saturate(50%) blur(4px);
    -webkit-backdrop-filter: saturate(50%) blur(4px);
  }

  &-main {
    width: 100%;
    min-height: calc(100vh - 38px);
    margin-top: 38px;
    overflow-x: hidden;
  }

  &-footer {
    width: 100%;
    height: 30vh;
    min-height: 100px;
    background: #000;
  }
}
</style>
