<template>
  <main class="cps-container cps-body">
    <section class="block-top-home is-flex is-justify-content-between">
      <sidebar/>
      <sliding-banner/>
      <right-banner/>
    </section>
    <horizontal-banner/>

    <hot-sale/>
  </main>
</template>

<script>
// Composition
import { defineComponent } from '@nuxtjs/composition-api'
// Components
import Sidebar from '~/shared/components/home/sidebar/Sidebar'
import SlidingBanner from '@/shared/components/home/banner/SlidingBanner'
import RightBanner from '@/shared/components/home/banner/RightBanner'
import HorizontalBanner from '@/shared/components/home/banner/HorizontalBanner'
import HotSale from '@/shared/components/home/hotsale/HotSale'

export default defineComponent({
  name: 'HomePage',

  components: {
    Sidebar,
    SlidingBanner,
    RightBanner,
    HorizontalBanner,
    HotSale
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/top-home";
</style>
