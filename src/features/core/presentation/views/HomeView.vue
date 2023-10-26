<script lang="ts">
import { defineComponent, ref } from 'vue';
import BaseChildView from './BaseChildView.vue';
import HomeState from '../../application/states/homeState';
import HomeViewModel from '../../application/viewModels/homeViewModel';
import type GenerateQuery from '@/features/generate/data/models/generateQuery';
import VegaRoutingUtils from '@/utils/vegaRoutingUtils';
import PlayerProviders from '@/dependency_injection/playerProviders';
import type Song from '../../data/models/song';
import ViewModelView from '@/common/components/views/ViewModelView.vue';
import type GenerateQuerySample from '@/features/generate/data/models/generateQuerySample';
import BaseButton from '@/common/components/buttons/BaseButton.vue';
import RecentTrackComponent from '../components/RecentTrackComponent.vue';
import PlaylistComponent from '../components/PlaylistComponent.vue';


export default defineComponent({
    name: "HomeView",

    data(){
        let state = ref(new HomeState());
        return {
            state,
            viewModel: new HomeViewModel(state.value),
        }
    },

    methods:{

        generate(query: GenerateQuery){
            this.$router.push(VegaRoutingUtils.encodeQuery(query));
        },

        play(song: Song): void{
            PlayerProviders.providePlayer().playSong(song);
        }

    },

    computed: {
        recommendation(): GenerateQuerySample{
            return this.state.recommendations![0];
        }

    },

    components: { BaseChildView, ViewModelView, BaseButton, RecentTrackComponent, PlaylistComponent }
})

</script>
<template>
    <BaseChildView
        title="Good Morning"
        >

        <ViewModelView :view-model="viewModel" :state="state">
            
            <div class="">
               
                <section class="w-full bg-cover bg-center p-16 rounded-2xl mt-10" :style="{backgroundImage: `url(${recommendation.coverImage})`}">
                    <div class="">
                        <h2 class="text-4xl font-extrabold">{{ recommendation.title }}</h2>
                        <p class="mt-3">{{ recommendation.mood }}, {{ recommendation.era }}, {{ recommendation.genre }}</p>
                    </div>
                    <BaseButton class="mt-10" bg="light" @click="() => generate(recommendation)">
                        <div class="text-dark text-center">
                            <span class="fas fa-music mr-5"></span>
                            <span>Generate</span>
                        </div>
                    </BaseButton> 
                </section>

                <section class="mt-16">
                    <h2 class="text-4xl font-extrabold">Your Playlists</h2>
                    <div class="flex mt-8">

                        <div v-for="playlist in state.playlists?.slice(0, 6)" class="w-1/6 pr-5">
                            <PlaylistComponent :playlist="playlist"/>
                        </div>

                    </div>
                </section>

                <section class="my-16">
                    <h2 class="text-4xl font-extrabold">Jump Back In</h2>
                    <div class="flex mt-8">

                        <div v-for="song in state.recents?.slice(0, 6)" class="w-1/6 pr-5">
                            <RecentTrackComponent :song="song"/>
                        </div>

                    </div>
                </section>
            
            </div>

        </ViewModelView>
        
    </BaseChildView>
</template>