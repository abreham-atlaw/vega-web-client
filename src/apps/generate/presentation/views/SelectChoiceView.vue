<script lang="ts">
import { defineComponent } from 'vue'
import ChoicesComponent from '../components/ChoicesComponent.vue';
		
export default defineComponent({
    props: {
        values: {
			type: Array as () => string[],
			required: true,
      	},
        onValueSet: {
            type: Function,
            required: true
        },
		multipleChoices: {
			type: Boolean,
			default: false
		}
    },
    components: { ChoicesComponent }
})
</script>

<template>
	<div class="flex h-full">
		<div class="m-auto pb-28">
			<ChoicesComponent :multiple-choices="multipleChoices" :values="values" :on-value-set="onValueSet"/>
		</div>
	</div>
</template>