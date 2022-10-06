<template>
  <section>
    <h2>403 Page</h2>
    <p>You are not allowed to access</p>
    <nuxt-link to="/">Back to homepage</nuxt-link>
  </section>
</template>

<script>
// Composition
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'NotUnauthorizedPage'
})
</script>
