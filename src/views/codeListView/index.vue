<template>
  <div class="code">
    <van-row>
      <van-col span="3" v-for="item in 200">
        <van-button :color="color16()">单色按钮</van-button>
      </van-col>
    </van-row>
  </div>
</template>
  
<script setup lang='ts'>
import { color16 } from '@/utils/randomColor';
import { ref } from 'vue';
const codeText = ref('')
</script>
<style lang="less" scoped>
.code {
  height: 100%;
  width: 100%;
}
</style>