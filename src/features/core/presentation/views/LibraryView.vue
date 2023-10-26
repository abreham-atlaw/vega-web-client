<script lang="ts">
import { defineComponent, ref } from 'vue';
import LibraryState from '../../application/states/libraryState';
import LibraryViewModel from '../../application/viewModels/libraryViewModel';
import LibraryPlaylistView from './LibraryPlaylistView.vue';
import LibraryRecentView from './LibraryRecentView.vue';
import ViewModelView from '@/common/components/views/ViewModelView.vue';
import BaseChildView from './BaseChildView.vue';

enum Page{
    recent,
    playlists
}


export default defineComponent({
    name: "LibraryView",
    data() {
        let state = ref(new LibraryState());
        return {
            state,
            viewModel: new LibraryViewModel(state.value),
            currentPage: Page.recent,
            Page,
            tabs: [
                {
                    label: "RECENTS",
                    page: Page.recent
                },
                {
                    label: "PLAYLISTS",
                    page: Page.playlists
                }
            ]
        };
    },
    methods: {
        switchPage(page: Page) {
            this.currentPage = page;
        }
    },
    components: { LibraryPlaylistView, LibraryRecentView, ViewModelView , BaseChildView}
})
</script>
<template>

    <BaseChildView title="Library">
    
        <ViewModelView :view-model="viewModel" :state="state">

            <div class="">
        
                <div class="flex">
                    <button v-for="tab in tabs" class="mr-8 pb-3 pr-5" :class="(currentPage === tab.page) ? 'border-b-4 border-primary' : ''" @click="() => switchPage(tab.page)">{{ tab.label }}</button>
                </div>
        
                <div class="mt-5 overflow-scroll">
        
                    <LibraryRecentView v-if="currentPage === Page.recent" :songs="state.recents!"/>
                    <LibraryPlaylistView v-else-if="currentPage === Page.playlists" :playlists="state.playlists!"/>
        
                </div>
        
            </div>

        </ViewModelView>
    
    </BaseChildView>

    

</template>