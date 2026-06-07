<template>
  <div class="lesson-body legacy-content" v-html="html" />
</template>

<script setup>
// Adobe Firefly 비디오 생성
const html = `<!-- 표지 -->
  <div class="cover highlight-target" id="cover">
    <div class="cover-eyebrow">AI 영상 제작 과외 · 교재 03</div>
    <h1 class="cover-title">Adobe Firefly<br>비디오 생성</h1>
    <p class="cover-sub">Firefly로 만드는 AI 영상 — 모델 선택부터 멀티샷·요소까지</p>
    <div class="cover-meta">
      <span class="cover-tag">단원 4개</span>
      <span class="cover-tag">AI 모델 비교</span>
      <span class="cover-tag">캐릭터 요소 기능 포함</span>
    </div>
    <p style="max-width:none;">
      <a class="inline-link" href="https://firefly.adobe.com" target="_blank" style="color:#F97316; border-color:rgba(249,115,22,0.4);">Adobe Firefly — firefly.adobe.com</a>
    </p>
  </div>

  <!-- ═══ 단원 1 ═══ -->
  <div class="unit-header highlight-target" id="unit1">
    <div class="unit-number">단원 1</div>
    <h2 class="unit-title" style="border:none;margin:0;padding:0;font-family:var(--serif);font-size:1.75rem;">Firefly 소개와 메뉴 구성</h2>
  </div>

  <div class="section">
    <!-- 학습 목표 -->
    <div class="callout goal">
      <div class="callout-header"><span class="icon">📌</span> 학습 목표</div>
      <ul>
        <li data-icon="✓">Adobe Firefly에서 비디오 생성 기능에 접근할 수 있다.</li>
        <li data-icon="✓">홈 메뉴와 좌측 사이드바의 각 기능을 설명할 수 있다.</li>
        <li data-icon="✓">기본 설정(해상도·프레임·길이)을 이해한다.</li>
      </ul>
    </div>

    <!-- 1.1 -->
    <h2 id="sec1-1" class="highlight-target">1.1 &nbsp;Adobe Firefly란?</h2>
    <p>Adobe Firefly(파이어플라이)는 Adobe가 개발한 생성형 AI 플랫폼이다. 텍스트 프롬프트 하나로 이미지·비디오·벡터를 생성할 수 있으며, Veo·Kling·Runway 등 파트너 AI 모델을 통합해 제공한다.</p>
    <p>주소: <a class="inline-link" href="https://firefly.adobe.com" target="_blank">firefly.adobe.com</a> (Adobe 계정 필요)</p>

    <div class="callout tip">
      <div class="callout-header"><span class="icon">💡</span> Tip — 크레딧 확인</div>
      <ul>
        <li data-icon="→">Firefly는 크레딧(Credit) 기반으로 운영된다. 무료 플랜도 매월 일정량의 크레딧이 주어진다. 화면 우측 하단에 "XX 크레딧 사용" 표시를 항상 확인하자.</li>
      </ul>
    </div>

    <figure class="screenshot-fig">
      <img src="firefly/스크린샷 2026-05-16 오전 12.26.04.png" alt="Adobe Firefly 메인 홈 화면 — 무엇을 생성하시겠습니까?">
      <figcaption>▲ Adobe Firefly 메인 홈 화면 — "무엇을 생성하시겠습니까?"</figcaption>
    </figure>

    <!-- 1.2 -->
    <h2 id="sec1-2" class="highlight-target">1.2 &nbsp;홈 메뉴 구조</h2>
    <p>Firefly 좌측 메뉴에서 원하는 작업을 선택한다. 각 항목의 기능을 숙지해 두면 작업 흐름이 빨라진다.</p>

    <div class="data-table-wrap">
      <table class="data-table">
        <thead><tr><th>메뉴 항목</th><th>설명</th></tr></thead>
        <tbody>
          <tr><td class="text">만들기</td><td>새 생성 작업 시작. 이미지/비디오/벡터 선택</td></tr>
          <tr><td class="text">생성</td><td>생성 작업 내역 보기</td></tr>
          <tr><td class="text">보드</td><td>이미지·비디오를 핀보드처럼 정리</td></tr>
          <tr><td class="text">AI 어시스턴트 (Beta)</td><td>자연어로 생성 방향 제안받기</td></tr>
          <tr><td class="text">프로덕션</td><td>고품질 프로덕션 영상 생성 (Runway)</td></tr>
          <tr><td class="text">빠른 작업</td><td>자주 쓰는 기능 바로가기</td></tr>
          <tr><td class="text">내 항목 / 즐겨찾기</td><td>저장된 결과물</td></tr>
          <tr><td class="text">맞춤형 모델</td><td>특정 캐릭터/스타일 학습 모델 생성</td></tr>
          <tr><td class="text">갤러리</td><td>Firefly 공개 갤러리</td></tr>
        </tbody>
      </table>
    </div>

    <figure class="screenshot-fig">
      <img src="firefly/스크린샷 2026-05-16 오전 12.25.47.png" alt="Adobe Firefly 좌측 메뉴 — 즐겨찾기(내항목)">
      <figcaption>▲ Adobe Firefly 좌측 메뉴 — 즐겨찾기(내 항목)</figcaption>
    </figure>

    <div class="callout checklist">
      <div class="callout-header"><span class="icon">✅</span> 체크리스트</div>
      <ul>
        <li data-icon="☐">Adobe 계정으로 firefly.adobe.com에 로그인했다.</li>
        <li data-icon="☐">홈 화면에서 "비디오 생성" 버튼을 찾을 수 있다.</li>
        <li data-icon="☐">잔여 크레딧을 확인했다.</li>
      </ul>
    </div>

  </div><!-- /section -->

  <!-- ═══ 단원 2 ═══ -->
  <div class="unit-header highlight-target" id="unit2">
    <div class="unit-number">단원 2</div>
    <h2 class="unit-title" style="border:none;margin:0;padding:0;font-family:var(--serif);font-size:1.75rem;">비디오 생성 — 모델·설정·참조</h2>
  </div>

  <div class="section">
    <!-- 학습 목표 -->
    <div class="callout goal">
      <div class="callout-header"><span class="icon">📌</span> 학습 목표</div>
      <ul>
        <li data-icon="✓">비디오 생성 패널의 일반 설정을 이해한다.</li>
        <li data-icon="✓">AI 모델별 특성을 비교하고 적절한 모델을 선택할 수 있다.</li>
        <li data-icon="✓">참조 프레임(이미지)을 사용해 영상 스타일을 고정할 수 있다.</li>
      </ul>
    </div>

    <!-- 2.1 -->
    <h2 id="sec2-1" class="highlight-target">2.1 &nbsp;비디오 생성 패널 — 일반 설정</h2>
    <p>비디오 생성 화면 좌측의 설정 패널에서 모델, 해상도, 비율, 프레임 속도, 영상 길이를 설정한다.</p>

    <div class="data-table-wrap">
      <table class="data-table">
        <thead><tr><th>설정 항목</th><th>설명</th></tr></thead>
        <tbody>
          <tr><td class="text">모델</td><td>AI 생성 모델 선택 (Kling 3.0, Veo 3.1 등)</td></tr>
          <tr><td class="text">해상도</td><td>720p 또는 1080p</td></tr>
          <tr><td class="text">가로세로비율</td><td>세로(9:16) / 가로(16:9) / 정방형(1:1)</td></tr>
          <tr><td class="text">초당 프레임</td><td>24FPS (영화) / 30FPS (일반)</td></tr>
          <tr><td class="text">실행 시간</td><td>3초 / 5초 / 8초 / 13초</td></tr>
          <tr><td class="text">오디오</td><td>Kling 3.0 Omni 모델에서만 지원</td></tr>
        </tbody>
      </table>
    </div>

    <figure class="screenshot-fig">
      <img src="firefly/스크린샷 2026-05-16 오전 12.24.23.png" alt="비디오 생성 설정 패널 (Kling 3.0, 세로 9:16, 24FPS, 13초)">
      <figcaption>▲ 비디오 생성 설정 패널 — Kling 3.0 / 세로 9:16 / 24FPS / 13초</figcaption>
    </figure>

    <!-- 2.2 -->
    <h2 id="sec2-2" class="highlight-target">2.2 &nbsp;AI 모델 비교</h2>
    <p>Firefly는 여러 AI 파트너 모델을 통합해 제공한다. 각 모델마다 특성이 다르므로 촬영 스타일에 따라 선택한다.</p>

    <div class="data-table-wrap">
      <table class="data-table">
        <thead><tr><th>모델</th><th>특징</th></tr></thead>
        <tbody>
          <tr><td>Veo 3.1</td><td>Google DeepMind 모델. Greater control, physics, realism. 자연스러운 물리 표현.</td></tr>
          <tr><td>Veo 3.1 Fast</td><td>Veo 3.1의 빠른 생성 버전. 빠른 시안 확인에 적합.</td></tr>
          <tr><td>Kling 3.0</td><td>영화 같은 비디오 품질. 정밀한 캐릭터 표현, 일관성 유지.</td></tr>
          <tr><td>Kling 3.0 Omni</td><td>Kling 3.0 + 오디오 지원. 음향 효과 포함 영상 생성 가능.</td></tr>
          <tr><td>Runway Gen-4.5</td><td>Controllable Production-Ready Videos. 편집 제어 강점.</td></tr>
          <tr><td>Ray3 / Ray3.14</td><td>Fast, pro quality videos. 빠른 고품질.</td></tr>
          <tr><td>Sora 2</td><td>OpenAI 모델. Realistic video generation with audio.</td></tr>
          <tr><td>Kling 2.5 Turbo</td><td>Controllable, advanced motion. 동작 제어 최적화.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="callout tip">
      <div class="callout-header"><span class="icon">💡</span> Tip — 모델 선택 기준</div>
      <ul>
        <li data-icon="→">처음 생성할 때는 <strong>Kling 3.0</strong>을 권장한다. 캐릭터 일관성이 높고 세로 영상(9:16)에 최적화되어 있다.</li>
        <li data-icon="→">Veo 3.1은 자연 배경·물리 현상(물, 불, 연기 등)에 더 강하다.</li>
      </ul>
    </div>

    <figure class="screenshot-fig">
      <img src="firefly/스크린샷 2026-05-16 오전 12.25.21.png" alt="AI 모델 선택 드롭다운 (Veo 3.1, Kling 3.0, Runway Gen-4.5 등)">
      <figcaption>▲ AI 모델 선택 드롭다운 — Veo 3.1, Kling 3.0, Runway Gen-4.5 등</figcaption>
    </figure>

    <!-- 2.3 -->
    <h2 id="sec2-3" class="highlight-target">2.3 &nbsp;참조 프레임 — 영상 스타일 고정하기</h2>
    <p>참조 이미지를 사용하면 AI가 해당 이미지의 색감·구도·인물을 참고해 영상을 생성한다. 특정 캐릭터나 장소를 반복 생성할 때 유용하다.</p>
    <p><strong>설정 위치:</strong> 일반 설정 패널 → '참조' 섹션 → 프레임 탭 (또는 이미지 탭)</p>

    <h3>사용 방법</h3>
    <ol class="step-list">
      <li>비디오 생성 패널 좌측 '참조' 섹션 클릭</li>
      <li>'프레임' 탭: 이미 생성된 비디오에서 특정 프레임을 참조 이미지로 사용</li>
      <li>'이미지' 탭: 외부 이미지(jpg/png)를 업로드해 스타일 참조</li>
      <li>참조 강도(Influence) 슬라이더로 영향도 조절 (50~80%가 적당)</li>
      <li>프롬프트 작성 후 '생성' 클릭</li>
    </ol>

    <figure class="screenshot-fig">
      <img src="firefly/스크린샷 2026-05-16 오전 12.24.53.png" alt="Veo 3.1 선택 + 참조 프레임 이미지">
      <figcaption>▲ Veo 3.1 선택 + 참조 프레임 이미지 설정 화면</figcaption>
    </figure>

    <div class="callout checklist">
      <div class="callout-header"><span class="icon">✅</span> 체크리스트</div>
      <ul>
        <li data-icon="☐">일반 설정에서 모델, 해상도, 비율, FPS, 길이를 모두 설정했다.</li>
        <li data-icon="☐">각 AI 모델의 특성 차이를 설명할 수 있다.</li>
        <li data-icon="☐">참조 이미지를 업로드해 스타일이 유지되는지 확인했다.</li>
      </ul>
    </div>

  </div><!-- /section -->

  <!-- ═══ 단원 3 ═══ -->
  <div class="unit-header highlight-target" id="unit3">
    <div class="unit-number">단원 3</div>
    <h2 class="unit-title" style="border:none;margin:0;padding:0;font-family:var(--serif);font-size:1.75rem;">멀티샷 &amp; 프롬프트 작성법</h2>
  </div>

  <div class="section">
    <!-- 학습 목표 -->
    <div class="callout goal">
      <div class="callout-header"><span class="icon">📌</span> 학습 목표</div>
      <ul>
        <li data-icon="✓">멀티샷(Multi-shot) 기능으로 여러 컷을 한 번에 생성할 수 있다.</li>
        <li data-icon="✓">카메라 무빙·샷 크기·분위기를 영어 프롬프트로 표현할 수 있다.</li>
        <li data-icon="✓">프롬프트 공식을 활용해 일관된 스타일의 씬을 만들 수 있다.</li>
      </ul>
    </div>

    <!-- 3.1 -->
    <h2 id="sec3-1" class="highlight-target">3.1 &nbsp;멀티샷(Multi-shot)이란?</h2>
    <p>멀티샷은 스토리보드의 여러 컷을 Firefly에서 한 번에 설계하는 기능이다. 각 샷마다 다른 프롬프트를 입력할 수 있어 씬 전체를 한 작업 세션에서 생성할 수 있다.</p>

    <h3>멀티샷 사용 방법</h3>
    <ol class="step-list">
      <li>비디오 생성 패널 하단 '멀티샷' 토글 활성화</li>
      <li>'샷 추가(+)' 버튼으로 컷 수만큼 샷 탭 생성</li>
      <li>각 샷 탭을 클릭하고 해당 컷의 프롬프트 입력</li>
      <li>전체 설정(해상도·모델)은 공유되며, 각 샷의 프롬프트만 다르게 작성</li>
      <li>'생성' 클릭 — 모든 샷이 순서대로 생성됨</li>
    </ol>

    <figure class="screenshot-fig">
      <img src="firefly/스크린샷 2026-05-16 오전 12.24.38.png" alt="멀티샷 패널 (샷 1~4 탭, 각 샷마다 프롬프트 입력)">
      <figcaption>▲ 멀티샷 패널 — 샷 1~4 탭, 각 샷마다 개별 프롬프트 입력</figcaption>
    </figure>

    <!-- 3.2 -->
    <h2 id="sec3-2" class="highlight-target">3.2 &nbsp;프롬프트 작성 공식</h2>
    <p>Firefly 비디오 프롬프트는 영어로 작성한다. 아래 공식을 따르면 원하는 결과가 나올 확률이 높아진다.</p>

    <p><strong>공식:</strong> [카메라 무빙] + [샷 크기] + [피사체 묘사] + [행동] + [배경/장소] + [분위기/스타일]</p>

    <div class="prompt-box">
      <div class="prompt-label">프롬프트 예시 1</div>
      <pre>Handheld shot of a busy Korean street crosswalk.
A schoolgirl runs quickly from right to left across the frame
and exits the frame on the left side.
The camera continues filming the empty crosswalk after she leaves.
Korean urban atmosphere, cinematic realism, natural motion.</pre>
    </div>

    <div class="prompt-box">
      <div class="prompt-label">프롬프트 예시 2</div>
      <pre>Low angle shot, camera panning upward.
A teenage girl in school uniform stands at a gate,
looking forward with a neutral expression.
Shallow depth of field, soft morning light, Korean drama aesthetic.</pre>
    </div>

    <h3>카메라 무빙 프롬프트 키워드</h3>
    <div class="data-table-wrap">
      <table class="data-table">
        <thead><tr><th>무빙</th><th>프롬프트 키워드</th></tr></thead>
        <tbody>
          <tr><td class="text">패닝 (좌우)</td><td>camera pans left / camera pans right</td></tr>
          <tr><td class="text">틸팅 (상하)</td><td>camera tilts up / camera tilts down</td></tr>
          <tr><td class="text">줌인</td><td>slow zoom in / gradually zooming in</td></tr>
          <tr><td class="text">줌아웃</td><td>slow zoom out / pull back</td></tr>
          <tr><td class="text">핸드헬드</td><td>handheld camera, natural shake</td></tr>
          <tr><td class="text">트래킹</td><td>tracking shot, follow shot, camera follows subject</td></tr>
          <tr><td class="text">고정</td><td>static shot, fixed camera</td></tr>
          <tr><td class="text">드론</td><td>aerial shot, bird's eye view, drone footage</td></tr>
        </tbody>
      </table>
    </div>

    <figure class="screenshot-fig">
      <img src="firefly/스크린샷 2026-05-16 오후 11.01.48.png" alt="프롬프트 예시 텍스트 (Handheld shot of a busy Korean street crosswalk…)">
      <figcaption>▲ 프롬프트 입력 예시 — Handheld shot of a busy Korean street crosswalk…</figcaption>
    </figure>

    <div class="callout checklist">
      <div class="callout-header"><span class="icon">✅</span> 체크리스트</div>
      <ul>
        <li data-icon="☐">멀티샷 기능으로 3개 이상의 샷을 한 번에 생성했다.</li>
        <li data-icon="☐">프롬프트에 카메라 무빙 키워드를 포함했다.</li>
        <li data-icon="☐">생성된 영상에서 원하는 무빙이 표현되는지 확인했다.</li>
      </ul>
    </div>

  </div><!-- /section -->

  <!-- ═══ 단원 4 ═══ -->
  <div class="unit-header highlight-target" id="unit4">
    <div class="unit-number">단원 4</div>
    <h2 class="unit-title" style="border:none;margin:0;padding:0;font-family:var(--serif);font-size:1.75rem;">이미지 편집 &amp; 요소(Elements) 기능</h2>
  </div>

  <div class="section">
    <!-- 학습 목표 -->
    <div class="callout goal">
      <div class="callout-header"><span class="icon">📌</span> 학습 목표</div>
      <ul>
        <li data-icon="✓">요소(Element)를 생성·등록해 캐릭터 일관성을 유지할 수 있다.</li>
        <li data-icon="✓">이미지 편집 기능(채우기·제거·확장·업스케일)을 활용할 수 있다.</li>
        <li data-icon="✓">@멘션으로 요소를 프롬프트에 연결할 수 있다.</li>
      </ul>
    </div>

    <!-- 4.1 -->
    <h2 id="sec4-1" class="highlight-target">4.1 &nbsp;요소(Elements) — 캐릭터 일관성 유지</h2>
    <p>요소는 특정 인물이나 오브젝트의 외모 정보를 저장해 두는 기능이다. 프롬프트에 <strong>@요소이름</strong>을 붙이면 AI가 해당 설명을 자동으로 참조해 캐릭터 외모를 일관되게 유지한다.</p>

    <h3>요소 생성 방법</h3>
    <ol class="step-list">
      <li>Firefly 홈 → 좌측 사이드바 '요소' 클릭</li>
      <li>기존 생성 결과물에서 '요소로 저장' 아이콘 클릭 (또는 + 새로 만들기)</li>
      <li>요소 이름 입력 (예: 사랑이) — "@"는 포함하지 말 것</li>
      <li>유형 선택: 항목(오브젝트) / 인물</li>
      <li>설명 입력: 캐릭터 외모 세부 묘사 (한국어 가능, 영어 권장)</li>
      <li>'변경 사항 저장' 클릭</li>
    </ol>

    <figure class="screenshot-fig">
      <img src="firefly/스크린샷 2026-05-16 오후 11.02.51.png" alt="요소 패널 (캐릭터 요소 사랑이)">
      <figcaption>▲ 요소 패널 — 캐릭터 요소 "사랑이" 등록 화면</figcaption>
    </figure>

    <h3>요소 설명 작성 팁</h3>
    <p>설명란에 캐릭터의 헤어스타일, 나이, 의상, 체형, 피부색 등을 최대한 상세하게 적는다.</p>

    <div class="prompt-box">
      <div class="prompt-label">요소 설명 예시 — 사랑이</div>
      <pre>가슴까지 오는 연갈색 웨이브 머리, 17세 한국 고등학생,
파란 스트라이프 넥타이, 회색 체크 스커트의 교복 착용, 니삭스 착용.</pre>
    </div>

    <figure class="screenshot-fig">
      <img src="firefly/스크린샷 2026-05-16 오후 11.03.07.png" alt="요소 편집 창 (이름: 사랑이, 유형: 항목, 설명 텍스트)">
      <figcaption>▲ 요소 편집 창 — 이름: 사랑이 / 유형: 항목 / 설명 텍스트 입력</figcaption>
    </figure>

    <!-- 4.2 -->
    <h2 id="sec4-2" class="highlight-target">4.2 &nbsp;이미지 편집 기능</h2>
    <p>Firefly의 이미지 편집 도구는 이미 생성된 이미지를 수정하거나 확장하는 데 사용한다.</p>

    <div class="data-table-wrap">
      <table class="data-table">
        <thead><tr><th>기능</th><th>설명</th></tr></thead>
        <tbody>
          <tr><td class="text">채우기 (Fill)</td><td>이미지의 특정 영역을 선택(브러시)하고 새로운 내용으로 대체. 예: 배경 교체, 의상 변경</td></tr>
          <tr><td class="text">제거 (Remove)</td><td>선택 영역의 오브젝트를 AI로 지워 배경을 채움</td></tr>
          <tr><td class="text">확장 (Expand)</td><td>이미지 캔버스를 넓혀 없는 부분을 AI로 생성 (아웃페인팅)</td></tr>
          <tr><td class="text">업스케일</td><td>저해상도 이미지를 고해상도로 업스케일</td></tr>
          <tr><td class="text">배경 제거</td><td>AI가 자동으로 배경을 투명하게 제거</td></tr>
        </tbody>
      </table>
    </div>

    <figure class="screenshot-fig">
      <img src="firefly/스크린샷 2026-05-16 오후 11.04.14.png" alt="이미지 편집 — 채우기 도구 화면">
      <figcaption>▲ 이미지 편집 — 채우기(Fill) 도구 화면</figcaption>
    </figure>

    <div class="callout checklist">
      <div class="callout-header"><span class="icon">✅</span> 체크리스트</div>
      <ul>
        <li data-icon="☐">요소(Element)를 1개 이상 생성하고 저장했다.</li>
        <li data-icon="☐">프롬프트에 @요소이름을 붙여 캐릭터가 일관되게 나오는지 확인했다.</li>
        <li data-icon="☐">이미지 편집 채우기 기능으로 배경이나 오브젝트를 교체해 봤다.</li>
      </ul>
    </div>

  </div><!-- /section -->`
</script>

<style>
/* ── 리셋 & 기본 ─────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:          #FAFAF8;
  --surface:     #FFFFFF;
  --sidebar-bg:  #16213A;
  --sidebar-act: #1E2F50;
  --ink:         #1A1A18;
  --ink-mid:     #4B5563;
  --ink-light:   #9CA3AF;
  --accent:      #C2410C;
  --accent-pale: #FFF7ED;
  --green:       #166534;
  --green-pale:  #F0FDF4;
  --teal:        #0F766E;
  --teal-pale:   #F0FDFA;
  --border:      #E5E5E0;
  --prompt-bg:   #0F172A;
  --prompt-txt:  #CBD5E1;
  --prompt-acc:  #FBD38D;
  --serif:       'Noto Serif KR', serif;
  --sans:        'Noto Sans KR', sans-serif;
  --radius:      6px;
}

html { scroll-behavior: smooth; }

body {
  font-family: var(--sans);
  background: var(--bg);
  color: var(--ink);
  font-size: 16px;
  line-height: 1.7;
  display: flex;
  min-height: 100vh;
}

/* ── 사이드바 ─────────────────────────────────────── */
.sidebar {
  width: 260px;
  flex-shrink: 0;
  background: var(--sidebar-bg);
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  padding: 32px 0 40px;
  scrollbar-width: thin;
  scrollbar-color: #2E4060 transparent;
}

.sidebar-brand {
  padding: 0 24px 24px;
  border-bottom: 1px solid #2E4060;
  margin-bottom: 20px;
}
.sidebar-brand .label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #64748B;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.sidebar-brand .title {
  font-family: var(--serif);
  font-size: 18px;
  color: #F1F5F9;
  line-height: 1.4;
}

.nav-group { margin-bottom: 8px; }
.nav-unit {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #475569;
  text-transform: uppercase;
  padding: 10px 24px 4px;
}
.nav-link {
  display: block;
  padding: 7px 24px;
  font-size: 13.5px;
  color: #94A3B8;
  text-decoration: none;
  transition: color 0.15s, background 0.15s;
  line-height: 1.4;
}
.nav-link:hover { color: #E2E8F0; background: rgba(255,255,255,0.04); }
.nav-link.active { color: #F97316; background: rgba(249,115,22,0.08); font-weight: 600; }
.nav-link.sub {
  padding-left: 36px;
  font-size: 12.5px;
}

/* ── 메인 콘텐츠 ────────────────────────────────── */
.main {
  flex: 1;
  min-width: 0;
  padding: 0 0 80px;
}

/* ── 표지 ────────────────────────────────────────── */
.cover {
  background: var(--sidebar-bg);
  padding: 72px 64px 64px;
  position: relative;
  overflow: hidden;
}
.cover::after {
  content: '';
  position: absolute;
  top: 0; right: 0; bottom: 0;
  width: 40%;
  background: linear-gradient(to right, transparent, rgba(249,115,22,0.04));
  pointer-events: none;
}
.cover-eyebrow {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #F97316;
  margin-bottom: 16px;
}
.cover-title {
  font-family: var(--serif);
  font-size: 3rem;
  font-weight: 700;
  color: #F1F5F9;
  line-height: 1.2;
  margin-bottom: 16px;
  max-width: 600px;
}
.cover-sub {
  font-size: 1.125rem;
  color: #94A3B8;
  margin-bottom: 32px;
}
.cover-meta {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}
.cover-tag {
  font-size: 13px;
  color: #64748B;
  padding: 4px 12px;
  border: 1px solid #2E4060;
  border-radius: 20px;
}

/* ── 섹션 컨테이너 ───────────────────────────────── */
.section {
  padding: 60px 64px 20px;
  border-bottom: 1px solid var(--border);
}
.section:last-child { border-bottom: none; }

/* ── 단원 헤더 ────────────────────────────────────── */
.unit-header {
  padding: 48px 64px 40px;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
}
.unit-number {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 8px;
}
.unit-title {
  font-family: var(--serif);
  font-size: 2rem;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.3;
  max-width: 640px;
}

/* ── 헤딩 ─────────────────────────────────────────── */
h2 {
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--ink);
  margin: 48px 0 16px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--border);
  line-height: 1.35;
}
h2:first-child { margin-top: 0; }

h3 {
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--teal);
  margin: 32px 0 10px;
  line-height: 1.4;
}

/* ── 본문 ─────────────────────────────────────────── */
p {
  max-width: 70ch;
  color: var(--ink);
  margin-bottom: 16px;
  line-height: 1.75;
}

/* ── 불릿 리스트 ──────────────────────────────────── */
ul.content-list {
  list-style: none;
  margin: 0 0 20px;
  max-width: 68ch;
}
ul.content-list li {
  padding: 6px 0 6px 20px;
  position: relative;
  color: var(--ink);
  line-height: 1.65;
  border-bottom: 1px solid #F0F0EC;
}
ul.content-list li:last-child { border-bottom: none; }
ul.content-list li::before {
  content: '';
  position: absolute;
  left: 0; top: 15px;
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.5;
}
ul.content-list li strong {
  color: var(--ink);
  font-weight: 600;
}

/* ── 번호 리스트 ──────────────────────────────────── */
ol.step-list {
  list-style: none;
  counter-reset: steps;
  margin: 0 0 20px;
  max-width: 68ch;
}
ol.step-list li {
  counter-increment: steps;
  padding: 8px 0 8px 40px;
  position: relative;
  line-height: 1.65;
  border-bottom: 1px solid #F0F0EC;
}
ol.step-list li:last-child { border-bottom: none; }
ol.step-list li::before {
  content: counter(steps);
  position: absolute;
  left: 0; top: 7px;
  width: 24px; height: 24px;
  background: var(--accent);
  color: white;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ── 콜아웃 박스 ─────────────────────────────────── */
.callout {
  border-radius: var(--radius);
  padding: 20px 24px;
  margin: 24px 0;
  max-width: 680px;
}
.callout-header {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.callout-header .icon { font-size: 16px; }
.callout.goal {
  background: var(--teal-pale);
}
.callout.goal .callout-header { color: var(--teal); }
.callout.goal ul { color: #1A4A45; }

.callout.checklist {
  background: var(--green-pale);
}
.callout.checklist .callout-header { color: var(--green); }

.callout.tip {
  background: var(--accent-pale);
}
.callout.tip .callout-header { color: var(--accent); }

.callout ul {
  list-style: none;
  margin: 0;
}
.callout ul li {
  padding: 4px 0 4px 24px;
  position: relative;
  font-size: 14.5px;
  line-height: 1.6;
}
.callout ul li::before {
  content: attr(data-icon);
  position: absolute;
  left: 0;
}

/* ── 데이터 테이블 ────────────────────────────────── */
.data-table-wrap {
  overflow-x: auto;
  margin: 16px 0 28px;
  max-width: 680px;
}
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14.5px;
}
.data-table thead tr {
  background: var(--sidebar-bg);
  color: #E2E8F0;
}
.data-table thead th {
  padding: 10px 16px;
  text-align: left;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.04em;
}
.data-table thead th:first-child { border-radius: var(--radius) 0 0 0; }
.data-table thead th:last-child  { border-radius: 0 var(--radius) 0 0; }
.data-table tbody tr {
  border-bottom: 1px solid var(--border);
}
.data-table tbody tr:last-child { border-bottom: none; }
.data-table tbody tr:nth-child(even) { background: #FAFAF6; }
.data-table tbody td {
  padding: 10px 16px;
  color: var(--ink);
  vertical-align: top;
  line-height: 1.6;
}
.data-table tbody td:first-child {
  font-weight: 600;
  color: var(--ink);
  font-family: 'Courier New', monospace;
  font-size: 13px;
  white-space: nowrap;
}
.data-table tbody td:first-child.text {
  font-family: var(--sans);
  font-size: 14.5px;
}

/* ── 프롬프트 코드 박스 ───────────────────────────── */
.prompt-box {
  background: var(--prompt-bg);
  border-radius: var(--radius);
  padding: 20px 24px;
  margin: 16px 0 28px;
  max-width: 680px;
  position: relative;
}
.prompt-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #475569;
  margin-bottom: 10px;
}
.prompt-box pre {
  font-family: 'Courier New', 'Consolas', monospace;
  font-size: 13.5px;
  color: var(--prompt-txt);
  line-height: 1.8;
  white-space: pre-wrap;
  word-break: break-word;
}
.prompt-box .param { color: var(--prompt-acc); font-weight: 600; }

/* ── 구분선 ───────────────────────────────────────── */
.divider {
  height: 1px;
  background: var(--border);
  margin: 32px 0;
  max-width: 680px;
}

/* ── 스크롤 하이라이트 ─────────────────────────────── */
.highlight-target {
  scroll-margin-top: 24px;
}

/* ── 스크린샷 이미지 ───────────────────────────────── */
.screenshot-fig {
  margin: 16px 0 28px;
  max-width: 640px;
}
.screenshot-fig img {
  width: 100%;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  display: block;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
}
.screenshot-fig figcaption {
  font-size: 12.5px;
  color: var(--ink-light);
  margin-top: 6px;
  padding-left: 2px;
}

/* ── 링크 ──────────────────────────────────────────── */
a.inline-link {
  color: var(--accent);
  text-decoration: none;
  border-bottom: 1px solid rgba(194,65,12,0.3);
  transition: border-color 0.15s;
}
a.inline-link:hover { border-color: var(--accent); }

/* ── 인쇄 CSS ──────────────────────────────────────── */
@media print {
  * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }

  body { display: block; font-size: 10pt; }

  .sidebar { display: none; }

  .main { padding: 0; }

  .cover {
    padding: 32pt 40pt;
    page-break-after: always;
  }
  .cover-title { font-size: 26pt; }
  .cover-sub    { font-size: 13pt; }

  .unit-header {
    break-before: page;
    padding: 24pt 40pt 20pt;
  }

  .section { padding: 16pt 40pt 12pt; }

  h2 { break-after: avoid; font-size: 14pt; margin-top: 18pt; }
  h3 { break-after: avoid; font-size: 11pt; margin-top: 12pt; }
  p, ul.content-list, ol.step-list { max-width: 100%; }

  .callout     { break-inside: avoid; }
  .prompt-box  { break-inside: avoid; }
  .data-table-wrap { break-inside: avoid; }
  .screenshot-fig  { break-inside: avoid; max-width: 100%; }

  a.inline-link::after {
    content: " (" attr(href) ")";
    font-size: 8pt;
    color: #888;
  }

  @page {
    margin: 20mm 18mm 22mm;
    @bottom-center {
      content: counter(page);
      font-size: 9pt;
      color: #aaa;
    }
  }
}
.legacy-content .app { display: block !important; }
.legacy-content .sidebar { display: none !important; }
.legacy-content .main-col { margin-left: 0 !important; }
</style>
