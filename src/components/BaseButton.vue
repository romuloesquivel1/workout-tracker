<template>

  <button class="inline-flex align-middle py-2 px-6 rounded-sm text-sm
    text-white duration-200 border-solid border-2 border-transparent hover:border-c-green
    hover:bg-white hover:text-c-green transition-all"
    :class="classes"
  >
    <IconLoading v-if="loading" class="animate-spin -ml-2 mr-3 text-white" width="20" height="20"></IconLoading>
    <slot></slot>
  </button>

</template>

<script setup>
import { computed } from 'vue';
import IconLoading from './icons/IconLoading.vue';

const props = defineProps({
  loading: {
    type: Boolean,
    required: false,
    default: false
  },
  color: {
    type: String,
    required: false,
    default: 'bg-c-green'
  }
});

const classes = computed(() => {
  return {
    'pointer-events-none bg-opacity-80': props.loading,
    [props.color]: true
  }
});

</script>
