<template>
  <div class="carousel">
    <div class="wrapper">
      <div class="carousel-container">
        <div v-for="(item, index) in items" :key="index">
          <div
            class="carousel-slide"
            :style="{ transform: `translateX(-${currentIndex * 150}px)` }"
          >
            <img :src="item?.images?.original?.url" alt="" />
          </div>
        </div>
      </div>
      <button @click="nextSlide" class="button-prev">&larr;</button>
      <button @click="prevSlide" class="button-next">&rarr;</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GifData } from '@/stores/modules/searchModule/types'
import { ref } from 'vue'

const props = defineProps({
  items: Array as () => GifData[]
})

const currentIndex = ref(0)

const nextSlide = () => {
  if (props.items) {
    currentIndex.value = (currentIndex.value + 1) % props.items.length
  }
}

const prevSlide = () => {
  if (props.items) {
    currentIndex.value = (currentIndex.value - 1 + props.items.length) % props.items.length
  }
}
</script>

<style scoped>
@import '@/common/Carousel/styles.module.scss';
</style>
