import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/lesson/01',
    name: 'lesson01',
    component: () => import('@/views/Lesson01View.vue'),
    meta: { title: '영상 기획과 스토리보드', num: '01', adminOnly: false }
  },
  {
    path: '/lesson/02',
    name: 'lesson02',
    component: () => import('@/views/Lesson02View.vue'),
    meta: { title: '미드저니 완전 정복', num: '02', adminOnly: false }
  },
  {
    path: '/lesson/03',
    name: 'lesson03',
    component: () => import('@/views/Lesson03View.vue'),
    meta: { title: 'Adobe Firefly 비디오 생성', num: '03', adminOnly: false }
  },
  {
    path: '/lesson/04',
    name: 'lesson04',
    component: () => import('@/views/Lesson04View.vue'),
    meta: { title: 'CapCut AI 영상 편집', num: '04', adminOnly: false }
  },
  {
    path: '/lesson/05',
    name: 'lesson05',
    component: () => import('@/views/Lesson05View.vue'),
    meta: { title: 'Firefly 동일인물 만들기', num: '05', adminOnly: true }
  },
  {
    path: '/lesson/05/prompts',
    name: 'lesson05-prompts',
    component: () => import('@/views/Lesson05PromptsView.vue'),
    meta: { title: '인물 데이터셋 프롬프트 모음', num: '05+', adminOnly: true }
  },
  {
    path: '/lesson/06',
    name: 'lesson06',
    component: () => import('@/views/Lesson06View.vue'),
    meta: { title: '미드저니 동일인물 --cref', num: '06', adminOnly: true }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})

router.afterEach((to) => {
  document.title = to.meta?.title
    ? `${to.meta.title} — AI 영상 제작 과외`
    : 'AI 영상 제작 과외'
})

export default router
