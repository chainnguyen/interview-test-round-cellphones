<template>
  <div id="menu-main" class="menu-container">
    <!-- Root menu -->
    <div class="menu-wrapper space-bread-crumb">
      <div class="menu-tree">
        <sidebar-item v-for="(item, index) in ROOT_NAVBAR"
                      :key="index"
                      :item="item"
        />
      </div>
      <!-- Children menu -->
      <sidebar-children/>
    </div>
  </div>
</template>

<script>
// Composition
import { defineComponent } from '@nuxtjs/composition-api'
// Components
import SidebarItem from '@/shared/components/home/sidebar/SidebarItem'
import SidebarChildren from '@/shared/components/home/sidebar/SidebarChildren'
// Others
import { ROOT_NAVBAR } from '@/core/enums/navbar/root-navbar.enum'

export default defineComponent({
  name: 'SidebarComponent',

  components: {
    SidebarItem,
    SidebarChildren
  },

  setup() {
    return {
      ROOT_NAVBAR
    }
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/top-home";
@import "@/assets/scss/components/sidebar";
</style>
