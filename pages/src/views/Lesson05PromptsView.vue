<template>
  <div class="lesson-body" v-html="html" />
</template>

<script setup>
const html = `<div class="page">

<h1>📋 인물 데이터셋 생성 프롬프트 모음</h1>
<p class="subtitle">파이어플라이 Reference Image용 | 카메라각도 · 표정 · 포즈 · 상황 · 의상 전 범위</p>

<div class="toc">
  <ol>
    <li>인물 앵커 (공통 고정 묘사)</li>
    <li>카메라 각도 시트 (헤드샷 8각도 / 전신 8각도)</li>
    <li>표정 시트 (10표정 기본 / 8표정×8각도 매트릭스)</li>
    <li>포즈·상황 시트 (활동 8종 / 스포츠 의상)</li>
    <li>의상 변형 시트 (10벌+ 전신/반신/헤드샷)</li>
    <li>클로즈업 상세 시트 (상반신 8각도)</li>
    <li>특수 장면 시트 (발레·댄스 등 고난도 동작)</li>
  </ol>
</div>

<!-- ── 빠른 참조 표 ── -->
<h2><span class="tag" style="background:#555;">참조표</span> 카메라 각도 &amp; 표정 키워드 빠른 참조</h2>



<h3>① 수평 방향 각도</h3>
<table class="ref-table">
  <tr><th style="background:#334155;width:120px;">방향</th><th style="background:#334155;">영어 키워드</th><th style="background:#334155;">설명</th></tr>
  <tr><td><strong>정면</strong></td><td><span class="kw">front view</span></td><td>얼굴·몸 정면</td></tr>
  <tr><td><strong>45° 오른쪽</strong></td><td><span class="kw">45° right</span> <span class="kw">45 degree right</span></td><td>살짝 오른쪽으로 돌아선 각도</td></tr>
  <tr><td><strong>90° 오른쪽</strong></td><td><span class="kw">right side view</span> <span class="kw">90° right (side)</span></td><td>완전 옆모습</td></tr>
  <tr><td><strong>45° 왼쪽</strong></td><td><span class="kw">45° left</span> <span class="kw">45 degree left</span></td><td>살짝 왼쪽으로 돌아선 각도</td></tr>
  <tr><td><strong>90° 왼쪽</strong></td><td><span class="kw">left side view</span> <span class="kw">90° left (side)</span></td><td>완전 왼 옆모습</td></tr>
  <tr><td><strong>뒷면</strong></td><td><span class="kw">back view</span></td><td>뒤에서 바라본 각도</td></tr>
  <tr><td><strong>45° 오른쪽 뒤</strong></td><td><span class="kw">45° right back</span></td><td>오른쪽 뒤 사선</td></tr>
  <tr><td><strong>45° 왼쪽 뒤</strong></td><td><span class="kw">45° left back</span></td><td>왼쪽 뒤 사선</td></tr>
</table>

<h3>② 수직 방향 각도</h3>
<table class="ref-table">
  <tr><th style="background:#334155;width:120px;">방향</th><th style="background:#334155;">영어 키워드</th><th style="background:#334155;">설명</th></tr>
  <tr><td><strong>위에서</strong></td><td><span class="kw">high-angle view</span> <span class="kw">bird's eye view</span></td><td>위에서 내려다보는 각도</td></tr>
  <tr><td><strong>아래에서</strong></td><td><span class="kw">low-angle view</span> <span class="kw">worm's eye view</span></td><td>아래에서 올려다보는 각도</td></tr>
  <tr><td><strong>눈높이</strong></td><td><span class="kw">eye level</span></td><td>기본 수평 시점 (생략 가능)</td></tr>
</table>

<h3>③ 카메라 거리 (Shot Size)</h3>
<table class="ref-table">
  <tr><th style="background:#334155;width:140px;">명칭</th><th style="background:#334155;">영어 키워드</th><th style="background:#334155;">범위</th></tr>
  <tr><td><strong>익스트림 클로즈업</strong></td><td><span class="kw">extreme close-up</span></td><td>눈, 입 등 부분만</td></tr>
  <tr><td><strong>클로즈업</strong></td><td><span class="kw">close-up shot</span> <span class="kw">portrait shot</span></td><td>얼굴 전체</td></tr>
  <tr><td><strong>버스트샷</strong></td><td><span class="kw">bust shot</span></td><td>가슴 위</td></tr>
  <tr><td><strong>미디엄샷</strong></td><td><span class="kw">medium shot</span></td><td>허리 위</td></tr>
  <tr><td><strong>3/4샷</strong></td><td><span class="kw">3/4 shot</span> <span class="kw">cowboy shot</span></td><td>무릎 위</td></tr>
  <tr><td><strong>풀샷</strong></td><td><span class="kw">full body shot</span> <span class="kw">full length</span></td><td>머리끝~발끝</td></tr>
</table>

<h3>④ 표정 키워드 (감정별 분류)</h3>
<table class="ref-table">
  <tr><th style="background:#334155;width:110px;">감정 계열</th><th style="background:#334155;">영어 키워드</th></tr>
  <tr><td><strong>기쁨</strong></td><td><span class="kw kw-green">smiling</span> <span class="kw kw-green">gentle smile</span> <span class="kw kw-green">laughing</span> <span class="kw kw-green">big smile</span> <span class="kw kw-green">excited</span> <span class="kw kw-green">joyful</span></td></tr>
  <tr><td><strong>슬픔</strong></td><td><span class="kw">crying</span> <span class="kw">teary-eyed</span> <span class="kw">sad</span> <span class="kw">melancholic</span> <span class="kw">disappointed</span></td></tr>
  <tr><td><strong>분노</strong></td><td><span class="kw">angry</span> <span class="kw">frowning</span> <span class="kw">pouting</span> <span class="kw">annoyed</span> <span class="kw">frustrated</span></td></tr>
  <tr><td><strong>놀람</strong></td><td><span class="kw">surprised</span> <span class="kw">shocked</span> <span class="kw">wide-eyed</span> <span class="kw">astonished</span></td></tr>
  <tr><td><strong>무표정·차분</strong></td><td><span class="kw kw-gray">neutral face</span> <span class="kw kw-gray">expressionless</span> <span class="kw kw-gray">serious</span> <span class="kw kw-gray">focused</span> <span class="kw kw-gray">confident</span> <span class="kw kw-gray">calm</span></td></tr>
  <tr><td><strong>기타·복합</strong></td><td><span class="kw">sleepy</span> <span class="kw">yawning</span> <span class="kw">awkward smile</span> <span class="kw">embarrassed</span> <span class="kw">disgusted</span> <span class="kw">skeptical</span> <span class="kw">thoughtful</span></td></tr>
</table>

<div class="note">💡 <strong>조합 예시:</strong> <code>표정_상세/smiling_45R.png</code> = "smiling" 표정 × "45° right" 각도. 원하는 감정+각도를 파일명에서 골라 Reference Image로 바로 씁니다.</div>

<hr class="divider">

<!-- ── 해상도 기준 ── -->
<div class="note" style="border-left-color:#e67700; background:#fff9e0; margin-bottom:24px;">
  ⚠️ <strong>이미지 해상도 기준 — 개별 컷 1장당 가로 최소 1024px 이상</strong><br>
  그리드 시트를 잘랐을 때 컷당 해상도가 1024px 미만이면 Reference Image 품질이 떨어져 인물 일관성이 낮아집니다.<br>
  파이어플라이 생성 해상도를 <strong>4:3 이상 (권장 2048×1536↑)</strong>으로 설정하거나, 그리드 열 수를 줄여서 컷당 해상도를 확보하세요.<br>
  해상도가 부족한 경우 <strong><a href="https://upscayl.org/" target="_blank">Upscayl</a></strong>(무료 오픈소스)로 AI 업스케일 후 사용. 화질 손상 없이 2~4배 확대 가능.
</div>

<!-- ── 1. 앵커 ── -->
<h2><span class="tag">공통</span> 1. 인물 앵커 — 모든 프롬프트에 고정 삽입</h2>
<p style="font-size:14px; margin-bottom:8px;">아래 묘사를 <strong>모든 프롬프트 앞에</strong> 복붙한다. 절대 바꾸지 않는다.</p>
<div class="anchor-box">Korean woman, early 20s,
long straight black hair with bangs, low ponytail,
fair skin, natural makeup, slim build,</div>
<div class="note">⚠️ Reference Image도 같이 업로드한 상태에서 이 앵커를 쓰면 일관성이 2배 올라간다.</div>

<hr class="divider">

<!-- ── 2. 카메라각도 ── -->
<h2><span class="tag">카메라각도</span> 2. 카메라 각도 시트</h2>

<h3>① 헤드샷 8각도 시트 (head_shot.png 스타일)</h3>
<div class="prompt-box"><span class="comment">// Reference Image: front.png / Strength: 60%</span>
Korean woman, early 20s,
long straight black hair with bangs, low ponytail,
fair skin, natural makeup,
<span class="comment">
// ── 그리드 구조 ──</span>
a character reference sheet showing 8 head angles,
arranged in 2 rows on a plain light gray background:
top row (5): front view, 45° right, right side view, 45° left, left side view
bottom row (3, centered): back view, 45° right back, 45° left back,
each angle clearly labeled below,
consistent facial features across all angles,
photorealistic, high detail, studio lighting</div>

<h3>② 전신 8각도 시트 (multishot.png 스타일)</h3>
<div class="prompt-box"><span class="comment">// Reference Image: front.png / Strength: 60%</span>
Korean woman, early 20s,
long straight black hair with bangs, low ponytail,
fair skin, white t-shirt, straight blue jeans, white sneakers,
<span class="comment">
// ── 그리드 구조 ──</span>
a full-body character turnaround sheet,
top row (6 angles): right side view, 45° left, front view,
  45° right, left side view, back view,
bottom row (2 angles): high-angle view, low-angle view,
plain gray background, each angle labeled,
consistent clothing and proportions,
photorealistic, full body visible</div>

<div class="grid2">
  <div class="var-box">
    <h4>📐 각도 변형 키워드</h4>
    <ul>
      <li>front view</li>
      <li>45° right / 45° left</li>
      <li>right side view / left side view</li>
      <li>back view</li>
      <li>high-angle view (위에서)</li>
      <li>low-angle view (아래에서)</li>
      <li>bird's eye view</li>
      <li>worm's eye view</li>
    </ul>
  </div>
  <div class="var-box">
    <h4>📷 카메라 거리 키워드</h4>
    <ul>
      <li>portrait shot (얼굴)</li>
      <li>bust shot (가슴 위)</li>
      <li>medium shot (허리 위)</li>
      <li>3/4 shot (무릎 위)</li>
      <li>full body shot (전신)</li>
      <li>close-up (얼굴 클로즈업)</li>
      <li>extreme close-up (눈·입)</li>
    </ul>
  </div>
</div>

<hr class="divider">

<!-- ── 3. 표정 ── -->
<h2><span class="tag">표정</span> 3. 표정 시트</h2>

<h3>① 10표정 기본 시트 (multishot_face.png 스타일)</h3>
<div class="prompt-box"><span class="comment">// Reference Image: front.png / Strength: 60%</span>
Korean woman, early 20s,
long straight black hair with bangs, low ponytail,
fair skin, natural makeup,
<span class="comment">
// ── 그리드 구조 ──</span>
a facial expression reference sheet,
5 columns × 2 rows, plain gray background,
top row: neutral face, smiling, laughing, angry, surprised
bottom row: crying, sleepy (yawning), confident, serious, awkward smile,
face and upper chest visible in each cell,
each expression clearly labeled,
photorealistic, consistent identity</div>

<h3>② 표정 × 각도 매트릭스 (multishot_closeup_3.png 스타일)</h3>
<div class="prompt-box"><span class="comment">// Reference Image: front.png / Strength: 65%</span>
Korean woman, early 20s,
long straight black hair with bangs, low ponytail,
fair skin,
<span class="comment">
// ── 그리드 구조 ──</span>
a detailed facial expression and angle matrix chart,
8 columns (camera angles) × 8 rows (expressions),
column headers: 45° left, front, 45° right,
  90° left (side), 90° right (side), back,
  top view, bottom view,
row headers: neutral, smiling, laughing, angry,
  pouting/annoyed, sad, crying, awkward smile,
face closeup for each cell, gray background,
consistent character throughout all 64 cells,
photorealistic, high resolution</div>

<div class="note">⚠️ 이 매트릭스는 64컷 생성이라 시간이 걸림. 파이어플라이 Batch 기능 활용하거나 4×4로 나눠서 생성 후 합치는 방법 권장.</div>

<div class="var-box" style="max-width:400px;">
  <h4>😊 표정 키워드 전체 목록</h4>
  <ul>
    <li>neutral face / expressionless</li>
    <li>smiling / gentle smile</li>
    <li>laughing / big smile</li>
    <li>angry / frowning</li>
    <li>surprised / shocked</li>
    <li>crying / teary-eyed</li>
    <li>sleepy / yawning</li>
    <li>confident / determined</li>
    <li>serious / focused</li>
    <li>awkward smile / embarrassed</li>
    <li>pouting / annoyed</li>
    <li>sad / melancholic</li>
    <li>excited / joyful</li>
    <li>disgusted / skeptical</li>
  </ul>
</div>

<hr class="divider">

<!-- ── 4. 포즈·상황 ── -->
<h2><span class="tag">포즈·상황</span> 4. 포즈 · 상황 시트</h2>

<h3>① 일상 활동 8종 시트 (activities.png 스타일)</h3>
<div class="prompt-box"><span class="comment">// Reference Image: front.png / Strength: 60%</span>
Korean woman, early 20s,
long straight black hair, fair skin,
<span class="comment">
// ── 그리드 구조 ──</span>
an activity reference sheet,
4 columns × 2 rows, outdoor and indoor backgrounds:
top row: cycling (bicycle), running, jump rope, squatting,
bottom row: jumping, playing basketball, playing soccer, cooking,
dynamic natural poses, each labeled in Korean,
photorealistic, consistent character</div>

<h3>② 일상 상황별 단독 컷 (장면 생성용)</h3>
<div class="prompt-box"><span class="comment">// 아래 [상황] 부분만 교체해서 단독 컷 생성</span>
Korean woman, early 20s,
long straight black hair with bangs, low ponytail,
fair skin, natural makeup,
[상황 묘사],
[배경 묘사],
[조명 묘사],
[카메라 거리], photorealistic</div>

<div class="grid2">
  <div class="var-box">
    <h4>🏠 실내 상황 키워드</h4>
    <ul>
      <li>sitting at a cafe, holding coffee</li>
      <li>working on a laptop at a desk</li>
      <li>reading a book on a sofa</li>
      <li>cooking in a kitchen</li>
      <li>presenting in a meeting room</li>
      <li>studying at a library</li>
      <li>stretching at a gym</li>
      <li>sitting at a vanity, applying makeup</li>
    </ul>
  </div>
  <div class="var-box">
    <h4>🌳 실외 상황 키워드</h4>
    <ul>
      <li>walking on a busy Seoul street</li>
      <li>jogging in a park, morning light</li>
      <li>sitting on a park bench</li>
      <li>standing by the Han River</li>
      <li>shopping, carrying bags</li>
      <li>riding a bicycle on a path</li>
      <li>standing at a crosswalk</li>
      <li>looking at a window display</li>
    </ul>
  </div>
</div>

<hr class="divider">

<!-- ── 5. 의상 ── -->
<h2><span class="tag">의상</span> 5. 의상 변형 시트</h2>

<h3>① 의상 10벌 × 전신/반신/헤드샷 시트 (multishot_closeup_2.png 스타일)</h3>
<div class="prompt-box"><span class="comment">// Reference Image: front.png / Strength: 55%</span>
Korean woman, early 20s,
long straight black hair with bangs, low ponytail,
fair skin, natural makeup,
<span class="comment">
// ── 그리드 구조 ──</span>
a fashion reference sheet, 10 columns × 3 rows,
plain gray background:
row 1 (full body): 10 different outfits, front view
row 2 (waist up): same 10 outfits, slight angle variation
row 3 (face closeup): same 10 outfits, bust shot,
outfits include: white blouse + beige trousers,
  blue shirt + black pants, black tee + blue jeans,
  beige knit + white pants, striped top + jeans,
  black blazer + black pants, green jacket + jeans,
  yellow sweater + jeans, light blue cardigan + white pants,
  white blouse + pink midi skirt,
consistent character across all cells,
photorealistic</div>

<div class="note">💡 의상 10벌을 한 번에 생성하기 어려우면 2~3벌씩 나눠서 생성 후 합치는 방식이 더 정확합니다.</div>

<div class="var-box" style="max-width:500px; margin-top:12px;">
  <h4>👗 의상 카테고리별 키워드</h4>
  <ul>
    <li><strong>캐주얼:</strong> white t-shirt + jeans / striped top / hoodie + jogger pants</li>
    <li><strong>오피스:</strong> white blouse + trousers / blazer / pencil skirt</li>
    <li><strong>스포츠:</strong> sportswear / running outfit / yoga pants + sports bra</li>
    <li><strong>포멀:</strong> black dress / suit / trench coat</li>
    <li><strong>계절:</strong> puffer jacket (winter) / floral dress (summer) / trench coat (spring)</li>
  </ul>
</div>

<hr class="divider">

<!-- ── 6. 클로즈업 ── -->
<h2><span class="tag">클로즈업</span> 6. 클로즈업 상세 시트</h2>

<h3>상반신 8각도 시트 (multishot_closeup.png 스타일)</h3>
<div class="prompt-box"><span class="comment">// Reference Image: front.png / Strength: 60%</span>
Korean woman, early 20s,
long straight black hair with bangs, low ponytail,
fair skin, white t-shirt,
<span class="comment">
// ── 그리드 구조 ──</span>
a bust-length character reference sheet,
4 columns × 2 rows, plain gray background:
top row: front view, 45° right, right side view, back view
bottom row: 45° left, left side view, high-angle view, low-angle view,
upper body and face clearly visible,
each angle labeled, photorealistic</div>

<hr class="divider">

<!-- ── 7. 특수 장면 ── -->
<h2><span class="tag">특수장면</span> 7. 특수 장면 시트</h2>

<h3>① 발레·댄스 고난도 동작 (sport_1.png 스타일)</h3>
<div class="prompt-box"><span class="comment">// Reference Image: front.png / Strength: 60%</span>
Korean woman, early 20s,
long straight black hair, fair skin,
wearing a pink ballet tutu, pointe shoes,
<span class="comment">
// ── 그리드 구조 ──</span>
a dance performance reference sheet, 2 columns × 2 rows:
top-left: high-angle shot — grand jeté (jump split)
top-right: high-angle mirror — grand jeté
bottom-left: low-angle shot — grand jeté
bottom-right: low-angle mirror — grand jeté,
dramatic studio lighting, gray background,
each angle labeled, photorealistic, motion captured</div>

<h3>② 스포츠 유니폼 4종 (sportshot_1.png 스타일)</h3>
<div class="prompt-box"><span class="comment">// Reference Image: front.png / Strength: 60%</span>
Korean woman, early 20s,
long straight black hair in ponytail, fair skin,
<span class="comment">
// ── 그리드 구조 ──</span>
a sports uniform reference sheet, 4 columns × 1 row,
plain gray background, 45° front view,
each labeled in Korean:
1. 사격 — rifle shooting uniform, blue and white jacket, holding air rifle
2. 스포츠댄스 — latin dance costume, red sequin dress
3. 태권도 — white dobok with black belt, Korean flag on sleeve
4. 핸드볼 — navy team jersey with number 7, holding a handball,
photorealistic, full body visible, consistent character</div>

<hr class="divider">

<!-- 사용 가이드 -->
<h2><span class="tag" style="background:#10a37f;">가이드</span> 데이터셋 생성 순서 권장안</h2>
<ol style="font-size:14px; line-height:2.4; padding-left:20px;">
  <li><strong>front.png</strong> (GPT로 기준 인물 생성) → 저장</li>
  <li>파이어플라이 Reference Image에 front.png 업로드 (Strength 60%)</li>
  <li><strong>헤드샷 8각도</strong> → 저장 → 개별 8컷으로 분할</li>
  <li><strong>전신 8각도</strong> → 저장 → 개별 8컷으로 분할</li>
  <li><strong>표정 10종</strong> → 저장 → 개별 10컷으로 분할</li>
  <li><strong>상반신 8각도</strong> → 저장 → 개별 8컷으로 분할</li>
  <li><strong>활동 8종</strong> → 저장 → 개별 8컷으로 분할</li>
  <li>(심화) <strong>표정×각도 매트릭스</strong> → 개별 64컷으로 분할</li>
  <li>(심화) <strong>의상 변형 시트</strong> → 개별 30컷으로 분할</li>
</ol>

<hr class="divider">

<!-- 갤러리 -->
<h2><span class="tag" style="background:#6d28d9;">갤러리</span> 실제 생성 예시 — 인물1 (20대 여성)</h2>
<p style="font-size:14px; color:#555; margin-bottom:20px;">아래 이미지들은 위 프롬프트로 실제 생성한 결과입니다. Reference Image로 바로 사용 가능합니다.</p>



<p style="font-weight:700; font-size:15px; margin:24px 0 10px;">📌 기준 이미지 (GPT 생성)</p>
<div style="max-width:300px; margin-bottom:24px;">
  <div class="gallery-card">
    <img src="/ai-video-course/images/character_female/기준샷_정면.png" alt="기준 인물 정면">
    <div class="g-cap">
      <div class="g-title">front.png</div>
      <div class="g-desc">GPT로 생성한 기준 인물. 모든 데이터 시트의 Reference Image로 사용</div>
    </div>
  </div>
</div>

<p style="font-weight:700; font-size:15px; margin:0 0 10px;">📐 카메라 각도 시트</p>
<div class="gallery-grid">
  <div class="gallery-card">
    <img src="/ai-video-course/images/character_female/각도시트_헤드샷_8방향.png" alt="헤드샷 8각도">
    <div class="g-cap">
      <div class="g-title">head_shot.png</div>
      <div class="g-desc">헤드샷 8각도 — front / 45°R / side / 45°L / side / back / back45°×2</div>
    </div>
  </div>
  <div class="gallery-card">
    <img src="/ai-video-course/images/character_female/각도시트_전신_8방향.png" alt="전신 멀티샷">
    <div class="g-cap">
      <div class="g-title">multishot.png</div>
      <div class="g-desc">전신 8각도 — 6각도 + high-angle + low-angle</div>
    </div>
  </div>
  <div class="gallery-card">
    <img src="/ai-video-course/images/character_female/각도시트_상반신_8방향.png" alt="상반신 클로즈업 8각도">
    <div class="g-cap">
      <div class="g-title">multishot_closeup.png</div>
      <div class="g-desc">상반신 클로즈업 8각도</div>
    </div>
  </div>
</div>

<p style="font-weight:700; font-size:15px; margin:24px 0 10px;">😊 표정 시트</p>
<div class="gallery-grid">
  <div class="gallery-card">
    <img src="/ai-video-course/images/character_female/표정시트_10종.png" alt="표정 10종">
    <div class="g-cap">
      <div class="g-title">multishot_face.png</div>
      <div class="g-desc">표정 10종 (5×2) — neutral / smiling / laughing / angry / surprised / crying / sleepy / confident / serious / awkward</div>
    </div>
  </div>
</div>

<p style="font-weight:700; font-size:15px; margin:24px 0 10px;">😊 × 📐 표정 × 각도 매트릭스</p>
<div class="gallery-full">
  <img src="/ai-video-course/images/character_female/표정x각도_매트릭스_64컷.png" alt="표정×각도 64컷 매트릭스">
  <div class="g-cap">
    <div class="g-title">multishot_closeup_3.png</div>
    <div class="g-desc">8표정 × 8각도 = 64컷 매트릭스. 원하는 감정+각도 조합을 바로 Reference Image로 사용 가능</div>
  </div>
</div>

<p style="font-weight:700; font-size:15px; margin:0 0 10px;">🏃 포즈 · 활동 시트</p>
<div class="gallery-grid">
  <div class="gallery-card">
    <img src="/ai-video-course/images/character_female/포즈시트_활동_8종.png" alt="활동 8종">
    <div class="g-cap">
      <div class="g-title">activities.png</div>
      <div class="g-desc">활동 8종 — 자전거 / 런닝 / 줄넘기 / 쪼그려앉기 / 점프 / 농구 / 축구 / 요리</div>
    </div>
  </div>
  <div class="gallery-card">
    <img src="/ai-video-course/images/character_female/포즈시트_발레_그랑제테_4컷.png" alt="발레 4컷">
    <div class="g-cap">
      <div class="g-title">sport_1.png</div>
      <div class="g-desc">발레 그랑제테 — high/low angle × mirror 4컷</div>
    </div>
  </div>
  <div class="gallery-card">
    <img src="/ai-video-course/images/character_female/의상시트_스포츠유니폼_4종.png" alt="스포츠 유니폼 4종">
    <div class="g-cap">
      <div class="g-title">sportshot_1.png</div>
      <div class="g-desc">스포츠 유니폼 4종 — 사격 / 스포츠댄스 / 태권도 / 핸드볼</div>
    </div>
  </div>
</div>

<p style="font-weight:700; font-size:15px; margin:24px 0 10px;">👗 의상 시트</p>
<div class="gallery-grid">
  <div class="gallery-card">
    <img src="/ai-video-course/images/character_female/의상시트_12종.png" alt="의상 12종">
    <div class="g-cap">
      <div class="g-title">multishot_cloth.png</div>
      <div class="g-desc">의상 12종 변형 (6×2)</div>
    </div>
  </div>
  <div class="gallery-card">
    <img src="/ai-video-course/images/character_female/의상x뷰_30컷_전신반신얼굴.png" alt="의상×3뷰 30컷">
    <div class="g-cap">
      <div class="g-title">multishot_closeup_2.png</div>
      <div class="g-desc">10벌 × 전신/반신/얼굴 = 30컷 매트릭스</div>
    </div>
  </div>
  <div class="gallery-card">
    <img src="/ai-video-course/images/character_female/장면시트_오피스_2컷.png" alt="오피스 장면">
    <div class="g-cap">
      <div class="g-title">office.png</div>
      <div class="g-desc">오피스 실제 장면 2컷 (앞/뒤)</div>
    </div>
  </div>
</div>

</div>`
</script>
