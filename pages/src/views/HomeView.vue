<template>
  <div class="lesson-body" style="padding-top:80px;">
    <h1 style="font-family:var(--serif);font-size:32px;color:var(--ink);margin-bottom:12px;">
      AI 영상 제작 과외
    </h1>
    <p style="color:var(--ink-mid);font-size:16px;margin-bottom:48px;">
      강의 교재와 스크립트를 한 곳에서 확인하세요.
    </p>

    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:20px;">
      <RouterLink
        v-for="lesson in visibleLessons"
        :key="lesson.to"
        :to="lesson.to"
        style="text-decoration:none;"
      >
        <div class="lesson-card">
          <div class="card-num">{{ lesson.num }}</div>
          <div class="card-title">{{ lesson.title }}</div>
          <div class="card-desc">{{ lesson.desc }}</div>
          <div class="card-tag" :style="{ background: lesson.color + '1a', color: lesson.color }">
            {{ lesson.tag }}
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAuth } from '@/composables/useAuth'

const { isAdmin } = useAuth()

const lessons = [
  { to:'/lesson/01', num:'01', title:'영상 기획과 스토리보드', desc:'AI 영상 제작의 기획 단계와 스토리보드 작성법', tag:'교재', color:'#C2410C', adminOnly: false },
  { to:'/lesson/02', num:'02', title:'미드저니 완전 정복', desc:'텍스트로 이미지 생성하는 미드저니 활용법', tag:'교재', color:'#C2410C', adminOnly: false },
  { to:'/lesson/03', num:'03', title:'Adobe Firefly', desc:'파이어플라이로 비디오 생성하기', tag:'교재', color:'#C2410C', adminOnly: false },
  { to:'/lesson/04', num:'04', title:'CapCut AI 영상 편집', desc:'캡컷으로 AI 영상 완성하기', tag:'교재', color:'#C2410C', adminOnly: false },
  { to:'/lesson/05', num:'05', title:'Firefly 동일인물 만들기', desc:'GPT → Firefly 데이터셋 → Reference Image 완전 가이드', tag:'강의 스크립트', color:'#4a1fb8', adminOnly: true },
  { to:'/lesson/05/prompts', num:'05+', title:'인물 데이터셋 프롬프트 모음', desc:'카메라각도·표정·포즈·의상 전체 프롬프트', tag:'참고자료', color:'#0891b2', adminOnly: true },
  { to:'/lesson/06', num:'06', title:'미드저니 동일인물 --cref', desc:'--cref & --cw 파라미터로 일관성 있는 캐릭터 생성', tag:'강의 스크립트', color:'#4a1fb8', adminOnly: true },
  { to:'/tv/ep05', num:'TV5', title:'AI독학꿀벌 (구 허니비TV) #5 — AI 이모티콘 부록', desc:'GPT + 미드저니로 내 캐릭터 카톡 이모티콘 12장 만들기 · 프롬프트 전체 공개', tag:'유튜브 부록', color:'#E63983', adminOnly: false },
  { to:'/tv/ep06', num:'TV6', title:'AI독학꿀벌 (구 허니비TV) #6 — AI 그림책 부록', desc:'챗지피티 하나로 우리 아이가 햇님 달님 주인공인 그림책 만들기 · 프롬프트 전체 공개', tag:'유튜브 부록', color:'#E63983', adminOnly: false },
  { to:'/tv/ep07', num:'TV7', title:'AI독학꿀벌 (구 허니비TV) #7 — 클로드로 블로그 부록', desc:'클로드 데스크탑 하나로 네이버 블로그 30분 완결 · 초안·다듬기·이미지 프롬프트 전체 공개', tag:'유튜브 부록', color:'#E63983', adminOnly: false },
  { to:'/tv/ep12', num:'TV12', title:'AI독학꿀벌 (구 허니비TV) #12 — 챗지피티로 사업계획서·PPT', desc:'한 줄 요청으로 사업계획서 · Presentations 플러그인으로 PPT 14장 · 쇼츠 포스터까지 · 프롬프트 전체 공개', tag:'유튜브 부록', color:'#E63983', adminOnly: false },
  { to:'/tv/ep13', num:'TV13', title:'AI독학꿀벌 (구 허니비TV) #13 — 여행 쇼츠 인물 프롬프트', desc:'Google Flow + Mureka 여행 쇼츠 3부작에서 쓴 가상 인물 데이터셋 프롬프트 전체 공개', tag:'유튜브 부록', color:'#E63983', adminOnly: false },
  { to:'/tv/ep14', num:'TV14', title:'AI독학꿀벌 #14 — 우리 가게 카드뉴스 5분에 5장', desc:'챗지피티로 카피 · 나노바나나로 이미지 · 편집 없이 인스타 카드뉴스 5장 완성 · 자영업자 실전 · 프롬프트 전체 공개', tag:'유튜브 부록', color:'#E63983', adminOnly: false },
]

const visibleLessons = computed(() =>
  lessons.filter(l => !l.adminOnly || isAdmin.value)
)
</script>

<style scoped>
.lesson-card {
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 24px;
  background: var(--surface);
  transition: box-shadow .2s, transform .2s;
  cursor: pointer;
}
.lesson-card:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,.08);
  transform: translateY(-2px);
}
.card-num { font-size: 12px; font-weight: 700; color: var(--ink-light); margin-bottom: 8px; }
.card-title { font-size: 17px; font-weight: 700; color: var(--ink); margin-bottom: 8px; line-height: 1.4; }
.card-desc { font-size: 13px; color: var(--ink-mid); margin-bottom: 16px; line-height: 1.6; }
.card-tag { display: inline-block; font-size: 11px; font-weight: 700; border-radius: 10px; padding: 2px 10px; }
</style>
