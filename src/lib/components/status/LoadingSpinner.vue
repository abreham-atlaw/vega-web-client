<script lang="ts">
import { defineComponent } from 'vue';
import {OrbitSpinner} from 'epic-spinners';


export default defineComponent({

	props: {
		color: {
			type: String,
			default: "white"
		},
		size: {
			type: Number,
			default: 30
		}
	},

	components: {
		OrbitSpinner
	}
});
</script>

<template>
	<OrbitSpinner
			 :animation-duration="1000"
			 :size="size"
			 :color="color"
			 />
</template>