<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
props: {
	error: {
		type: Error,
		required: true
	}
},
computed: {
}
});
</script>

<template>
	<div class="w-full h-screen flex">
		<div class="m-auto text-center">
			<h1 class="mt-5 text-xl text-center">Sorry, an error has occurred.</h1>
			<h6 class="mt-5 text-xl text-center">{{ error ? error.message : '' }}</h6>
			<button class="text-center bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded">
				<router-link to="/">Go to Home</router-link>
			</button>
		</div>
	</div>
</template>

<style scoped>
/* Add your component-specific styles here */
</style>

