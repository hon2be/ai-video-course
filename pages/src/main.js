import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'
import './styles/lesson-script.css'
import { installYouTubeAppOpener } from './utils/openYoutubeApp'

installYouTubeAppOpener()
createApp(App).use(router).mount('#app')
