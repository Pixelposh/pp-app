<template>
  <footer class="mt-10">
    <div>
      <nav class="">
        <ul class="flex justify-center list-none mb-0">
          <li class="mx-3 font-medium hover:text-pp-red hover:underline">
            <router-link to="/privacy"> Privacy Policy </router-link>
          </li>
          <li class="mx-3 font-medium hover:text-pp-red hover:underline">
            <router-link to="/terms"> Terms of Use </router-link>
          </li>
          <li class="mx-3 font-medium hover:text-pp-red hover:underline">
            <router-link to="/cookies"> Cookie Policy </router-link>
          </li>
          <li class="mx-3 font-medium hover:text-pp-red hover:underline">
            <router-link to="/help-center"> Help Center </router-link>
          </li>
        </ul>
      </nav>
      <div class="text-center py-4">
        ©{{ new Date().getFullYear() }} —
        <strong><span class="text-pp-red">Pixel</span><span>Posh</span></strong>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
}
</script>
