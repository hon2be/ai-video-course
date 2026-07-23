<template>
<div class="lesson-body textbook">

  <section class="cover" id="cover">
    <div class="cover-eyebrow">AI독학꿀벌 (구 허니비TV) · @hon2bee_kr</div>
    <div class="cover-title">Ep.14 부록</div>
    <div class="cover-sub">우리 가게 카드뉴스 · 챗지피티 + 나노바나나 · 5분에 5장</div>
    <div class="cover-meta">
      <span class="cover-tag">챗지피티 프롬프트</span>
      <span class="cover-tag">나노바나나 이미지</span>
      <span class="cover-tag">톤 락인</span>
      <span class="cover-tag">인스타 카드뉴스</span>
      <span class="cover-tag">자영업자 실전</span>
    </div>
  </section>

  <section class="lesson-section">
    <div class="callout goal">
      <div class="callout-header"><span>📌</span> 사용 안내</div>
      <p>이 페이지는 <strong>AI독학꿀벌 (구 허니비TV) #14 영상</strong>에서 사용한 프롬프트를 그대로 복붙해 쓰실 수 있게 정리한 부록입니다.</p>
      <ul>
        <li data-icon="✓">각 코드 블럭 통째로 복사</li>
        <li data-icon="✓">본인 가게 상황에 맞게 <code>[대괄호]</code> 안 부분만 수정</li>
        <li data-icon="✓">필요한 유료 툴: <strong>없음</strong> · 챗지피티 무료 계정 · 나노바나나(제미나이) 무료로 가능</li>
        <li data-icon="✓">외주 카드뉴스 5-15만 원짜리를 · 반나절도 안 걸려 직접 만드는 흐름</li>
      </ul>
    </div>
  </section>

  <!-- ================ 단원 0 · 톤 벤치마크 · 행안부 카드뉴스 ================ -->
  <div class="unit-header" id="benchmark">
    <div class="unit-number">단원 0</div>
    <div class="unit-title">톤 참고 · 행정안전부 카드뉴스</div>
  </div>

  <section class="lesson-section">
    <p>
      카드뉴스 톤은 · <strong>공공기관 카드뉴스</strong>가 좋은 표본이에요. 접근성·가독성·헤드카피 배치가 · 정석이라 · 시니어에게도 익숙합니다.
      아래 세 장이 · 이번 편 프롬프트에서 참고한 · 톤 원본입니다.
    </p>
    <figure class="fig-grid">
      <figure>
        <img src="/ai-video-course/tv/ep14/mois_기초연금_01_표지.png" alt="행안부 카드뉴스 · 표지" loading="lazy" />
        <figcaption>표지 카드 · 3단 헤드카피 · CTA "옆으로 넘겨보세요"</figcaption>
      </figure>
      <figure>
        <img src="/ai-video-course/tv/ep14/mois_기초연금_02_문제제기.png" alt="행안부 카드뉴스 · 문제 제기" loading="lazy" />
        <figcaption>공감·문제 카드 · 인용부호 헤드카피 · 말풍선</figcaption>
      </figure>
      <figure>
        <img src="/ai-video-course/tv/ep14/mois_기초연금_03_핵심3줄.png" alt="행안부 카드뉴스 · 핵심 3줄" loading="lazy" />
        <figcaption>정보 카드 · 체크리스트 3항목 · 인물 대화</figcaption>
      </figure>
    </figure>

    <div class="callout tip">
      <div class="callout-header"><span>💡</span> 톤 규칙 5가지 (여기서 뽑은 것)</div>
      <ul>
        <li data-icon="1">배경 · 파스텔 하늘색 통일</li>
        <li data-icon="2">인물 · 심플 카툰 · 굵은 라인 · 얼굴 디테일 최소</li>
        <li data-icon="3">헤드카피 · 3단 배치 · 핵심 단어 파란색 · 나머지 검정</li>
        <li data-icon="4">카드마다 CTA · "옆으로 넘겨보세요"</li>
        <li data-icon="5">비율 · 세로 3:4 (인스타 세로)</li>
      </ul>
    </div>
    <p><small>원본: <a href="https://www.mois.go.kr/frt/bbs/type002/commonSelectBoardList.do?bbsId=BBSMSTR_000000000205" target="_blank" rel="noopener">행정안전부 카드뉴스 게시판</a> · 1,280건 · 무료 · 공공저작물</small></p>
  </section>

  <!-- ================ 단원 1 · 챗지피티에 카피 뼈대 요청 ================ -->
  <div class="unit-header" id="copy">
    <div class="unit-number">단원 1</div>
    <div class="unit-title">챗지피티한테 · 카드 5장 · 카피 뼈대 부탁</div>
  </div>

  <section class="lesson-section">
    <p>새 챗지피티 대화를 열고 · 아래 프롬프트를 · 그대로 붙여넣으세요. <code>[가게]</code>·<code>[신메뉴]</code>·<code>[손님 톤]</code>만 · 본인 가게에 맞게 바꾸시면 됩니다.</p>
<pre><code>[업종] 신메뉴 홍보용 인스타 카드뉴스 5장 세트를 만들려고 합니다.

가게: [가게 설명 · 예: 골목 작은 카페 · 허니비 카페]
신메뉴: [신메뉴 이름·구성 · 예: 여름 스무디 3종 · 청귤·복숭아·자몽]
톤: [톤 · 예: 다정하고 소소한 · 반말 X · 20-40대 여성 손님]
카드 구성:
- 1장: 표지 (호기심 유발)
- 2장: 신메뉴 [n]종 이름·컨셉 소개
- 3장: [메뉴1] 이야기
- 4장: [메뉴2·메뉴3] 이야기
- 5장: 오픈일·가격·이벤트 안내

각 장별 큰 헤드카피(한 줄) · 소카피(한두 문장) · 이미지 프롬프트 아이디어를
표로 정리해주세요.</code></pre>

    <div class="callout tip">
      <div class="callout-header"><span>💡</span> 왜 표로 요청하나요</div>
      <p>표로 부탁하면 · <strong>5장 전부 · 헤드카피·소카피·이미지 프롬프트가 · 한 줄씩 정렬</strong>돼서 나옵니다. 다음 단계(나노바나나)에서 · 이미지 프롬프트 열만 복붙하면 · 그대로 진행 가능해요.</p>
    </div>

    <h3>챗지피티가 돌려준 결과 (실제 예시)</h3>
    <div class="scroll-x">
      <table class="tbl">
        <thead><tr><th>장</th><th>큰 헤드카피</th><th>이미지 프롬프트 아이디어</th></tr></thead>
        <tbody>
          <tr><td>1장 · 표지</td><td>올여름, 어떤 맛으로 쉬어가실래요?</td><td>아늑한 골목 카페의 나무 테이블 위에 스무디 3잔 · 여름 햇살 · 파스텔톤</td></tr>
          <tr><td>2장 · 3종 소개</td><td>오늘의 기분에 맞춰 골라보세요</td><td>스무디 3종 플랫레이 · 연두·연분홍·코랄 · 손글씨 태그</td></tr>
          <tr><td>3장 · 청귤</td><td>첫 모금부터 맑고 산뜻하게</td><td>연두빛 청귤 스무디 클로즈업 · 물방울 · 반으로 자른 청귤</td></tr>
          <tr><td>4장 · 복숭아·자몽</td><td>달콤한 위로와 산뜻한 여운</td><td>복숭아·자몽 스무디 두 잔 · 체크무늬 테이블보 · 따뜻한 자연광</td></tr>
          <tr><td>5장 · 안내</td><td>여름 스무디, 곧 시작합니다</td><td>메뉴 안내판 · 손글씨 오픈 카드 · 크림색 배경 · 중앙 여백</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- ================ 단원 2 · 나노바나나 · 톤 락인 프롬프트 ================ -->
  <div class="unit-header" id="image">
    <div class="unit-number">단원 2</div>
    <div class="unit-title">나노바나나 · 카드 1장부터 · 톤 락인 프롬프트</div>
  </div>

  <section class="lesson-section">
    <p><strong>중요 · 한 채팅에서 5장 이어서</strong> 만드세요. 새 채팅 열지 마시고 · "같은 톤으로 다음 카드" 이렇게 · 대화로 이어가야 · 인물·색·구성이 · 통일됩니다.</p>

    <h3>카드 1 · 톤 락인 (첫 요청 · 이걸 붙여넣으세요)</h3>
<pre><code>카페 신메뉴 홍보용 인스타 카드뉴스 5장을 만들 거예요. 지금부터 이 채팅에서 카드 1장씩 이어서 만들어주세요.

공통 스타일 · 5장 모두 반드시 유지:
- 배경: 파스텔 하늘색 (#E8F1FA) · 여백 넉넉
- 인물: 심플 카툰 · 굵은 검정 라인 · 20-30대 여성 바리스타 · 검정 단발머리 · 아이보리 상의 위 아쿠아블루 앞치마 · 미소
- 헤드카피 위치: 상단 작게 "[가게명] · [소제]" · 중앙 큰 굵은 검정 · 그 아래 파란색(#1E88E5) 강조 · 하단 작게 안내
- 톤 참조: 행정안전부 공공기관 카드뉴스 스타일
- 비율: 세로 3:4 (인스타 세로)
- 한 장만 · 여러 변형/그리드 금지

카드 1 · 표지
- 소제: "[시즌 소제 · 예: 여름 신메뉴]"
- 인물 자세: 정면 · 스무디 트레이 ([메뉴1]·[메뉴2]·[메뉴3] [n]잔) 들고 미소
- 중앙 헤드카피: "[대카피 · 예: 여름 스무디 3종]"
- 강조 헤드카피: "[강조 · 예: 오픈했어요]"
- 하단 안내: "옆으로 넘겨보세요"</code></pre>

    <figure class="fig">
      <img src="/ai-video-course/tv/ep14/card_01_표지.png" alt="완성 카드 1 · 표지" loading="lazy" style="max-width:420px; margin:0 auto; display:block;" />
      <figcaption>▲ 카드 1 완성본 · 인물·톤·헤드카피 배치 · 이걸 기준으로 카드 2~5 이어감</figcaption>
    </figure>

    <div class="callout warn">
      <div class="callout-header"><span>⚠️</span> 놓치면 안 되는 문구 3가지</div>
      <ul>
        <li data-icon="1"><strong>"한 장만 · 여러 변형/그리드 금지"</strong> · 안 넣으면 · 나노바나나가 · 여러 변형을 · 한 이미지에 · 그리드로 뱉음</li>
        <li data-icon="2"><strong>"공통 스타일 · 5장 모두 반드시 유지"</strong> · 이후 카드 요청 시 · 같은 인물·색·구성 유지 유도</li>
        <li data-icon="3"><strong>"헤드카피 위치" 명시</strong> · 상단·중앙·하단 · 픽셀 위치까지 지시하면 · 톤 통일 성공률 급상승</li>
      </ul>
    </div>
  </section>

  <!-- ================ 단원 3 · 카드 2~5 · 팔로우업 프롬프트 ================ -->
  <div class="unit-header" id="followups">
    <div class="unit-number">단원 3</div>
    <div class="unit-title">카드 2~5 · 같은 채팅에 · 이어서 부탁</div>
  </div>

  <section class="lesson-section">
    <p>카드 1이 마음에 드는 결과로 나왔다면 · <strong>같은 채팅</strong>에 아래 요청을 · 순서대로 · 하나씩 붙여넣으세요.</p>

    <h3>카드 2 · 3종 소개</h3>
<pre><code>같은 인물·같은 배경·같은 헤드카피 배치 유지해서 · 카드 2 만들어주세요.

카드 2 · 3종 소개
- 소제: "3종 · [메뉴1] · [메뉴2] · [메뉴3]"
- 인물 자세: 상반신 정면 · 카운터 위에 3잔 나란히 놓고 한 손으로 소개하는 동작
- 스무디 3잔 색: 연두([메뉴1]) · 연분홍([메뉴2]) · 코랄([메뉴3])
- 중앙 헤드카피: "오늘의 기분에 맞춰"
- 강조 헤드카피: "골라보세요"
- 한 장만 · 그리드 X</code></pre>
    <figure class="fig">
      <img src="/ai-video-course/tv/ep14/card_02_3종소개.png" alt="완성 카드 2 · 3종 소개" loading="lazy" style="max-width:420px; margin:0 auto; display:block;" />
    </figure>

    <h3>카드 3 · 개별 메뉴 (예 · 청귤)</h3>
<pre><code>같은 인물·같은 배경·같은 헤드카피 배치 유지해서 · 카드 3 만들어주세요.

카드 3 · [메뉴1] 스무디
- 소제: "[메뉴1] 스무디"
- 인물 자세: 상반신 · [메뉴1] 스무디 한 잔을 두 손으로 감싸며 살짝 웃는 포즈
- 옆에 [메뉴1 아이콘 · 예: 반으로 자른 청귤과 초록 잎] 아이콘
- 중앙 헤드카피: "[대카피 · 예: 첫 모금부터]"
- 강조 헤드카피: "[강조 · 예: 맑고 산뜻하게]"
- 한 장만 · 그리드 X</code></pre>
    <figure class="fig">
      <img src="/ai-video-course/tv/ep14/card_03_청귤.png" alt="완성 카드 3 · 청귤" loading="lazy" style="max-width:420px; margin:0 auto; display:block;" />
    </figure>

    <h3>카드 4 · 개별 메뉴 (예 · 복숭아·자몽)</h3>
<pre><code>같은 인물·같은 배경·같은 헤드카피 배치 유지해서 · 카드 4 만들어주세요.

카드 4 · [메뉴2·메뉴3] 스무디
- 소제: "[메뉴2] · [메뉴3]"
- 인물 자세: 상반신 · 트레이에 [메뉴2](연분홍)와 [메뉴3](코랄) 두 잔 나란히 들고 있음
- 옆에 [메뉴2·3 아이콘] 아이콘
- 중앙 헤드카피: "[대카피]"
- 강조 헤드카피: "[강조]"
- 한 장만 · 그리드 X</code></pre>
    <figure class="fig">
      <img src="/ai-video-course/tv/ep14/card_04_복숭아자몽.png" alt="완성 카드 4 · 복숭아·자몽" loading="lazy" style="max-width:420px; margin:0 auto; display:block;" />
    </figure>

    <h3>카드 5 · 오픈 안내</h3>
<pre><code>같은 인물·같은 배경·같은 헤드카피 배치 유지해서 · 카드 5 만들어주세요.

카드 5 · 오픈 안내
- 소제: "오픈일 · 가격 · 이벤트"
- 인물 자세: 상반신 · 한 손을 살짝 흔들며 정면 인사
- 옆에 작은 메뉴 안내판 · 꽃과 과일 아이콘으로 카운터 장식
- 중앙 헤드카피: "[상품명]"
- 강조 헤드카피: "곧 시작합니다"
- 하단 안내: "오픈일 · 가격 · 이벤트는 카드 뒤에서"
- 한 장만 · 그리드 X</code></pre>
    <figure class="fig">
      <img src="/ai-video-course/tv/ep14/card_05_안내.png" alt="완성 카드 5 · 안내" loading="lazy" style="max-width:420px; margin:0 auto; display:block;" />
    </figure>
  </section>

  <!-- ================ 단원 4 · 톤이 안 맞을 때 · 재요청 ================ -->
  <div class="unit-header" id="fix">
    <div class="unit-number">단원 4</div>
    <div class="unit-title">톤이 살짝 안 맞을 때 · 재요청 문구</div>
  </div>

  <section class="lesson-section">
    <p>중간에 한 장이 · 톤이 안 맞게 나오면 · <strong>같은 채팅에서</strong> · 아래 문구로 · 다시 부탁하세요.</p>
<pre><code>[N장]이 · 다른 카드와 톤이 안 맞아요.
같은 스타일 유지하면서 · [바꿀 부분 · 예: 배경만 좀 더 밝게 · 인물 표정만 좀 더 활짝] 다시 만들어주세요.</code></pre>
    <div class="callout tip">
      <div class="callout-header"><span>💡</span> 재요청 시 주의</div>
      <ul>
        <li data-icon="✓"><strong>바꿀 부분만</strong> 콕 집기 · "전체 다시" 하면 처음부터 다시 뽑아서 · 다른 카드와 안 맞음</li>
        <li data-icon="✓">헤드카피 오타 시 · <strong>이미지 편집기로 직접 수정 X</strong> · 프롬프트에서 헤드카피만 다시 명시</li>
      </ul>
    </div>
  </section>

  <!-- ================ 단원 5 · 인스타 업로드 ================ -->
  <div class="unit-header" id="upload">
    <div class="unit-number">단원 5</div>
    <div class="unit-title">인스타 업로드 · 5장 순서 + 캡션</div>
  </div>

  <section class="lesson-section">
    <ol>
      <li>인스타 앱 → 새 게시물 → <strong>다중 이미지</strong> 선택</li>
      <li>카드 1 → 2 → 3 → 4 → 5 · 순서대로 추가</li>
      <li>캡션은 · 챗지피티가 준 · <strong>소카피 5줄</strong> · 그대로 이어붙이기</li>
      <li>해시태그는 · 아래 · 자영업 카드뉴스 · 기본 세트 사용</li>
    </ol>
<pre><code>#[가게이름] #[지역]카페 #신메뉴 #여름메뉴 #카드뉴스
#소상공인 #자영업 #인스타감성 #맛집스타그램 #카페스타그램</code></pre>
  </section>

  <!-- ================ 단원 6 · 확장 · 그리드 9칸 ================ -->
  <div class="unit-header" id="grid">
    <div class="unit-number">단원 6</div>
    <div class="unit-title">확장 · 프로필 첫 화면 · 9칸 그리드</div>
  </div>

  <section class="lesson-section">
    <p>같은 방식으로 · <strong>3x3 프로필 그리드 9장</strong>도 · 뽑을 수 있어요. 요청 문구는 아래 · 같은 채팅에 이어서.</p>
<pre><code>같은 톤·같은 인물 유지하면서 · 프로필 첫 화면용 · 9장 그리드 세트를 만들어주세요.

- 3x3 배치 · 서로 · 색·구도 · 조화
- 순서: 대표컷 → 메뉴 → 인테리어 → 손님 → 뒷이야기
- 각 장은 정사각형 1:1 비율
- 한 장씩 · 순서대로 뽑아주세요 · 그리드 한 이미지로 X</code></pre>
  </section>

  <!-- ================ 마무리 ================ -->
  <div class="unit-header" id="wrap">
    <div class="unit-number">마무리</div>
    <div class="unit-title">기억할 세 가지</div>
  </div>

  <section class="lesson-section">
    <ul>
      <li data-icon="1"><strong>카피는 챗지피티 · 이미지는 나노바나나</strong> · 편집기(캔바 등) 없음</li>
      <li data-icon="2"><strong>톤 문구는 공통</strong> · 카드마다 같은 배경·인물·헤드카피 위치 명시</li>
      <li data-icon="3"><strong>헤드카피는 이미지 안에</strong> · 나노바나나에게 · "카드 위에 한글 크게 얹어서" 요청</li>
    </ul>

    <div class="callout tip">
      <div class="callout-header"><span>💡</span> 다음 편 예고</div>
      <p>이 카드뉴스 5장을 · <strong>인스타 캡션·해시태그도 자동 생성</strong>하고 · 릴스 대본까지 · AI로 이어가는 편.</p>
    </div>
  </section>

</div>
</template>

<script setup>
</script>
