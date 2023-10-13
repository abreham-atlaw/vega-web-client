<script lang="ts">
import { defineComponent, ref } from 'vue';
import GenerateQuery from '../../data/models/generateQuery';
import GenerateState from '../../application/states/generateState';
import GenerateViewModel from '../../application/viewModels/generateViewModel';
import LoadingSpinner from '@/lib/components/status/LoadingSpinner.vue';
import { GenerationStatus } from '../../data/models/statusResponse';
import BaseButton from '@/lib/components/buttons/BaseButton.vue';
import ViewModelView from '@/lib/components/views/ViewModelView.vue';
import RoutingUtils from '@/lib/utils/routing';
import AsyncButton from '@/lib/components/buttons/AsyncButton.vue';


export default defineComponent({
    name: "GenerateView",
    props: {
        query: {
            type: GenerateQuery,
            required: true
        }
    },
    data() {
        let state = ref(new GenerateState(this.query));
        let viewModel = new GenerateViewModel(state.value);
        return {
            state,
            viewModel,
            statusMap: new Map<GenerationStatus, string>([
                [GenerationStatus.none, "Initializing"],
                [GenerationStatus.instrumental, "Creating Instrumental"],
                [GenerationStatus.lyrics, "Writing Lyrics"],
                [GenerationStatus.vocal, "Laying Vocals"],
                [GenerationStatus.mix, "Mixing Track"],
            ]),
            GenerationStatus
        };
    },

    methods: {
        download(){
            this.viewModel.download();
        },
        play(){
            this.viewModel.play();
        }
    },
    components: { LoadingSpinner, BaseButton, ViewModelView, AsyncButton }
})

</script>
<template>

    <ViewModelView :state="state" :view-model="viewModel">
        <div class="flex h-full">
            <div class="m-auto">
                <div v-if="state.response!.status == GenerationStatus.done">
        
                    <div class="text-center">
                        <div class="w-60 mx-auto rounded-2xl overflow-clip">
                            <img :src="state.song!.coverImageUrl" class="w-full"/>
                        </div>
                        <h3 class="mt-10 font-bold text-xl">{{ state.song!.title }}</h3>
                        <h3 class="mt-1 italic">{{ state.query.era }} {{ state.query.mood }} {{ state.query.genre }}</h3>
                    </div>
                    <div class="flex mt-16">
                        <AsyncButton :state="state.downloadState" bg="light" loading-color="primary" class="mr-10 w-52" @click="download">
                            <div class="text-center text-dark">
                                <span class="fas fa-download mr-5"></span>
                                <span>Download</span>
                            </div>
                        </AsyncButton>
                        
                        <BaseButton bg="primary w-52" @click="play">
                            <div class="text-light text-center">
                                <span class="fas fa-play mr-5"></span>
                                <span>Play</span>
                            </div>
                        </BaseButton>
                    </div>
        
                </div>
                <div v-else>
                    <LoadingSpinner :size="100" class="m-auto"/>
                    <div class="text-center text-xl mt-5">
                        {{ statusMap.get(state.response!.status) }}
                    </div>
                </div>
        
            </div>
        </div>
    </ViewModelView>
</template>