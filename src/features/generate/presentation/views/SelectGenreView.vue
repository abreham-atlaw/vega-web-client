<script lang="ts">
import { defineComponent } from 'vue';
import GenreComponent from '../components/GenreComponent.vue';


export default defineComponent({

    props: {
        onSelected: {
            type: Function,
            required: true
        }
    },

    data() {
        return {
            genres: [
                "Blues",
                "Country",
                "Electronic",
                "Hip Hop",
                "Jazz",
                "Pop",
                "R & B",
                "Rock",
                "Metal",
                "Punk",
                "Afro Pop",
                "K Pop"
            ]
        };
    },
    components: { 
        GenreComponent 
    }
})

</script>

<template>

    <div class="">
        <div class="flex flex-wrap h-full w-full">

            <div v-for="genre in genres" class="h-40 w-1/3 pr-10 py-4" @click="onSelected(genre)">
                <GenreComponent :genre="genre"/>
            </div>

        </div>
    </div>

</template>