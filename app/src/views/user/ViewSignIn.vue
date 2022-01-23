<template>
  <div class="container mx-auto px-4 pt-20 pb-10">
    <div class="max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
        <h1 class="mb-8 text-center">
          Sign In to PixelPosh
        </h1>
        <form @submit.prevent="validateForm">
          <input
            v-model="email"
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Email"
          >

          <input
            v-model="password"
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Password"
          >
          <button
            type="submit"
            class="w-full text-center py-3 rounded bg-pp-red text-white hover:bg-zinc-700 focus:outline-none my-1 uppercase"
          >
            Sign in with email
          </button>
            <div v-if="formErrors.length">
              <ul class="py-1 text-pp-red">
                <li
                  v-for="(error, index) in formErrors" :key="index"
                >
                  {{ error }}
                </li>
              </ul>
            </div>
            <div v-if="firebaseError">
              <ul class="py-1 text-pp-red">
                <li>
                  {{ firebaseError }}
                </li>
              </ul>
            </div>
        </form>
        <div class="text-center text-sm text-grey-dark mt-4">
          <router-link
            class="text-pp-red underline"
            to="/user/lost-password"
          >
            Lost password?
          </router-link>
        </div>
      </div>

      <div class="text-grey-dark mt-6">
        New to Pixelposh?
        <router-link
          class="text-pp-red underline"
          to="/user/sign-up"
        >
          Sign Up
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import useSignIn from '../../composables/useSignIn';

export default {
  name: 'ViewSignIn',
  setup() {
    const email = ref('');
    const password = ref('');
    const formErrors = ref([]);
    const router = useRouter();
    const { firebaseError, firebaseSignIn } = useSignIn();

    const validateForm = async () => {
      formErrors.value = [];
      firebaseError.value = null;

      // check email has value and valid
      if (email.value === '') {
        formErrors.value.push('Email required.')
      } else if (!validEmail(email.value)) {
        formErrors.value.push('Valid email required.')
      }
      
      // Check password has value
      if (password.value === '') {
        formErrors.value.push('Password required.')
      }

      // If form fields are ok, send to firebase
      if (formErrors.value.length === 0) {
        await firebaseSignIn(email.value, password.value);
        if (!firebaseError.value) {
          router.push('/');
        }
      }
    };

    const validEmail = (email) => {
      const emailRegexTest = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailRegexTest.test(email);
    }

    onUnmounted(() => {
      firebaseError.value = null;
      formErrors.value = [];
    });

    return { email, password, validateForm, firebaseError, formErrors };
  },
};
</script>
