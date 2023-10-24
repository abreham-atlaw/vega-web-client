<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: "BaseChildView",
    props: {
        title: {
            type: String,
            default: ""
        },
        backgroundImage: {
            type: String,
            default: null
        }
    }
})
</script>
<template>

    <div class="flex flex-col px-20 pt-10 h-full bg-cover bg-center bg-fixed" :style="{backgroundImage: `url(${backgroundImage})`}">

        <div class="flex">

            <h1 class="text-3xl font-extrabold">
                {{ title }}
            </h1>

            <div class="ml-auto">
                <div class="w-16 h-16 rounded-full overflow-clip">
                    <img src="/src/assets/auth/images/avatar.jpeg">
                </div> 
            </div>
        </div>

        <div class="h-full mt-5">
            <slot></slot>
        </div>


    </div>



</template>