<script lang="ts">
import { defineComponent } from 'vue';
import { AsyncState, AsyncStatus } from "@/lib/state/asyncState";
import LoadingSpinner from '../status/LoadingSpinner.vue';
import BaseButton from './BaseButton.vue';


export default defineComponent({
	name: "AsyncButton",
	props: {
		state: {
			type: AsyncState,
			required: true
		},
		bg: {
			type: String,
		},
		loadingColor: {
			type: String,
			default: "white"
		}
	},
	computed: {
		
		isLoading(): boolean{
			return this.state.status === AsyncStatus.loading
		}
	},
	components: {
    LoadingSpinner,
	BaseButton
}
});

</script>
<template>

	<BaseButton :bg="bg">
		<template v-if="isLoading">
			<LoadingSpinner class="mx-auto" :color="loadingColor"/>
		</template>
		<slot v-else></slot>
	</BaseButton>

</template>