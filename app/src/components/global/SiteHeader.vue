<template>
  <div class="bg-white filter drop-shadow sticky top-0 z-50">
    <header class="flex justify-between items-center container mx-auto h-16">
      <div class="pl-4 cursor-pointer">
        <router-link to="/">
          <img
            alt="Vue logo"
            src="../../assets/media/images/pixelposh-logo.svg"
            width="200"
            height="100%"
          />
        </router-link>
      </div>
      <nav class="pr-4">
        <ul class="flex my-0 items-center list-none">
          <li class="mr-6 hover:text-pp-red font-bold cursor-pointer uppercase">
            <router-link to="/user/sign_in"> Sign In </router-link>
          </li>
          <li
            class="bg-pp-red hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded cursor-pointer uppercase"
          >
            <router-link to="/user/sign_up"> Sign Up </router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'SiteHeader',
}
</script>
