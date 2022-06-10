<template>
  <footer class="footer">Footer</footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const friendChain = ref([])
</script>
<style lang="scss" scoped>
footer.footer {
  background: #000;
  padding: 3rem 0;
  width: 100%;
  color: #e6e6e6;
  text-align: center;
}
</style>
