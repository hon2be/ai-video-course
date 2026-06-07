<template>
  <div class="app-layout">
    <!-- 모바일 헤더 -->
    <header class="mobile-header">
      <button class="hamburger" @click="sidebarOpen = !sidebarOpen">☰</button>
      <span class="mobile-title">AI 영상 제작 과외</span>
    </header>

    <!-- 사이드바 -->
    <AppSidebar :is-open="sidebarOpen" @close="sidebarOpen = false" />

    <!-- 모바일 오버레이 -->
    <div v-if="sidebarOpen"
         style="position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:99"
         @click="sidebarOpen = false" />

    <!-- 메인 콘텐츠 -->
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppSidebar from '@/components/AppSidebar.vue'
const sidebarOpen = ref(false)
</script>
