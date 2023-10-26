<script lang="ts">
import { defineComponent, ref } from 'vue';
import RawInputState from '../../application/states/rawInputState';
import RawInputViewModel from '../../application/viewModels/rawInputViewModel';
import RawInputExamplePromptComponent from '../components/RawInputExamplePromptComponent.vue';
import ViewModelView from '@/common/components/views/ViewModelView.vue';
import TextFieldComponent from '@/common/components/form/TextFieldComponent.vue';
import AsyncButton from '@/common/components/buttons/AsyncButton.vue';
import { AsyncStatus } from '@/common/state/asyncState';

export default defineComponent({
    name: "RawInputView",

    props: {
        onSubmit: {
            type: Function,
            required: true
        }
    },

    data(){

        let state = ref(new RawInputState());
        return {
            state,
            viewModel: new RawInputViewModel(state.value as any),
            examplePrompts: [
                "A song for a movie scene with a happy ending.",
                "An energetic YouTube Intro music with drums and guitar.",
                "A smooth background music for a presentation."
            ]
        }
    },

    methods: {

        submit(){
            this.viewModel.submit();
        },

        chooseExampePrompt(prompt: string){
            this.state.form.query.setValue(prompt);
        }

    },


    watch: {
        state: {
            handler(newValue: RawInputState){
                if(newValue.status === AsyncStatus.done){
                    this.onSubmit(newValue.form.query.getValue()!);
                }
            },
            deep: true
        }
    },

    components: {
        RawInputExamplePromptComponent,
        ViewModelView,
        TextFieldComponent,
        AsyncButton
    },

})


</script>
<template>

    <ViewModelView :view-model="viewModel" :state="state">
        <div class="h-full flex flex-col">

            <div class="flex w-5/6">
                <button v-for="prompt in examplePrompts" class="w-1/3 my-0 pr-16">
                    <RawInputExamplePromptComponent :text="prompt" @click="() => chooseExampePrompt(prompt)"/>
                </button>
            </div>

            <div class="mt-auto flex w-full mb-12">

                <TextFieldComponent class="w-full mr-5 my-auto" bg="primary" placeholder="Enter a prompt here" :field="state.form.query" input-class="bg-opacity-20" text-color="light"/>
                
                <div class="flex">
                    <AsyncButton :state="state" class="m-auto block" @click="submit">
                        SUBMIT    
                    </AsyncButton>
                </div>

            </div>

        </div>
    </ViewModelView>

</template>@/common/state/asyncState