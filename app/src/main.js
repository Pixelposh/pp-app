import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { analytics, logEvent } from './core/firebase/config'
import './index.css'

// GA App Event Start
logEvent(analytics, 'application_start')

createApp(App).use(router).mount('#app')
