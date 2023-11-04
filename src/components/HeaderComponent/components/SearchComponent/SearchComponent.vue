<template>
  <nav class="wrapper">
    <input v-model="searchText" type="text" id="search" name="search" />
  </nav>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { ref, watch } from 'vue';

const store = useStore();
const searchText = ref(store.state.searchList.searchText);
let timeoutId: number | null = null;

watch(searchText, (newValue) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(() => {
    store.commit('setSearchText', searchText.value);
    store.dispatch('fetchDataList');
  }, 500);
});
</script>

<style scoped>
@import '@/components/HeaderComponent/components/SearchComponent/styles.module.scss';
</style>