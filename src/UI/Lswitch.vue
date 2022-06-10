<template>
  <button @click="changeSwitch" class="lswitch">
    <div :class="['no-off', modelValue ? 'off' : 'on']"></div>
  </button>
</template>

<script setup lang="ts">
import { ref, defineExpose } from 'vue'
const emit = defineEmits(['update:modelValue'])
const props = withDefaults(defineProps<{ modelValue?: Boolean }>(), {
  modelValue: false,
})
console.log(props.modelValue)
const valueData = ref<Boolean>(props.modelValue || false)
console.log(valueData)

const changeSwitch = () => {
  // console.log(props.value)
  valueData.value = !valueData.value
  emit('update:modelValue', valueData.value)
}
</script>
<style lang="scss" scoped>
.lswitch {
  border-radius: 1rem;
  border: 0.1rem solid #fff;
  box-shadow: 0 0 3px #02020245;
  height: 1.5rem;
  width: 3rem;
  cursor: pointer;
  background: none;
  position: relative;
  background: #ccc;
}
.no-off {
  position: absolute;
  top: 0.15rem;
  display: block;
  border-radius: 1rem;
  width: 1rem;
  height: 1rem;
  left: 0.2rem;
  transition: transform 100ms;
  box-shadow: 0 0 3px #02020245;
  background: #000;
}
.no {
  transform: translateX(0);
  background: #000;
}
.off {
  transform: translateX(1.5rem);
  background: blue;
}
</style>
