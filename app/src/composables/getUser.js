import { ref } from 'vue'

// Firebase imports
import { auth } from '../core/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

// Refs
const user = ref(auth.currentUser);

// Auth Changes
onAuthStateChanged(auth, (_user) => {
    user.value = _user
})

const getUser = () => {
    return user;
}

export default getUser;