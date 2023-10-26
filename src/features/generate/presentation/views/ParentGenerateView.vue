<script lang="ts">
import { defineComponent, ref } from 'vue';
import ParentGenerationState, {ParentGenerationStage} from '../../application/states/parentGenerationState';
import ParentGenerationViewModel from '../../application/viewModels/parentGenerationViewModel';
import ViewModelView from '@/common/components/views/ViewModelView.vue';
import InputView from './InputView.vue';
import BaseChildView from '@/features/core/presentation/views/BaseChildView.vue';
import type GenerateQuery from '../../data/models/generateQuery';
import GenerateView from './GenerateView.vue';


export default defineComponent({
    data() {
        const state = ref(new ParentGenerationState());
        return {
            state: state,
            viewModel: new ParentGenerationViewModel(state.value),
            ParentGenerationStage,


        };
    },
    methods: {
        onInputComplete(query?: GenerateQuery, rawQuery?: string){
            this.viewModel.generate(query, rawQuery);
        }
    },
    components: { ViewModelView, InputView, BaseChildView, GenerateView }
})

</script>

<template>

    <ViewModelView :view-model="viewModel" :state="state">
        <BaseChildView title="Generate a Track">
            <InputView 
            v-if="state.stage === ParentGenerationStage.input" 
            :on-complete="onInputComplete"
            />

            <GenerateView
            v-else
            :query="state.query!"
            :raw-query="state.rawQuery"
            />
        </BaseChildView>
    </ViewModelView>

</template>

