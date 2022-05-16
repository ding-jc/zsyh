<script setup lang="ts">
import { onMounted } from 'vue'
import Header from './components/Header.vue'
onMounted(() => {
  console.log('onMounted')
})
</script>

<template>
  <Header />
  <router-view />
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
  text-align: center;
  color: #2c3e50;
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
</style>
