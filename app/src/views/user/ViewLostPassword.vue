<template>
  <div class="container mx-auto px-4 pt-20 pb-10">
    <div class="max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
        <h1 class="mb-8 text-center">
          Lost password
        </h1>
        <input
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="email"
          placeholder="Email"
        >

        <button
          type="submit"
          class="w-full text-center py-3 rounded bg-pp-red text-white hover:bg-zinc-700 focus:outline-none my-1 uppercase"
        >
          Reset Password
        </button>

        <div class="text-center text-sm text-grey-dark mt-4">
          Back to
          <router-link
            class="text-pp-red underline"
            to="/user/sign_in"
          >
            Sign In
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewLostPassword',
};
</script>
