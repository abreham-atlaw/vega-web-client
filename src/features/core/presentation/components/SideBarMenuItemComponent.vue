<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    props: {
        icon: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        link: {
            type: String,
            default: "#"
        }
    }
});

</script>


<template>

    <RouterLink :to="link" class="flex bg-primaryDark px-5 py-4 rounded-xl">
        <span :class="`text-xl fa-solid fa-${icon}`"></span>
        <span class="block ml-7 my-auto">{{text}}</span>
    </RouterLink>

</template>