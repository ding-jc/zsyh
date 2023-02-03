<template>
  <codemirror v-model="value" placeholder="Code gose here..." :style="{ height: '100%', maxHeight: '100vh' }"
    :autofocus="true" :indent-with-tab="true" :tabSize="2" :extensions="extensions" @change="change" v-bind="$attrs" />
</template>
<script lang="ts">
export default {
  inheritAttrs: false
}
</script>
<script lang="ts" setup>
import { javascript } from "@codemirror/lang-javascript";
import { json } from '@codemirror/lang-json';
import { oneDark } from "@codemirror/theme-one-dark";
import { computed } from "vue";
import { Codemirror } from "vue-codemirror";

const props = withDefaults(
  defineProps<{ modelValue: string }>(), { modelValue: '' }
)
const emit = defineEmits(['update:modelValue'])

const extensions = [javascript({ jsx: true, typescript: true, }), json(), oneDark]

const change = (value: string) => {
  // emit('update:modelValue', value)
}

const value = computed({
  set(value: string) {
    emit('update:modelValue', value)
  },
  get() {
    return props.modelValue
  }
})

</script>
<style lang="less" scoped>
.v-codemirror {
  font-size: 20px;
  // font-weight: bold;
}
</style>
