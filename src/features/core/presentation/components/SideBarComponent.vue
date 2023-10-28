<script lang="ts">
import { defineComponent } from 'vue';
import SideBarMenuItemComponent from './SideBarMenuItemComponent.vue';
import logo from '@/assets/common/images/logo.png';

export default defineComponent({
    data(){
        return {
            logo,
            "menuItems": [
                {
                    "icon": "home",
                    "text": "Home" ,
                    "link": "/base/core/home"
                },
                {
                    "icon": "plus",
                    "text": "Generate",
                    "link": "/base/generate/"
                },
                {
                    "icon": "list",
                    "text": "Library",
                    "link": "/base/core/library/"
                }

            ],
            "bottomMenuItems": [
                {
                    "icon": "gear",
                    "text": "Settings",
                    "link": "/base/core/settings/"
                },
                {
                    "icon": "right-from-bracket",
                    "text": "Logout",
                    "link": "/auth/logout/"
                }
            ]
        }
    },
    components: {
        SideBarMenuItemComponent
    }
})
</script>
<template>

    <div class="bg-dark text-light flex flex-col w-full h-full px-5 pt-10">

        <div class="w-1/3 mx-auto mt-5">
            <img :src="logo" class="w-full">
        </div>

        <div class="mt-16">
            <div class="my-4" v-for="item in menuItems">
                <SideBarMenuItemComponent :icon="item.icon" :text="item.text" :link="item.link"/>
            </div>
        </div>

        <div class="mt-auto">
            <div class="my-5" v-for="item in bottomMenuItems">
                <SideBarMenuItemComponent :icon="item.icon" :text="item.text" :link="item.link"/>
            </div>
        </div>

    </div>

</template>