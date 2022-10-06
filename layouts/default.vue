<template>
  <main>
    <header>Header nè</header>
    <Nuxt/>
    <footer>Footer nè</footer>
  </main>
</template>

<script>
// Composition
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'DefaultLayout',

  setup() {
    return {}
  }
})
</script>
