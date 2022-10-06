<template>
  <div>
    side bar cha nè

    <template v-for="(item, index) in ROOT_NAVBAR">
      <sidebar-item :key="index" :item="item"/>
    </template>
  </div>
</template>

<script>
// Composition
import { defineComponent } from '@nuxtjs/composition-api'
// Components
import SidebarItem from '@/shared/components/home/sidebar/SidebarItem'
// Others
import { ROOT_NAVBAR } from '@/core/enums/navbar/root-navbar.enum'

export default defineComponent({
  name: 'SidebarComponent',

  components: { SidebarItem },

  setup() {
    return {
      ROOT_NAVBAR
    }
  }
})
</script>
