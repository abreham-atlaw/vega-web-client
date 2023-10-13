<script lang="ts">
import { defineComponent } from 'vue';
import AuthenticatedView from '@/lib/components/views/AuthenticatedView.vue';
import AuthenticationStatus from '@/apps/auth/data/models/authenticationStatus';

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