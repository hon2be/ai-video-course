<template>
  <aside class="sidebar" :class="{ open: isOpen }">
    <div class="sidebar-brand">
      <div class="label">AI 영상 제작 과외</div>
      <div class="title">강의 교재 &amp; 스크립트</div>
    </div>
    <nav>
      <div class="nav-group">
        <div class="nav-unit">📚 교재</div>
        <RouterLink class="nav-link" to="/lesson/01" @click="close">01 영상 기획</RouterLink>
        <RouterLink class="nav-link" to="/lesson/02" @click="close">02 미드저니</RouterLink>
        <RouterLink class="nav-link" to="/lesson/03" @click="close">03 파이어플라이</RouterLink>
        <RouterLink class="nav-link" to="/lesson/04" @click="close">04 캡컷</RouterLink>
      </div>
      <div class="nav-group">
        <div class="nav-unit">🎬 강의 스크립트</div>
        <RouterLink class="nav-link" to="/lesson/05" @click="close">05 Firefly 동일인물</RouterLink>
        <RouterLink class="nav-link sub" to="/lesson/05/prompts" @click="close">└ 프롬프트 모음</RouterLink>
        <RouterLink class="nav-link" to="/lesson/06" @click="close">06 미드저니 --cref</RouterLink>
      </div>
      <div class="nav-group" style="margin-top:24px; padding: 0 24px;">
        <a href="https://github.com/hon2be/ai-video-course"
           target="_blank"
           style="font-size:12px; color:#4B6584; text-decoration:none;">
          ↗ GitHub
        </a>
      </div>
    </nav>
  </aside>
</template>

<script setup>
defineProps({ isOpen: Boolean })
const emit = defineEmits(['close'])
const close = () => emit('close')
</script>
