<script lang="ts">
import { defineComponent } from 'vue';
import AuthenticatedView from '@/common/components/views/AuthenticatedView.vue';
import AuthenticationStatus from '@/features/auth/data/models/authenticationStatus';

export default defineComponent({
    name: "SplashView",
    data(){
        return {
            redirectionMap: new Map<AuthenticationStatus, string>([
                [AuthenticationStatus.none, "/auth/login"],
                [AuthenticationStatus.authenticated, "/base/core/home"]
            ])
        }
    },
    components: {
        AuthenticatedView
    }

});

</script>
<template>
    <AuthenticatedView
     :validStatus="[]"   
     :redirectionMap="redirectionMap">
    </AuthenticatedView>
</template>