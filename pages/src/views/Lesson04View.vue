<template>
<div class="lesson-body textbook">

  <section class="cover" id="cover">
    <div class="cover-eyebrow">AI 영상 제작 과외 · 교재 04</div>
    <div class="cover-title">CapCut으로 완성하는 AI 영상 편집</div>
    <div class="cover-sub">불러오기부터 트랜지션·자막·사운드·내보내기까지</div>
    <div class="cover-meta">
      <span class="cover-tag">단원 5개</span>
      <span class="cover-tag">Ctrl+B 단축키</span>
      <span class="cover-tag">Google TTS 내레이션</span>
    </div>
    <a class="cover-link" href="https://www.capcut.com" target="_blank">CapCut 웹 → capcut.com</a>
  </section>

  <!-- 단원 1 -->
  <div class="unit-header" id="unit1">
    <div class="unit-number">단원 1</div>
    <div class="unit-title">CapCut 소개와 인터페이스</div>
  </div>

  <section class="lesson-section">
    <div class="callout goal">
      <div class="callout-header"><span>📌</span> 학습 목표</div>
      <ul>
        <li data-icon="✓">CapCut의 주요 AI 기능들을 설명할 수 있다.</li>
        <li data-icon="✓">편집기 인터페이스의 각 영역 역할을 이해한다.</li>
      </ul>
    </div>
  </section>

  <section class="lesson-section" id="sec1-1">
    <h2>1.1 CapCut이란?</h2>
    <p><a class="inline-link" href="https://www.capcut.com" target="_blank">CapCut(캡컷)</a>은 ByteDance가 개발한 무료 영상 편집 도구다. AI 영상·이미지 생성, 자동 자막, 영상 번역, 배경 제거 등 강력한 AI 기능을 갖추고 있으며, 웹(capcut.com)과 앱(iOS/Android) 모두 지원한다.</p>
    <figure class="screenshot-fig">
      <img src="/ai-video-course/capcut/cc_home.png" alt="CapCut 홈 화면">
      <figcaption>CapCut 홈 화면. Create project, Video Studio, AI 도구들이 한눈에 보인다.</figcaption>
    </figure>
    <div class="data-table-wrap">
      <table class="data-table">
        <thead><tr><th>메뉴</th><th>설명</th></tr></thead>
        <tbody>
          <tr><td class="text">Create project</td><td>새 편집 프로젝트 만들기</td></tr>
          <tr><td class="text">Long video to shorts</td><td>AI가 긴 영상을 자동으로 쇼츠용으로 잘라줌</td></tr>
          <tr><td class="text">AI video</td><td>텍스트/이미지로 AI 영상 생성</td></tr>
          <tr><td class="text">Video translator</td><td>AI 자동 번역·더빙</td></tr>
          <tr><td class="text">Auto cutout</td><td>AI 자동 배경 제거</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="lesson-section" id="sec1-2">
    <h2>1.2 편집기 인터페이스</h2>
    <AnnotatedImage
      src="/ai-video-course/capcut/cc_editor.png"
      caption="▲ CapCut 편집기 초기 화면 (클립 불러오기 전)"
      :annotations="[
        { x: 40, y: 13, label: '상단 탭 — Media·Audio·Text·Stickers·Transitions·Captions 등 기능 전환' },
        { x: 10, y: 17, label: 'Import 버튼 — 클릭하면 파일 탐색기 열림. 영상 파일 선택' },
        { x: 10, y: 47, label: '미디어 패널 — Import 후 클립 목록 표시. Yours·Library 등 카테고리' },
        { x: 60, y: 38, label: '중앙 영역 — 파일을 여기로 직접 드래그해도 Import 가능' },
      ]"
    />
    <div class="callout tip">
      <div class="callout-header"><span>💡</span> 타임라인·속성 패널은 어디에?</div>
      <ul><li data-icon="→">클립을 Import한 뒤 타임라인에 배치하면 화면 하단에 <strong>타임라인</strong>이, 클립 선택 시 우측에 <strong>속성 패널</strong>이 나타난다. 초기 빈 화면에서는 보이지 않는다.</li></ul>
    </div>
    <div class="data-table-wrap">
      <table class="data-table">
        <thead><tr><th>영역</th><th>역할</th></tr></thead>
        <tbody>
          <tr><td class="text">상단 메뉴바</td><td>Media·Audio·Text·Transitions·Captions 등 탭 전환</td></tr>
          <tr><td class="text">좌측 미디어 패널</td><td>불러온 클립 목록</td></tr>
          <tr><td class="text">중앙 프리뷰 창</td><td>편집 결과 실시간 확인</td></tr>
          <tr><td class="text">하단 타임라인</td><td>클립을 배열하고 편집하는 핵심 공간</td></tr>
          <tr><td class="text">우측 속성 패널</td><td>선택한 클립의 속도·불투명도·색보정 등</td></tr>
        </tbody>
      </table>
    </div>
    <div class="callout checklist">
      <div class="callout-header"><span>✅</span> 체크리스트</div>
      <ul>
        <li data-icon="☐">Create project로 새 프로젝트를 만들었다.</li>
        <li data-icon="☐">편집기의 4개 영역을 가리키며 이름을 말할 수 있다.</li>
      </ul>
    </div>
    <YoutubeWidget lesson-id="04" section-id="unit1" />
  </section>

  <!-- 단원 2 -->
  <div class="unit-header" id="unit2">
    <div class="unit-number">단원 2</div>
    <div class="unit-title">기본 편집 — 불러오기·자르기·분할</div>
  </div>

  <section class="lesson-section">
    <div class="callout goal">
      <div class="callout-header"><span>📌</span> 학습 목표</div>
      <ul>
        <li data-icon="✓">AI 영상 클립을 편집기에 불러와 타임라인에 배치할 수 있다.</li>
        <li data-icon="✓">Ctrl+B 단축키로 클립을 빠르게 분할할 수 있다.</li>
      </ul>
    </div>
  </section>

  <section class="lesson-section" id="sec2-1">
    <h2>2.1 미디어 불러오기</h2>
    <ol class="step-list">
      <li>상단 <strong>Media 탭</strong> → <strong>Import 버튼</strong> 클릭</li>
      <li>파일 탐색기에서 영상 파일(mp4) 선택 → 열기</li>
      <li>미디어 패널에 클립 목록이 표시됨</li>
    </ol>
    <figure class="screenshot-fig">
      <img src="/ai-video-course/capcut/cc_media_panel.png" alt="미디어 패널">
      <figcaption>미디어 패널에 불러온 클립 목록.</figcaption>
    </figure>
  </section>

  <section class="lesson-section" id="sec2-2">
    <h2>2.2 타임라인에 클립 배치</h2>
    <AnnotatedImage
      src="/ai-video-course/capcut/cc_timeline_1clip.png"
      caption="▲ 클립 배치 완료 — 미디어 패널에서 타임라인으로"
      :annotations="[
        { x: 35, y: 28, label: '클립 썸네일 — 미디어 패널에서 원하는 클립 선택' },
        { x: 45, y: 55, label: '클립 + 버튼 — 클릭하면 타임라인 끝에 바로 추가' },
        { x: 50, y: 78, label: '타임라인 빈 영역 — 또는 여기로 직접 드래그' },
        { x: 35, y: 92, label: '배치된 클립 — 필름 띠로 표시. 양 끝 드래그로 길이 조절' },
      ]"
    />
    <ul class="content-list">
      <li>클립을 드래그해 순서를 바꿀 수 있다.</li>
      <li>클립 양 끝을 드래그(Trim)해 길이를 줄인다.</li>
    </ul>
  </section>

  <section class="lesson-section" id="sec2-3">
    <h2>2.3 Ctrl+B 단축키 — 빠른 분할</h2>
    <p><strong>Ctrl+B</strong> (Mac: Cmd+B)는 재생헤드가 있는 지점에서 현재 선택된 클립을 즉시 분할하는 단축키다.</p>
    <div class="data-table-wrap">
      <table class="data-table">
        <thead><tr><th>동작</th><th>방법</th></tr></thead>
        <tbody>
          <tr><td class="text">① 분할 지점 이동</td><td>재생헤드를 자르고 싶은 위치로 이동</td></tr>
          <tr><td class="text">② 클립 선택</td><td>타임라인에서 분할할 클립을 클릭</td></tr>
          <tr><td class="text">③ Ctrl+B 누름</td><td>재생헤드 위치에서 클립이 둘로 나뉨</td></tr>
        </tbody>
      </table>
    </div>
    <figure class="screenshot-fig">
      <img src="/ai-video-course/capcut/cc_ctrlb_before.png" alt="Ctrl+B 분할">
      <figcaption>Ctrl+B 분할 직전 상태.</figcaption>
    </figure>
    <div class="callout tip">
      <div class="callout-header"><span>💡</span> 비파괴 편집</div>
      <p>CapCut은 원본 영상을 보존한다. 클립을 분할하거나 Trim해도 원본 데이터는 사라지지 않는다. 실수해도 <strong>Ctrl+Z</strong>로 언제든 되돌릴 수 있다.</p>
    </div>
    <YoutubeWidget lesson-id="04" section-id="unit2" />
  </section>

  <!-- 단원 3 -->
  <div class="unit-header" id="unit3">
    <div class="unit-number">단원 3</div>
    <div class="unit-title">트랜지션 효과 — 컷과 컷을 이어주기</div>
  </div>

  <section class="lesson-section">
    <div class="callout goal">
      <div class="callout-header"><span>📌</span> 학습 목표</div>
      <ul>
        <li data-icon="✓">트랜지션의 역할과 종류를 설명할 수 있다.</li>
        <li data-icon="✓">타임라인에서 컷 사이에 트랜지션을 추가할 수 있다.</li>
      </ul>
    </div>
  </section>

  <section class="lesson-section" id="sec3-1">
    <h2>3.1 트랜지션이란?</h2>
    <p>트랜지션(Transition)은 한 컷이 끝나고 다음 컷이 시작될 때 화면이 전환되는 방식이다.</p>
    <h2 id="sec3-2">3.2 트랜지션 추가 방법</h2>
    <ol class="step-list">
      <li>상단 메뉴바에서 <strong>Transitions 탭</strong> 클릭</li>
      <li>원하는 트랜지션 썸네일 선택</li>
      <li>타임라인에서 <strong>컷과 컷 사이</strong>로 드래그</li>
    </ol>
    <AnnotatedImage
      src="/ai-video-course/capcut/cc_transitions.png"
      caption="▲ Transitions 패널 (Favorites 탭)"
      :annotations="[
        { x: 10, y: 28, label: 'Favorites — 자주 쓰는 트랜지션 즐겨찾기 모음' },
        { x: 50, y: 17, label: '검색창 — fade 입력하면 Fade 계열만 필터링' },
        { x: 14, y: 43, label: 'Black Fade — 화면이 검게 꺼지며 전환. 씬 전환에 가장 자주 씀' },
        { x: 35, y: 43, label: 'Gradual Fade — 서서히 사라지는 부드러운 전환' },
        { x: 85, y: 43, label: 'Slow Fade — 천천히 페이드. 엔딩·감성 장면에 적합' },
      ]"
    />
    <div class="callout tip">
      <div class="callout-header"><span>💡</span> 적용 방법 (화면 아래에 위치)</div>
      <ul><li data-icon="→">원하는 트랜지션 썸네일을 선택한 뒤, 화면 <strong>아래 타임라인의 컷과 컷 사이</strong>로 드래그해서 놓으면 적용된다. 적용된 트랜지션은 나비 모양 아이콘(⊠)으로 표시된다.</li></ul>
    </div>
    <div class="data-table-wrap">
      <table class="data-table">
        <thead><tr><th>트랜지션</th><th>특징 &amp; 추천 장면</th></tr></thead>
        <tbody>
          <tr><td class="text">Black Fade</td><td>화면이 검게 꺼지며 전환. 씬 전환에 가장 자주 쓰임</td></tr>
          <tr><td class="text">Gradual Fade</td><td>이전 화면이 서서히 사라짐. 감성적·느린 장면 연결</td></tr>
          <tr><td class="text">Overlap Fade</td><td>두 화면이 겹치며 전환. 회상·꿈 장면에 어울림</td></tr>
        </tbody>
      </table>
    </div>
    <div class="callout tip">
      <div class="callout-header"><span>💡</span> Tip</div>
      <p>트랜지션 지속 시간은 <strong>0.3~0.5초</strong>가 가장 자연스럽다.</p>
    </div>
  </section>

  <!-- 단원 4 -->
  <div class="unit-header" id="unit4">
    <div class="unit-number">단원 4</div>
    <div class="unit-title">자막 &amp; 텍스트</div>
  </div>

  <section class="lesson-section">
    <div class="callout goal">
      <div class="callout-header"><span>📌</span> 학습 목표</div>
      <ul>
        <li data-icon="✓">클립에 자막을 추가하고 스타일을 지정할 수 있다.</li>
        <li data-icon="✓">Captions(AI 자동 자막) 기능으로 음성을 텍스트로 변환할 수 있다.</li>
      </ul>
    </div>
  </section>

  <section class="lesson-section" id="sec4-1">
    <h2>4.1 수동 자막 추가</h2>
    <ol class="step-list">
      <li>상단 <strong>Text 탭</strong> → '기본 텍스트' 클릭</li>
      <li>타임라인에 텍스트 클립 생성 → 길이와 위치 조정</li>
      <li>우측 패널: 폰트·크기·색상·윤곽선 설정</li>
    </ol>
  </section>

  <section class="lesson-section" id="sec4-2">
    <h2>4.2 Captions — AI 자동 자막</h2>
    <ol class="step-list">
      <li>상단 <strong>Captions 탭</strong> → 'Auto captions' 선택</li>
      <li>언어 설정 → 'Generate' 클릭</li>
      <li>생성된 자막 검토 및 오타 수정</li>
    </ol>
    <div class="callout tip">
      <div class="callout-header"><span>💡</span> Tip</div>
      <p>AI 자막은 90% 이상 정확하지만, <strong>고유명사·방언</strong>은 반드시 직접 확인한다.</p>
    </div>
    <h2 id="sec4-3">4.3 자막 스타일 팁</h2>
    <div class="data-table-wrap">
      <table class="data-table">
        <thead><tr><th>항목</th><th>권장값</th></tr></thead>
        <tbody>
          <tr><td class="text">폰트</td><td>고딕 계열 (Noto Sans KR 권장)</td></tr>
          <tr><td class="text">크기</td><td>영상 세로 높이의 4~5%</td></tr>
          <tr><td class="text">위치</td><td>화면 하단 1/5 영역</td></tr>
          <tr><td class="text">색상</td><td>흰색 + 검정 윤곽선</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- 단원 5 -->
  <div class="unit-header" id="unit5">
    <div class="unit-number">단원 5</div>
    <div class="unit-title">사운드 &amp; 최종 출력</div>
  </div>

  <section class="lesson-section">
    <div class="callout goal">
      <div class="callout-header"><span>📌</span> 학습 목표</div>
      <ul>
        <li data-icon="✓">Google Cloud TTS로 내레이션 음성을 생성하고 캡컷에 넣을 수 있다.</li>
        <li data-icon="✓">BGM과 효과음을 타임라인에 추가하고 볼륨을 조절할 수 있다.</li>
        <li data-icon="✓">완성된 영상을 플랫폼에 맞는 설정으로 내보낼 수 있다.</li>
      </ul>
    </div>
  </section>

  <section class="lesson-section" id="sec5-1">
    <h2>5.1 AI 내레이션 — Google Cloud Text-to-Speech</h2>
    <div class="data-table-wrap">
      <table class="data-table">
        <thead><tr><th>항목</th><th>내용</th></tr></thead>
        <tbody>
          <tr><td class="text">주소</td><td><a class="inline-link" href="https://cloud.google.com/text-to-speech" target="_blank">cloud.google.com/text-to-speech</a> → 상단 "Demo" 탭</td></tr>
          <tr><td class="text">추천 목소리</td><td>한국어: ko-KR-Wavenet-A~D</td></tr>
          <tr><td class="text">출력 형식</td><td>MP3 다운로드 → 캡컷 Audio 탭 Import로 삽입</td></tr>
          <tr><td class="text">무료 한도</td><td>매월 100만 자(Wavenet 기준)까지 무료</td></tr>
        </tbody>
      </table>
    </div>
    <h3>SSML 태그 소개</h3>
    <div class="data-table-wrap">
      <table class="data-table">
        <thead><tr><th>태그</th><th>효과</th></tr></thead>
        <tbody>
          <tr><td><code>&lt;break time="1s"/&gt;</code></td><td>해당 위치에서 1초 간격(묵음)</td></tr>
          <tr><td><code>&lt;emphasis level="strong"&gt;</code></td><td>단어를 강하게 강조해서 읽음</td></tr>
          <tr><td><code>&lt;prosody rate="slow"&gt;</code></td><td>읽기 속도 조절</td></tr>
        </tbody>
      </table>
    </div>
    <div class="prompt-box">
      <div class="prompt-label">SSML 예시</div>
      <pre>&lt;speak&gt;
  안녕하세요.&lt;break time="0.8s"/&gt;
  오늘은 &lt;emphasis level="strong"&gt;AI 영상 제작&lt;/emphasis&gt;에 대해 배워볼게요.
  &lt;prosody rate="slow"&gt;천천히 따라오세요.&lt;/prosody&gt;
&lt;/speak&gt;</pre>
    </div>
  </section>

  <section class="lesson-section" id="sec5-2">
    <h2>5.2 무료 사운드 소스</h2>
    <div class="data-table-wrap">
      <table class="data-table">
        <thead><tr><th>사이트</th><th>특징</th></tr></thead>
        <tbody>
          <tr><td class="text">Pixabay Music<br><a class="inline-link" href="https://pixabay.com/music" target="_blank" style="font-size:12.5px;font-weight:400;">pixabay.com/music</a></td><td>BGM 전문. 저작권 표기 없이 상업적으로 자유롭게 사용 가능.</td></tr>
          <tr><td class="text">FreeSound<br><a class="inline-link" href="https://freesound.org" target="_blank" style="font-size:12.5px;font-weight:400;">freesound.org</a></td><td>효과음 전문. CC0 필터 사용 필수.</td></tr>
        </tbody>
      </table>
    </div>
    <div class="callout tip">
      <div class="callout-header"><span>💡</span> Tip</div>
      <p>BGM 볼륨은 대사·나레이션의 <strong>60~70% 수준</strong>이 적당하다.</p>
    </div>
  </section>

  <section class="lesson-section" id="sec5-4">
    <h2>5.4 내보내기 설정</h2>
    <div class="data-table-wrap">
      <table class="data-table">
        <thead><tr><th>설정</th><th>권장값</th></tr></thead>
        <tbody>
          <tr><td class="text">해상도</td><td>1080p</td></tr>
          <tr><td class="text">프레임 레이트</td><td>24fps (영화 느낌) 또는 30fps</td></tr>
          <tr><td class="text">포맷</td><td>MP4 (H.264)</td></tr>
          <tr><td class="text">유튜브 쇼츠</td><td>9:16, 1080×1920, 30fps, 60초 이내</td></tr>
          <tr><td class="text">유튜브 일반</td><td>16:9, 1920×1080, 24fps</td></tr>
        </tbody>
      </table>
    </div>
    <div class="callout checklist">
      <div class="callout-header"><span>✅</span> 최종 체크리스트</div>
      <ul>
        <li data-icon="☐">BGM 볼륨이 대사를 방해하지 않는 수준이다.</li>
        <li data-icon="☐">BGM이 영상 끝에서 페이드 아웃된다.</li>
        <li data-icon="☐">플랫폼에 맞는 해상도·비율로 내보내기를 완료했다.</li>
        <li data-icon="☐">내보낸 파일을 재생해 화질·음질·자막을 최종 확인했다.</li>
      </ul>
    </div>
    <YoutubeWidget lesson-id="04" section-id="unit5" />
  </section>

</div>
</template>

<script setup>
import YoutubeWidget from '@/components/YoutubeWidget.vue'
import AnnotatedImage from '@/components/AnnotatedImage.vue'
</script>
