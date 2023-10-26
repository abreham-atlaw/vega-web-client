<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

    props: {
        genre: {
            type: String,
            required: true
        }
    },
    computed: {

        bgImage(): string{
            return `/src/assets/generate/images/genres/${this.genre.toLowerCase().replace(" ", "_").replace(" ", "_")}.png`;
        }

    }

});

</script>

<template>

    <div class="bg-cover bg-center w-full h-full flex rounded-2xl" :style="{ backgroundImage:  `url('${bgImage}')`}">
        <div class="mt-auto ml-5 mb-3 text-light font-extrabold">
            {{ genre }}
        </div>
    </div>

</template>