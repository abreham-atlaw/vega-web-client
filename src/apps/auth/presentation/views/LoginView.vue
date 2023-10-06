<script lang="ts">
import { defineComponent, ref } from 'vue';
import LoginState from '../../application/states/loginState';
import LoginViewModel from '../../application/viewModels/loginViewModel';
import ViewModelView from '@/lib/components/views/ViewModelView.vue';
import TextFieldComponent from '@/lib/components/form/TextFieldComponent.vue';
import AsyncButton from "@/lib/components/buttons/AsyncButton.vue";
import { AsyncStatus } from '@/lib/state/asyncState';
import RoutingUtils from '@/lib/utils/routing';
import AuthView from './AuthView.vue';
import LabeledFieldComponent from '@/lib/components/form/LabeledFieldComponent.vue';

export default defineComponent({

	data(){
		let state = ref(new LoginState());
		return {
			state: state,
			viewModel: new LoginViewModel(state.value)
		}
	},

	methods:{

		submit(){
			this.viewModel.login();
		}

	},

	watch:{
		state: {
			handler(newValue: LoginState){
				if(newValue.status === AsyncStatus.done){
					let target = new URLSearchParams(window.location.search).get("redirect")
					RoutingUtils.redirect(target ?? "/");
				}
			},
			deep: true
		}
	},
	
	components: {
		ViewModelView,
		TextFieldComponent,
		AsyncButton,
		AuthView,
		LabeledFieldComponent
	}


})

</script>

<template>
	
	<ViewModelView :viewModel="viewModel" :state="state">

		<AuthView
			heading="LOG IN" 
			text="Log in to continue your musical journey">

			<LabeledFieldComponent
				class="mt-5"
				label="Email">
				<TextFieldComponent
					:field="state.form.phoneNumber"/>
			</LabeledFieldComponent>
			<LabeledFieldComponent
				class="mt-5"
				label="Password">
				<TextFieldComponent
					:field="state.form.password"/>
			</LabeledFieldComponent>

			<p class="text-center mt-5">Don't have an account? <RouterLink to="/auth/signup" class="fontweight-bold">Sign up</RouterLink></p>
			
			<AsyncButton :state="state" bg="bg-light">
				<span class="text-light">LOG IN</span>
			</AsyncButton>

		</AuthView>
	
	</ViewModelView>
</template>
