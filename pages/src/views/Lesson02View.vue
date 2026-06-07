<template>
<div class="lesson-body textbook">

  <section class="cover" id="cover">
    <div class="cover-eyebrow">AI 영상 제작 과외</div>
    <div class="cover-title">미드저니 교재</div>
    <div class="cover-sub">AI 이미지·영상 생성 완전 정복</div>
    <div class="cover-meta">
      <span class="cover-tag">대상: 영상 제작 입문 학습자</span>
      <span class="cover-tag">단원 2개 + 부록</span>
    </div>
  </section>

  <!-- 단원 1 -->
  <div class="unit-header" id="unit1">
    <div class="unit-number">단원 1</div>
    <div class="unit-title">미드저니(Midjourney) 소개와 인터페이스</div>
  </div>

  <section class="lesson-section">
    <div class="callout goal">
      <div class="callout-header"><span>📌</span> 학습 목표</div>
      <ul>
        <li data-icon="✓">미드저니가 무엇이고 어떤 작업을 할 수 있는지 설명할 수 있다.</li>
        <li data-icon="✓">공식 사이트의 화면 구성과 주요 메뉴를 파악한다.</li>
        <li data-icon="✓">생성 옵션 패널의 4가지 영역을 이해하고 조작할 수 있다.</li>
        <li data-icon="✓">Creation Actions의 핵심 기능(Vary, Upscale, Animate)을 사용할 수 있다.</li>
        <li data-icon="✓">자주 쓰는 파라미터를 프롬프트에 적용할 수 있다.</li>
      </ul>
    </div>
  </section>

  <section class="lesson-section" id="sec1-1">
    <h2>1.1 미드저니란?</h2>
    <p><a class="inline-link" href="https://www.midjourney.com" target="_blank">미드저니(Midjourney)</a>는 텍스트 프롬프트를 입력하면 AI가 이미지를 생성해 주는 도구다.</p>
    <ul class="content-list">
      <li><strong>입력</strong> — 한 줄의 문장(프롬프트) + 파라미터</li>
      <li><strong>출력</strong> — 정사각형 / 세로 / 가로 비율의 이미지 (또는 짧은 영상)</li>
      <li><strong>강점</strong> — 사진 같은 사실적 톤부터 동화풍까지 스타일 제어가 풍부</li>
      <li><strong>작업 흐름</strong> — 프롬프트 작성 → 결과 확인 → 마음에 드는 이미지 선택 → Variation/Upscale 반복</li>
    </ul>
  </section>

  <section class="lesson-section" id="sec1-2">
    <h2>1.2 공식 사이트의 화면 구성</h2>
    <p><a class="inline-link" href="https://www.midjourney.com" target="_blank">midjourney.com</a>에서 로그인 후 좌측 메뉴와 상단 프롬프트 입력창이 작업의 중심이다.</p>
    <AnnotatedImage
      src="/ai-video-course/midjourney/mj_explore.png"
      caption="▲ 미드저니 공식 사이트 — Explore 화면"
      :annotations="[
        { x: 8, y: 30, label: '좌측 메뉴 — Explore·Create·Edit·Organize 등' },
        { x: 50, y: 10, label: '상단 탭 — Styles / Images / Videos 전환' },
        { x: 50, y: 55, label: '이미지 그리드 — 다른 사용자들의 작품 탐색' },
      ]"
    />
    <h3>좌측 메뉴 한눈에 보기</h3>
    <div class="data-table-wrap">
      <table class="data-table">
        <thead><tr><th>메뉴</th><th>설명</th></tr></thead>
        <tbody>
          <tr><td>Explore</td><td>다른 사용자의 작품을 둘러보며 영감·스타일 찾기</td></tr>
          <tr><td>Create</td><td>프롬프트를 입력해 이미지를 생성하는 메인 작업 공간</td></tr>
          <tr><td>Edit</td><td>이미 생성한 이미지를 수정 (확장·재생성·Retexture 등)</td></tr>
          <tr><td>Organize</td><td>내가 만든 이미지 정리 (폴더·태그 관리)</td></tr>
          <tr><td>Personalize</td><td>내 취향을 학습시키는 개인 스타일 프로파일</td></tr>
          <tr><td>Moodboards</td><td>분위기 보드 — 여러 이미지를 묶어 스타일 기준 생성</td></tr>
          <tr><td>Style Creator</td><td>내 스타일 ID(--sref) 만들기</td></tr>
        </tbody>
      </table>
    </div>
    <h3>Moodboards — 분위기 보드</h3>
    <figure class="screenshot-fig">
      <img src="/ai-video-course/midjourney/mj_moodboards.png" alt="Moodboards 목록 화면">
      <figcaption>▲ Moodboards 화면 — 내 무드보드 목록</figcaption>
    </figure>
  </section>

  <section class="lesson-section" id="sec1-3">
    <h2>1.3 생성 옵션 패널</h2>
    <p>상단 프롬프트 창 옆의 설정 아이콘을 누르면 옵션 패널이 열린다.</p>
    <AnnotatedImage
      src="/ai-video-course/midjourney/mj_options_panel.png"
      caption="▲ 생성 옵션 패널"
      :annotations="[
        { x: 25, y: 25, label: 'Aspect Ratio — 화면 비율 (Portrait·Square·Landscape)' },
        { x: 25, y: 50, label: 'Aesthetics — Stylization·Weirdness·Variety 강도 조절' },
        { x: 75, y: 25, label: 'Model — 미드저니 버전 선택 (7, 6.1 등)' },
        { x: 75, y: 50, label: 'More Options — 속도(Relax/Fast/Turbo) 및 영상 설정' },
      ]"
    />
    <h3>(1) Aspect Ratio — 화면 비율</h3>
    <ul class="content-list">
      <li><strong>Portrait</strong> — 세로형. 모바일·쇼츠·릴스에 최적 (9:16, 3:4)</li>
      <li><strong>Square</strong> — 정사각형. 썸네일·SNS 포스트</li>
      <li><strong>Landscape</strong> — 가로형. 유튜브·시네마틱 (16:9, 21:9)</li>
    </ul>
    <div class="callout tip">
      <div class="callout-header"><span>💡</span> TIP</div>
      <ul><li data-icon="→">영상 컷용이라면 16:9 또는 9:16으로 먼저 통일하자.</li></ul>
    </div>
    <h3>(2) Aesthetics — 미학</h3>
    <ul class="content-list">
      <li><strong>Stylization</strong> — 미적 스타일 적용 강도. 낮으면 사실적, 높으면 드라마틱</li>
      <li><strong>Weirdness</strong> — 결과의 기괴함. 낮으면 안정적, 높으면 실험적</li>
      <li><strong>Variety</strong> — 결과 다양성. 낮으면 비슷한 컷, 높으면 다양한 시도</li>
    </ul>
    <h3>(3) Model — 버전 선택</h3>
    <ul class="content-list">
      <li><strong>Version</strong> — 사용할 미드저니 버전 (예: 7, 6.1)</li>
      <li><strong>Draft / Standard</strong> — Draft는 빠르고 저렴, Standard는 고품질</li>
      <li><strong>Raw</strong> — 자동 보정 끔. 사실적·사진풍 작업에 유리</li>
    </ul>
    <h3>(4) More Options — 속도와 영상</h3>
    <ul class="content-list">
      <li><strong>Speed</strong> — Relax(느리지만 무제한) / Fast(기본) / Turbo(가장 빠름)</li>
      <li><strong>Video Resolution</strong> — SD / HD</li>
    </ul>
    <figure class="screenshot-fig">
      <img src="/ai-video-course/midjourney/mj_video_settings.png" alt="영상 생성 설정">
      <figcaption>▲ 영상 생성 설정 — Start Frame · End Frame · Motion 옵션</figcaption>
    </figure>
  </section>

  <section class="lesson-section" id="sec1-4">
    <h2>1.4 생성한 이미지로 할 수 있는 일</h2>
    <AnnotatedImage
      src="/ai-video-course/midjourney/mj_creation_actions.png"
      caption="▲ Creation Actions 패널"
      :annotations="[
        { x: 20, y: 80, label: 'Vary — Subtle(조금 변형) / Strong(많이 변형)' },
        { x: 45, y: 80, label: 'Upscale — Subtle / Creative (해상도 업스케일)' },
        { x: 65, y: 80, label: 'Use — Image(캐릭터 참조) / Style(화풍 참조)' },
        { x: 85, y: 80, label: 'Animate Image — 스틸 이미지를 영상으로 변환' },
      ]"
    />
    <div class="data-table-wrap">
      <table class="data-table">
        <thead><tr><th>기능</th><th>설명</th></tr></thead>
        <tbody>
          <tr><td>Vary — Subtle / Strong</td><td>같은 이미지를 조금/많이 변형해 새 버전 생성</td></tr>
          <tr><td>Upscale — Subtle / Creative</td><td>이미지 해상도를 업스케일</td></tr>
          <tr><td>Use — Image</td><td>이 이미지를 참조 이미지(--cref)로 사용. 캐릭터 일관성 유지에 활용</td></tr>
          <tr><td>Use — Style</td><td>이 이미지의 스타일만 차용(--sref). 화풍 통일에 사용</td></tr>
          <tr><td>Animate Image</td><td>스틸 이미지에 움직임을 부여해 짧은 영상으로 변환</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="lesson-section" id="sec1-5">
    <h2>1.5 자주 쓰는 파라미터 정리</h2>
    <div class="data-table-wrap">
      <table class="data-table">
        <thead><tr><th>파라미터</th><th>설명</th></tr></thead>
        <tbody>
          <tr><td>--ar 9:16</td><td>화면 비율 지정 (가로 16:9 / 세로 9:16 / 정사각 1:1)</td></tr>
          <tr><td>--cref [URL]</td><td>캐릭터 참조. 동일 인물 유지에 사용</td></tr>
          <tr><td>--sref [ID/URL]</td><td>스타일 참조. 같은 화풍으로 통일</td></tr>
          <tr><td>--p [ID]</td><td>개인 스타일 프로파일 적용, 무드보드</td></tr>
          <tr><td>--chaos 0~100</td><td>결과 다양성. 높을수록 변화 큼</td></tr>
          <tr><td>--stylize 0~1000</td><td>미적 강조 강도</td></tr>
          <tr><td>--no [keyword]</td><td>특정 요소 제외 (예: --no glasses)</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="lesson-section" id="sec1-6">
    <h2>1.6 Edit 기능 — 이미지 수정</h2>
    <figure class="screenshot-fig">
      <img src="/ai-video-course/midjourney/mj_edit_screen.png" alt="Edit 화면">
      <figcaption>▲ Edit 화면 — Retexture / Paint / Smart Select 도구</figcaption>
    </figure>
    <ul class="content-list">
      <li><strong>Retexture</strong> — 선택한 영역의 질감·스타일을 프롬프트로 변경</li>
      <li><strong>Erase</strong> — 브러시로 칠한 영역을 지워 새로운 요소 생성</li>
      <li><strong>Smart Select</strong> — 자동으로 오브젝트를 선택</li>
    </ul>
    <figure class="screenshot-fig">
      <img src="/ai-video-course/midjourney/mj_edit_erase.png" alt="Erase 후 새 요소 생성">
      <figcaption>▲ Erase로 영역을 지운 뒤 새 요소 생성</figcaption>
    </figure>
    <div class="callout checklist">
      <div class="callout-header"><span>✅</span> 단원 1 마무리 체크리스트</div>
      <ul>
        <li data-icon="☐">Explore에서 마음에 드는 스타일을 3개 찾아 저장했다.</li>
        <li data-icon="☐">이미지를 생성하고 Vary, Upscale, Animate Image를 각각 한 번씩 사용했다.</li>
        <li data-icon="☐">--cref와 --sref 파라미터를 직접 프롬프트에 적어 봤다.</li>
      </ul>
    </div>
    <YoutubeWidget lesson-id="02" section-id="unit1" />
  </section>

  <!-- 단원 2 -->
  <div class="unit-header" id="unit2">
    <div class="unit-number">단원 2</div>
    <div class="unit-title">캐릭터·화풍·프롬프트 설계</div>
  </div>

  <section class="lesson-section">
    <div class="callout goal">
      <div class="callout-header"><span>📌</span> 학습 목표</div>
      <ul>
        <li data-icon="✓">AI 영상 생성에서 인물 일관성을 유지하는 방법을 이해한다.</li>
        <li data-icon="✓">화풍(스타일)과 캐릭터 설정을 프롬프트에 체계적으로 반영할 수 있다.</li>
        <li data-icon="✓">컷 단위 프롬프트 구성 공식을 실전에 적용할 수 있다.</li>
      </ul>
    </div>
  </section>

  <section class="lesson-section" id="sec2-1">
    <h2>2.1 화풍(Style) 정하기</h2>
    <p>원하는 화풍이 있다면 Explore에서 마음에 드는 이미지를 찾아 그 스타일 ID(<code>--sref</code> 또는 <code>--p</code>)를 모든 컷에 일관되게 적용하는 것이 핵심이다.</p>
    <figure class="screenshot-fig">
      <img src="/ai-video-course/midjourney/mj_sref_copy.png" alt="--sref ID 복사">
      <figcaption>▲ Explore — 스타일 이미지의 --sref ID 복사 ('Add style to prompt')</figcaption>
    </figure>
  </section>

  <section class="lesson-section" id="sec2-2">
    <h2>2.2 캐릭터 일관성 (--cref)</h2>
    <p>같은 인물이 여러 컷에 등장할 때는 '기준 인물 이미지'를 먼저 만들고, 이후 모든 컷에서 그 이미지를 <code>--cref</code>로 참조시킨다.</p>
    <ol class="step-list">
      <li>기준 이미지 1장을 먼저 확정한다.</li>
      <li>이후 모든 프롬프트 끝에 <code>--cref [URL]</code>을 붙인다.</li>
      <li>필요하면 두 장 이상 참조해 강도를 높일 수 있다.</li>
    </ol>
  </section>

  <section class="lesson-section" id="sec2-3">
    <h2>2.3 캐릭터 시트</h2>
    <div class="data-table-wrap">
      <table class="data-table">
        <thead><tr><th>캐릭터</th><th>외형 묘사</th></tr></thead>
        <tbody>
          <tr><td>고슴이</td><td>대한민국 10대 중학교 2학년 여자아이, 긴 생머리, 통통, 검정 헤어, 큰 눈, 붉은 입술, 흰 피부</td></tr>
          <tr><td>고슴이 엄마</td><td>대한민국 40대 여성, 캐주얼 복장, 파마, 브라운 헤어, 검정 뿔테 안경, 노란 피부</td></tr>
          <tr><td>선생님</td><td>대한민국 30대 남성, 남색 정장, 원형 탈모, 갈색 헤어, 작은 눈</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="lesson-section" id="sec2-4">
    <h2>2.4 의상 묘사 템플릿 — 한국 교복</h2>
    <div class="prompt-box">
      <div class="prompt-label">의상 프롬프트 템플릿</div>
      <pre>realistic Korean school uniform, full-length navy school blazer with white collar,
pleated dark navy skirt, white dress shirt, school bag,
white socks and loafers</pre>
    </div>
  </section>

  <section class="lesson-section" id="sec2-5">
    <h2>2.5 컷 단위 프롬프트 구성 공식</h2>
    <div class="callout tip">
      <div class="callout-header"><span>📐</span> 프롬프트 6-레이어 공식</div>
      <ul>
        <li data-icon="①">샷 사이즈 + 앵글 — 예: <em>medium close-up, low angle</em></li>
        <li data-icon="②">피사체 + 행동 — 예: <em>a Korean girl checking her phone</em></li>
        <li data-icon="③">배경·시간대 — 예: <em>morning street, soft sunlight</em></li>
        <li data-icon="④">의상·외형 묘사 — (캐릭터 시트 참조)</li>
        <li data-icon="⑤">화풍·렌더링 — 예: <em>cinematic realism, documentary style</em></li>
        <li data-icon="⑥">파라미터 — <em>--ar 9:16 --p [ID] --cref [URL]</em></li>
      </ul>
    </div>
    <div class="callout checklist">
      <div class="callout-header"><span>✅</span> 단원 2 마무리 체크리스트</div>
      <ul>
        <li data-icon="☐">화풍 기준이 되는 스타일 ID(--sref/--p)를 확정했다.</li>
        <li data-icon="☐">등장 인물별 기준 이미지를 1장씩 생성하고 URL을 저장했다.</li>
        <li data-icon="☐">6-레이어 공식을 사용해 컷 1장을 완성했다.</li>
      </ul>
    </div>
    <YoutubeWidget lesson-id="02" section-id="unit2" />
  </section>

  <!-- 부록 -->
  <div class="unit-header" id="appendix">
    <div class="unit-number">부록 B</div>
    <div class="unit-title">씬별 스토리보드 &amp; 미드저니 프롬프트</div>
  </div>

  <section class="lesson-section">
    <p>아래 스토리보드는 단원 1~2에서 배운 모든 요소를 한 번에 적용한 완성본이다.</p>

    <h2 id="scene1">씬 1. 고슴이 방</h2>
    <div class="cut-card">
      <div class="cut-card-header"><span class="cut-badge">컷 1</span> 풀 샷</div>
      <div class="cut-body">
        <div class="cut-img">이미지<br>삽입</div>
        <div class="cut-details">
          <div class="cut-row"><span class="cut-row-label">묘사</span><span>아침 햇살이 창문을 통해 드리운다. 고슴이는 침대에 이불을 덮고 누워 있다.</span></div>
          <div class="cut-row"><span class="cut-row-label">사운드</span><span>풀벌레 소리 / 조용한 아침</span></div>
        </div>
      </div>
    </div>
    <div class="prompt-box">
      <div class="prompt-label">Prompt</div>
      <pre>Full shot of a cozy teenage girl's bedroom in warm morning light,
a Korean middle school girl sleeping in bed, covered with a white duvet,
small bedside table with an alarm clock, sunbeam through curtains,
cinematic realism, soft pastel tones
<span class="param">--ar 16:9 --cref [URL] --p [ID]</span></pre>
    </div>

    <div class="cut-card">
      <div class="cut-card-header"><span class="cut-badge">컷 2</span> 미디엄 샷 / 로우 앵글</div>
      <div class="cut-body">
        <div class="cut-img">이미지<br>삽입</div>
        <div class="cut-details">
          <div class="cut-row"><span class="cut-row-label">묘사</span><span>방 문을 열고 들어오는 고슴이의 엄마. 고슴이에게 소리친다. "일어나!"</span></div>
          <div class="cut-row"><span class="cut-row-label">카메라</span><span>Tilt / Pan up — 카메라가 천장으로 올라감</span></div>
        </div>
      </div>
    </div>
    <div class="prompt-box">
      <div class="prompt-label">Prompt</div>
      <pre>Extreme close-up chest-up shot, dramatic worm's-eye view,
a Korean woman in her 40s opening a bedroom door, pointing and shouting,
perm brown hair, black horn-rimmed glasses, casual clothes,
cinematic realism
<span class="param">--ar 16:9 --cref [URL] --p [ID]</span></pre>
    </div>

    <h2 id="scene4">씬 4. 아침 길거리</h2>
    <div class="cut-card">
      <div class="cut-card-header"><span class="cut-badge">컷 1</span> 풀 샷 / 핸드헬드 트래킹</div>
      <div class="cut-body">
        <div class="cut-img">이미지<br>삽입</div>
        <div class="cut-details">
          <div class="cut-row"><span class="cut-row-label">묘사</span><span>옆모습으로 보이는 고슴이가 앞으로 뛰어간다. 자동차와 자전거도 거리에 있다.</span></div>
          <div class="cut-row"><span class="cut-row-label">카메라</span><span>핸드헬드 트래킹 — 뛰는 속도에 맞춰 카메라가 따라감</span></div>
        </div>
      </div>
    </div>
    <div class="prompt-box">
      <div class="prompt-label">Prompt</div>
      <pre>Wide shot of Goseumi running along a Korean city sidewalk in morning light,
side profile view, school uniform, navy blazer and skirt, school bag,
handheld tracking shot, motion blur, cars and bicycles in background,
cinematic realism
<span class="param">--ar 16:9 --cref [URL] --p [ID]</span></pre>
    </div>
  </section>

</div>
</template>

<script setup>
import YoutubeWidget from '@/components/YoutubeWidget.vue'
import AnnotatedImage from '@/components/AnnotatedImage.vue'
</script>
