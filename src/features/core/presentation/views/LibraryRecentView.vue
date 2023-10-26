<script lang="ts">
import { defineComponent } from 'vue';
import Song from '../../data/models/song';
import RecentTrackComponent from '../components/RecentTrackComponent.vue';



export default defineComponent({
    name: "LibraryRecentView",
    props: {
        songs: {
            type: Array as () => Song[],
            required: true
        }
    },
    components: { RecentTrackComponent }
})
</script>

<template>

    <div class="flex flex-wrap">

        <div v-for="song in songs" class="mr-[1%] my-5 w-[19%]">
            <RecentTrackComponent :song="song"/>
        </div>

    </div>

</template>