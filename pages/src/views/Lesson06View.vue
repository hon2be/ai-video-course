<template>
  <div class="lesson-body" v-html="html" />
</template>

<script setup>
const html = `<div class="page">

<h1>🎨 미드저니 동일인물 만들기</h1>
<p class="subtitle">강의 영상 스크립트 3강 | --cref & --cw 파라미터로 일관성 있는 캐릭터 생성</p>

<div class="toc">
  <h2>📋 목차</h2>
  <ol>
    <li>인트로 — 미드저니의 동일인물 접근법 <span class="toc-time">~1분</span></li>
    <li>핵심 개념 — --cref & --cw 파라미터란? <span class="toc-time">~2분</span></li>
    <li>Step 1 — 기준 인물 이미지 생성하기 <span class="toc-time">~2분</span></li>
    <li>Step 2 — 이미지 링크 복사하기 <span class="toc-time">~1분</span></li>
    <li>Step 3 — --cref로 동일인물 적용하기 <span class="toc-time">~3분</span></li>
    <li>Step 4 — --cw 값으로 세밀하게 조정하기 <span class="toc-time">~3분</span></li>
    <li>실전 활용 팁 <span class="toc-time">~2분</span></li>
    <li>아웃트로 — 정리 & 다음 수업 예고 <span class="toc-time">~1분</span></li>
  </ol>
</div>

<!-- ─── INTRO ─── -->
<div class="section">
  <div class="section-header">
    <span class="section-num">INTRO</span>
    <span class="section-title">미드저니의 동일인물 접근법</span>
    <span class="time-badge">약 1분</span>
  </div>
  <div class="block narration">
    <div class="block-label">🎙 나레이션</div>
    <p>안녕하세요! 지난 강의에서 파이어플라이로 동일인물을 만드는 방법을 배웠는데요.<br><br>
    오늘은 미드저니에서 같은 인물을 유지하는 방법을 다룹니다.<br><br>
    미드저니는 파이어플라이와 방식이 조금 달라요. Reference Image를 업로드하는 게 아니라 <strong>이미지 링크</strong>를 프롬프트에 직접 붙여 넣는 방식입니다. 그리고 핵심 파라미터는 두 가지예요 — <span class="param">--cref</span>와 <span class="param">--cw</span>.</p>
  </div>
  <div class="block screen">
    <div class="block-label">🖥 화면 안내</div>
    <ul>
      <li>파이어플라이 결과물 vs 미드저니 결과물 나란히 비교 보여주기</li>
      <li>"두 툴의 장단점 — 오늘은 미드저니 방식 집중" 자막</li>
    </ul>
  </div>
</div>

<hr class="divider">

<!-- ─── 핵심 개념 ─── -->
<div class="section">
  <div class="section-header">
    <span class="section-num">01</span>
    <span class="section-title">핵심 개념 — --cref & --cw 파라미터란?</span>
    <span class="time-badge">약 2분</span>
  </div>
  <div class="block narration">
    <div class="block-label">🎙 나레이션</div>
    <p>두 파라미터를 먼저 이해하고 가겠습니다.</p>
  </div>

  <div class="compare">
    <div class="compare-box">
      <h4>--cref (Character Reference)</h4>
      <p>캐릭터 레퍼런스. 참고할 인물 이미지의 <strong>링크</strong>를 지정합니다. 이 파라미터가 있어야 동일인물 기능 자체가 작동합니다.</p>
    </div>
    <div class="compare-box">
      <h4>--cw (Character Weight)</h4>
      <p>캐릭터 비중. 0~100 사이의 숫자로 레퍼런스를 얼마나 강하게 따를지 조정합니다. 기본값은 100.</p>
    </div>
  </div>

  <div class="block tip">
    <div class="block-label">💡 --cw 값별 차이</div>
    <table class="cw-table">
      <tr><th>--cw 값</th><th>얼굴</th><th>헤어</th><th>의상</th><th>언제 쓰나</th></tr>
      <tr><td><strong>100</strong> (기본)</td><td>강하게 참조</td><td>강하게 참조</td><td>강하게 참조</td><td>모든 요소를 최대한 유지할 때</td></tr>
      <tr><td><strong>75</strong></td><td>참조</td><td>참조</td><td>일부 변화</td><td>얼굴·헤어는 유지, 의상은 조금 자유롭게</td></tr>
      <tr><td><strong>50</strong></td><td>참조</td><td>일부 변화</td><td>자유롭게</td><td>얼굴만 유지하고 나머지 변화</td></tr>
      <tr><td><strong>25</strong></td><td>느슨하게 참조</td><td>자유</td><td>자유</td><td>분위기만 비슷하게</td></tr>
      <tr><td><strong>0</strong></td><td>주로 얼굴 윤곽</td><td>완전 자유</td><td>완전 자유</td><td>전혀 다른 스타일로 변환</td></tr>
    </table>
  </div>

  <div class="block caution">
    <div class="block-label">⚠️ 중요</div>
    <p>실제 사람 사진을 --cref에 쓰면 생각보다 반영이 잘 안 됩니다.<br>
    <strong>미드저니로 생성한 AI 인물 이미지를 레퍼런스로 쓰는 게 훨씬 효과적입니다.</strong></p>
  </div>
</div>

<hr class="divider">

<!-- ─── STEP 1 ─── -->
<div class="section">
  <div class="section-header">
    <span class="section-num">STEP 1</span>
    <span class="section-title">기준 인물 이미지 생성하기</span>
    <span class="time-badge">약 2분</span>
  </div>
  <div class="block narration">
    <div class="block-label">🎙 나레이션</div>
    <p>먼저 레퍼런스로 쓸 기준 인물을 미드저니에서 생성합니다. 여기서 중요한 게 있어요 — 배경을 <strong>흰색(white background)</strong>으로 지정하면, 배경에 불필요한 요소가 섞이지 않아서 --cref로 쓸 때 훨씬 깔끔하게 반영됩니다.</p>
  </div>
  <div class="block screen">
    <div class="block-label">📝 기준 인물 생성 프롬프트</div>
    <div class="prompt-box"><span class="comment">// 미드저니 Discord 또는 웹에서 입력</span>
/imagine a Korean woman in her early 20s,
long straight black hair with bangs, low ponytail,
fair skin, natural makeup, gentle expression,
white t-shirt, blue jeans,
white background, front-facing, full body,
photorealistic, high detail

<span class="comment">// 핵심 포인트
// - white background: 배경 깔끔하게
// - front-facing: 정면으로 생성해야 나중에 반영이 잘 됨
// - 의상·헤어 묘사를 구체적으로 → cw 100에서 최대한 유지됨</span></div>
  </div>
  <div class="block tip">
    <div class="block-label">💡 기준 이미지 선택 기준</div>
    <ul>
      <li>정면(front-facing)이 가장 좋음 — 측면·후면은 반영률이 낮음</li>
      <li>배경이 단색일 것 — 복잡한 배경은 배경까지 함께 참조됨</li>
      <li>4장 중 가장 얼굴이 선명하게 나온 것으로 선택</li>
      <li>마음에 들면 <strong>U버튼(업스케일)</strong> 클릭해서 고해상도로 저장</li>
    </ul>
  </div>
</div>

<hr class="divider">

<!-- ─── STEP 2 ─── -->
<div class="section">
  <div class="section-header">
    <span class="section-num">STEP 2</span>
    <span class="section-title">이미지 링크 복사하기</span>
    <span class="time-badge">약 1분</span>
  </div>
  <div class="block narration">
    <div class="block-label">🎙 나레이션</div>
    <p>파이어플라이는 이미지를 직접 업로드했지만, 미드저니는 <strong>이미지 URL 링크</strong>를 프롬프트에 넣는 방식이에요. 이 링크를 복사하는 게 핵심입니다.</p>
  </div>
  <div class="block screen">
    <div class="block-label">🖥 Discord에서 링크 복사하는 방법</div>
    <ul>
      <li>생성된 이미지를 클릭해서 크게 열기</li>
      <li>이미지 위에서 <strong>마우스 우클릭</strong></li>
      <li>팝업 메뉴에서 <strong>"이미지 주소 복사"</strong> 클릭</li>
      <li>복사된 URL 메모장에 붙여 넣어서 보관</li>
    </ul>
  </div>
  <div class="block screen">
    <div class="block-label">🖥 미드저니 웹(midjourney.com)에서 링크 복사하는 방법</div>
    <ul>
      <li>생성된 이미지 클릭 → 상세 화면 열기</li>
      <li>이미지 위 우클릭 → <strong>"이미지 주소 복사"</strong></li>
      <li>또는 이미지를 새 탭에서 열기 → 주소창 URL 복사</li>
    </ul>
  </div>
  <div class="block caution">
    <div class="block-label">⚠️ 주의</div>
    <p>Discord에서 생성한 이미지 링크는 <strong>만료 기한</strong>이 있어요. 오래된 링크는 --cref에 넣어도 작동하지 않습니다. 가능하면 이미지를 <strong>내 컴퓨터에 저장</strong>해두고, 사용할 때마다 최신 링크를 복사하거나 미드저니 웹에서 업로드 기능을 활용하세요.</p>
  </div>
</div>

<hr class="divider">

<!-- ─── STEP 3 ─── -->
<div class="section">
  <div class="section-header">
    <span class="section-num">STEP 3</span>
    <span class="section-title">--cref로 동일인물 장면 생성하기</span>
    <span class="time-badge">약 3분</span>
  </div>
  <div class="block narration">
    <div class="block-label">🎙 나레이션</div>
    <p>이제 실전입니다. 링크를 복사했으면 새 프롬프트 뒤에 <span class="param">--cref [링크]</span>를 붙여 넣으면 됩니다.</p>
  </div>
  <div class="block screen">
    <div class="block-label">📝 기본 사용법</div>
    <div class="prompt-box"><span class="comment">// 구조: [원하는 장면 프롬프트] --cref [이미지 링크]</span>
a Korean woman sitting at a cozy Seoul cafe,
holding a coffee cup, warm smile,
soft indoor lighting, wooden interior
--cref https://cdn.discordapp.com/attachments/... --cw 100</div>
  </div>

  <p style="font-weight:700; font-size:15px; margin:20px 0 10px;">📌 실전 예시 3컷</p>

  <div class="block screen">
    <div class="block-label">📝 컷 1 — 카페 장면</div>
    <div class="prompt-box">a woman sitting at a cafe, holding a latte,
warm smile, wooden interior, bokeh background,
medium shot, photorealistic
--cref [기준 이미지 링크] --cw 75</div>
  </div>

  <div class="block screen">
    <div class="block-label">📝 컷 2 — 야외 걷기</div>
    <div class="prompt-box">a woman walking on a busy Seoul street,
casual outfit, sunny afternoon, carrying a bag,
full body shot, photorealistic
--cref [기준 이미지 링크] --cw 50</div>
  </div>

  <div class="block screen">
    <div class="block-label">📝 컷 3 — 의상 변경</div>
    <div class="prompt-box">a woman wearing an elegant black dress,
standing in a modern rooftop restaurant,
evening lighting, confident expression,
full body, photorealistic
--cref [기준 이미지 링크] --cw 0

<span class="comment">// --cw 0: 얼굴만 참조, 의상 완전 자유
// 드라마틱하게 의상을 바꿀 때 사용</span></div>
  </div>

  <div class="block tip">
    <div class="block-label">💡 --cref 사용 포인트</div>
    <ul>
      <li>프롬프트 <strong>맨 뒤에</strong> --cref 파라미터를 붙임</li>
      <li>--cw를 명시하지 않으면 기본값 100으로 작동</li>
      <li>의상을 바꾸고 싶을 땐 --cw를 낮추고 의상 묘사를 구체적으로</li>
      <li>장면·배경은 프롬프트로, 인물은 --cref로 — 역할 분리가 핵심</li>
    </ul>
  </div>
</div>

<hr class="divider">

<!-- ─── STEP 4 ─── -->
<div class="section">
  <div class="section-header">
    <span class="section-num">STEP 4</span>
    <span class="section-title">--cw 값으로 세밀하게 조정하기</span>
    <span class="time-badge">약 3분</span>
  </div>
  <div class="block narration">
    <div class="block-label">🎙 나레이션</div>
    <p>같은 인물, 같은 링크를 쓰더라도 --cw 값에 따라 결과가 크게 달라집니다. 목적에 따라 어떤 값을 쓸지 정리해 드릴게요.</p>
  </div>
  <div class="block screen">
    <div class="block-label">🖥 화면 안내 — --cw 값별 비교 실연</div>
    <ul>
      <li>동일 프롬프트에 --cw 100 / 75 / 50 / 25 / 0 순서로 생성 결과 나란히 비교</li>
      <li>"cw가 낮아질수록 의상·헤어가 자유로워지고, 얼굴 유사도도 조금씩 낮아집니다"</li>
    </ul>
  </div>

  <div class="block screen">
    <div class="block-label">📝 --cw 비교 프롬프트</div>
    <div class="prompt-box">a woman wearing futuristic cyberpunk suit,
standing in a neon-lit city street,
full body, cinematic
--cref [기준 이미지 링크] --cw 100

<span class="comment">// 위 프롬프트에서 --cw 값만 75 / 50 / 25 / 0으로 바꿔서 비교
// cw 100: 원래 의상 느낌이 남음
// cw 0 : 사이버펑크 수트가 완전히 새롭게 생성됨</span></div>
  </div>

  <div class="block tip">
    <div class="block-label">💡 목적별 --cw 권장값</div>
    <ul>
      <li><strong>광고·상업 이미지</strong> (인물 완전 유지): <span class="param">--cw 100</span></li>
      <li><strong>일반 장면 생성</strong> (얼굴+헤어 유지, 배경 자유): <span class="param">--cw 75</span></li>
      <li><strong>의상 변경</strong> (얼굴만 유지): <span class="param">--cw 25~50</span></li>
      <li><strong>컨셉 아트·판타지</strong> (분위기만 참조): <span class="param">--cw 0</span></li>
    </ul>
  </div>
</div>

<hr class="divider">

<!-- ─── 실전 팁 ─── -->
<div class="section">
  <div class="section-header">
    <span class="section-num">05</span>
    <span class="section-title">실전 활용 팁</span>
    <span class="time-badge">약 2분</span>
  </div>

  <div class="block narration">
    <div class="block-label">🎙 나레이션</div>
    <p>지금까지 배운 내용으로 실제 영상 제작에 바로 쓸 수 있는 팁들을 정리해 드릴게요.</p>
  </div>

  <div class="block tip">
    <div class="block-label">💡 파이어플라이 vs 미드저니 동일인물 — 어떤 걸 써야 하나?</div>
    <ul>
      <li><strong>미드저니 --cref:</strong> 이미지 퀄리티 높음, 아트스타일 강함, 링크 방식이라 직관적. 단 링크 만료 주의</li>
      <li><strong>파이어플라이 Reference Image:</strong> 업로드 방식이라 편리, 한국어 프롬프트 지원, 맞춤형 모델로 발전 가능</li>
      <li>→ <strong>사진 느낌 실사 이미지</strong>는 파이어플라이, <strong>일러스트·아트 스타일</strong>은 미드저니가 강점</li>
    </ul>
  </div>

  <div class="block tip">
    <div class="block-label">💡 미드저니 --cref 심화 팁</div>
    <ul>
      <li><strong>멀티 레퍼런스:</strong> --cref [링크1] [링크2] 식으로 여러 이미지 링크를 나열하면 여러 레퍼런스를 혼합해서 참조 가능</li>
      <li><strong>--sref와 조합:</strong> --sref로 스타일 참조 + --cref로 인물 참조를 동시에 쓰면 스타일과 인물을 함께 유지 가능</li>
      <li><strong>업스케일 후 재사용:</strong> U버튼으로 업스케일한 이미지 링크를 쓰면 더 디테일한 얼굴이 반영됨</li>
      <li><strong>기준 이미지 여러 장 준비:</strong> 정면·측면·클로즈업 각각 기준 이미지를 만들어두고 상황에 따라 교체</li>
    </ul>
  </div>
</div>

<hr class="divider">

<!-- ─── OUTRO ─── -->
<div class="section">
  <div class="section-header">
    <span class="section-num">OUTRO</span>
    <span class="section-title">정리 & 다음 수업 예고</span>
    <span class="time-badge">약 1분</span>
  </div>
  <div class="block narration">
    <div class="block-label">🎙 나레이션</div>
    <p>오늘 배운 내용 정리합니다.</p>
  </div>
  <div class="summary-box">
    <h3>✅ 오늘의 핵심 요약</h3>
    <ul>
      <li>미드저니 동일인물의 핵심은 <span class="param">--cref</span> (이미지 링크) + <span class="param">--cw</span> (비중 0~100)</li>
      <li>기준 인물은 <strong>white background, front-facing</strong>으로 생성할 것</li>
      <li>실제 사진보다 <strong>미드저니로 생성한 AI 이미지</strong>를 레퍼런스로 쓸 때 효과 더 좋음</li>
      <li>의상만 바꾸고 싶으면 <span class="param">--cw 0~25</span>, 전체 유지하려면 <span class="param">--cw 100</span></li>
      <li>링크 만료 주의 — 이미지를 로컬에 저장해두고 새 링크 발급해서 사용</li>
    </ul>
  </div>
  <div class="block narration">
    <div class="block-label">🎙 나레이션</div>
    <p>숙제는 미드저니에서 여러분만의 기준 인물을 하나 만들고, --cw 값을 100 / 50 / 0으로 바꿔가며 결과 차이를 비교해 보는 겁니다.<br><br>
    다음 시간엔 이 인물 이미지들을 가지고 실제 AI 영상을 만드는 방법을 다룹니다. 오늘도 수고하셨어요!</p>
  </div>
  <div class="block screen">
    <div class="block-label">🖥 마무리 화면</div>
    <ul>
      <li>--cw 100 / 50 / 0 비교 결과 3컷 나란히 표시</li>
      <li>"다음 강의: AI 영상 생성" 자막 + 다음 강의 썸네일</li>
    </ul>
  </div>
</div>

</div>`
</script>
