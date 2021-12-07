<template lang="pug">
div.main
  TheHeader.header
  TheSidebar(:is-open="$_isSidebarOpen")
  Nuxt
  TheFooter.footer
</template>

<script>
import { mapGetters } from 'vuex'

import TheFooter from '@/components/TheFooter'
import TheHeader from '@/components/TheHeader'
import TheSidebar from '@/components/TheSidebar'

export default {
  components: {
    TheFooter,
    TheHeader,
    TheSidebar,
  },

  computed: {
    ...mapGetters('sidebar', {
      $_isSidebarOpen: 'isSidebarOpen',
    }),
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/main.scss';
</style>
