<script lang="ts">
  export default {
    name: 'ProgressIndicator',
    props: {
      stages: {
        type: Array,
        required: true
      },
      currentStage: {
        type: Number,
        required: true
      }
    },
    computed: {
      stageColor() {
        return (index: number) => {
          return this.currentStage > index ? 'primary' : 'white';
        }
      }
    }
}
</script>

<template>
  <div class="flex flex-col">
    <div class="flex mx-auto" :style="{width: `${100 - (100/stages.length)}%`}">
      <div v-for="(stage, index) in stages" :key="index" :class="(index !== stages.length - 1) ? 'w-full' : ''" class="flex">
        <div :class="`bg-${stageColor(index)}`" class="w-5 h-5 rounded-full"></div> 
        <div v-if="index !== stages.length - 1" class="h-1 w-full my-auto" :class="`bg-${stageColor(index)}`"></div>
      </div>
    </div>
    <div class="flex w-full mx-auto mt-1">
      <template v-for="(stage, index) in stages" :key="index">
        <div :class="`text-${stageColor(index)}`" class="w-full text-center">{{ stage }}</div> 
      </template>
    </div>
  </div>
  
</template>
  

  
<style scoped>
.bg-blue-500 {
  background-color: #3b82f6;
}
.text-white {
  color: #ffffff;
}
.bg-white {
  background-color: #ffffff;
}
.text-black {
  color: #000000;
}
</style>
