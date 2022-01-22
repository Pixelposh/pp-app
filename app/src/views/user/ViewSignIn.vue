<template>
  <div class="container mx-auto px-4 pt-20 pb-10">
    <div class="max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
        <h1 class="mb-8 text-center">
          Sign In to PixelPosh
        </h1>
        <form @submit.prevent="handleSubmit">
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
        </form>
        <div class="text-center text-sm text-grey-dark mt-4">
          <router-link
            class="text-pp-red underline"
            to="/user/lost_password"
          >
            Lost password?
          </router-link>
        </div>
      </div>

      <div class="text-grey-dark mt-6">
        New to Pixelposh?
        <router-link
          class="text-pp-red underline"
          to="/user/sign_up"
        >
          Sign Up
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ViewSignIn',
  setup() {
    const email = ref('');
    const password = ref('');

    const handleSubmit = () => {
      console.log(email.value, password.value);
    };

    return { email, password, handleSubmit };
  },
};
</script>
