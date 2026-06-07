<template>
  <figure class="ann-fig">
    <!-- 이미지 + 오버레이 -->
    <div class="ann-wrap">
      <img :src="src" :alt="alt" class="ann-img">

      <!-- 포인터 마커들 -->
      <div
        v-for="(ann, i) in annotations"
        :key="i"
        class="ann-pin"
        :style="{ left: ann.x + '%', top: ann.y + '%' }"
        :class="{ 'ann-pin--active': activeIdx === i }"
        @mouseenter="activeIdx = i"
        @mouseleave="activeIdx = null"
      >
        <span class="ann-num">{{ i + 1 }}</span>

        <!-- 툴팁 (호버 시) -->
        <div class="ann-tooltip" :class="tooltipPos(ann)">
          {{ ann.label }}
        </div>
      </div>
    </div>

    <!-- 이미지 캡션 -->
    <figcaption v-if="caption" class="ann-caption">{{ caption }}</figcaption>

    <!-- 번호 범례 -->
    <ol v-if="annotations.length" class="ann-legend">
      <li
        v-for="(ann, i) in annotations"
        :key="i"
        class="ann-legend-item"
        :class="{ 'ann-legend-item--active': activeIdx === i }"
        @mouseenter="activeIdx = i"
        @mouseleave="activeIdx = null"
      >
        <span class="ann-legend-num">{{ i + 1 }}</span>
        <span>{{ ann.label }}</span>
      </li>
    </ol>
  </figure>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  caption: { type: String, default: '' },
  // annotations: [{ x: 50, y: 30, label: '설명 텍스트' }, ...]
  // x, y 는 이미지 기준 퍼센트 (0~100)
  annotations: { type: Array, default: () => [] }
})

const activeIdx = ref(null)

// 툴팁이 화면 오른쪽/아래로 넘치지 않도록 방향 결정
function tooltipPos(ann) {
  const right = ann.x > 60 ? 'tooltip--left' : 'tooltip--right'
  const bottom = ann.y > 65 ? 'tooltip--up' : ''
  return [right, bottom].filter(Boolean).join(' ')
}
</script>

<style scoped>
.ann-fig {
  margin: 16px 0 28px;
}

/* 이미지 래퍼 */
.ann-wrap {
  position: relative;
  display: inline-block;
  width: 100%;
  line-height: 0;
}

.ann-img {
  width: 100%;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  display: block;
  box-shadow: 0 2px 10px rgba(0,0,0,.08);
}

/* 핀 마커 */
.ann-pin {
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 10;
  cursor: pointer;
}

.ann-num {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #F97316;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  font-family: var(--sans, sans-serif);
  border: 2px solid #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,.3);
  transition: transform .15s, background .15s;
  line-height: 1;
}

.ann-pin:hover .ann-num,
.ann-pin--active .ann-num {
  transform: scale(1.25);
  background: #ea580c;
}

/* 툴팁 */
.ann-tooltip {
  position: absolute;
  top: 50%;
  left: calc(100% + 8px);
  transform: translateY(-50%);
  background: #1e293b;
  color: #f1f5f9;
  font-size: 12px;
  font-family: var(--sans, sans-serif);
  font-weight: 500;
  line-height: 1.4;
  white-space: nowrap;
  padding: 6px 10px;
  border-radius: 6px;
  pointer-events: none;
  opacity: 0;
  transition: opacity .15s;
  z-index: 20;
  box-shadow: 0 4px 12px rgba(0,0,0,.25);
}
.ann-tooltip::before {
  content: '';
  position: absolute;
  top: 50%;
  right: 100%;
  transform: translateY(-50%);
  border: 5px solid transparent;
  border-right-color: #1e293b;
}

/* 툴팁 방향 변형 */
.ann-tooltip.tooltip--left {
  left: auto;
  right: calc(100% + 8px);
}
.ann-tooltip.tooltip--left::before {
  right: auto;
  left: 100%;
  border-right-color: transparent;
  border-left-color: #1e293b;
}
.ann-tooltip.tooltip--up {
  top: auto;
  bottom: calc(100% + 8px);
  transform: translateX(-50%);
  left: 50%;
}
.ann-tooltip.tooltip--up::before {
  top: 100%;
  right: auto;
  left: 50%;
  transform: translateX(-50%);
  border-top-color: #1e293b;
  border-right-color: transparent;
}

.ann-pin:hover .ann-tooltip,
.ann-pin--active .ann-tooltip {
  opacity: 1;
}

/* 캡션 */
.ann-caption {
  font-size: 12.5px;
  color: #9ca3af;
  margin-top: 7px;
  padding-left: 2px;
  line-height: 1.4;
}

/* 범례 */
.ann-legend {
  list-style: none;
  padding: 0;
  margin: 12px 0 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.ann-legend-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13.5px;
  color: #374151;
  line-height: 1.5;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: default;
  transition: background .12s;
}
.ann-legend-item:hover,
.ann-legend-item--active {
  background: #fff7ed;
}

.ann-legend-num {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #F97316;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1px;
}
</style>
