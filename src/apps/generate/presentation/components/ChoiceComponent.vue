<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    isSelected: {
      type: Boolean,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    onSelect: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.onSelect(this.text);
    },
  },
});
</script>

<template>
    <button
      @click="handleClick"
      :class="`rounded-full w-32 h-32 py-2 bg-primary text-white border-light border ${isSelected ? 'bg-opacity-100' : 'bg-opacity-30'}`"
    >
      {{ text }}
    </button>
</template>
  

  