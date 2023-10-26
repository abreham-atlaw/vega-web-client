<script lang="ts">
import { defineComponent } from 'vue';
import Song from '../../data/models/song';
import PlaylistComponent from '../components/PlaylistComponent.vue';
import type Playlist from '../../data/models/playlist';


export default defineComponent({
    name: "LibraryRecentView",
    props: {
        playlists: {
            type: Array as () => Playlist[],
            required: true
        }
    },
    components: { PlaylistComponent }
})
</script>

<template>

    <div class="flex flex-wrap">

        <div v-for="playlist in playlists" class="mr-[2%] my-5 w-[23%]">
            <PlaylistComponent :playlist="playlist"/>
        </div>

    </div>

</template>