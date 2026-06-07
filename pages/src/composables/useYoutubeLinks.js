import { ref, watch } from 'vue'

// localStorage key: yt_{lessonId}_{sectionId}
const _cache = ref({})

function storageKey(lessonId, sectionId) {
  return `yt_${lessonId}_${sectionId}`
}

export function useYoutubeLinks(lessonId) {
  function getLink(sectionId) {
    const key = storageKey(lessonId, sectionId)
    if (_cache.value[key] === undefined) {
      _cache.value[key] = localStorage.getItem(key) || ''
    }
    return _cache.value[key]
  }

  function setLink(sectionId, url) {
    const key = storageKey(lessonId, sectionId)
    _cache.value[key] = url
    if (url) {
      localStorage.setItem(key, url)
    } else {
      localStorage.removeItem(key)
    }
  }

  function toEmbedId(url) {
    const m = url.match(/(?:youtu\.be\/|v=|\/shorts\/)([A-Za-z0-9_-]{11})/)
    return m ? m[1] : null
  }

  return { getLink, setLink, toEmbedId }
}
