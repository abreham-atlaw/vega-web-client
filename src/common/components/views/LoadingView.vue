<script lang="ts">
import { defineComponent } from 'vue';
import LoadingSpinnerVue from '../status/LoadingSpinner.vue';

export default defineComponent({
    data() {
        return {};
    },
    components: { LoadingSpinnerVue }
})
</script>
<template>
<div className="w-full h-full flex bg-primaryDark">
		<div class="absolute top-5 left-5">
			<img src="/src/assets/images/logo.png" class="w-1/12"/>
		</div>
		<div class="m-auto">
			<LoadingSpinnerVue class="m-auto" color="white" :size="200"/>
			<p class="text-2x1 font-extrabold text-center mt-5">Loading...</p>
		</div>

</div>
</template>