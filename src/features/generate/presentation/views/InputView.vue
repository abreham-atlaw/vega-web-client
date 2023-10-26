<script lang="ts">
import { defineComponent, ref } from 'vue';
import InputState, { InputMode, InputStage } from '../../application/states/inputState';
import RawInputViewModel from '../../application/viewModels/rawInputViewModel';
import InputViewModel from '../../application/viewModels/inputViewModel';
import EnumFieldComponent from '@/common/components/form/EnumFieldComponent.vue';
import ViewModelView from '@/common/components/views/ViewModelView.vue';
import AsyncButton from '@/common/components/buttons/AsyncButton.vue';
import GenerateQueryInputView from './GenerateQueryInputView.vue';
import RawInputView from './RawInputView.vue';
import type GenerateQuery from '../../data/models/generateQuery';

export default defineComponent({

    props: {
        onComplete: {
            type: Function,
            required: true
        }
    },

    data(){
        let state = ref(new InputState());
        return {
            state,
            viewModel: new InputViewModel(state.value as any),
            InputStage,
            InputMode
        }
    },

    methods: {
        selectMode(){
            this.viewModel.selectMode();
        },
        
        setGenerateQuery(query: GenerateQuery){
            this.state.generateQuery = query;
            this.state.stage = InputStage.done;
        },

        setRawQuery(query: string){
            this.state.rawQuery = query;
            this.state.stage = InputStage.done;
        }
    },

    watch:{

        state: {
            handler(newValue: InputState){
                if(newValue.stage === InputStage.done){
                    this.onComplete(this.state.generateQuery, this.state.rawQuery);
                }
            },
            deep: true
        }
    },

    components: {
        EnumFieldComponent,
        ViewModelView,
        AsyncButton,
        GenerateQueryInputView,
        RawInputView
    }
    

})

</script>

<template>

    <ViewModelView :view-model="viewModel" :state="state">

        <div v-if="state.stage === InputStage.mode" class="flex h-full">
            <div class="m-auto w-64">

                <EnumFieldComponent
                 :labels="['Query Mode', 'Guided']"
                 :enum-class="InputMode" 
                 :field="(state.form.mode as any)"/>

                <AsyncButton class="block mx-auto mt-10" :state="state" @click="selectMode">
                    NEXT
                </AsyncButton>

            </div>
        </div>
        <template v-else-if="state.stage === InputStage.input">
            
            <GenerateQueryInputView v-if="state.mode === InputMode.guided" :on-complete="setGenerateQuery"/>

            <RawInputView v-else :on-submit="setRawQuery"/>
        
        </template>

    </ViewModelView>



</template>