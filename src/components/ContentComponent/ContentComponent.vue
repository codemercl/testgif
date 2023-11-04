<template>
  <main class="wrapper">
    <div class="image-frame" v-if="searchObject && searchList.length === 0">
      <iframe :src="searchObject.embed_url" alt="" />
    </div>
    <router-link v-for="gif in searchList" :to="'/gif/' + gif.id" :key="gif.id" class="element">
      <img :src="gif?.images?.original?.url" alt="array picture">
    </router-link>
  </main>
</template>

<script setup lang="ts">
import { useDataList } from '@/hooks/useDataList.js'
import { searchGifData } from '@/stores/modules/searchModule/search.service';
import { getRandomWord } from '@/utils/randomWord';
import { useScroll } from '@/hooks/useScroll'; 
import { useStore } from 'vuex';
import { ref, watch } from 'vue';
import type { GifData } from '@/stores/modules/searchModule/types';

const store = useStore()
const { searchList } = useDataList()
const searchObject = ref<GifData | null>(null);

watch(
  () => store.state.searchList.searchObject?.data, 
  (newDataObject: GifData | null) => {
    searchObject.value = newDataObject;
  }
);

useScroll(searchList, searchGifData, getRandomWord);
</script>

<style scoped>
@import '@/components/ContentComponent/styles.module.scss';
</style>