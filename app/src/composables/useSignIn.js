import { ref } from 'vue';

// Firebase imports
import { auth } from '../core/firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const firebaseError = ref(null);
const isPending = ref(false);
const errorMessageDefault = 'There was a problem with signup, please try again latter.';

const firebaseSignIn = async (email, password) => {
    firebaseError.value = null;
    isPending.value = true;

    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        if (!res) {
            throw new Error('Could not complete Sign In');
        }
        firebaseError.value = null;
        isPending.value = false;
    } catch (err) {
        switch (err.code) {
            case 'auth/user-not-found':
                firebaseError.value = 'Email address or password are incorrect.';
                break;
            case 'auth/wrong-password':
                firebaseError.value = 'Email address or password are incorrect.';
                break;
            default:
                firebaseError.value = errorMessageDefault;
        }
        isPending.value = false;
    }
};

const useSignIn = () => {
    return { firebaseError, isPending, firebaseSignIn };
};

export default useSignIn;
