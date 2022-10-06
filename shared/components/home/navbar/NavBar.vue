<template>
  <nav>
    nav bar cha nè

    <template v-for="(item, index) in ROOT_NAVBAR">
      <nav-bar-item :key="index" :item="item"/>
    </template>
  </nav>
</template>

<script>
// Composition
import { defineComponent } from '@nuxtjs/composition-api'
// Components
import NavBarItem from '@/shared/components/home/navbar/NavBarItem'
// Others
import { ROOT_NAVBAR } from '@/core/enums/navbar/root-navbar.enum'

export default defineComponent({
  name: 'NavBarComponent',

  components: { NavBarItem },

  setup() {
    return {
      ROOT_NAVBAR
    }
  }
})
</script>
