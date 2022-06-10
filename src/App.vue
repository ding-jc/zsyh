<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
onMounted(() => {
  console.log('onMounted')
})
const wdnmd = ref<Boolean>(false)
</script>

<template>
  <div class="main">
    <Header />
    {{ wdnmd }}
    <lswitch v-model="wdnmd" />
    <router-view />
  </div>
  <Footer />
</template>
<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.main {
  min-height: 100vh;
}
/* 设置滚动条的宽度*/
::-webkit-scrollbar {
  width: 3px;
  height: 8px;
}
/* 设置滚动条的背景色和圆角*/
::-webkit-scrollbar-thumb {
  background-color: #2c3e50;
}
@media screen and(max-width: 1000px) {
  html {
    font-size: 80px;
  }
}
</style>
