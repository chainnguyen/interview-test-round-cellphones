<template>
  <div class="menu-tree-child columns m-0 box" style="display: none;">

  </div>
</template>

<script>
// Composition
import { defineComponent } from '@nuxtjs/composition-api'
// Others
import { ROOT_NAVBAR } from '@/core/enums/navbar/root-navbar.enum'

export default defineComponent({
  name: 'SidebarChildrenComponent',

  setup() {
    return {
      ROOT_NAVBAR
    }
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/sidebar";
</style>
