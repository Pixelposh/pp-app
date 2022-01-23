import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { auth, analytics, logEvent } from './core/firebase/config'
import { onAuthStateChanged } from 'firebase/auth';
import './index.css'

// GA App Event Start
logEvent(analytics, 'application_start');

let app

// check for firebase auth on init page load
onAuthStateChanged(auth, () => {
    if (!app) {
        app = createApp(App).use(router).mount('#app')
    }
})
