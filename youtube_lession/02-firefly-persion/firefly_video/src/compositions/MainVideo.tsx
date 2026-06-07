import React from "react";
import { AbsoluteFill, Audio, Series, staticFile } from "remotion";
import { Section, TitleSection } from "./Section";

export const FPS = 30;
export const WIDTH = 1920;
export const HEIGHT = 1080;

// 각 섹션 길이 (frames @ 30fps) — audio duration + 15 frame buffer
const SECTIONS = [
  {
    sectionNumber: "INTRO",
    title: "영상 제작의 첫 단계",
    subtitle: "오늘은 \"영상 생성\"이 아니라 \"인물 데이터셋 구축\"",
    audioFile: "audio/section_01.wav",
    durationInFrames: 1161, // 38.20s
    images: [
      { src: "images/front.png", caption: "오늘의 예시 인물 — 기준 이미지" },
    ],
    bullets: [
      "AI 영상의 최대 약점: 인물 일관성",
      "같은 프롬프트 → 매번 다른 얼굴",
      "해결책: 영상 만들기 전에 데이터셋 먼저",
      "다음 강의 = 이 데이터셋으로 진짜 영상 생성",
    ],
  },
  {
    sectionNumber: "00",
    title: "전체 워크플로우",
    subtitle: "데이터셋은 GPT, 생성·학습은 Firefly",
    audioFile: "audio/section_02.wav",
    durationInFrames: 1147, // 37.75s
    images: [
      { src: "images/front.png", caption: "① ChatGPT — 기준 이미지" },
      { src: "images/head_shot.png", caption: "② ChatGPT — 데이터 시트" },
      { src: "images/multishot.png", caption: "③ 개별컷 정리" },
      { src: "images/activities.png", caption: "④ Firefly Reference + Structure" },
    ],
  },
  {
    sectionNumber: "STEP 1",
    title: "ChatGPT로 기준 인물 만들기",
    subtitle: "정면 · 단색 배경 · 명확한 묘사",
    audioFile: "audio/section_03.wav",
    durationInFrames: 992, // 32.60s
    images: [
      { src: "images/front.png", caption: "front.png — 기준 원본 (GPT 생성)" },
    ],
    bullets: [
      "정면 (front-facing)",
      "단색 배경 (plain gray)",
      "전신/상반신 프레임",
      "헤어·눈·피부 톤 구체적 묘사",
      "마음에 든 컷은 반드시 저장",
    ],
  },
  {
    sectionNumber: "STEP 2",
    title: "ChatGPT로 데이터 시트 4종 뽑기",
    subtitle: "기준 이미지 첨부 + character sheet 프롬프트",
    audioFile: "audio/section_04.wav",
    durationInFrames: 1079, // 35.49s
    images: [
      { src: "images/head_shot.png", caption: "① 헤드샷 시트 — 8각도" },
      { src: "images/multishot.png", caption: "② 전신 멀티샷 — 8각도" },
      { src: "images/multishot_face.png", caption: "③ 표정 시트 — 10종" },
      { src: "images/activities.png", caption: "④ 활동 시트 — 8종" },
    ],
  },
  {
    sectionNumber: "STEP 3",
    title: "개별컷으로 정리하기",
    subtitle: "폴더 구조로 찾기 쉽게",
    audioFile: "audio/section_05.wav",
    durationInFrames: 998, // 32.77s
    images: [
      { src: "images/multishot.png", caption: "그리드 시트를 1장씩 분할" },
    ],
    bullets: [
      "인물1_20대_여성/",
      "├ front.png (기준 원본)",
      "├ head_shot.png (그리드)",
      "├ multishot.png, activities.png ...",
      "└ 개별컷/ 헤드샷, 전신, 표정, 활동, 의상",
      "파일명: 표정_웃음, 헤드샷_정면",
    ],
  },
  {
    sectionNumber: "STEP 4",
    title: "장면별 이미지 선택 가이드",
    subtitle: "참조 이미지 1~2장 조합으로 표정+포즈 잡기",
    audioFile: "audio/section_06.wav",
    durationInFrames: 1500, // 48.32s + 1s buffer
    images: [
      { src: "images/multishot_face.png", caption: "☕ 카페·식사 → 표정 시트 (smiling)" },
      { src: "images/office.png", caption: "💼 오피스 → 오피스 시트" },
      { src: "images/activities.png", caption: "🏃 스포츠 → 활동 시트" },
      { src: "images/costume.png", caption: "👗 의상 강조 → 의상 시트" },
    ],
  },
  {
    sectionNumber: "STEP 5",
    title: "실전 3컷 만들기",
    subtitle: "참조 이미지 1~2장 조합으로 인물 일관성 유지",
    audioFile: "audio/section_07.wav",
    durationInFrames: 2100, // 68.11s + 1.4s buffer
    images: [
      { src: "images/multishot_face.png", caption: "🎬 컷1 카페 — 참조 2장 (표정_02 + 클로즈업_01)" },
      { src: "images/multishot.png", caption: "🎬 컷2 야외 걷기 — 참조 2장 (smiling_45R + 전신_02)" },
      { src: "images/multishot_face.png", caption: "🎬 컷3 감정 클로즈업 — 참조 1장 (sad_front)" },
    ],
  },
  {
    sectionNumber: "06",
    title: "프롬프트 팁 — 앵커 전략",
    subtitle: "5가지 핵심 원칙",
    audioFile: "audio/section_08.wav",
    durationInFrames: 1252, // 38.24s + 3s buffer
    images: [
      { src: "images/front.png", caption: "앵커 = 인물 묘사 고정" },
    ],
    bullets: [
      "1. 앵커 구문 고정 — 매 장면 앞에 동일 인물 묘사",
      "2. 헤어 디테일 명시 — 인상을 좌우하는 핵심",
      "3. 조명 일관성 — natural daylight 통일",
      "4. 카메라 거리 명시 — portrait/medium shot",
      "5. \"the same as reference\" 명시",
    ],
  },
  {
    sectionNumber: "심화",
    title: "맞춤형 모델로 완전한 동일인물",
    subtitle: "프롬프트만으로 같은 인물 생성",
    audioFile: "audio/section_09.wav",
    durationInFrames: 3540, // 116.80s + 0.7s buffer (8장 × 14.6s/장)
    images: [
      {
        src: "images/ss_08_menu.png",
        caption: "① 사이드바 하단 → 맞춤형 모델 클릭",
        hotspots: [{ x: 4, y: 68, label: "맞춤형 모델", appearAt: 30 }],
      },
      {
        src: "images/ss_09_style.png",
        caption: "② 교육 방법 → 사진 스타일 선택",
        hotspots: [{ x: 20, y: 28, label: "사진 스타일", appearAt: 30 }],
      },
      {
        src: "images/ss_06_upload.png",
        caption: "③ 개별컷 20장+ 드래그 업로드",
        hotspots: [{ x: 50, y: 45, label: "여기에 드래그", appearAt: 30 }],
      },
      {
        src: "images/ss_02_caption.png",
        caption: "④ 캡션 자동 생성 → 직접 수정",
        hotspots: [{ x: 13, y: 72, label: "캡션 수정", appearAt: 30 }],
      },
      {
        src: "images/ss_01_training.png",
        caption: "⑤ 분석 → 교육하기 → 30분~2시간 학습",
        hotspots: [{ x: 50, y: 9, label: "분석 진행 중", appearAt: 30 }],
      },
      {
        src: "images/ss_04_score.png",
        caption: "⑥ 모델 점수 확인 → 생성하기",
        hotspots: [
          { x: 14, y: 42, label: "점수 (70+ OK)", appearAt: 30 },
          { x: 82, y: 42, label: "Firefly에서 생성", appearAt: 90 },
        ],
      },
      {
        src: "images/ss_11_fail.png",
        caption: "1단계: 모델 단독 (인물 불완전)",
        hotspots: [{ x: 8, y: 10, label: "여기서 학습한 모델 선택", appearAt: 30 }],
      },
      { src: "images/ss_10_success.png", caption: "2단계: + 참조 이미지 → 일관성 확보" },
    ],
  },
  {
    sectionNumber: "OUTRO",
    title: "오늘의 핵심 요약",
    subtitle: "오늘은 기초 (데이터셋), 다음 강의가 진짜 영상 생성",
    audioFile: "audio/section_10.wav",
    durationInFrames: 1540, // 50.84s
    images: [
      { src: "images/front.png", caption: "이 데이터셋이 다음 강의의 출발점입니다" },
    ],
    bullets: [
      "GPT로 정면·단색배경 기준 이미지",
      "GPT로 데이터 시트 4종 (헤드샷·전신·표정·활동)",
      "개별컷 정리 (가로 1024px+)",
      "Firefly 참조 이미지 1~2장으로 장면 생성",
      "심화: Firefly 맞춤형 모델 학습 (20장+)",
      "🎯 영상 제작의 출발점 = 인물 데이터셋",
      "다음 강의: 이 인물로 진짜 AI 영상 생성",
    ],
  },
];

// 타이틀 인트로
const TITLE_DURATION = 120; // 4초

export const TOTAL_FRAMES =
  TITLE_DURATION + SECTIONS.reduce((sum, s) => sum + s.durationInFrames, 0);

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#f5f5f0" }}>
      <Audio src={staticFile("audio/bgm.mp3")} volume={0.2} loop />
      <Series>
        <Series.Sequence durationInFrames={TITLE_DURATION}>
          <TitleSection durationInFrames={TITLE_DURATION} />
        </Series.Sequence>
        {SECTIONS.map((s, idx) => (
          <Series.Sequence key={idx} durationInFrames={s.durationInFrames}>
            <Section {...s} />
          </Series.Sequence>
        ))}
      </Series>
    </AbsoluteFill>
  );
};
