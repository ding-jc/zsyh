<script setup lang="ts">
import { ref } from 'vue'

// withDefaults(defineProps<{ msg: string }>(), {
//   msg: 'HelloWorld'
// })

//组件使用<input type="text" v-focus />

const count = ref(0)
</script>

<template>
  <h1 style="height: 60rem" v-j="'b'">HelloWorld</h1>
  <h1 style="height: 60rem">HelloWorld</h1>
  <h1 style="height: 60rem">HelloWorld</h1>
  <h1 style="height: 60rem">HelloWorld</h1>
  <h1 style="height: 60rem">HelloWorld</h1>
  <h1 style="height: 60rem">HelloWorld</h1>
  <h1 style="height: 60rem">HelloWorld</h1>
  <h1 style="height: 60rem">HelloWorld</h1>
  <h1 style="height: 60rem" v-j="'a'">HelloWorld</h1>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
