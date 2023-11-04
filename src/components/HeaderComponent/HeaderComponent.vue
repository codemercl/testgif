<template>
  <header class="wrapper">
    <div class="logo">
      <slot name="logo"></slot>
    </div>
    <div class="menu">
      <slot name="menu"></slot>
    </div>
  </header>
  <div class="share-button">
    <button @click="share">Web share API (only mobile)</button>
  </div>
</template>

<script setup lang="ts">
const share = async () => {
  if (navigator.share) {
    try {
      const shareData: ShareData = {
        title: 'title for example',
        text: 'text for example',
        url: 'URL, for example',
      };

      await navigator.share(shareData);
      console.log('succsess.');
    } catch (error) {
      console.error('eror after shar:', error);
    }
  } else {
    console.log('Web Share API dont working in your browser.');
  };
};
</script>

<style scoped>
@import '@/components/HeaderComponent/styles.module.scss';
</style>
