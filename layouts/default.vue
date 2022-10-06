<template>
  <div class="cps-page">
    <header-component/>
    <Nuxt/>
    <footer-component/>
  </div>
</template>

<script>
// Composition
import { defineComponent } from '@nuxtjs/composition-api'
// Components
import HeaderComponent from '@/shared/components/common/Header'
import FooterComponent from '@/shared/components/common/Footer'

export default defineComponent({
  name: 'DefaultLayout',

  components: {
    HeaderComponent,
    FooterComponent
  },

  setup() {
    return {}
  }
})
</script>
