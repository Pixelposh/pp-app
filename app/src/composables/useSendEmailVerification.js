import { ref } from 'vue';
import { auth } from '../core/firebase/config';
import { sendEmailVerification } from 'firebase/auth';

const error = ref(null);
const isPending = ref(false);

const sendVerification = async () => {
    error.value = null;
    isPending.value = true;

    try {
        const res = await sendEmailVerification(auth.currentUser);
        if (!res) {
            throw new Error('Could not complete Sign Up');
        }
        error.value = null;
        isPending.value = false;
    } catch (err) {
        error.value = err.message;
        isPending.value = false;
    }
};

const useSendEmailVerification = () => {
    return { error, isPending, sendVerification };
};

export default useSendEmailVerification;
