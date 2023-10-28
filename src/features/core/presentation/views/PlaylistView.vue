<script lang="ts">
import { ref, defineComponent } from 'vue';
import { PlaylistState } from '../../application/states/playlistState';
import PlaylistViewModel from '../../application/viewModels/playlistViewModel';
import ViewModelView from '@/common/components/views/ViewModelView.vue';
import BaseChildView from './BaseChildView.vue';
import PlayerProviders from '@/dependency_injection/playerProviders';



export default defineComponent({
    name: "PlaylistView",
    data() {
        let state = ref(new PlaylistState(this.$route.query.id! as string));
        return {
            state,
            viewModel: new PlaylistViewModel(state.value)
        };
    },
    methods: {
        play() {
            PlayerProviders.providePlayer().playPlaylist(this.state.playlist!);
        },
        share(){
            navigator.clipboard.writeText(window.location.toString());
            let toast = this.$toast.open({
                message: "Coppied to clipboard"
            });
            setTimeout(() => {
                toast.dismiss();
            }, 5000);
        }
    },
    components: { ViewModelView, BaseChildView }
})
</script>

<template>

    <BaseChildView>
    
        <ViewModelView :view-model="viewModel" :state="state">

            <div>
    
                <div class="flex h-52 pl-0">
                    <div class="w-52 h-full rounded-lg overflow-clip">
                        <img :src="state.playlist!.cover" class="w-full h-full">
                    </div>
                    <div class="h-full ml-5 flex flex-col">
                        <h1 class="text-4xl font-extrabold mt-2">{{ state.playlist?.title }}</h1>
                        <h2 class="text-xl font-bold mt-1">Jermaine Cole</h2>
        
                        <p class="my-auto">{{ state.playlist!.songs.length }} Songs</p>
                        <div class="flex">
        
                            <button class="mr-10 w-16 h-16 flex bg-primary rounded-full" @click="play">
                                <span class="fas fa-play m-auto text-xl"></span>
                            </button>
                            <button class="mr-10">
                                <span class="fas fa-download text-xl"></span>
                            </button>
                            <button class="mr-10" @click="share">
                                <span class="fas fa-share text-xl"></span>
                            </button>
        
                        </div>
                    </div>
                </div>
        
                <div class="mt-16">
        
                    <div class="flex mb-12">
                        <div class="w-[5%]">
                            #
                        </div>
                        <div class="w-[65%]">
                            Title
                        </div>
                        <div class="w-[20%]">
                            Date Added
                        </div>
                        <div class="w-[10%]">
                            Length
                        </div>
                    </div>
        
                    <div v-for="song, index in state.playlist!.songs" class="flex my-4">
                        <div class="w-[5%] my-auto">
                            {{ index + 1 }}
                        </div>
                        <div class="w-[65%] flex">
                            <img :src="song.coverImageUrl" class="h-12"/>
                            <span class="my-auto ml-5">{{ song.title }}</span>
                        </div>
                        <div class="w-[20%] my-auto">
                            Oct 23, 2023
                        </div>
                        <div class="w-[10%] my-auto">
                            0:15
                        </div>
                    </div>
        
        
                </div>
        
            </div>
    
        </ViewModelView>

    
    </BaseChildView>

    

    

</template>