<template>
<div class="lesson-body textbook">

  <section class="cover" id="cover">
    <div class="cover-eyebrow">AI독학꿀벌 (구 허니비TV) · @hon2bee_kr</div>
    <div class="cover-title">Ep.13 부록</div>
    <div class="cover-sub">여행 쇼츠 · AI 인물 프롬프트 (Google Flow · Firefly Reference Image용)</div>
    <div class="cover-meta">
      <span class="cover-tag">인물 앵커</span>
      <span class="cover-tag">카메라 각도</span>
      <span class="cover-tag">표정 · 포즈</span>
      <span class="cover-tag">의상 · 상황</span>
    </div>
  </section>

  <section class="lesson-section">
    <div class="callout goal">
      <div class="callout-header"><span>📌</span> 사용 안내</div>
      <p>이 페이지는 <strong>AI독학꿀벌 (구 허니비TV) #13 · 여행 쇼츠 3부작</strong>에서 사용한 <em>가상 인물 생성 프롬프트</em>를 그대로 복붙해서 쓰실 수 있게 정리한 부록입니다.</p>
      <ul>
        <li data-icon="✓"><strong>1편(기획)</strong> — 인물 앵커·카메라 각도·표정 시트를 먼저 확보</li>
        <li data-icon="✓"><strong>2편(Flow 생성)</strong> — 확보한 Reference Image를 Google Flow에 넣어 씬 클립 생성</li>
        <li data-icon="✓"><strong>3편(Mureka + 병합)</strong> — 각 씬 클립을 이어붙이고 BGM 얹기</li>
        <li data-icon="✓">각 코드 블럭을 통째로 선택해서 복사, 본인 인물 특징에 맞게 <code>[대괄호]</code> 부분만 수정</li>
      </ul>
    </div>
  </section>

  <div v-html="html" />
</div>
</template>

<script setup>
import { personaPromptsHtml as html } from '@/content/personaPromptsHtml'
</script>
