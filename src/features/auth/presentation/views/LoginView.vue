<script lang="ts">
import { defineComponent, ref } from 'vue';
import LoginState from '../../application/states/loginState';
import LoginViewModel from '../../application/viewModels/loginViewModel';
import ViewModelView from '@/common/components/views/ViewModelView.vue';
import TextFieldComponent from '@/common/components/form/TextFieldComponent.vue';
import AsyncButton from "@/common/components/buttons/AsyncButton.vue";
import { AsyncStatus } from '@/common/state/asyncState';
import RoutingUtils from '@/common/utils/routing';
import AuthView from './AuthView.vue';
import LabeledFieldComponent from '@/common/components/form/LabeledFieldComponent.vue';

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

			<form @submit.prevent="submit">

				<div class="text-danger my-2" v-if="state.error">
					Incorrent username or password.
				</div>

				<LabeledFieldComponent
					class="mt-5"
					label="Email">
					<TextFieldComponent
						type="email"
						:field="state.form.phoneNumber"/>
				</LabeledFieldComponent>
				<LabeledFieldComponent
					class="mt-5"
					label="Password">
					<TextFieldComponent
						:field="state.form.password"
						type="password"
						/>
				</LabeledFieldComponent>

				<p class="text-center mt-5">Don't have an account? <RouterLink to="/auth/signup" class="fontweight-bold">Sign up</RouterLink></p>
				
				<div class="flex">
					<AsyncButton :state="state" class="mx-auto">
						<span class="text-light">LOG IN</span>
					</AsyncButton>
				</div>

			</form>

			

		</AuthView>
	
	</ViewModelView>
</template>
@/common/state/asyncState@/common/utils/routing