<script lang="ts">
import Song from '@/apps/core/data/models/song';
import CoreProviders from '@/di/coreProviders';
import PlayerProviders from '@/di/playerProviders';
import { defineComponent } from 'vue';
import BaseChildView from '@/apps/core/presentation/views/BaseChildView.vue';


export default defineComponent({
    name: "LyricsView",
    props: {
        inputSong: {
            type: Song,
            default: null
        }
    },

    data(){
        let song: Song | null = this.inputSong;
        if(song === null){
            song = PlayerProviders.providePlayer().currentSong
        }

        return {
            song
        }
    },
    components: { 
        BaseChildView
    }
})

</script>
<template>


    <BaseChildView :title="song?.title ?? ''" :backgroundImage="song?.coverImageUrl ?? undefined" >

        <h2 v-if="song === null" class="text-4xl text-light font-extrabold backdrop-blur-md">
            Play a song to display the lyrics
        </h2>

        <div v-else class="overflow-scroll h-full pb-64 text-2xl leading-10 tracking-widest">
            <p v-for="verse in song.lyrics.split('\n\n')" class="mt-32">
                <template v-for="line in verse.split('\n')">
                    {{ line }}<br/>
                </template>
            </p>
        </div>
        
        
    </BaseChildView>

</template>