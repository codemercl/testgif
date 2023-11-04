<template>
  <router-link v-if="link" :to="'/gif/' + id">
    <picture class="wrapper">
      <source :srcset="webpImage" type="image/webp">
      <img :src="pngImage" alt="Alt текст">
    </picture>
  </router-link>
  <div v-else>
    <picture class="wrapper">
      <source :srcset="webpImage" type="image/webp">
      <img :src="pngImage" alt="Alt текст">
    </picture>
  </div>
</template>

<script setup lang="ts">
import pngImage from '@/assets/logo/logo-default.jpg'
import webpImage from '@/assets/logo/logo-default.webp'
import { useRoute } from 'vue-router';

const route = useRoute()
const id = route.params.id
const { link } = defineProps({
  link: Boolean,
});
</script>

<style scoped>
@import '@/components/HeaderComponent/components/LogoComponent/styles.module.scss';
</style>
