<script lang="ts">
import { defineComponent } from 'vue';
import BaseChildView from './BaseChildView.vue';


export default defineComponent({
    name: "HomeView",
    components: { BaseChildView }
})

</script>
<template>
    <BaseChildView
        title="Good Morning"
        >
    </BaseChildView>
</template>