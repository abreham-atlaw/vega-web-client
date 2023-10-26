<script lang="ts">
import { defineComponent } from 'vue';
import SlideshowComponent from '@/features/auth/presentation/components/SlideshowComponent.vue';

export default defineComponent({
	components: {
		SlideshowComponent
	},
	props: {
		heading: {
			type: String,
			required: true
		},
		text: {
			type: String,
			required: true
		},
		reverse: {
			type: Boolean,
			default: false
		}
	}
})

</script>
<template>

	<div :class="`flex bg-dark h-screen ${(reverse) ? 'flex-row-reverse' : ''}`">
		<div class="w-1/2 h-full">
			<SlideshowComponent/>
		</div>
		<div class="w-1/2 h-full text-light flex">
			<div class="m-auto w-4/5">

				<h1 class="text-5xl text-bold">{{ heading }}</h1>
				<p class="mt-5">{{ text }}</p>
				
				<slot></slot>
			</div>
		</div>
	</div>

</template>