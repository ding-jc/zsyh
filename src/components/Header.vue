<script setup lang="ts">
import { ref } from 'vue'

// withDefaults(defineProps<{ msg: string }>(), {
//   msg: 'HelloWorld'
// })

const count = ref(0)
</script>

<template>
  <div class="headerBg"></div>
  <div class="header">
    <div v-go="'a'" class="headls">A</div>
    <div v-go="'b'" class="headls">B</div>
    <div v-go="'c'" class="headls">C</div>
  </div>
</template>

<style scoped>
.headls {
  width: 30%;
  height: 3rem;
  line-height: 3rem;
  padding: 0 0.5rem;
  background: #12faeb;
}
.headerBg {
  height: 3rem;
  width: 100%;
  background: none;
}
.header {
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  height: 3rem;
  width: 100%;
  background: #fff;
  z-index: 9999;
  box-shadow: 0 5px 5px #00000014;
}
</style>
