<template>
  <div class="container mx-auto px-4 pt-20 pb-10">
    <div
      class="max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2"
    >
      <div class="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
        <h1 class="mb-8 text-center">Sign Up to PixelPosh</h1>
        <form @submit.prevent="handleSubmit">
          <input
            v-model="email"
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Email"
          />
          <input
            v-model="password"
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Password"
          />
          <button
            type="submit"
            class="w-full text-center py-3 rounded bg-pp-red text-white hover:bg-zinc-700 focus:outline-none my-1 uppercase"
          >
            Sign Up with Email
          </button>
          <div v-if="error" class="text-center py-1 text-pp-red">
            {{ error }}
          </div>
        </form>
        <div class="text-center text-sm text-grey-dark mt-4">
          By signing up, you agree to the
          <router-link
            class="text-pp-red underline"
            to="/terms"
            target="_blank"
          >
            Terms of Use
          </router-link>
          and
          <router-link
            class="text-pp-red underline"
            to="/privacy"
            target="_blank"
          >
            Privacy Policy
          </router-link>
        </div>
      </div>
      <div class="text-grey-dark mt-6">
        Already have an account?
        <router-link class="text-pp-red underline" to="/user/sign_in">
          Sign In
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import useSignUp from '../../composables/useSignUp';
import useSendEmailVerification from '../../composables/useSendEmailVerification';

export default {
  name: 'ViewSignUp',
  setup() {
    const email = ref('');
    const password = ref('');
    const formValidated = ref(false);
    const formError = ref('');
    const router = useRouter();
    const { fbError, firebaseSignUp } = useSignUp();
    const { sendVerification } = useSendEmailVerification();

    const validateForm = () => {
      if (email.value === '' || password.value === '') {
        console.log('missing fields');
      }
    };

    const handleSubmit = async () => {
      validateForm();
      await firebaseSignUp(email.value, password.value);
      if (!fbError.value) {
        await sendVerification();
        router.push('/');
      }
    };

    onUnmounted(() => {
      fbError.value = null;
      formError.value = null;
    });

    return { email, password, handleSubmit, fbError, formError, formValidated };
  },
};
</script>
