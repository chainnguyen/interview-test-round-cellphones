<template>
  <home-page/>
</template>

<script>
// Composition
import { defineComponent } from '@nuxtjs/composition-api'
// Components
import HomePage from '@/pages/home'
// Other
import { LAYOUTS } from '@/core/enums/layouts.enum'

export default defineComponent({
  name: 'IndexPage',

  components: { HomePage },

  layout: LAYOUTS.DEFAULT
})
</script>
