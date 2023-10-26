<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    props: {
        text: {
            type: String,
            required: true
        }
    }
})

</script>


<template>

    <div class="w-full h-full bg-primary bg-opacity-20 p-10 rounded-2xl">

        <p class="text-3xl text-left font-extrabold text-light">
            {{ text }}
        </p>

    </div>

</template>