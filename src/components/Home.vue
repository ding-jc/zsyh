<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  router.replace('/HelloWorld')
})
</script>

<template>
  <h2>Home</h2>
  <router-view />
</template>

<style></style>
