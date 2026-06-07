<template>
  <div class="lesson-body legacy-content" v-html="html" />
</template>

<script setup>
// CapCut AI 영상 편집
const html = `<!-- 표지 -->
  <div class="cover">
    <div class="cover-eyebrow">AI 영상 제작 과외 · 교재 04</div>
    <h1 class="cover-title">CapCut으로 완성하는<br>AI 영상 편집</h1>
    <p class="cover-sub">불러오기부터 트랜지션·자막·사운드·내보내기까지</p>
    <div class="cover-meta">
      <span class="cover-tag">단원 5개</span>
      <span class="cover-tag">Ctrl+B 단축키</span>
      <span class="cover-tag">Google TTS 내레이션</span>
      <span class="cover-tag">저작권 무료 사운드</span>
    </div>
    <a class="cover-link" href="https://www.capcut.com" target="_blank">CapCut 웹 → capcut.com</a>
  </div>


  <!-- ═══════════════════════════════════════════════
       단원 1: CapCut 소개와 인터페이스
  ═══════════════════════════════════════════════ -->
  <div class="unit-header highlight-target" id="unit1">
    <div class="unit-number">단원 1</div>
    <div class="unit-title">CapCut 소개와 인터페이스</div>
  </div>

  <div class="section">
    <!-- 학습 목표 -->
    <div class="callout goal">
      <div class="callout-header"><span class="icon">📌</span> 학습 목표</div>
      <ul>
        <li data-icon="✓">CapCut의 주요 AI 기능들을 설명할 수 있다.</li>
        <li data-icon="✓">편집기 인터페이스의 각 영역 역할을 이해한다.</li>
        <li data-icon="✓">새 프로젝트를 만들고 미디어를 가져올 수 있다.</li>
      </ul>
    </div>

    <!-- 1.1 -->
    <h2 id="sec1-1" class="highlight-target">1.1 &nbsp;CapCut이란?</h2>
    <p><a class="inline-link" href="https://www.capcut.com" target="_blank">CapCut(캡컷)</a>은 ByteDance가 개발한 무료 영상 편집 도구다. AI 영상·이미지 생성, 자동 자막, 영상 번역, 배경 제거 등 강력한 AI 기능을 갖추고 있으며, 웹(capcut.com)과 앱(iOS/Android) 모두 지원한다.</p>

    <figure class="screenshot-fig">
      <img src="capcut/스크린샷 2026-05-16 오전 12.27.22.png" alt="CapCut 홈 화면 — Create project, Video Studio, AI tools 모음">
      <figcaption>CapCut 홈 화면. Create project, Video Studio, AI 도구들이 한눈에 보인다.</figcaption>
    </figure>

    <div class="data-table-wrap">
      <table class="data-table">
        <thead>
          <tr><th>메뉴</th><th>설명</th></tr>
        </thead>
        <tbody>
          <tr><td class="text">Create project</td><td>새 편집 프로젝트 만들기. 클릭하면 편집기가 열린다.</td></tr>
          <tr><td class="text">Video Studio</td><td>전체 편집 도구 모음이 있는 프로 편집기</td></tr>
          <tr><td class="text">Long video to shorts</td><td>AI가 긴 영상을 자동으로 쇼츠용으로 잘라줌</td></tr>
          <tr><td class="text">AI video</td><td>텍스트/이미지로 AI 영상 생성</td></tr>
          <tr><td class="text">AI image</td><td>AI 이미지 생성 기능</td></tr>
          <tr><td class="text">Video translator</td><td>AI 자동 번역·더빙</td></tr>
          <tr><td class="text">Enhance quality</td><td>AI로 영상 화질 업스케일</td></tr>
          <tr><td class="text">Auto cutout</td><td>AI 자동 배경 제거</td></tr>
        </tbody>
      </table>
    </div>

    <!-- 1.2 -->
    <h2 id="sec1-2" class="highlight-target">1.2 &nbsp;편집기 인터페이스</h2>
    <p>Create project를 클릭하면 편집기가 열린다. 크게 4개 영역으로 구성된다.</p>

    <figure class="screenshot-fig">
      <img src="capcut/스크린샷 2026-05-16 오전 12.28.09.png" alt="편집기 인터페이스 — Media/Audio/Text 등 상단 탭 + Import 패널">
      <figcaption>편집기 인터페이스. 상단 탭(Media·Audio·Text 등), 미디어 패널, 프리뷰 창, 타임라인이 배치되어 있다.</figcaption>
    </figure>

    <div class="data-table-wrap">
      <table class="data-table">
        <thead>
          <tr><th>영역</th><th>역할</th></tr>
        </thead>
        <tbody>
          <tr><td class="text">상단 메뉴바</td><td>Media·Audio·Text·Stickers·Effects·Transitions·Captions·Filters·Adjustment·Templates·AI avatar 탭 전환</td></tr>
          <tr><td class="text">좌측 미디어 패널</td><td>불러온 클립 목록. Import·Subprojects·AI media·Library 등</td></tr>
          <tr><td class="text">중앙 프리뷰 창</td><td>편집 결과 실시간 확인. 재생·정지·배속</td></tr>
          <tr><td class="text">하단 타임라인</td><td>클립을 배열하고 편집하는 핵심 공간. 다중 트랙 지원</td></tr>
          <tr><td class="text">우측 속성 패널</td><td>선택한 클립의 속도·불투명도·색보정 등 세부 설정</td></tr>
        </tbody>
      </table>
    </div>

    <div class="callout checklist">
      <div class="callout-header"><span class="icon">✅</span> 체크리스트</div>
      <ul>
        <li data-icon="☐">CapCut 계정을 만들고 로그인했다.</li>
        <li data-icon="☐">Create project로 새 프로젝트를 만들었다.</li>
        <li data-icon="☐">편집기의 4개 영역을 가리키며 이름을 말할 수 있다.</li>
      </ul>
    </div>
  </div>


  <!-- ═══════════════════════════════════════════════
       단원 2: 기본 편집 — 불러오기·자르기·트랜지션
  ═══════════════════════════════════════════════ -->
  <div class="unit-header highlight-target" id="unit2">
    <div class="unit-number">단원 2</div>
    <div class="unit-title">기본 편집 — 불러오기·자르기·분할</div>
  </div>

  <div class="section">
    <!-- 학습 목표 -->
    <div class="callout goal">
      <div class="callout-header"><span class="icon">📌</span> 학습 목표</div>
      <ul>
        <li data-icon="✓">AI 영상 클립을 편집기에 불러와 타임라인에 배치할 수 있다.</li>
        <li data-icon="✓">Ctrl+B 단축키로 클립을 빠르게 분할하고, 드래그로 복원할 수 있다.</li>
        <li data-icon="✓">클립을 자르고(Trim) 분할(Split)할 수 있다.</li>
      </ul>
    </div>

    <!-- 2.1 -->
    <h2 id="sec2-1" class="highlight-target">2.1 &nbsp;미디어 불러오기</h2>
    <p>파이어플라이나 미드저니에서 다운로드한 영상 파일을 캡컷 편집기로 가져온다.</p>

    <ol class="step-list">
      <li>상단 <strong>Media 탭</strong> → <strong>Import 버튼</strong> 클릭</li>
      <li>파일 탐색기에서 영상 파일(mp4) 선택 → 열기</li>
      <li>미디어 패널에 클립 목록이 표시됨</li>
    </ol>

    <figure class="screenshot-fig">
      <img src="capcut/스크린샷 2026-05-16 오전 12.29.11.png" alt="미디어 패널 — 불러온 클립 목록 (t1~t7 등)">
      <figcaption>미디어 패널에 불러온 클립 목록. t1~t7 등 여러 클립이 표시된다.</figcaption>
    </figure>

    <!-- 2.2 -->
    <h2 id="sec2-2" class="highlight-target">2.2 &nbsp;타임라인에 클립 배치</h2>
    <p>미디어 패널의 클립을 타임라인으로 드래그하거나, 클립의 '+' 버튼을 눌러 순서대로 추가한다.</p>

    <figure class="screenshot-fig">
      <img src="capcut/스크린샷 2026-05-16 오전 12.29.36.png" alt="타임라인에 1개 클립 배치">
      <figcaption>타임라인에 첫 번째 클립을 배치한 상태.</figcaption>
    </figure>

    <ul class="content-list">
      <li>클립을 드래그해 순서를 바꿀 수 있다.</li>
      <li>클립 양 끝을 드래그(Trim)해 길이를 줄인다.</li>
      <li>클립 선택 → 상단 바의 가위 아이콘으로 분할(Split)한다.</li>
    </ul>

    <figure class="screenshot-fig">
      <img src="capcut/스크린샷 2026-05-16 오전 12.29.59.png" alt="타임라인에 2개 클립 + 프리뷰 창에 세로 영상">
      <figcaption>타임라인에 2개 클립이 배치되고, 프리뷰 창에 세로(9:16) 영상이 표시된다.</figcaption>
    </figure>

    <!-- 2.3 -->
    <h2 id="sec2-3" class="highlight-target">2.3 &nbsp;Ctrl+B 단축키 — 빠른 분할과 비파괴 복원</h2>
    <p><strong>Ctrl+B</strong> (Mac: Cmd+B)는 재생헤드가 있는 지점에서 현재 선택된 클립을 즉시 분할하는 단축키다. 마우스를 쓰지 않고 영상을 보면서 박자에 맞춰 자를 수 있어 편집 속도가 빠르다.</p>

    <div class="data-table-wrap">
      <table class="data-table">
        <thead>
          <tr><th>동작</th><th>방법</th></tr>
        </thead>
        <tbody>
          <tr>
            <td class="text">① 분할 지점 이동</td>
            <td>재생헤드를 자르고 싶은 위치로 이동 (스페이스바로 재생 → 원하는 순간에 스페이스바로 정지)</td>
          </tr>
          <tr>
            <td class="text">② 클립 선택</td>
            <td>타임라인에서 분할할 클립을 클릭 (선택 없으면 모든 트랙이 잘림)</td>
          </tr>
          <tr>
            <td class="text">③ Ctrl+B 누름</td>
            <td>재생헤드 위치에서 클립이 둘로 나뉨. 불필요한 부분은 Delete 키로 삭제</td>
          </tr>
          <tr>
            <td class="text">④ 영역 자르기</td>
            <td>시작·끝 두 지점에 Ctrl+B를 각각 눌러 불필요한 구간을 도려낼 수 있음</td>
          </tr>
        </tbody>
      </table>
    </div>

    <figure class="screenshot-fig">
      <img src="capcut/스크린샷 2026-05-16 오전 12.34.05.png" alt="타임라인 2개 클립 + Ctrl+B 분할 상황">
      <figcaption>Ctrl+B 분할 직전 — 재생헤드 위치에서 클립이 분할될 준비가 된 상태.</figcaption>
    </figure>

    <figure class="screenshot-fig">
      <img src="capcut/스크린샷 2026-05-16 오전 12.34.22.png" alt="클립 분할 후 타임라인 클로즈업">
      <figcaption>Ctrl+B 적용 후 타임라인 클로즈업. 클립이 두 조각으로 나뉜 것을 확인할 수 있다.</figcaption>
    </figure>

    <div class="callout tip">
      <div class="callout-header"><span class="icon">💡</span> 비파괴 편집</div>
      <p>CapCut은 원본 영상을 보존한다. 클립을 분할하거나 Trim해도 원본 데이터는 사라지지 않는다. 잘라낸 구간을 되살리려면 클립 끝 부분으로 마우스를 가져가 커서가 ↔ 모양으로 바뀌면 바깥쪽으로 드래그하면 된다. 실수해도 <strong>Ctrl+Z</strong>로 언제든 되돌릴 수 있다.</p>
    </div>

    <!-- 2.4 -->
    <h2 id="sec2-4" class="highlight-target">2.4 &nbsp;프리뷰 창 활용</h2>

    <figure class="screenshot-fig">
      <img src="capcut/스크린샷 2026-05-16 오전 12.30.12.png" alt="프리뷰 창 단독 — 세로 9:16 영상, 00:00:00:00 / 00:00:13:07">
      <figcaption>프리뷰 창 단독 뷰. 세로(9:16) 영상, 타이머 00:00:00:00 / 00:00:13:07이 표시된다.</figcaption>
    </figure>

    <ul class="content-list">
      <li>하단 타이머(00:00:00:00 / 00:00:13:07) — 현재 위치 / 전체 길이</li>
      <li>Full / Ratio 버튼으로 미리보기 비율 전환</li>
      <li>우측 하단 🎬 아이콘으로 화면 캡처 가능</li>
    </ul>
  </div>


  <!-- ═══════════════════════════════════════════════
       단원 3: 트랜지션
  ═══════════════════════════════════════════════ -->
  <div class="unit-header highlight-target" id="unit3">
    <div class="unit-number">단원 3</div>
    <div class="unit-title">트랜지션 효과 — 컷과 컷을 이어주기</div>
  </div>

  <div class="section">
    <!-- 학습 목표 -->
    <div class="callout goal">
      <div class="callout-header"><span class="icon">📌</span> 학습 목표</div>
      <ul>
        <li data-icon="✓">트랜지션의 역할과 종류를 설명할 수 있다.</li>
        <li data-icon="✓">타임라인에서 컷 사이에 트랜지션을 추가할 수 있다.</li>
        <li data-icon="✓">장면 분위기에 맞는 트랜지션을 선택할 수 있다.</li>
      </ul>
    </div>

    <!-- 3.1 -->
    <h2 id="sec3-1" class="highlight-target">3.1 &nbsp;트랜지션이란?</h2>
    <p>트랜지션(Transition)은 한 컷이 끝나고 다음 컷이 시작될 때 화면이 전환되는 방식이다. 아무 효과 없이 바로 전환하면 Jump Cut, 페이드·슬라이드 등을 넣으면 부드럽게 연결된다.</p>

    <!-- 3.2 -->
    <h2 id="sec3-2" class="highlight-target">3.2 &nbsp;트랜지션 추가 방법</h2>

    <ol class="step-list">
      <li>상단 메뉴바에서 <strong>Transitions 탭</strong> 클릭</li>
      <li>원하는 트랜지션 썸네일 선택 (Favorites에서 빠르게 고를 수 있다)</li>
      <li>타임라인에서 트랜지션을 넣을 <strong>컷과 컷 사이</strong>로 드래그</li>
      <li>타임라인에 나비 모양 아이콘(⊠)으로 트랜지션이 표시됨</li>
    </ol>

    <figure class="screenshot-fig">
      <img src="capcut/스크린샷 2026-05-16 오전 12.31.23.png" alt="Transitions 패널 — Black Fade, Gradual Fade, Slow Fade 등">
      <figcaption>Transitions 패널. Black Fade, Gradual Fade, Slow Fade 등 다양한 효과가 있다.</figcaption>
    </figure>

    <figure class="screenshot-fig">
      <img src="capcut/스크린샷 2026-05-16 오전 12.31.41.png" alt="타임라인 — 컷 사이에 트랜지션 아이콘(⊠) 적용된 모습">
      <figcaption>타임라인 컷 사이에 트랜지션 아이콘(⊠)이 적용된 모습.</figcaption>
    </figure>

    <div class="data-table-wrap">
      <table class="data-table">
        <thead>
          <tr><th>트랜지션</th><th>특징 &amp; 추천 장면</th></tr>
        </thead>
        <tbody>
          <tr><td class="text">Black Fade</td><td>화면이 검게 꺼지며 전환. 씬 전환(시간·장소 변경)에 가장 자주 쓰임</td></tr>
          <tr><td class="text">Gradual Fade</td><td>이전 화면이 서서히 사라짐. 감성적·느린 장면 연결에 적합</td></tr>
          <tr><td class="text">Slow Fade</td><td>Gradual Fade보다 천천히. 엔딩 또는 몽환적 장면에 활용</td></tr>
          <tr><td class="text">Overlap Fade</td><td>두 화면이 겹치며 전환. 회상·꿈 장면에 어울림</td></tr>
          <tr><td class="text">Wispy Fade</td><td>연기처럼 흩어지며 전환. 판타지·감성 영상에 활용</td></tr>
          <tr><td class="text">Tilt &amp; Fade</td><td>화면이 기울어지며 전환. 역동적인 씬 연결</td></tr>
        </tbody>
      </table>
    </div>

    <div class="callout tip">
      <div class="callout-header"><span class="icon">💡</span> Tip</div>
      <p>트랜지션 지속 시간은 <strong>0.3~0.5초</strong>가 가장 자연스럽다. 너무 길면 답답한 느낌이 난다.</p>
    </div>

    <div class="callout checklist">
      <div class="callout-header"><span class="icon">✅</span> 체크리스트</div>
      <ul>
        <li data-icon="☐">모든 씬 전환에 Black Fade 또는 Gradual Fade를 적용했다.</li>
        <li data-icon="☐">트랜지션 지속 시간이 0.5초 이하로 설정되어 있다.</li>
        <li data-icon="☐">타임라인에 트랜지션 아이콘(⊠)이 컷 사이마다 보인다.</li>
        <li data-icon="☐">프리뷰로 트랜지션이 자연스럽게 재생되는지 확인했다.</li>
      </ul>
    </div>
  </div>


  <!-- ═══════════════════════════════════════════════
       단원 4: 자막 & 텍스트
  ═══════════════════════════════════════════════ -->
  <div class="unit-header highlight-target" id="unit4">
    <div class="unit-number">단원 4</div>
    <div class="unit-title">자막 &amp; 텍스트</div>
  </div>

  <div class="section">
    <!-- 학습 목표 -->
    <div class="callout goal">
      <div class="callout-header"><span class="icon">📌</span> 학습 목표</div>
      <ul>
        <li data-icon="✓">클립에 자막을 추가하고 스타일을 지정할 수 있다.</li>
        <li data-icon="✓">Captions(AI 자동 자막) 기능으로 음성을 텍스트로 변환할 수 있다.</li>
        <li data-icon="✓">타이틀 텍스트를 애니메이션과 함께 배치할 수 있다.</li>
      </ul>
    </div>

    <!-- 4.1 -->
    <h2 id="sec4-1" class="highlight-target">4.1 &nbsp;수동 자막 추가</h2>

    <ol class="step-list">
      <li>상단 <strong>Text 탭</strong> → '기본 텍스트' 클릭</li>
      <li>타임라인에 텍스트 클립 생성 → 길이와 위치 조정</li>
      <li>우측 패널: 폰트·크기·색상·윤곽선 설정</li>
      <li>프리뷰 창에서 자막 위치 드래그</li>
    </ol>

    <!-- 4.2 -->
    <h2 id="sec4-2" class="highlight-target">4.2 &nbsp;Captions — AI 자동 자막</h2>
    <p>음성이 포함된 영상이라면 AI가 자동으로 음성을 인식해 자막을 생성해 준다.</p>

    <ol class="step-list">
      <li>상단 <strong>Captions 탭</strong> → 'Auto captions' 선택</li>
      <li>언어 설정 → 'Generate' 클릭</li>
      <li>생성된 자막 검토 및 오타 수정</li>
    </ol>

    <div class="callout tip">
      <div class="callout-header"><span class="icon">💡</span> Tip</div>
      <p>AI 자막은 90% 이상 정확하지만, <strong>고유명사·방언</strong>은 반드시 직접 확인한다.</p>
    </div>

    <!-- 4.3 -->
    <h2 id="sec4-3" class="highlight-target">4.3 &nbsp;자막 스타일 팁</h2>

    <div class="data-table-wrap">
      <table class="data-table">
        <thead>
          <tr><th>항목</th><th>권장값</th></tr>
        </thead>
        <tbody>
          <tr><td class="text">폰트</td><td>고딕 계열 (Noto Sans KR 권장)</td></tr>
          <tr><td class="text">크기</td><td>영상 세로 높이의 4~5%</td></tr>
          <tr><td class="text">위치</td><td>화면 하단 1/5 영역</td></tr>
          <tr><td class="text">색상</td><td>흰색 + 검정 윤곽선</td></tr>
        </tbody>
      </table>
    </div>

    <div class="callout checklist">
      <div class="callout-header"><span class="icon">✅</span> 체크리스트</div>
      <ul>
        <li data-icon="☐">모든 대사·내레이션에 자막을 추가했다.</li>
        <li data-icon="☐">자막 폰트와 크기가 전체적으로 통일되어 있다.</li>
        <li data-icon="☐">타이틀 화면에 오프닝 텍스트를 넣었다.</li>
        <li data-icon="☐">자막 위치가 화면 내용을 가리지 않는다.</li>
      </ul>
    </div>
  </div>


  <!-- ═══════════════════════════════════════════════
       단원 5: 사운드 & 최종 출력
  ═══════════════════════════════════════════════ -->
  <div class="unit-header highlight-target" id="unit5">
    <div class="unit-number">단원 5</div>
    <div class="unit-title">사운드 &amp; 최종 출력</div>
  </div>

  <div class="section">
    <!-- 학습 목표 -->
    <div class="callout goal">
      <div class="callout-header"><span class="icon">📌</span> 학습 목표</div>
      <ul>
        <li data-icon="✓">Google Cloud TTS로 내레이션 음성을 생성하고 캡컷에 넣을 수 있다.</li>
        <li data-icon="✓">SSML 태그로 읽기 속도·강조·간격을 조절할 수 있다.</li>
        <li data-icon="✓">BGM과 효과음을 타임라인에 추가하고 볼륨을 조절할 수 있다.</li>
        <li data-icon="✓">완성된 영상을 플랫폼에 맞는 설정으로 내보낼 수 있다.</li>
      </ul>
    </div>

    <!-- 5.1 -->
    <h2 id="sec5-1" class="highlight-target">5.1 &nbsp;AI 내레이션 — Google Cloud Text-to-Speech</h2>

    <div class="data-table-wrap">
      <table class="data-table">
        <thead>
          <tr><th>항목</th><th>내용</th></tr>
        </thead>
        <tbody>
          <tr><td class="text">주소</td><td><a class="inline-link" href="https://cloud.google.com/text-to-speech" target="_blank">cloud.google.com/text-to-speech</a> → 상단 "Demo" 탭 클릭</td></tr>
          <tr><td class="text">사용법</td><td>텍스트 입력 → 언어·목소리 선택 → SPEAK 버튼 → 다운로드</td></tr>
          <tr><td class="text">추천 목소리</td><td>한국어: ko-KR-Wavenet-A~D (자연스러운 Neural 음성)</td></tr>
          <tr><td class="text">출력 형식</td><td>MP3 다운로드 → 캡컷 Audio 탭 Import로 삽입</td></tr>
          <tr><td class="text">무료 한도</td><td>매월 100만 자(Wavenet 기준)까지 무료</td></tr>
        </tbody>
      </table>
    </div>

    <h3>SSML 태그 소개</h3>
    <p>입력창 상단에서 'SSML' 모드를 선택하면 꺾쇠 태그로 목소리를 연출할 수 있다.</p>

    <div class="data-table-wrap">
      <table class="data-table">
        <thead>
          <tr><th>태그</th><th>효과</th></tr>
        </thead>
        <tbody>
          <tr><td><code>&lt;break time="1s"/&gt;</code></td><td>해당 위치에서 1초 간격(묵음)</td></tr>
          <tr><td><code>&lt;emphasis level="strong"&gt;</code></td><td>단어를 강하게 강조해서 읽음</td></tr>
          <tr><td><code>&lt;prosody rate="slow"&gt;</code></td><td>읽기 속도 조절. slow / medium / fast 또는 80%</td></tr>
          <tr><td><code>&lt;prosody pitch="+2st"&gt;</code></td><td>음높이 조절. +2st(올림), -3st(낮춤)</td></tr>
          <tr><td><code>&lt;prosody volume="loud"&gt;</code></td><td>볼륨 조절</td></tr>
          <tr><td><code>&lt;say-as interpret-as="cardinal"&gt;</code></td><td>숫자 읽기 방식 지정</td></tr>
        </tbody>
      </table>
    </div>

    <div class="prompt-box">
      <div class="prompt-label">SSML 예시</div>
      <pre><span class="param">&lt;speak&gt;</span>
  안녕하세요.<span class="param">&lt;break time="0.8s"/&gt;</span>
  오늘은 <span class="param">&lt;emphasis level="strong"&gt;</span>AI 영상 제작<span class="param">&lt;/emphasis&gt;</span>에 대해 배워볼게요.
  <span class="param">&lt;prosody rate="slow"&gt;</span>천천히 따라오세요.<span class="param">&lt;/prosody&gt;</span>
<span class="param">&lt;/speak&gt;</span></pre>
    </div>

    <div class="callout tip">
      <div class="callout-header"><span class="icon">💡</span> Tip</div>
      <p>태그를 처음 쓸 때는 <code style="font-family:'Courier New',monospace;font-size:13px;background:rgba(194,65,12,0.08);padding:1px 5px;border-radius:3px;color:var(--accent);">&lt;break&gt;</code>와 <code style="font-family:'Courier New',monospace;font-size:13px;background:rgba(194,65,12,0.08);padding:1px 5px;border-radius:3px;color:var(--accent);">&lt;emphasis&gt;</code>만 써도 충분히 자연스러운 내레이션이 된다.</p>
    </div>

    <!-- 5.2 -->
    <h2 id="sec5-2" class="highlight-target">5.2 &nbsp;무료 사운드 소스 — Pixabay &amp; FreeSound</h2>

    <div class="data-table-wrap">
      <table class="data-table">
        <thead>
          <tr><th>사이트</th><th>특징</th></tr>
        </thead>
        <tbody>
          <tr>
            <td class="text">Pixabay Music<br><a class="inline-link" href="https://pixabay.com/music" target="_blank" style="font-size:12.5px;font-weight:400;">pixabay.com/music</a></td>
            <td>BGM 전문. Pixabay 라이선스로 저작권 표기 없이 상업적으로 자유롭게 사용 가능.</td>
          </tr>
          <tr>
            <td class="text">FreeSound<br><a class="inline-link" href="https://freesound.org" target="_blank" style="font-size:12.5px;font-weight:400;">freesound.org</a></td>
            <td>효과음 전문 아카이브. 수백만 개 라이브러리. 파일마다 라이선스가 다르므로 반드시 CC0 필터 사용.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>FreeSound 라이선스 비교</h3>

    <div class="data-table-wrap">
      <table class="data-table">
        <thead>
          <tr><th>라이선스</th><th>사용 조건</th></tr>
        </thead>
        <tbody>
          <tr><td class="text">CC0 (Creative Commons 0)</td><td>저작권 완전 포기. 출처 표기 불필요. 상업적 이용·편집 모두 자유. ✅ 이것만 써라</td></tr>
          <tr><td class="text">CC BY (Attribution)</td><td>출처(제작자 이름) 표기 필수.</td></tr>
          <tr><td class="text">CC BY-NC (Non-Commercial)</td><td>비상업적 목적에만 사용 가능.</td></tr>
          <tr><td class="text">CC BY-SA (ShareAlike)</td><td>편집·변형 후 같은 라이선스로 재배포 필요.</td></tr>
        </tbody>
      </table>
    </div>

    <h3>FreeSound CC0 필터 적용 방법</h3>

    <ol class="step-list">
      <li><a class="inline-link" href="https://freesound.org" target="_blank">freesound.org</a> 접속 후 검색창에 원하는 효과음 입력 (예: footsteps, rain, school bell)</li>
      <li>검색 결과 화면 좌측 'License' 항목 클릭</li>
      <li>'Creative Commons 0' 체크박스 선택 → 필터 적용</li>
      <li>또는 주소창: <code style="font-family:'Courier New',monospace;font-size:12.5px;background:rgba(15,23,42,0.06);padding:1px 5px;border-radius:3px;color:var(--accent);">freesound.org/search/?f=license%3A%22Creative+Commons+0%22&amp;q=검색어</code></li>
    </ol>

    <h3>캡컷에 외부 사운드 파일 넣는 방법</h3>

    <ol class="step-list">
      <li>Pixabay / FreeSound(CC0)에서 원하는 파일 다운로드 (MP3 또는 WAV)</li>
      <li>캡컷 편집기 상단 <strong>Audio 탭</strong> → Import 클릭</li>
      <li>다운로드한 파일 선택 → 미디어 패널에 추가됨</li>
      <li>오디오 클립을 타임라인 아래쪽 오디오 트랙으로 드래그</li>
      <li>클립 선택 → 우측 패널에서 볼륨 슬라이더 조절</li>
    </ol>

    <div class="callout tip">
      <div class="callout-header"><span class="icon">💡</span> Tip</div>
      <p>BGM 볼륨은 대사·나레이션의 <strong>60~70% 수준</strong>이 적당하다. 효과음은 해당 장면 타이밍에 정확히 맞춰 배치한다.</p>
    </div>

    <!-- 5.3 -->
    <h2 id="sec5-3" class="highlight-target">5.3 &nbsp;페이드 인 / 페이드 아웃</h2>

    <ul class="content-list">
      <li><strong>페이드 인:</strong> 오디오가 서서히 커짐. 장면 시작에 활용</li>
      <li><strong>페이드 아웃:</strong> 오디오가 서서히 사라짐. 엔딩 처리에 필수</li>
      <li><strong>설정:</strong> 오디오 클립 선택 → 우측 패널 Fade In/Out 슬라이더</li>
    </ul>

    <!-- 5.4 -->
    <h2 id="sec5-4" class="highlight-target">5.4 &nbsp;내보내기 설정</h2>

    <div class="data-table-wrap">
      <table class="data-table">
        <thead>
          <tr><th>설정</th><th>권장값</th></tr>
        </thead>
        <tbody>
          <tr><td class="text">해상도</td><td>1080p (무료 플랜 최대)</td></tr>
          <tr><td class="text">프레임 레이트</td><td>24fps (영화 느낌) 또는 30fps</td></tr>
          <tr><td class="text">포맷</td><td>MP4 (H.264) — 범용 호환성 최고</td></tr>
          <tr><td class="text">유튜브 쇼츠</td><td>9:16, 1080×1920, 30fps, 60초 이내</td></tr>
          <tr><td class="text">인스타그램 릴스</td><td>9:16, 1080×1920, 30fps, 90초 이내</td></tr>
          <tr><td class="text">유튜브 일반</td><td>16:9, 1920×1080, 24fps</td></tr>
        </tbody>
      </table>
    </div>

    <div class="callout checklist">
      <div class="callout-header"><span class="icon">✅</span> 최종 체크리스트</div>
      <ul>
        <li data-icon="☐">Pixabay 또는 FreeSound에서 BGM·효과음을 다운로드했다.</li>
        <li data-icon="☐">다운로드한 파일을 캡컷에 Import해 타임라인에 배치했다.</li>
        <li data-icon="☐">BGM 볼륨이 대사를 방해하지 않는 수준이다.</li>
        <li data-icon="☐">BGM이 영상 끝에서 페이드 아웃된다.</li>
        <li data-icon="☐">효과음이 해당 장면 타이밍에 정확히 맞춰져 있다.</li>
        <li data-icon="☐">플랫폼에 맞는 해상도·비율로 내보내기를 완료했다.</li>
        <li data-icon="☐">내보낸 파일을 재생해 화질·음질·자막을 최종 확인했다.</li>
      </ul>
    </div>
  </div>`
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
  font-size: 17px;
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
  margin-bottom: 20px;
}
.cover-tag {
  font-size: 13px;
  color: #64748B;
  padding: 4px 12px;
  border: 1px solid #2E4060;
  border-radius: 20px;
}
.cover-link {
  font-size: 13.5px;
  color: #F97316;
  text-decoration: none;
  border-bottom: 1px solid rgba(249,115,22,0.35);
  transition: border-color 0.15s;
  position: relative;
  z-index: 1;
}
.cover-link:hover { border-color: #F97316; }

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
.callout p {
  font-size: 14.5px;
  max-width: 100%;
  margin-bottom: 0;
  line-height: 1.65;
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
/* 첫 번째 셀이 일반 한국어 텍스트인 경우 */
.data-table tbody td:first-child.text {
  font-family: var(--sans);
  font-size: 14.5px;
  white-space: normal;
}
/* code 태그 스타일 */
.data-table code {
  font-family: 'Courier New', 'Consolas', monospace;
  font-size: 12.5px;
  background: rgba(15,23,42,0.06);
  padding: 1px 5px;
  border-radius: 3px;
  color: var(--accent);
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
  .cover { padding: 32pt 40pt; page-break-after: always; }
  .cover-title { font-size: 26pt; }
  .cover-sub { font-size: 13pt; }
  .unit-header { break-before: page; padding: 24pt 40pt 20pt; }
  .section { padding: 16pt 40pt 12pt; }
  h2 { break-after: avoid; font-size: 14pt; margin-top: 18pt; }
  h3 { break-after: avoid; font-size: 11pt; margin-top: 12pt; }
  p, ul.content-list, ol.step-list { max-width: 100%; }
  .callout { break-inside: avoid; }
  .prompt-box { break-inside: avoid; }
  .data-table-wrap { break-inside: avoid; }
  .screenshot-fig { break-inside: avoid; max-width: 100%; }
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
