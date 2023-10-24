


<script lang="ts">
import { defineComponent } from 'vue';
import GenerateQuery from '../../data/models/generateQuery';
import { useRoute } from 'vue-router';
import RoutingUtils from '@/lib/utils/routing';
import GenerateView from './GenerateView.vue';

function decodeFromUrl(urlParams: Record<string, string | string[]>): GenerateQuery {
  return new GenerateQuery(
    urlParams.genre as string,
    urlParams.era as string,
    urlParams.mood as string,
    typeof urlParams.instruments === 'string' ? urlParams.instruments.split(',') : undefined,
    typeof urlParams.lyricsType === 'string' ? urlParams.lyricsType.split(',') : undefined
  );
}

export default defineComponent({
    
    name: "RoutedGenerateView",

    data(){
      return {
        query: decodeFromUrl(RoutingUtils.getUrlParams() as any)
      }
    },
    components:{
      GenerateView
    }
})

</script>
<template>

  <GenerateView :query="query">

  </GenerateView>

</template>