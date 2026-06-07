<template>
  <div class="yt-widget">
    <!-- 관리자: 링크 편집 버튼 -->
    <button v-if="isAdmin" class="yt-edit-btn" @click="showEdit = !showEdit">
      {{ link ? '▶ 영상 수정' : '＋ 영상 연결' }}
    </button>

    <!-- 관리자 편집 패널 -->
    <div v-if="isAdmin && showEdit" class="yt-edit-panel">
      <input
        v-model="inputUrl"
        class="yt-input"
        placeholder="YouTube URL 붙여넣기..."
        @keydown.enter="save"
        @keydown.esc="showEdit = false"
      />
      <div class="yt-edit-actions">
        <button class="yt-save" @click="save">저장</button>
        <button v-if="link" class="yt-remove" @click="remove">삭제</button>
        <button class="yt-cancel" @click="showEdit = false">취소</button>
      </div>
    </div>

    <!-- 비관리자: 링크 없을 때 준비중 버튼 -->
    <button v-if="!isAdmin && !link" class="yt-coming-btn" @click="onComingSoon">
      ▶ 강의 영상 보기
    </button>

    <!-- 비관리자 or 링크 있을 때: 플레이어 표시 -->
    <div v-if="link && embedId" class="yt-player-wrap">
      <iframe
        :src="`https://www.youtube.com/embed/${embedId}`"
        class="yt-player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        frameborder="0"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useYoutubeLinks } from '@/composables/useYoutubeLinks'

const props = defineProps({
  lessonId: { type: String, required: true },
  sectionId: { type: String, required: true }
})

const { isAdmin } = useAuth()
const { getLink, setLink, toEmbedId } = useYoutubeLinks(props.lessonId)

const showEdit = ref(false)
const link = ref(getLink(props.sectionId))
const inputUrl = ref(link.value)
const embedId = computed(() => link.value ? toEmbedId(link.value) : null)

function onComingSoon() {
  alert('준비중입니다 🎬')
}

function save() {
  setLink(props.sectionId, inputUrl.value.trim())
  link.value = inputUrl.value.trim()
  showEdit.value = false
}
function remove() {
  setLink(props.sectionId, '')
  link.value = ''
  inputUrl.value = ''
  showEdit.value = false
}
</script>

<style scoped>
.yt-widget { margin: 16px 0; }

/* 준비중 버튼 */
.yt-coming-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px; font-weight: 600;
  color: #64748B;
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  padding: 7px 14px;
  cursor: pointer;
  transition: all .15s;
  margin: 4px 0;
}
.yt-coming-btn:hover {
  background: #F1F5F9;
  border-color: #CBD5E1;
  color: #475569;
}

.yt-edit-btn {
  font-size: 12px; font-weight: 600;
  color: #F97316; background: rgba(249,115,22,.08);
  border: 1px dashed #F97316; border-radius: 6px;
  padding: 4px 12px; cursor: pointer;
  transition: background .15s;
}
.yt-edit-btn:hover { background: rgba(249,115,22,.16); }

.yt-edit-panel {
  margin-top: 8px;
  background: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px;
}
.yt-input {
  width: 100%; padding: 8px 10px;
  border: 1px solid #d0d0d0; border-radius: 6px;
  font-size: 13px; margin-bottom: 8px;
  outline: none;
}
.yt-input:focus { border-color: #F97316; }
.yt-edit-actions { display: flex; gap: 8px; }
.yt-save, .yt-remove, .yt-cancel {
  font-size: 12px; font-weight: 600;
  border-radius: 5px; padding: 5px 12px;
  cursor: pointer; border: none;
}
.yt-save   { background: #F97316; color: #fff; }
.yt-remove { background: #fee2e2; color: #dc2626; }
.yt-cancel { background: #f0f0f0; color: #555; }

.yt-player-wrap {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 12px;
  background: #000;
}
.yt-player {
  position: absolute;
  inset: 0; width: 100%; height: 100%;
  border: none;
}
</style>
