import { ref } from 'vue';

// Firebase imports
import { auth } from '../core/firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseError = ref(null);
const isPending = ref(false);
const errorMessageDefault = 'There was a problem with signup, please try again latter.';

const firebaseSignUp = async (email, password) => {
    firebaseError.value = null;
    isPending.value = true;

    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        if (!res) {
            throw new Error('Could not complete Sign Up');
        }
        firebaseError.value = null;
        isPending.value = false;
    } catch (err) {
        switch (err.code) {
            case 'auth/email-already-in-use':
                firebaseError.value = 'Email address is already in use.';
                break;
            default:
                firebaseError.value = errorMessageDefault;
        }
        isPending.value = false;
    }
};

const useSignUp = () => {
    return { firebaseError, isPending, firebaseSignUp };
};

export default useSignUp;
