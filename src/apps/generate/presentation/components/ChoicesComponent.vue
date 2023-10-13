<script lang="ts">
import { defineComponent, ref } from 'vue';
import ChoiceComponent from './ChoiceComponent.vue';
import BaseButton from '@/lib/components/buttons/BaseButton.vue';
  
export default defineComponent({
    components: {
    ChoiceComponent,
    BaseButton
},
    props: {
      values: {
        type: Array as () => string[],
        required: true,
      },
      onValueSet: {
        type: Function,
        required: true,
      },
      multipleChoices: {
        type: Boolean,
        required: true,
      },
    },
    setup(props) {
      const selectedValues = ref<string[]>([]);
  
      const handleSelect = (value: string) => {
        if (props.multipleChoices) {
          if (selectedValues.value.includes(value)) {
            selectedValues.value = selectedValues.value.filter((v) => v !== value);
          } else {
            selectedValues.value.push(value);
          }
        } else {
          props.onValueSet(value);
        }
      };
  
      const handleNext = () => {
        props.onValueSet(selectedValues.value);
      };
  
      const isSelected = (value: string) => {
        return selectedValues.value.includes(value);
      };
  
      return { handleSelect, handleNext, isSelected };
    },
});
</script>
  


<template>
    <div>
        <div class="flex flex-wrap">
            <div v-for="(value, index) in values" class="mx-10 my-5">
                <ChoiceComponent
                    :key="index"
                    :text="value"
                    :isSelected="isSelected(value)"
                    :onSelect="handleSelect"
                />
            </div>
        </div>

        <div class="flex mt-10">
            <BaseButton class="ml-auto" v-if="multipleChoices" @click="handleNext">
                NEXT
            </BaseButton>
        </div>

        
    </div>
    
</template>
  
