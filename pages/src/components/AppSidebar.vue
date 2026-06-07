<template>
  <aside class="sidebar" :class="{ open: isOpen }">
    <div class="sidebar-brand">
      <div class="label">AI 영상 제작 과외</div>
      <div class="title">강의 교재 &amp; 스크립트</div>
    </div>

    <nav>
      <!-- 공개 교재 -->
      <div class="nav-group">
        <div class="nav-unit">📚 교재</div>
        <RouterLink class="nav-link" to="/lesson/01" @click="close">01 영상 기획</RouterLink>
        <RouterLink class="nav-link" to="/lesson/02" @click="close">02 미드저니</RouterLink>
        <RouterLink class="nav-link" to="/lesson/03" @click="close">03 파이어플라이</RouterLink>
        <RouterLink class="nav-link" to="/lesson/04" @click="close">04 캡컷</RouterLink>
      </div>

      <!-- 관리자 전용 스크립트 -->
      <div v-if="isAdmin" class="nav-group">
        <div class="nav-unit">🎬 강의 스크립트</div>
        <RouterLink class="nav-link" to="/lesson/05" @click="close">05 Firefly 동일인물</RouterLink>
        <RouterLink class="nav-link sub" to="/lesson/05/prompts" @click="close">└ 프롬프트 모음</RouterLink>
        <RouterLink class="nav-link" to="/lesson/06" @click="close">06 미드저니 --cref</RouterLink>
      </div>

      <!-- 하단 -->
      <div class="sidebar-bottom">
        <!-- 로그인 상태 -->
        <div v-if="user" class="user-info">
          <img :src="user.picture" :alt="user.name" class="user-avatar">
          <div class="user-meta">
            <div class="user-name">{{ user.name }}</div>
            <button class="logout-btn" @click="logout">로그아웃</button>
          </div>
        </div>
        <!-- 비로그인 -->
        <button v-else class="google-btn" @click="loginWithGoogle" :disabled="!clientIdReady">
          <svg width="16" height="16" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          {{ clientIdReady ? 'Google로 로그인' : '설정 필요' }}
        </button>
        <!-- Client ID 미설정 안내 -->
        <div v-if="!clientIdReady" style="font-size:10px;color:#EF4444;margin-top:4px;">
          VITE_GOOGLE_CLIENT_ID 미설정
        </div>

        <a href="https://github.com/hon2be/ai-video-course"
           target="_blank" class="github-link">↗ GitHub</a>
      </div>
    </nav>
  </aside>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuth } from '@/composables/useAuth'

defineProps({ isOpen: Boolean })
const emit = defineEmits(['close'])
const close = () => emit('close')

const { user, isAdmin, initGoogle, loginWithGoogle, logout } = useAuth()

const clientIdReady = ref(!!import.meta.env.VITE_GOOGLE_CLIENT_ID)

onMounted(() => {
  if (!clientIdReady.value) {
    console.warn('[Auth] VITE_GOOGLE_CLIENT_ID 환경변수가 설정되지 않았습니다.')
    return
  }
  const tryInit = () => {
    if (window.google) {
      initGoogle()
    } else {
      setTimeout(tryInit, 300)
    }
  }
  tryInit()
})
</script>

<style scoped>
.sidebar-bottom {
  margin-top: 24px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}
.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  flex-shrink: 0;
}
.user-meta { flex: 1; min-width: 0; }
.user-name {
  font-size: 12px;
  color: #E2E8F0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.logout-btn {
  background: none;
  border: none;
  color: #64748B;
  font-size: 11px;
  cursor: pointer;
  padding: 0;
}
.logout-btn:hover { color: #EF4444; }
.google-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 13px;
  font-weight: 500;
  color: #374151;
  cursor: pointer;
  width: 100%;
  transition: box-shadow .15s;
}
.google-btn:hover { box-shadow: 0 2px 8px rgba(0,0,0,.2); }
.github-link {
  font-size: 12px;
  color: #4B6584;
  text-decoration: none;
}
</style>
