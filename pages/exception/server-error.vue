<template>
  <section class="cps-container cps-body">
    <h2>500 Page</h2>
    <p>Server error</p>
    <nuxt-link to="/">Back to homepage</nuxt-link>
  </section>
</template>

<script>
// Composition
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ServerErrorPage'
})
</script>
