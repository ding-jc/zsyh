<script setup lang="ts">
import { ref } from 'vue'

// withDefaults(defineProps<{ msg: string }>(), {
//   msg: 'HelloWorld'
// })

const count = ref(0)
</script>

<template>
  <div class="headerBg">header</div>
  <div class="header">header</div>
</template>

<style scoped>
.headerBg {
  height: 5rem;
  width: 100%;
  background: none;
}
.header {
  position: fixed;
  top: 0;
  height: 5rem;
  width: 100%;
  background: #ffc0cb2b;
}
</style>
