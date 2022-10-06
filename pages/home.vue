<template>
  <main>
    <nav-bar/>
    <sliding-banner/>
    <right-banner/>
    <horizontal-banner/>
  </main>
</template>

<script>
// Composition
import { defineComponent } from '@nuxtjs/composition-api'
// Components
import NavBar from '@/shared/components/home/navbar/NavBar'
import SlidingBanner from '@/shared/components/home/banner/SlidingBanner'
import RightBanner from '@/shared/components/home/banner/RightBanner'
import HorizontalBanner from '@/shared/components/home/banner/HorizontalBanner'

export default defineComponent({
  name: 'HomePage',

  components: {
    NavBar,
    SlidingBanner,
    RightBanner,
    HorizontalBanner
  },

  setup() {
    return {}
  }
})
</script>
