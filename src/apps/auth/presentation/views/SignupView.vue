<script lang="ts">
import { defineComponent, ref } from 'vue';
import ViewModelView from '@/lib/components/views/ViewModelView.vue';
import TextFieldComponent from '@/lib/components/form/TextFieldComponent.vue';
import AsyncButton from "@/lib/components/buttons/AsyncButton.vue";
import { AsyncStatus } from '@/lib/state/asyncState';
import RoutingUtils from '@/lib/utils/routing';
import AuthView from './AuthView.vue';
import LabeledFieldComponent from '@/lib/components/form/LabeledFieldComponent.vue';
import SignupState from '@/apps/auth/application/states/signupState';
import SignupViewModel from '@/apps/auth/application/viewModels/signupViewModel';

export default defineComponent({
	
	components: {
		ViewModelView,
		TextFieldComponent,
		AsyncButton,
		AuthView,
		LabeledFieldComponent
	},

	data(){
		let state = ref(new SignupState());
		return {
			state: state,
			viewModel: new SignupViewModel(state.value as any)
		};
	},

	watch:{
		state: {
			handler(newValue: SignupState){
				if(newValue.status === AsyncStatus.done){
					let target = new URLSearchParams(window.location.search).get("redirect");
					RoutingUtils.redirect(target ?? "/");
				}
			},
			deep: true
		}
	},

	methods:{

		submit(){
			this.viewModel.signup();
		}

	}


});
</script>


<template>
  <ViewModelView
    :view-model="viewModel"
    :state="state"
  >
    <AuthView
      heading="SIGN UP" 
      text="Unlock your creativity and personlize your musical experience"
    >
      <form @submit.prevent="submit">

        <div class="text-danger my-2" v-if="state.error">
          Error occurred. Please check your input.
        </div>


          <LabeledFieldComponent
          class="mt-5"
          label="Full Name"
        >
          <TextFieldComponent
            :field="state.form.fullName"
          />
        </LabeledFieldComponent>

        <LabeledFieldComponent
          class="mt-5"
          label="Email"
        >
          <TextFieldComponent
            type="email"
            :field="state.form.email"
          />
        </LabeledFieldComponent>

        <LabeledFieldComponent
          class="mt-5"
          label="Password"
        >
          <TextFieldComponent
            :field="state.form.password"
            type="password"
          />
        </LabeledFieldComponent>

        <LabeledFieldComponent
          class="mt-5"
          label="Confirm Password"
        >
          <TextFieldComponent
            :field="state.form.confirmPassword"
            type="password"
          />
        </LabeledFieldComponent>

        <p class="text-center mt-5">
          Already have an account? 
          <RouterLink
            to="/auth/login"
            class="fontweight-bold">
            Log in
          </RouterLink>
        </p>
        
        <div class="flex">
          <AsyncButton
            :state="state"
            class="mx-auto">
            <span class="text-light">SIGN UP</span>
          </AsyncButton>
        </div>
      </form>
    </AuthView>
  </ViewModelView>
</template>
