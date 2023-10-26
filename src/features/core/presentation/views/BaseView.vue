<script lang="ts">
import { defineComponent } from 'vue';
import SideBarComponent from '../components/SideBarComponent.vue';
import AuthenticatedView from '@/common/components/views/AuthenticatedView.vue';
import { RouterView } from 'vue-router';
import PlayerComponent from '@/features/player/presentation/components/PlayerComponent.vue';

export default defineComponent({

    components: {
    SideBarComponent,
    AuthenticatedView,
    RouterView,
    PlayerComponent
}
})
</script>

<template>
    <AuthenticatedView>
        <div class="h-screen w-screen bg-primaryDark text-light flex">
            <div class="w-1/6">
                <SideBarComponent/>
            </div>
            <div class="h-screen flex flex-col" style="width: 84%">
                <div class="h-full overflow-scroll">
                    <RouterView></RouterView>
                </div>
                <div class="h-24 mt-auto bg-dark">
                    <PlayerComponent />
                </div>
            </div>
        </div>
    </AuthenticatedView>
</template>