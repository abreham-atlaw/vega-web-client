<script lang="ts">
import { ref, defineComponent } from 'vue';
import DeleteAccountState from '../../application/states/deleteAccountState';
import DeleteAccountViewModel from '../../application/viewModels/deleteAccountViewModel';
import AsyncButton from '@/common/components/buttons/AsyncButton.vue';
import ViewModelView from '@/common/components/views/ViewModelView.vue';
import AuthenticatedView from '@/common/components/views/AuthenticatedView.vue';
import { AsyncStatus } from '@/common/state/asyncState';
import BaseButton from '@/common/components/buttons/BaseButton.vue';

export default defineComponent({
    data() {
        let state = ref(new DeleteAccountState());
        return {
            state: state,
            viewModel: new DeleteAccountViewModel(state.value)
        };
    },
    methods: {
        submit() {
            this.viewModel.delete();
        }
    },

	computed:{
		isDone(){
			return this.state.status === AsyncStatus.done;
		}
	},
    components: {
    AsyncButton,
    ViewModelView,
    AuthenticatedView,
    BaseButton
}
})

</script>

<template>

	<AuthenticatedView>

		<ViewModelView :viewModel="viewModel" :state="state">
		
			<div class="flex h-screen bg-gray-200">

				<div class="w-4/5 m-auto shadow-2xl rounded-3xl h-2/3 p-20" >
					

					<h1 class="text-4xl font-bold mb-5">Delete Account</h1>
					<p>Dear {{ state.user!.fullName }},</p>
					
					<template v-if="!isDone">
					
						<p class="mt-5">
							Are you sure you want to delete your account?<br/>
							Deleting your account will permanenty delete all of you data, including:
							<ul class="list-disc pl-5 my-3">
								<li>Your profile information</li>
								<li>Your activity history</li>
							</ul>
							Once you account is deleted you will not be able to restore it.
							If you are sure you want to delete your account please click the button below.
						</p>
						<AsyncButton :onclick="submit" :state="state" bg="bg-red-900">DELETE</AsyncButton>
					
					</template>

					<template v-if="isDone">
					
						<p class="mt-5">
							Your account has successfully been deleted. Sorry to see you go.
						</p>

						<a href="/"><BaseButton>Go to Home</BaseButton></a>
					</template>
					
				</div>
			</div>
		</ViewModelView>

	</AuthenticatedView>

	

</template>@/common/state/asyncState