<template>
  <div>
    <site-header />
    <router-view />
    <site-footer />
  </div>
</template>

<script>
import SiteHeader from '@/components/global/SiteHeader.vue'
import SiteFooter from '@/components/global/SiteFooter.vue'

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteFooter,
  },
}
</script>
