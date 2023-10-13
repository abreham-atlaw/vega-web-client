<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    props: {
        title: {
            type: String,
            default: ""
        }
    }
})
</script>
<template>

    <div class="flex flex-col px-20 pt-10 h-full">

        <div class="flex">

            <h1 class="text-3xl font-extrabold">
                {{ title }}
            </h1>

            <div class="ml-auto">
                
            </div>
        </div>

        <div class="h-full mt-5">
            <slot></slot>
        </div>


    </div>



</template>