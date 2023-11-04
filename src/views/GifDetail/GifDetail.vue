<template>
  <section class="wrapper">
    <div class="container" v-for="gif in gifData" :key="gif.id">
      <div class="images">
        <img :src="gif.images?.original?.url" alt="" />
      </div>
      <div class="content">
        <h1>{{ gif.title }}</h1>
        <router-link :to="/user/ + gif?.username + '/' + gif?.id" class="element">
          {{ gif.username }}
        </router-link>
      </div>
    </div>
    <div class="slider">
      <Carousel :items="searchList" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { CartData } from '@/stores/modules/getByIdModule/types'
import { onMounted, ref } from 'vue'
import Carousel from '@/common/Carousel/Carousel.vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { useDataList } from '@/hooks/useDataList.js'

const route = useRoute()
const store = useStore()
const id = route.params?.id

const gifData = ref<CartData[]>([])
const { searchList } = useDataList()

onMounted(async () => {
  store.commit('setParamId', id)
  await store.dispatch('fetchDataCart')
  gifData.value = store.state.getById
})
</script>

<style scoped>
@import '@/views/GifDetail/styles.module.scss';
</style>
