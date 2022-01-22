import { ref } from 'vue';
import { auth } from '../core/firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const fbError = ref(null);
const isPending = ref(false);
const errorMessageDefault = 'There was a problem with signup, please try again latter.';

const firebaseSignUp = async (email, password) => {
    fbError.value = null;
    isPending.value = true;

    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        if (!res) {
            throw new Error('Could not complete Sign Up');
        }
        fbError.value = null;
        isPending.value = false;
    } catch (err) {
        switch (err.code) {
            case 'auth/email-already-in-use':
                fbError.value = 'Email address is already in use.';
                break;
            default:
                fbError.value = errorMessageDefault;
        }
        isPending.value = false;
    }
};

const useSignUp = () => {
    return { fbError, isPending, firebaseSignUp };
};

export default useSignUp;
