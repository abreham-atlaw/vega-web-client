<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
	props: {
		bg: {
			type: String,
			default: "primary"
		}
	},
	computed: {
	},
	components: {
	}
});

</script>
<template>

	<button :class="`bg-${bg} py-4 px-12 text-white rounded-xl`">
		<slot></slot>
	</button>

</template>