<template>
  <section class="app">
    <HeaderComponent>
    <template #logo>
      <component :is="LogoComponent" />
    </template>
    <template #menu>
      <component :is="SearchComponent"  />
    </template>
  </HeaderComponent>
  <ContentComponent />
  </section>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue'
import LogoComponent from '@/components/HeaderComponent/components/LogoComponent/LogoComponent.vue'
import SearchComponent from '@/components/HeaderComponent/components/SearchComponent/SearchComponent.vue'
import ContentComponent from '@/components/ContentComponent/ContentComponent.vue'
</script>

<style scoped>
@import '@/views/HomeView/styles.module.scss';
</style>
