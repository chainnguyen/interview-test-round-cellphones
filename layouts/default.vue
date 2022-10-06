<template>
  <main>
    <Nuxt/>
  </main>
</template>

<script>
// Composition
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'DefaultLayout',

  middleware: ['guards/auth-guard', 'guards/login-guard'],

  setup() {
    return {}
  }
})
</script>
