const CHANNEL_ID = 'UCtMpHsXPa0E7c9tkGCupgUw'
const WEB_URL = 'https://youtube.com/@hon2bee_kr'

function detectPlatform() {
  const ua = navigator.userAgent.toLowerCase()
  return {
    isAndroid: /android/.test(ua),
    isIOS: /iphone|ipad|ipod/.test(ua),
    get isMobile() { return this.isAndroid || this.isIOS }
  }
}

function parseTarget(href) {
  if (!href) return null
  let m = href.match(/youtu\.be\/([\w-]+)/) || href.match(/youtube\.com\/(?:watch\?[^#]*[?&]?v=|embed\/|shorts\/)([\w-]+)/) || href.match(/[?&]v=([\w-]+)/)
  if (m) return { path: 'watch?v=' + m[1], fallback: 'https://youtu.be/' + m[1] }
  if (/youtube\.com\/(?:@[\w.-]+|c\/[\w-]+|user\/[\w-]+|channel\/[\w-]+)\/videos/.test(href)) {
    return { path: `channel/${CHANNEL_ID}/videos`, fallback: href }
  }
  if (/youtube\.com\/(?:@[\w.-]+|c\/[\w-]+|user\/[\w-]+|channel\/[\w-]+)/.test(href)) {
    return { path: `channel/${CHANNEL_ID}`, fallback: WEB_URL }
  }
  return null
}

function openApp(target, platform) {
  if (platform.isAndroid) {
    window.location.href = 'intent://www.youtube.com/' + target.path +
      '#Intent;scheme=https;package=com.google.android.youtube;S.browser_fallback_url=' +
      encodeURIComponent(target.fallback) + ';end;'
    setTimeout(() => { if (!document.hidden) window.location.replace(target.fallback) }, 3000)
  } else if (platform.isIOS) {
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = 'youtube://www.youtube.com/' + target.path
    document.body.appendChild(iframe)
    setTimeout(() => {
      try { iframe.remove() } catch (e) {}
      if (!document.hidden) window.location.replace(target.fallback)
    }, 2000)
  }
}

export function installYouTubeAppOpener() {
  const platform = detectPlatform()
  if (!platform.isMobile) return

  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[href]')
    if (!a) return
    const href = a.getAttribute('href') || ''
    if (!/youtube\.com|youtu\.be/.test(href)) return
    const target = parseTarget(href)
    if (!target) return
    e.preventDefault()
    openApp(target, platform)
  }, true)
}
