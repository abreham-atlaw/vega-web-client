<script lang="ts">
import { defineComponent, ref } from 'vue';
import SelectGenreView from './SelectGenreView.vue';
import ViewModelView from '@/common/components/views/ViewModelView.vue';
import SelectChoiceView from './SelectChoiceView.vue';
import ProgressIndicator from '../components/ProgressIndicator.vue';
import GenerateQueryInputState, { GenerateQueryInputStage } from '../../application/states/generateQueryInputState';
import GenerateQueryInputViewModel from '../../application/viewModels/generateQueryInputViewModel';


export default defineComponent({
    name: "GenerateQueryInputView",
    props: {
        onComplete: {
            type: Function,
            requried: true
        }
    },

    data() {
        let state = ref(new GenerateQueryInputState());
        let viewModel = new GenerateQueryInputViewModel(state.value)
        return {
            state: state,
            viewModel: viewModel,
            InputStage: GenerateQueryInputStage,
            stagesChoicesMap: new Map<GenerateQueryInputStage, any>([
                [
                    GenerateQueryInputStage.timeEra, {
                        values: [
                            "80s",
                            "90s",
                            "2000s",
                            "Modern"
                        ],
                        onValueSet: (era: string) => viewModel.selectTimeEra(era),
                        multiple: false
                    }
                ],

                [
                    GenerateQueryInputStage.mood, {
                        values: [
                            "Happy",
                            "Sad",
                            "Energetic",
                            "Chill",
                            "Intense"
                        ],
                        onValueSet: (mood: string) => viewModel.selectMood(mood),
                        multiple: false
                    }
                ],

                [
                    GenerateQueryInputStage.instruments, {
                        values: [
                            "Piano",
                            "Guitar",
                            "Violin",
                            "Drums",
                            "Saxophone",
                            "Cello",
                            "Trumpet",
                            "Flute"
                        ],
                        onValueSet: (values: string[]) => viewModel.selectInstruments(values),
                        multiple: true
                    }
                ],

                [
                    GenerateQueryInputStage.lyrics, {
                        values: [
                            "Personal",
                            "Love",
                            "StoryTelling",
                            "Emotive",
                            "Reflective",
                            "Poetry",
                            "Playful",
                            "Descriptive"
                        ],
                        onValueSet: (values: string[]) => viewModel.selectLyricsType(values),
                        multiple: true
                    }
                ]

            ]),
            stages: [
                "Genre",
                "Time Era",
                "Mood",
                "Instruments",
                "Lyrics"
            ]
        };
    },
    methods: {
    },
    computed: {
        stageSelectChoiceViewParams(){
            return this.stagesChoicesMap.get(this.state.stage);
        }
    },
    watch: {
        state: {
            handler(newValue: GenerateQueryInputState){
                if(newValue.stage === GenerateQueryInputStage.done){
                    this.onComplete!(newValue.input);
                }
            },
            deep: true
        }
    },
    components: { SelectGenreView, ViewModelView, SelectChoiceView, ProgressIndicator}
})

</script>

<template>

    <ViewModelView :view-model="viewModel" :state="state">
        <div class="h-full">
            <div class="mt-10 w-5/6 mx-auto px-40">
                <ProgressIndicator :stages="stages" :current-stage="state.stage" />
            </div>
            <div class="mt-5 flex h-full">
                <div v-if="state.stage === InputStage.genre" class="w-full">
                    <SelectGenreView 
                    :on-selected="(genre: string) => {viewModel.selectGenre(genre);}"/>
                </div>
                <div v-else-if="state.stage === InputStage.done">

                </div>
                <div v-else class="w-full h-full">
                    <SelectChoiceView 
                    :multiple-choices="stageSelectChoiceViewParams.multiple"
                    :values="stageSelectChoiceViewParams.values"
                    :on-value-set="stageSelectChoiceViewParams.onValueSet"
                    />
                </div>
            </div>
        </div>
    </ViewModelView>

    

</template>../../application/viewModels/generateQueryInputViewModel