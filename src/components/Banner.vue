<template>
  <div class="d-banner"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const data = ref([])
onMounted(async () => {
  data.value = await []
})
</script>

<style lang="less" scoped>
.d-banner {
  background: yellow;
  height: 50vh;
  width: 100vw;
}
</style>
