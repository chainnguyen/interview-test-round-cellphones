<template>
  <section>
    <h2>404 Page</h2>
    <p>Page not found</p>
    <nuxt-link to="/">Back to homepage</nuxt-link>
  </section>
</template>

<script>
// Composition
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'NotFoundPage'
})
</script>
