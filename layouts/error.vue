<template>
  <main>
    <header-component/>
    <Nuxt/>
    <footer-component/>
  </main>
</template>

<script>
// Composition
import { defineComponent } from '@nuxtjs/composition-api'
// Components
import HeaderComponent from '@/shared/components/common/Header'
import FooterComponent from '@/shared/components/common/Footer'

export default defineComponent({
  name: 'ErrorLayout',

  components: {
    HeaderComponent,
    FooterComponent
  },

  setup() {
    return {}
  }
})
</script>
