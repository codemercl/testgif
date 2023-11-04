<template>
  <section class="userpage">
    <HeaderComponent>
      <template #logo>
        <component :is="LogoComponent" :link="true" />
      </template>
    </HeaderComponent>
    <main class="container" v-for="gif in gifDatas" >
      <div class="pic">
        <img :src=" gif?.user?.avatar_url" alt="">
      </div>
      <div class="content">
        <h1>{{ gif.title }}</h1>
        <h2>@{{ gif?.user?.display_name }}</h2>
        <a :href="gif?.user?.profile_url">{{ gif.user?.profile_url }}</a>
      </div>
    </main>
  </section>
</template>

<script setup lang="ts">
import LogoComponent from '@/components/HeaderComponent/components/LogoComponent/LogoComponent.vue'
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const store = useStore()

const id = route.params.id
const gifDatas = store.state.getById 

</script>
<style scoped>
@import '@/views/UserPage/styles.module.scss';
</style>
