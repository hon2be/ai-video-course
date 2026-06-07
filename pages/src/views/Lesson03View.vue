<template>
<div class="lesson-body textbook">

  <section class="cover" id="cover">
    <div class="cover-eyebrow">AI 영상 제작 과외 · 교재 03</div>
    <div class="cover-title">Adobe Firefly 비디오 생성</div>
    <div class="cover-sub">비디오 생성 · 모델 비교 · 멀티샷 · 이미지 편집</div>
    <div class="cover-meta">
      <span class="cover-tag">단원 4개</span>
      <span class="cover-tag">Kling · Veo · Runway</span>
    </div>
  </section>

  <!-- 단원 1 -->
  <div class="unit-header" id="unit1">
    <div class="unit-number">단원 1</div>
    <div class="unit-title">Firefly 소개와 메뉴 구성</div>
  </div>

  <section class="lesson-section">
    <div class="callout goal">
      <div class="callout-header"><span>📌</span> 학습 목표</div>
      <ul>
        <li data-icon="✓">Adobe Firefly에서 비디오 생성 기능에 접근할 수 있다.</li>
        <li data-icon="✓">홈 메뉴와 좌측 사이드바의 각 기능을 설명할 수 있다.</li>
      </ul>
    </div>
  </section>

  <section class="lesson-section" id="sec1-1">
    <h2>1.1 Adobe Firefly란?</h2>
    <p>Adobe Firefly(파이어플라이)는 Adobe가 개발한 생성형 AI 플랫폼이다. 텍스트 프롬프트 하나로 이미지·비디오·벡터를 생성할 수 있으며, Veo·Kling·Runway 등 파트너 AI 모델을 통합해 제공한다.</p>
    <p>주소: <a class="inline-link" href="https://firefly.adobe.com" target="_blank">firefly.adobe.com</a> (Adobe 계정 필요)</p>
    <div class="callout tip">
      <div class="callout-header"><span>💡</span> Tip — 크레딧 확인</div>
      <ul><li data-icon="→">Firefly는 크레딧(Credit) 기반으로 운영된다. 무료 플랜도 매월 일정량의 크레딧이 주어진다.</li></ul>
    </div>
    <AnnotatedImage
      src="/ai-video-course/firefly/ff_home.png"
      caption="▲ Adobe Firefly 메인 홈 화면"
      :annotations="[
        { x: 8, y: 50, label: '좌측 메뉴 — 만들기·보드·맞춤형 모델 등 기능 모음' },
        { x: 50, y: 20, label: '상단 배너 — 무료 생성 이벤트 안내' },
        { x: 50, y: 55, label: '빠른 생성 — 이미지/비디오 바로 생성 입력창' },
        { x: 92, y: 6, label: '크레딧 받기 — 잔여 크레딧 확인' },
      ]"
    />
  </section>

  <section class="lesson-section" id="sec1-2">
    <h2>1.2 홈 메뉴 구조</h2>
    <div class="data-table-wrap">
      <table class="data-table">
        <thead><tr><th>메뉴 항목</th><th>설명</th></tr></thead>
        <tbody>
          <tr><td class="text">만들기</td><td>새 생성 작업 시작. 이미지/비디오/벡터 선택</td></tr>
          <tr><td class="text">AI 어시스턴트 (Beta)</td><td>자연어로 생성 방향 제안받기</td></tr>
          <tr><td class="text">맞춤형 모델</td><td>특정 캐릭터/스타일 학습 모델 생성</td></tr>
          <tr><td class="text">보드</td><td>이미지·비디오를 핀보드처럼 정리</td></tr>
          <tr><td class="text">갤러리</td><td>Firefly 공개 갤러리</td></tr>
        </tbody>
      </table>
    </div>
    <figure class="screenshot-fig">
      <img src="/ai-video-course/firefly/ff_sidebar.png" alt="Adobe Firefly 좌측 메뉴">
      <figcaption>▲ Adobe Firefly 좌측 메뉴 — 즐겨찾기(내 항목)</figcaption>
    </figure>
    <div class="callout checklist">
      <div class="callout-header"><span>✅</span> 체크리스트</div>
      <ul>
        <li data-icon="☐">Adobe 계정으로 firefly.adobe.com에 로그인했다.</li>
        <li data-icon="☐">잔여 크레딧을 확인했다.</li>
      </ul>
    </div>
    <YoutubeWidget lesson-id="03" section-id="unit1" />
  </section>

  <!-- 단원 2 -->
  <div class="unit-header" id="unit2">
    <div class="unit-number">단원 2</div>
    <div class="unit-title">비디오 생성 — 모델·설정·참조</div>
  </div>

  <section class="lesson-section">
    <div class="callout goal">
      <div class="callout-header"><span>📌</span> 학습 목표</div>
      <ul>
        <li data-icon="✓">비디오 생성 패널의 일반 설정을 이해한다.</li>
        <li data-icon="✓">AI 모델별 특성을 비교하고 적절한 모델을 선택할 수 있다.</li>
        <li data-icon="✓">참조 프레임(이미지)을 사용해 영상 스타일을 고정할 수 있다.</li>
      </ul>
    </div>
  </section>

  <section class="lesson-section" id="sec2-1">
    <h2>2.1 비디오 생성 패널 — 일반 설정</h2>
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
    <AnnotatedImage
      src="/ai-video-course/firefly/ff_setting_panel.png"
      caption="▲ 비디오 생성 설정 패널 (Kling 3.0 기준)"
      :annotations="[
        { x: 11, y: 16, label: '모델 — 여기서 Kling 3.0 선택. 클릭하면 목록 열림' },
        { x: 11, y: 26, label: '가로세로비율 — 세로(9:16) 선택 시 쇼츠·릴스용' },
        { x: 11, y: 36, label: '실행 시간 — 13초 선택. 길수록 크레딧 더 소모' },
        { x: 11, y: 54, label: '프레임 — 생성된 영상의 특정 프레임을 참조로 지정 가능' },
        { x: 50, y: 84, label: '샷 탭 — 멀티샷 탭. 각 탭마다 다른 프롬프트 입력' },
        { x: 50, y: 93, label: '프롬프트 입력창 — 생성할 영상 내용을 영어로 작성' },
        { x: 95, y: 96, label: '생성 버튼 — 클릭하면 영상 생성 시작' },
      ]"
    />
  </section>

  <section class="lesson-section" id="sec2-2">
    <h2>2.2 AI 모델 비교</h2>
    <div class="data-table-wrap">
      <table class="data-table">
        <thead><tr><th>모델</th><th>특징</th></tr></thead>
        <tbody>
          <tr><td>Veo 3.1</td><td>Google DeepMind 모델. 자연스러운 물리 표현.</td></tr>
          <tr><td>Kling 3.0</td><td>영화 같은 비디오 품질. 정밀한 캐릭터 표현, 일관성 유지.</td></tr>
          <tr><td>Kling 3.0 Omni</td><td>Kling 3.0 + 오디오 지원. 음향 효과 포함 영상 생성.</td></tr>
          <tr><td>Runway Gen-4.5</td><td>Controllable Production-Ready Videos. 편집 제어 강점.</td></tr>
          <tr><td>Sora 2</td><td>OpenAI 모델. Realistic video generation with audio.</td></tr>
        </tbody>
      </table>
    </div>
    <div class="callout tip">
      <div class="callout-header"><span>💡</span> Tip — 모델 선택 기준</div>
      <ul>
        <li data-icon="→">처음 생성할 때는 <strong>Kling 3.0</strong>을 권장한다. 캐릭터 일관성이 높고 세로 영상(9:16)에 최적화되어 있다.</li>
        <li data-icon="→">Veo 3.1은 자연 배경·물리 현상(물, 불, 연기 등)에 더 강하다.</li>
      </ul>
    </div>
    <figure class="screenshot-fig">
      <img src="/ai-video-course/firefly/ff_model_select.png" alt="AI 모델 선택 드롭다운">
      <figcaption>▲ AI 모델 선택 드롭다운 — Veo 3.1, Kling 3.0, Runway Gen-4.5 등</figcaption>
    </figure>
  </section>

  <section class="lesson-section" id="sec2-3">
    <h2>2.3 참조 프레임 — 영상 스타일 고정하기</h2>
    <p>참조 이미지를 사용하면 AI가 해당 이미지의 색감·구도·인물을 참고해 영상을 생성한다.</p>
    <ol class="step-list">
      <li>비디오 생성 패널 좌측 '참조' 섹션 클릭</li>
      <li>'이미지' 탭: 외부 이미지(jpg/png)를 업로드해 스타일 참조</li>
      <li>참조 강도(Influence) 슬라이더로 영향도 조절 (50~80%가 적당)</li>
      <li>프롬프트 작성 후 '생성' 클릭</li>
    </ol>
    <AnnotatedImage
      src="/ai-video-course/firefly/ff_reference_frame.png"
      caption="▲ Veo 3.1 + 참조 이미지 설정 화면"
      :annotations="[
        { x: 11, y: 17, label: '모델 — Veo 3.1 선택된 상태' },
        { x: 11, y: 50, label: '참조 섹션 — 여기서 참조 이미지/프레임을 지정' },
        { x: 8,  y: 62, label: '프레임 탭 — 기존 생성 영상에서 특정 프레임을 참조' },
        { x: 18, y: 62, label: '이미지 탭 — 외부 이미지(jpg/png)를 업로드해 참조' },
        { x: 7,  y: 73, label: '참조 이미지 1번 — 클릭해서 선택, 삭제 가능' },
        { x: 18, y: 73, label: '참조 이미지 2번 — 여러 장 추가할수록 영향 강해짐' },
        { x: 37, y: 93, label: '프롬프트 — 참조 이미지 + 프롬프트가 함께 영상 방향 결정' },
        { x: 95, y: 96, label: '생성 버튼' },
      ]"
    />
    <div class="callout checklist">
      <div class="callout-header"><span>✅</span> 체크리스트</div>
      <ul>
        <li data-icon="☐">일반 설정에서 모델, 해상도, 비율, FPS, 길이를 모두 설정했다.</li>
        <li data-icon="☐">참조 이미지를 업로드해 스타일이 유지되는지 확인했다.</li>
      </ul>
    </div>
    <YoutubeWidget lesson-id="03" section-id="unit2" />
  </section>

  <!-- 단원 3 -->
  <div class="unit-header" id="unit3">
    <div class="unit-number">단원 3</div>
    <div class="unit-title">멀티샷 &amp; 프롬프트 작성법</div>
  </div>

  <section class="lesson-section">
    <div class="callout goal">
      <div class="callout-header"><span>📌</span> 학습 목표</div>
      <ul>
        <li data-icon="✓">멀티샷(Multi-shot) 기능으로 여러 컷을 한 번에 생성할 수 있다.</li>
        <li data-icon="✓">카메라 무빙·샷 크기·분위기를 영어 프롬프트로 표현할 수 있다.</li>
      </ul>
    </div>
  </section>

  <section class="lesson-section" id="sec3-1">
    <h2>3.1 멀티샷(Multi-shot)이란?</h2>
    <div class="callout caution">
      <div class="callout-header"><span>⚠️</span> Kling 모델 전용 기능</div>
      <ul><li data-icon="→">멀티샷은 <strong>Kling 3.0 / Kling 3.0 Omni / Kling 2.5</strong> 모델에서만 사용 가능하다. Veo·Runway·Sora 등 다른 모델을 선택하면 멀티샷 탭이 비활성화된다. 반드시 모델을 Kling으로 먼저 변경하자.</li></ul>
    </div>
    <ol class="step-list">
      <li>비디오 생성 패널 하단 '멀티샷' 토글 활성화</li>
      <li>'샷 추가(+)' 버튼으로 컷 수만큼 샷 탭 생성</li>
      <li>각 샷 탭을 클릭하고 해당 컷의 프롬프트 입력</li>
      <li>'생성' 클릭 — 모든 샷이 순서대로 생성됨</li>
    </ol>
    <figure class="screenshot-fig">
      <img src="/ai-video-course/firefly/ff_multishot.png" alt="멀티샷 패널">
      <figcaption>▲ 멀티샷 패널 — 샷 1~4 탭, 각 샷마다 개별 프롬프트 입력</figcaption>
    </figure>
  </section>

  <section class="lesson-section" id="sec3-2">
    <h2>3.2 프롬프트 작성 공식</h2>
    <p><strong>공식:</strong> [카메라 무빙] + [샷 크기] + [피사체 묘사] + [행동] + [배경/장소] + [분위기/스타일]</p>
    <div class="prompt-box">
      <div class="prompt-label">프롬프트 예시 1</div>
      <pre>Handheld shot of a busy Korean street crosswalk.
A schoolgirl runs quickly from right to left across the frame.
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
          <tr><td class="text">트래킹</td><td>tracking shot, follow shot</td></tr>
          <tr><td class="text">고정</td><td>static shot, fixed camera</td></tr>
          <tr><td class="text">드론</td><td>aerial shot, bird's eye view</td></tr>
        </tbody>
      </table>
    </div>
    <figure class="screenshot-fig">
      <img src="/ai-video-course/firefly/ff_prompt_example.png" alt="프롬프트 입력 예시">
      <figcaption>▲ 프롬프트 입력 예시 — Handheld shot of a busy Korean street crosswalk…</figcaption>
    </figure>
    <div class="callout checklist">
      <div class="callout-header"><span>✅</span> 체크리스트</div>
      <ul>
        <li data-icon="☐">멀티샷 기능으로 3개 이상의 샷을 한 번에 생성했다.</li>
        <li data-icon="☐">프롬프트에 카메라 무빙 키워드를 포함했다.</li>
      </ul>
    </div>
  </section>

  <!-- 단원 4 -->
  <div class="unit-header" id="unit4">
    <div class="unit-number">단원 4</div>
    <div class="unit-title">이미지 편집 &amp; 요소(Elements) 기능</div>
  </div>

  <section class="lesson-section">
    <div class="callout goal">
      <div class="callout-header"><span>📌</span> 학습 목표</div>
      <ul>
        <li data-icon="✓">요소(Element)를 생성·등록해 캐릭터 일관성을 유지할 수 있다.</li>
        <li data-icon="✓">이미지 편집 기능(채우기·제거·확장·업스케일)을 활용할 수 있다.</li>
        <li data-icon="✓">@멘션으로 요소를 프롬프트에 연결할 수 있다.</li>
      </ul>
    </div>
  </section>

  <section class="lesson-section" id="sec4-1">
    <h2>4.1 요소(Elements) — 캐릭터 일관성 유지</h2>
    <div class="callout caution">
      <div class="callout-header"><span>⚠️</span> Kling 모델 전용 기능</div>
      <ul><li data-icon="→">요소(@멘션) 기능은 <strong>Kling 계열 모델에서만</strong> 작동한다. 비디오 생성 모델을 Kling으로 선택한 상태에서만 @요소이름이 프롬프트에 반영된다.</li></ul>
    </div>
    <p>요소는 특정 인물이나 오브젝트의 외모 정보를 저장해 두는 기능이다. 프롬프트에 <strong>@요소이름</strong>을 붙이면 AI가 해당 설명을 자동으로 참조해 캐릭터 외모를 일관되게 유지한다.</p>
    <ol class="step-list">
      <li>Firefly 홈 → 좌측 사이드바 '요소' 클릭</li>
      <li>기존 생성 결과물에서 '요소로 저장' 아이콘 클릭</li>
      <li>요소 이름 입력 (예: 사랑이)</li>
      <li>유형 선택: 항목(오브젝트) / 인물</li>
      <li>설명 입력: 캐릭터 외모 세부 묘사</li>
      <li>'변경 사항 저장' 클릭</li>
    </ol>
    <figure class="screenshot-fig">
      <img src="/ai-video-course/firefly/ff_elements_panel.png" alt="요소 패널">
      <figcaption>▲ 요소 패널 — 캐릭터 요소 "사랑이" 등록 화면</figcaption>
    </figure>
    <div class="prompt-box">
      <div class="prompt-label">요소 설명 예시 — 사랑이</div>
      <pre>가슴까지 오는 연갈색 웨이브 머리, 17세 한국 고등학생,
파란 스트라이프 넥타이, 회색 체크 스커트의 교복 착용, 니삭스 착용.</pre>
    </div>
    <figure class="screenshot-fig">
      <img src="/ai-video-course/firefly/ff_element_edit.png" alt="요소 편집 창">
      <figcaption>▲ 요소 편집 창 — 이름: 사랑이 / 유형: 항목 / 설명 텍스트 입력</figcaption>
    </figure>
  </section>

  <section class="lesson-section" id="sec4-2">
    <h2>4.2 이미지 편집 기능</h2>
    <div class="data-table-wrap">
      <table class="data-table">
        <thead><tr><th>기능</th><th>설명</th></tr></thead>
        <tbody>
          <tr><td class="text">채우기 (Fill)</td><td>이미지의 특정 영역을 선택하고 새로운 내용으로 대체</td></tr>
          <tr><td class="text">제거 (Remove)</td><td>선택 영역의 오브젝트를 AI로 지워 배경을 채움</td></tr>
          <tr><td class="text">확장 (Expand)</td><td>이미지 캔버스를 넓혀 없는 부분을 AI로 생성 (아웃페인팅)</td></tr>
          <tr><td class="text">업스케일</td><td>저해상도 이미지를 고해상도로 업스케일</td></tr>
          <tr><td class="text">배경 제거</td><td>AI가 자동으로 배경을 투명하게 제거</td></tr>
        </tbody>
      </table>
    </div>
    <figure class="screenshot-fig">
      <img src="/ai-video-course/firefly/ff_fill_tool.png" alt="이미지 편집 — 채우기 도구">
      <figcaption>▲ 이미지 편집 — 채우기(Fill) 도구 화면</figcaption>
    </figure>
    <div class="callout checklist">
      <div class="callout-header"><span>✅</span> 체크리스트</div>
      <ul>
        <li data-icon="☐">요소(Element)를 1개 이상 생성하고 저장했다.</li>
        <li data-icon="☐">프롬프트에 @요소이름을 붙여 캐릭터가 일관되게 나오는지 확인했다.</li>
        <li data-icon="☐">이미지 편집 채우기 기능으로 배경이나 오브젝트를 교체해 봤다.</li>
      </ul>
    </div>
    <YoutubeWidget lesson-id="03" section-id="unit4" />
  </section>

</div>
</template>

<script setup>
import YoutubeWidget from '@/components/YoutubeWidget.vue'
import AnnotatedImage from '@/components/AnnotatedImage.vue'
</script>
