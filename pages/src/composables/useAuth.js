import { ref, computed } from 'vue'

// ── 설정 ──────────────────────────────────────────────
// Google Cloud Console > 사용자 인증 정보에서 발급한 OAuth 클라이언트 ID
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || ''

// 관리자로 허용할 Google 계정 이메일 목록
const ADMIN_EMAILS = (import.meta.env.VITE_ADMIN_EMAILS || '')
  .split(',')
  .map(e => e.trim())
  .filter(Boolean)
// ─────────────────────────────────────────────────────

const _user = ref(null)
const _isAdmin = ref(false)

// 세션 복원 (localStorage)
try {
  const saved = localStorage.getItem('ai_admin_user')
  if (saved) {
    const parsed = JSON.parse(saved)
    _user.value = parsed
    _isAdmin.value = ADMIN_EMAILS.includes(parsed.email)
  }
} catch {}

export function useAuth() {
  const user = computed(() => _user.value)
  const isAdmin = computed(() => _isAdmin.value)

  /** Google One Tap / Sign-In 초기화 */
  function initGoogle() {
    if (!GOOGLE_CLIENT_ID || !window.google) return

    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleCredential,
      auto_select: false,
    })
  }

  /** Google 로그인 팝업 열기 */
  function loginWithGoogle() {
    if (!window.google) {
      alert('Google 로그인 스크립트를 로드하지 못했습니다.')
      return
    }
    if (!GOOGLE_CLIENT_ID) {
      alert('VITE_GOOGLE_CLIENT_ID 환경 변수를 설정해주세요.')
      return
    }
    window.google.accounts.id.prompt()
  }

  /** JWT 디코딩 후 사용자 정보 추출 */
  function handleCredential(response) {
    try {
      const payload = JSON.parse(atob(response.credential.split('.')[1]))
      const userInfo = {
        email: payload.email,
        name: payload.name,
        picture: payload.picture,
      }
      _user.value = userInfo

      if (ADMIN_EMAILS.includes(userInfo.email)) {
        _isAdmin.value = true
        localStorage.setItem('ai_admin_user', JSON.stringify(userInfo))
      } else {
        _isAdmin.value = false
        alert(`${userInfo.email} 계정은 관리자 권한이 없습니다.`)
      }
    } catch (e) {
      console.error('Google 인증 실패', e)
    }
  }

  function logout() {
    _user.value = null
    _isAdmin.value = false
    localStorage.removeItem('ai_admin_user')
    if (window.google) {
      window.google.accounts.id.disableAutoSelect()
    }
  }

  return { user, isAdmin, initGoogle, loginWithGoogle, logout }
}
