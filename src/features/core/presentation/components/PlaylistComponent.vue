


<script lang="ts">
import { defineComponent } from 'vue';
import Playlist from '../../data/models/playlist';


export default defineComponent({

    name: "PlaylistComponent",
    props: {
        playlist: {
            type: Playlist,
            required: true
        }
    }
})

</script>
<template>

    <RouterLink :to="`/base/core/playlist/detail?id=${playlist.id}`" class="block w-full p-2 rounded-xl bg-dark">

        <div class="w-full rounded-xl overflow-clip">
            <img :src="playlist.cover" class="w-full">
        </div>

        <h4 class="font-bold my-5">{{ playlist.title }}</h4>
        <h2 class="font-bold my-5 italic">Jermaine Cole</h2>

    </RouterLink>

</template>