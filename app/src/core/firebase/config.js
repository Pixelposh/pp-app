import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getAnalytics, logEvent } from 'firebase/analytics'

const firebaseConfig = {
    apiKey: 'AIzaSyDvMH3DloBLhy9SZw5STbRukGzByP1Ot7c',
    authDomain: 'pixelposh.firebaseapp.com',
    projectId: 'pixelposh',
    storageBucket: 'pixelposh.appspot.com',
    messagingSenderId: '259705783252',
    appId: '1:259705783252:web:1604c102d30fdc3b304c41',
    measurementId: 'G-4CGE7M4VMM'
}

// Init Firebase
const app = initializeApp(firebaseConfig);

// Init Services
const db = getFirestore(app, {})
const auth = getAuth(app, {})
const analytics = getAnalytics(app)

export { db, auth, analytics, logEvent }