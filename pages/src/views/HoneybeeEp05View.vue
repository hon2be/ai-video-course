<template>
<div class="lesson-body textbook">

  <section class="cover" id="cover">
    <div class="cover-eyebrow">AI독학꿀벌 (구 허니비TV) · @hon2bee_kr</div>
    <div class="cover-title">Ep.05 부록</div>
    <div class="cover-sub">AI로 만드는 내 이모티콘 12장 — 프롬프트 &amp; 템플릿 자료</div>
    <div class="cover-meta">
      <span class="cover-tag">미드저니 프롬프트</span>
      <span class="cover-tag">GPT 시트 프롬프트</span>
      <span class="cover-tag">대사 확장</span>
      <span class="cover-tag">자동 자르기</span>
    </div>
  </section>

  <section class="lesson-section">
    <div class="callout goal">
      <div class="callout-header"><span>📌</span> 사용 안내</div>
      <p>이 페이지는 <strong>AI독학꿀벌 (구 허니비TV) #5 영상</strong>에서 사용한 프롬프트를 그대로 복붙해서 쓰실 수 있도록 정리한 부록입니다.</p>
      <ul>
        <li data-icon="✓">각 코드 블럭을 통째로 선택해서 복사</li>
        <li data-icon="✓">본인 캐릭터 특징에 맞게 <code>[대괄호]</code> 안 부분만 수정</li>
        <li data-icon="✓">순서: 미드저니 → GPT 시트 → 대사 확장 → 자동 자르기 → 카톡 등록</li>
      </ul>
    </div>
  </section>

  <!-- ================ 1단계 · 미드저니 ================ -->
  <div class="unit-header" id="mj">
    <div class="unit-number">단원 1</div>
    <div class="unit-title">미드저니 — 내 캐릭터 뽑기</div>
  </div>

  <section class="lesson-section">
    <h3>1) Explore에서 화풍 (--sref 코드) 확보</h3>
    <p>
      미드저니 <a href="https://www.midjourney.com/explore" target="_blank" rel="noopener">Explore</a> 페이지에서
      <em>sticker · emoticon · character</em> 같은 키워드로 검색 → 마음에 든 그림 클릭 → 상세 페이지 우측에서
      <code>--sref [8자리 숫자]</code> 코드 복사.
    </p>

    <h3>2) Create 페이지에서 캐릭터 생성 프롬프트</h3>
    <p><strong>Omni Reference</strong>에 본인 얼굴 사진을 지정한 뒤 아래 프롬프트를 그대로 붙여넣습니다.</p>
    <pre><code>young korean woman in her mid twenties, chin-length wavy bob haircut ending above shoulder, warm brown hair with side-swept bangs, wearing pastel cardigan, bright cheerful smile, cute fine 2d illustration style, clean line art, soft pastel colors, centered face portrait, white background --ow 300 --sref [Explore에서 복사한 코드] --ar 1:1</code></pre>

    <div class="callout tip">
      <div class="callout-header"><span>💡</span> 파라미터 요약</div>
      <ul>
        <li data-icon="→"><strong>Omni Reference</strong> — 얼굴 사진 지정 (UI 상단 우측 탭)</li>
        <li data-icon="→"><code>--sref [코드]</code> — 화풍 지문 (1단계에서 복사한 값)</li>
        <li data-icon="→"><code>--ow 300</code> — 얼굴 유사도 (100~1000, 높을수록 원본 사진과 닮음)</li>
        <li data-icon="→"><code>--ar 1:1</code> — 정사각형 결과 (이모티콘용)</li>
      </ul>
    </div>
  </section>

  <!-- ================ 2단계 · GPT 시트 ================ -->
  <div class="unit-header" id="sheet">
    <div class="unit-number">단원 2</div>
    <div class="unit-title">GPT — 12칸 시트 만들기</div>
  </div>

  <section class="lesson-section">
    <h3>필요한 두 이미지 첨부</h3>
    <ul class="content-list">
      <li>1단계에서 만든 <strong>내 캐릭터 이미지</strong> 1장</li>
      <li><strong>12칸 박스 템플릿</strong> (아래 다운로드)</li>
    </ul>

    <p>
      <a href="./templates/12sheet_template.png" download class="download-btn">
        📥 12칸 템플릿 다운로드 (PNG)
      </a>
    </p>

    <h3>시트 생성 프롬프트</h3>
    <p>
      <strong>중요</strong>: 아래 프롬프트는 <code>.txt</code> 파일로 저장한 뒤
      <strong>파일로 첨부</strong>하는 걸 권장합니다 (채팅창에 복붙 시 잘림·왜곡 위험).
    </p>
<pre><code>첨부한 두 이미지를 참고해줘.
- 첫 번째 이미지: 참조 캐릭터 (이 얼굴·화풍·헤어스타일 그대로 유지)
- 두 번째 이미지: 박스 템플릿 (3열 × 4행, 총 12칸, 각 셀 360×360)

요청:
이 캐릭터를 첨부한 화풍 그대로 유지하면서, 박스 템플릿의 각 셀 안에 딱 맞게
열두 가지 표정으로 그려서 3×4 시트로 만들어줘.

번호 순서 (반드시 이 순서 지켜): 왼쪽 위부터 오른쪽으로, 다음 줄로 내려가면서 오른쪽 아래까지.
1 웃음, 2 활짝, 3 설렘, 4 으쓱, 5 화남, 6 짜증,
7 눈물, 8 우울, 9 놀람, 10 궁금, 11 존경, 12 박수

주의:
- 각 셀은 검은 사각형 라인 안쪽에 딱 맞게 (넘치지 않게)
- 얼굴 특징·헤어스타일·의상 색상은 모든 칸에서 동일 유지
- 배경은 흰색 (또는 셀 배경 그대로)</code></pre>
  </section>

  <!-- ================ 3단계 · 대사 확장 ================ -->
  <div class="unit-header" id="dialogue">
    <div class="unit-number">단원 3</div>
    <div class="unit-title">GPT — 대사(말풍선) 얹기</div>
  </div>

  <section class="lesson-section">
    <p>2단계 결과 시트를 이어서 사용합니다. 새 대화 열지 말고 같은 대화창에 다음 프롬프트만 던지세요.</p>
<pre><code>방금 만든 12칸 시트를 이번엔 각 셀 안에 표정과 함께 대사(말풍선·손글씨)를 넣어서 다시 그려줘.

셀 배치·순서·화풍·캐릭터는 그대로.

대사 지정:
- 1번(웃음): 옆에 "하하하!" 손글씨 말풍선
- 2번(활짝): 위에 "좋아좋아" 아치형 손글씨
- 3번(설렘): 옆에 "두근두근" 흘림체
- 4번(으쓱): "뭘~" 옆
- 5번(화남): "짜증나!!" 뾰족 말풍선
- 6번(짜증): "아 진짜..." 옆
- 7번(눈물): "엉엉ㅠㅠ" 옆
- 8번(우울): "하아..." 옆
- 9번(놀람): "헐?!" 옆
- 10번(궁금): "이게 뭐지?" 옆
- 11번(존경): "리스펙" 위 (+ 반짝이 이모지)
- 12번(박수): "축하해!" 옆</code></pre>

    <div class="callout checklist">
      <div class="callout-header"><span>✅</span> 팁 · 원본도 남겨두기</div>
      <p>대사 없는 원본 시트와 대사 있는 시트 <strong>둘 다 저장</strong>해두세요. 상황에 따라 골라 쓰기 좋습니다.</p>
    </div>
  </section>

  <!-- ================ 4단계 · 자르기 ================ -->
  <div class="unit-header" id="crop">
    <div class="unit-number">단원 4</div>
    <div class="unit-title">Code Interpreter — 자동 자르기</div>
  </div>

  <section class="lesson-section">
    <p>
      새 대화를 열어서 대사 얹은 시트를 첨부한 뒤 아래 프롬프트 그대로 붙여넣습니다.
      <strong>새로 그리지 말고 원본 픽셀 그대로 crop</strong> 하도록 강조하는 게 핵심.
    </p>
<pre><code>이모티콘 시트를 새로 그리지 말고, 반드시 Code Interpreter(Python)만 사용해서 원본 픽셀을 그대로 잘라줘.

## 처리 방식 (반드시 준수)
- Pillow(PIL) + OpenCV 사용
- 이미지 재생성 금지
- 리사이즈 금지
- 보간(interpolation) 금지
- 원본 픽셀 그대로 crop

## 격자 감지
- Projection Profile 방식 또는 Hough Transform 으로 검은 사각형 라인 검출
- 검은 사각형 라인 안쪽 정확한 crop (라인 두께 제외)

## 출력
1. 12개 셀 각각 파일로 저장:
   01_웃음.png, 02_활짝.png, 03_설렘.png, 04_으쓱.png,
   05_화남.png, 06_짜증.png, 07_눈물.png, 08_우울.png,
   09_놀람.png, 10_궁금.png, 11_존경.png, 12_박수.png
2. 12개 파일을 zip 압축: emoticons.zip</code></pre>

    <div class="callout tip">
      <div class="callout-header"><span>⚠️</span> 시행착오</div>
      <p>
        첫 시도에서 GPT가 그림을 <em>새로 그려서</em> 잘라주는 경우가 있음.
        그럴 땐 <code>"반드시 Code Interpreter만 사용해서 원본 픽셀 그대로 crop"</code> 을 강조해서 재요청.
      </p>
    </div>
  </section>

  <!-- ================ 5단계 · 카톡 등록 ================ -->
  <div class="unit-header" id="register">
    <div class="unit-number">단원 5</div>
    <div class="unit-title">카톡에 등록 (갤럭시 기준)</div>
  </div>

  <section class="lesson-section">
    <p><strong>세트 단위 자동 등록은 불가능</strong>합니다. 한 장씩 12번 반복해야 합니다.</p>

    <ol class="step-list">
      <li>갤러리에서 이모티콘 이미지 열기</li>
      <li>편집기 열기</li>
      <li>배경 지우기 (스티커 자르기)</li>
      <li>미리보기 확인</li>
      <li>스티커 스타일 선택</li>
      <li>스티커로 저장</li>
    </ol>

    <p>등록 후 카톡 채팅창에서 이모티콘 키보드 → 반짝이 아이콘 → <strong>내가 만든 스티커</strong> 탭에서 사용.</p>

    <div class="callout tip">
      <div class="callout-header"><span>⚠️</span> 저작권 · 초상권</div>
      <ul>
        <li data-icon="✓">AI 이미지 <strong>상업 판매</strong>는 각 툴 약관 반드시 확인</li>
        <li data-icon="✓">다른 사람 얼굴을 참조 이미지로 쓸 땐 <strong>본인 동의</strong> 필수</li>
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
/* 코드 블럭 (문서 톤에 맞춰 은은한 다크) */
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
/* 다운로드 버튼 (본문 CTA) */
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
/* 마지막 감사 인사 */
.footer-cta {
  text-align: center;
  padding: 36px 48px 60px;
  color: var(--ink-mid);
}
.footer-cta p { margin: 4px 0; }
</style>
