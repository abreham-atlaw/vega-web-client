<script lang="ts">
import { defineComponent } from 'vue';
import Song from '../../data/models/song';
import PlayerViewModel from '@/features/player/application/viewModels/playerViewModel';
import PlayerProviders from '@/dependency_injection/playerProviders';


export default defineComponent({
    name: "RecentTrackComponent",
    props:{
        song: {
            type: Song,
            required: true
        }
    },
    methods:{
        play(){
            PlayerProviders.providePlayer().playSong(this.song);
        }
    }
})

</script>
<template>

    <button class="block w-full" @click="play">

        <div class="w-full rounded-xl overflow-clip">
            <img :src="song.coverImageUrl" class="w-full h-full"/>
        </div>

        <div class="mt-5 text-left">
            <h3 class="text-lg font-bold">{{ song.title }}</h3>
            <div class="italic text-sm font-light">Vega</div>
        </div>

    </button>

</template>