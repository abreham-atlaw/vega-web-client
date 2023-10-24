<script lang="ts">
import { defineComponent, ref } from 'vue';
import PlayerState from '../../application/states/playerState';
import PlayerViewModel from '../../application/viewModels/playerViewModel';
import PlayerProviders from '@/di/playerProviders';
import Song from '@/apps/core/data/models/song';
import ViewModelView from '@/lib/components/views/ViewModelView.vue';


export default defineComponent({
    name: "PlayerComponent",
    data() {
        let state = ref(new PlayerState());
        let viewModel = new PlayerViewModel(state.value);
        PlayerProviders.setPlayer(viewModel);
        return {
            state,
            viewModel
        };
    },
    methods: {
        playPause() {
            if (this.state.isPlaying) {
                this.viewModel.pause();
            }
            else {
                this.viewModel.play();
            }
        },
        seek(){
            this.viewModel.seek();
        },
        formatSeconds(seconds: number): string {
            let minutes = Math.floor(seconds / 60);
            seconds = seconds % 60;
            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        },
        download(){
            this.viewModel.download();
        },
        next(){
            this.viewModel.next();
        },
        previous(){
            this.viewModel.previous();
        }

    },
    components: { ViewModelView }
})

</script>


<template>
    <ViewModelView :view-model="viewModel" :state="state">
        <div class="flex py-4 px-10 h-full">

            <div class="mr-auto flex h-full w-1/4">
                <template v-if="state.currentSong != null">
                    <div class="h-full rounded-md overflow-clip">
                        <img :src="state.currentSong.coverImageUrl" class="h-full">
                    </div>
                    <div class="ml-2">
                        <h3 class="mt-3 font-bold">{{ state.currentSong.title }}</h3>
                        <h3 class="mt-2 text-sm italic">Vega</h3>
                    </div>
                </template>
            </div>
    
            <div class="mx-auto w-1/2 my-auto">
                <div class="flex mx-auto w-1/2 mx-auto text-sm">
                    <button class="mx-auto">
                        <span class="fas fa-shuffle"></span>
                    </button>
    
                    <button class="mx-auto" @click="previous">
                        <span class="fas fa-backward"></span>
                    </button>
                    
                    <button class="w-9 h-9 flex bg-primary mx-auto rounded-full" @click="playPause">
                        <span class="fas m-auto text-sm" :class="(state.isPlaying) ? 'fa-pause' : 'fa-play'"></span>
                    </button>
    
                    <button class="mx-auto" @click="next">
                        <span class="fas fa-forward"></span>
                    </button>
    
                    <button class="mx-auto">
                        <span class="fas fa-repeat"></span>
                    </button>
    
                </div>
    
                <div class="flex mt-2">
    
                    <div class="text-sm">
                        {{ formatSeconds(state.currentTime) }}
                    </div>
                    <div class="w-full my-auto mx-3">
                        <input type="range" class="w-full range bg-white" min="0" :max="state.duration" v-model="state.currentTime" @change="seek">
                    </div>

                    <div class="text-sm">
                        {{ formatSeconds(state.duration) }}
                    </div>
    
                </div>
    
            </div>
    
            <div class="ml-auto w-1/4 flex my-auto">
                <template v-if="state.currentSong != null">
                    <RouterLink class="ml-auto" to="/base/player/lyrics">
                        <button class="fas fa-scroll">
                        </button>
                    </RouterLink>
                    <button class="ml-8 fas fa-download" @click="download">
                    </button>
                    <button class="ml-8 fas fa-list-ol">
                    </button>
                    <button class="ml-8 fas fa-volume-low">
                    </button>
                </template>
            </div>
    
        </div>
    </ViewModelView>
    
    
</template>