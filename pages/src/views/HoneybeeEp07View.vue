<template>
<div class="lesson-body textbook">

  <section class="cover" id="cover">
    <div class="cover-eyebrow">AI독학꿀벌 (구 허니비TV) · @hon2bee_kr</div>
    <div class="cover-title">Ep.07 부록</div>
    <div class="cover-sub">클로드 데스크탑으로 네이버 블로그 한 편 · 30분 완결 프롬프트 자료</div>
    <div class="cover-meta">
      <span class="cover-tag">클로드 설치</span>
      <span class="cover-tag">초안 프롬프트</span>
      <span class="cover-tag">다듬기 프롬프트</span>
      <span class="cover-tag">이미지 아이디어</span>
      <span class="cover-tag">네이버 게시</span>
    </div>
  </section>

  <section class="lesson-section">
    <div class="callout goal">
      <div class="callout-header"><span>📌</span> 사용 안내</div>
      <p>이 페이지는 <strong>AI독학꿀벌 (구 허니비TV) #7 영상</strong>에서 사용한 프롬프트를 그대로 복붙해 쓰실 수 있게 정리한 부록입니다.</p>
      <ul>
        <li data-icon="✓">각 코드 블럭 통째로 복사</li>
        <li data-icon="✓">본인 상황에 맞게 <code>[대괄호]</code> 안 부분만 수정</li>
        <li data-icon="✓">필요한 유료 툴: <strong>클로드 데스크탑</strong>만 (무료 계정으로도 가능)</li>
        <li data-icon="✓">실제 발행 예시: <a href="https://blog.naver.com/hon2ebe/224339161802" target="_blank" rel="noopener">blog.naver.com/hon2ebe/224339161802</a></li>
      </ul>
    </div>
  </section>

  <!-- ================ 단원 1 · 설치 ================ -->
  <div class="unit-header" id="install">
    <div class="unit-number">단원 1</div>
    <div class="unit-title">클로드 데스크탑 설치</div>
  </div>

  <section class="lesson-section">
    <h3>1) 다운로드</h3>
    <p>
      브라우저 주소창에 <code>claude.ai/download</code> 입력 → 자동으로
      Mac/Windows에 맞는 버튼을 안내해줍니다.
    </p>

    <h3>2) 설치</h3>
    <ul class="content-list">
      <li><strong>Mac</strong>: dmg 파일 열어 앱을 응용 프로그램 폴더로 드래그</li>
      <li><strong>Windows</strong>: 설치 파일 실행 · 다음 다음</li>
    </ul>

    <h3>3) 로그인</h3>
    <p>구글 로그인이 가장 편해요. 평소 쓰시는 구글 계정 선택 → 자동 진입.</p>

    <div class="callout tip">
      <div class="callout-header"><span>💡</span> 요금제</div>
      <p>
        오늘 하려는 작업은 <strong>무료 계정으로도 다 됩니다</strong>. 유료(Pro) 요금제는 사용량이 늘어나고 최신 모델을 자유롭게 쓸 수 있어요. 요금제 자세한 이야기는 다음 편(Ep08)에서 자동차 비유로 풀어드릴 예정입니다.
      </p>
    </div>
  </section>

  <!-- ================ 단원 2 · 블로그 초안 프롬프트 ================ -->
  <div class="unit-header" id="draft">
    <div class="unit-number">단원 2</div>
    <div class="unit-title">클로드에게 블로그 초안 요청 (핵심 프롬프트)</div>
  </div>

  <section class="lesson-section">
    <h3>초안 요청 프롬프트</h3>
    <p>
      새 채팅을 열고 · 아래 프롬프트를 그대로 붙여넣으세요.
      <code>[주제]</code>와 <code>[상세 조건]</code> 두 곳만 본인 상황에 맞게 바꿔주시면 됩니다.
    </p>
<pre><code>[주제]에 대한 블로그 초안을 써줘.

[톤]
· 진짜 사람이 쓴 것처럼 자연스럽게 · 문장 짧게 · 존댓말
· 이모지는 소제목마다 하나 정도만 · 너무 많으면 AI 티 나니까

[구조]
· 도입 3~4줄 → 소제목 5개 → 마무리
· 큰 주제 바뀌는 구간마다 구분선 --- 로 시각 정리
· 각 소제목: 재료 목록 · 만드는 법 번호 · 감성 팁 한 줄

[심미성]
· 문단마다 여백 · 리듬감 있게
· 한 문장은 짧게 · 두세 줄이 넘어가지 않게
· 마무리에 구독·이웃추가 자연스러운 한 줄</code></pre>

    <div class="callout tip">
      <div class="callout-header"><span>💡</span> 왜 심미성까지 프롬프트에 넣나요</div>
      <p>
        문단 여백 · 리듬감 · 짧은 문장 · 이런 걸 미리 요청해두면 · 붙여넣기만 해도 블로그가 정돈되게 보여요. 서식을 나중에 손보는 시간이 확 줄어듭니다.
      </p>
    </div>
  </section>

  <!-- ================ 단원 3 · 다듬기 프롬프트 ================ -->
  <div class="unit-header" id="polish">
    <div class="unit-number">단원 3</div>
    <div class="unit-title">초안 다듬기 · 대화형 수정 프롬프트</div>
  </div>

  <section class="lesson-section">
    <p>초안이 마음에 100% 안 드셔도 괜찮아요. 짧게 부탁하면 다시 써줍니다.</p>

    <h3>1) 톤이 어색할 때</h3>
<pre><code>너무 AI 티 나. 진짜 사람이 쓴 것처럼 · 자연스럽게 다시 써줘.
문장은 짧게 · 리듬감 있게.</code></pre>

    <h3>2) 부분 수정</h3>
<pre><code>마지막 문단이 좀 길어. 두 줄로 줄여줘.
소제목마다 이모지 하나씩만 붙여줘 · 너무 많으면 AI 티 나니까.
마무리에 구독·이웃추가 유도 문구 자연스럽게 넣어줘.</code></pre>

    <h3>3) 이미지 아이디어 요청</h3>
<pre><code>각 소제목마다 어울리는 사진 아이디어를 세 개씩 추천해줘.
- 촬영 각도
- 조명 · 시간대
- 소품 (컵 · 스푼 · 창가 등)</code></pre>

    <div class="callout checklist">
      <div class="callout-header"><span>✅</span> 다듬기 팁</div>
      <ul>
        <li data-icon="→"><strong>한 번에 완벽 요청하지 마세요.</strong> 짧게 나눠 요청하는 게 훨씬 편해요.</li>
        <li data-icon="→">2~3번 다듬으면 대부분 만족스러운 원고 나옵니다.</li>
        <li data-icon="→">최종본은 응답 우측 상단 <strong>복사 아이콘</strong>으로 통째로 복사.</li>
      </ul>
    </div>
  </section>

  <!-- ================ 단원 4 · 네이버 블로그 게시 ================ -->
  <div class="unit-header" id="publish">
    <div class="unit-number">단원 4</div>
    <div class="unit-title">네이버 블로그에 붙여넣고 발행</div>
  </div>

  <section class="lesson-section">
    <h3>순서</h3>
    <ol class="step-list">
      <li>네이버 로그인 → 우측 상단 <strong>블로그</strong> → <strong>글쓰기</strong></li>
      <li>제목 칸에 클로드가 뽑아준 제목 붙여넣기</li>
      <li>본문 영역에 나머지 통째로 붙여넣기</li>
      <li>소제목: 문장 드래그 → 상단 스타일 메뉴에서 소제목 지정</li>
      <li>이미지: 상단 사진 아이콘 → 삽입 (촬영본 · 무료 사진 · AI 이미지)</li>
      <li>우측 상단 <strong>발행</strong> → 카테고리 · 태그 · 전체 공개 설정</li>
    </ol>

    <div class="callout tip">
      <div class="callout-header"><span>⚠️</span> AI 이미지 사용 시 · 반드시 표기</div>
      <ul>
        <li data-icon="✓">AI로 만든 이미지를 넣으실 땐 · 캡션에 <strong>"AI로 만든 이미지"</strong> 라고 꼭 표기</li>
        <li data-icon="✓">요즘 실사같이 나와서 · 안 밝히면 오해가 생길 수 있어요</li>
        <li data-icon="✓">플랫폼 정책도 그렇게 바뀌는 중입니다</li>
      </ul>
    </div>
  </section>

  <!-- ================ 단원 5 · 예시 결과물 ================ -->
  <div class="unit-header" id="result">
    <div class="unit-number">단원 5</div>
    <div class="unit-title">실제로 만든 예시 · 참고용</div>
  </div>

  <section class="lesson-section">
    <p>영상에서 만든 실제 블로그 글이에요. 결과물이 어떻게 나오는지 미리 보시면 감 잡기 편해요.</p>

    <p>
      <a href="https://blog.naver.com/hon2ebe/224339161802" target="_blank" rel="noopener" class="download-btn">
        📝 예시 블로그 열어보기 (블로그 이동)
      </a>
    </p>

    <div class="callout tip">
      <div class="callout-header"><span>💡</span> 다른 주제로 응용</div>
      <p>
        위 프롬프트에서 <code>[주제]</code> 부분만 바꾸시면 어떤 블로그든 됩니다. 예: 주말 나들이 추천 · 직장인 도시락 아이디어 · 오늘의 홈트 루틴 · 카페 리뷰 등.
      </p>
    </div>
  </section>

  <section class="lesson-section footer-cta">
    <p>도움이 되셨다면 <strong>구독 · 좋아요</strong> 부탁드립니다.</p>
    <p>유튜브: <a href="https://youtube.com/@hon2bee_kr" target="_blank" rel="noopener">@hon2bee_kr</a></p>
  </section>

</div>
</template>

<script setup>
</script>

<style scoped>
.textbook :deep(pre) {
  background: #1E293B;
  color: #E2E8F0;
  padding: 20px 24px;
  border-radius: 8px;
  overflow-x: auto;
  line-height: 1.6;
  font-size: 13.5px;
  font-family: "SF Mono", Monaco, Consolas, monospace;
  white-space: pre-wrap;
  word-break: break-word;
  margin: 12px 0 20px;
  border-left: 4px solid #F97316;
}
.textbook :deep(pre code) {
  background: transparent;
  color: inherit;
  padding: 0;
  font-size: inherit;
}
.textbook :deep(code) {
  background: #FFF7ED;
  color: #C2410C;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: "SF Mono", Monaco, Consolas, monospace;
  font-size: 0.92em;
  font-weight: 500;
}
.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  background: #F97316;
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 14.5px;
  transition: background .15s;
}
.download-btn:hover {
  background: #EA580C;
}
.footer-cta {
  text-align: center;
  padding: 36px 48px 60px;
  color: var(--ink-mid);
}
.footer-cta p { margin: 4px 0; }
</style>
