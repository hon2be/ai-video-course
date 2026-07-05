<template>
<div class="lesson-body textbook">

  <section class="cover" id="cover">
    <div class="cover-eyebrow">허니비TV · @hon2bee_kr</div>
    <div class="cover-title">Ep.06 부록</div>
    <div class="cover-sub">챗지피티 하나로 만드는 AI 그림책 — 프롬프트 &amp; 워크플로 자료</div>
    <div class="cover-meta">
      <span class="cover-tag">화풍 참고</span>
      <span class="cover-tag">캐릭터 프로필</span>
      <span class="cover-tag">14장면 스토리</span>
      <span class="cover-tag">이미지 생성</span>
      <span class="cover-tag">PDF 조립</span>
    </div>
  </section>

  <section class="lesson-section">
    <div class="callout goal">
      <div class="callout-header"><span>📌</span> 사용 안내</div>
      <p>이 페이지는 <strong>허니비TV #6 영상</strong>에서 사용한 프롬프트와 워크플로를 그대로 복붙해 쓰실 수 있게 정리한 부록입니다.</p>
      <ul>
        <li data-icon="✓">각 코드 블럭을 통째로 선택해서 복사</li>
        <li data-icon="✓">아이 이름·특징에 맞게 <code>[대괄호]</code> 안 부분만 수정</li>
        <li data-icon="✓">순서: 화풍 → 프로필 → 14장면 스토리 → 이미지 → PDF 조립 → 인쇄</li>
        <li data-icon="✓">필요한 유료 툴은 챗지피티 Plus <strong>하나</strong>. 다른 이미지 생성 툴 필요 없음</li>
      </ul>
    </div>
  </section>

  <!-- ================ 단원 1 · 화풍 잡기 ================ -->
  <div class="unit-header" id="style">
    <div class="unit-number">단원 1</div>
    <div class="unit-title">화풍 잡기 — 구글 이미지 검색</div>
  </div>

  <section class="lesson-section">
    <h3>1) 무료로 화풍 참고 이미지 확보</h3>
    <p>
      구글 이미지 검색으로 그림책 화풍 참고 이미지 한 장을 저장합니다.
      미드저니 같은 유료 툴 없이 <strong>무료</strong>로 가능한 단계.
    </p>

    <h3>2) 검색어 예시</h3>
<pre><code>한국 전래동화 수채화 그림책
korean folktale watercolor illustration
soft watercolor children book korean folktale</code></pre>

    <p>결과 화면에서 마음에 든 그림 하나 골라 <strong>우클릭 → 이미지 저장</strong>.
      이 저장한 그림이 다음 단계에서 챗지피티에게 <em>"이 화풍으로 그려줘"</em>라고 보여줄 참고 이미지가 됩니다.
    </p>

    <div class="callout tip">
      <div class="callout-header"><span>💡</span> 팁</div>
      <ul>
        <li data-icon="→">따뜻하고 부드러운 톤 위주로 · 아이가 볼 그림책이니까</li>
        <li data-icon="→">인물이 들어간 것보다 <strong>화풍 자체가 명확한 것</strong>을 선택 (14장 내내 같은 톤으로 뽑기 위함)</li>
        <li data-icon="→">저작권 걱정되면 CC0 이미지 사이트(Unsplash, Pixabay) 활용도 OK</li>
      </ul>
    </div>
  </section>

  <!-- ================ 단원 2 · 스토리 만들기 ================ -->
  <div class="unit-header" id="story">
    <div class="unit-number">단원 2</div>
    <div class="unit-title">스토리 만들기 — 프로필 + 14장면</div>
  </div>

  <section class="lesson-section">
    <h3>1) 우리 아이 프로필 정리</h3>
    <p>챗지피티가 이야기를 짜려면 주인공이 누군지 알아야 합니다. 아래 다섯 가지를 종이에 미리 적어두세요.</p>
    <ul class="content-list">
      <li><strong>이름</strong> — 실명 or 별명</li>
      <li><strong>나이</strong> — 몇 살</li>
      <li><strong>성별</strong> — 남아 · 여아</li>
      <li><strong>성격</strong> — 한두 마디 (예: 씩씩함, 상냥함)</li>
      <li><strong>좋아하는 것</strong> — 한두 개 (예: 별 보기, 그림 그리기)</li>
    </ul>

    <h3>2) 챗지피티에 던지는 프롬프트 (14장면 스토리)</h3>
<pre><code>다음은 우리 아이 프로필이야.

[이름]: 지우 / [나이]: 6세 / [성별]: 남아
[성격]: 씩씩하고 겁 없음, 여동생을 잘 챙김
[좋아하는 것]: 나무 오르기, 별 보기

[이름]: 지현 / [나이]: 6세 / [성별]: 여아
[성격]: 상냥하고 노래를 좋아함, 오빠를 따라다님
[좋아하는 것]: 그림 그리기, 인형 놀이, 달 보기

위 프로필을 참고해서, 전래동화 [햇님 달님]을 이 아이 버전으로 14장면으로 나눠줘.

각 장면마다 반드시 세 줄로 정리:
1) 그림 묘사 — 이 장면의 시각 요소·배경·인물 포즈
2) 대사 — 등장인물이 하는 한 문장
3) 상황 — 이야기 흐름을 요약한 한 줄

주의:
- 아이가 무섭게 느낄 장면은 순화 (예: 호랑이가 어머니를 잡아먹는 → 안개 속으로 사라진다)
- 마지막 장면(14)은 반드시 남매가 해와 달이 되는 장면으로 마무리</code></pre>

    <div class="callout tip">
      <div class="callout-header"><span>💡</span> 왜 세 줄로?</div>
      <p>3) 상황이 있어야 이야기 흐름을 사람이 이해하고, 1) 그림 묘사가 있어야 다음 단계(이미지 생성)에서 그대로 복붙해 쓸 수 있어요. 2) 대사는 PDF 조립할 때 큰 글자로 들어갑니다.</p>
    </div>

    <h3>3) 원작 대체 (햇님 달님 말고 다른 전래동화)</h3>
    <p>위 프롬프트에서 <code>[햇님 달님]</code> 부분만 다른 전래동화 제목으로 바꾸면 됩니다.</p>
    <ul class="content-list">
      <li><strong>남매·오누이</strong>가 있으면 — 햇님 달님</li>
      <li><strong>여아 혼자</strong>면 — 콩쥐팥쥐</li>
      <li><strong>남아 혼자</strong>면 — 흥부와 놀부, 도깨비 방망이</li>
      <li><strong>남아 둘</strong>이면 — 흥부놀부 형제 버전</li>
      <li><strong>여아 둘</strong>이면 — 자매 버전으로 변주 요청</li>
    </ul>
  </section>

  <!-- ================ 단원 3 · 이미지 생성 ================ -->
  <div class="unit-header" id="illust">
    <div class="unit-number">단원 3</div>
    <div class="unit-title">14장면 이미지 생성 — 챗지피티 하나로</div>
  </div>

  <section class="lesson-section">
    <h3>필요한 첨부물 3가지</h3>
    <ul class="content-list">
      <li>단원 1에서 저장한 <strong>화풍 참고 이미지</strong> 1장</li>
      <li><strong>주인공 얼굴 사진</strong> — 남아 사진 1장</li>
      <li><strong>주인공 얼굴 사진</strong> — 여아 사진 1장 (혼자면 1장만)</li>
    </ul>

    <div class="callout tip">
      <div class="callout-header"><span>⚠️</span> 왜 미드저니 안 쓰나?</div>
      <p>
        한복·초가집·수숫대 같은 <strong>한국 전통 요소는 챗지피티가 훨씬 정확</strong>합니다.
        왕초보에게 유료 툴 진입장벽을 줄이는 목적도 있어요. 챗지피티 하나로 완결됩니다.
      </p>
    </div>

    <h3>1) 새 대화 → 초기 컨텍스트 등록</h3>
    <p>새 대화창을 열어 세 이미지를 첨부하고 아래 프롬프트를 던집니다.</p>
<pre><code>첨부한 세 이미지를 이해해줘.

- 첫 번째: 화풍 참고 이미지 · 앞으로 그릴 14장면 전부 이 화풍(수채화 톤·색감·붓터치) 유지
- 두 번째: 오빠 얼굴 · 14장면 내내 동일 인물
- 세 번째: 여동생 얼굴 · 14장면 내내 동일 인물

이해했으면 "준비 완료"라고만 답해줘.
그 다음부터 내가 장면별로 그림 묘사를 하나씩 던질 거야.</code></pre>

    <h3>2) 장면별 그림 요청 (14번 반복)</h3>
    <p>단원 2에서 뽑은 14장면 스토리를 한 장씩 순서대로 붙여넣습니다. 예시:</p>
<pre><code>[1장면] 그림 묘사:
어머니가 인절미 광주리를 머리에 이고 초가집 앞을 나서는 아침 장면.
오누이(지우·지현)가 문 앞에서 손을 흔들며 배웅.
어머니는 걱정 어린 표정으로 뒤돌아 "함부로 문 열지 마"라고 말하는 모습.
배경: 초가집·낮은 돌담·안개 낀 산길.

정사각형 1:1 비율 · 첨부한 화풍 그대로 유지 · 두 아이 얼굴은 첨부한 사진의 특징 유지.</code></pre>

    <p>챗지피티가 한 장 그려주면, 다음 장면 프롬프트를 다시 던집니다. 총 14회 반복.</p>

    <div class="callout tip">
      <div class="callout-header"><span>⚠️</span> 시행착오 대응</div>
      <ul>
        <li data-icon="→"><strong>얼굴이 달라 보인다</strong> → "얼굴은 첨부한 사진의 특징 그대로" 강조해서 재요청</li>
        <li data-icon="→"><strong>한복 디테일 이상</strong> → 해당 장면만 "한복 저고리 옷깃과 고름 자연스럽게" 추가해서 재요청</li>
        <li data-icon="→"><strong>화풍이 달라진다</strong> → "첨부한 첫 번째 이미지의 화풍(수채화 붓터치·색감) 유지" 강조</li>
        <li data-icon="→">한 장 <strong>30초~3분</strong>. 전체 <strong>30분~1시간</strong> 예상</li>
      </ul>
    </div>
  </section>

  <!-- ================ 단원 4 · PDF 조립 ================ -->
  <div class="unit-header" id="pdf">
    <div class="unit-number">단원 4</div>
    <div class="unit-title">PDF 그림책 조립 — Code Interpreter</div>
  </div>

  <section class="lesson-section">
    <p>
      <strong>새 대화</strong>를 열고 완성된 14장 이미지를 순서대로 첨부한 뒤,
      단원 2에서 뽑은 14장면 스토리 텍스트를 그대로 붙여넣습니다.
      그 아래에 다음 프롬프트를 이어붙이세요.
    </p>

<pre><code>반드시 Code Interpreter(Python 실행)만 사용해서 PDF 그림책을 조립해줘.

## 처리 방식 (반드시 준수)
- reportlab의 canvas.Canvas 직접 사용 (Platypus/SimpleDocTemplate 금지)
- Pillow(PIL)로 이미지 로드, ImageReader로 삽입 (재생성·리사이즈·보간 금지)
- Noto Sans KR TTF 폰트 임베딩 (pdfmetrics.registerFont)

## 페이지 레이아웃 (A4 가로 · 297×210mm)
- 표지 1쪽 (제목 + 대표 이미지 하나)
- 본문 14쪽 (좌: 정사각형 이미지, 우: 텍스트)
- 우측 텍스트 = 대사(큰 글자, 세로 중앙 정렬, 가로 좌측 정렬)
  + 상황(작은 글자, 하단)
- 모든 페이지 텍스트 폰트 크기 통일 (가장 긴 페이지 기준으로 축소)

## 이미지 화질
- 원본 파일 그대로 사용 · ImageOps.fit 등 재샘플링 금지
- crop만 허용 (필요시)

## 출력
- 파일명: 우리아이_전래동화_그림책.pdf
- 다운로드 링크 제공</code></pre>

    <div class="callout tip">
      <div class="callout-header"><span>⚠️</span> 자주 나는 오류</div>
      <ul>
        <li data-icon="→"><strong>Platypus LayoutError</strong> → "canvas.Canvas 직접 사용" 강조해서 재요청</li>
        <li data-icon="→"><strong>한글 깨짐 · 네모 박스</strong> → Noto Sans KR TTF 파일을 <em>업로드</em>해서 첨부 (챗지피티는 인터넷 다운로드 불가)</li>
        <li data-icon="→"><strong>이미지 화질 저하</strong> → "원본 픽셀 그대로, ImageOps.fit 금지" 강조</li>
        <li data-icon="→">한 번에 안 되면 <strong>5쪽씩 나눠서</strong> 요청하고 마지막에 PyPDF2로 병합</li>
      </ul>
    </div>
  </section>

  <!-- ================ 단원 5 · 인쇄 ================ -->
  <div class="unit-header" id="print">
    <div class="unit-number">단원 5</div>
    <div class="unit-title">실물 책으로 뽑기 (선택)</div>
  </div>

  <section class="lesson-section">
    <p>PDF만 있어도 태블릿·클리어파일로 충분하지만, 실물 책으로 갖고 싶으시면 <strong>소량 인쇄 업체</strong>에 PDF를 업로드하면 됩니다.</p>

    <ol class="step-list">
      <li>소량 인쇄 업체 웹사이트 접속 (검색어: "소량 인쇄", "1권 인쇄")</li>
      <li>A4 가로 · 컬러 · 무광/유광 표지 옵션 선택</li>
      <li>PDF 업로드</li>
      <li>주소 입력 → 결제 → 배송</li>
    </ol>

    <div class="callout tip">
      <div class="callout-header"><span>💡</span> 예상 비용·기간</div>
      <p>한 권 기준 <strong>1만원 대</strong>, 3~7일 배송이 일반적. 손주 생일·크리스마스 선물로 딱.</p>
    </div>
  </section>

  <!-- ================ 저작권/주의사항 ================ -->
  <div class="unit-header" id="rights">
    <div class="unit-number">주의</div>
    <div class="unit-title">저작권 · 초상권</div>
  </div>

  <section class="lesson-section">
    <div class="callout tip">
      <div class="callout-header"><span>⚠️</span> 반드시 확인</div>
      <ul>
        <li data-icon="✓">아이 사진을 참조로 쓸 땐 <strong>부모 동의 필수</strong>. 조부모여도 부모한테 한 마디</li>
        <li data-icon="✓">이렇게 만든 그림책의 <strong>상업 판매</strong>는 각 툴 약관 반드시 확인</li>
        <li data-icon="✓">원작 전래동화 뼈대는 저작권 없지만, <strong>특정 출판사 그림책의 그림체를 그대로 베끼진 마세요</strong></li>
        <li data-icon="✓">화풍 참고 이미지는 CC0/무료 배포 이미지 우선</li>
      </ul>
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
.footer-cta {
  text-align: center;
  padding: 36px 48px 60px;
  color: var(--ink-mid);
}
.footer-cta p { margin: 4px 0; }
</style>
