<template>
  <div id="menu-main" class="menu-container"
       @mouseleave.prevent="getHoverMenu('')">
    <!-- Root menu -->
    <div class="menu-wrapper space-bread-crumb">
      <div class="menu-tree">
        <sidebar-item v-for="(item, index) in ROOT_NAVBAR"
                      :key="index"
                      :item="item"
                      @activeItemMenu="getHoverMenu($event)"
        />
      </div>
      <!-- Children menu -->
      <sidebar-children v-if="activeItemMenu" :type="activeItemMenu"/>
    </div>
  </div>
</template>

<script>
// Composition
import { defineComponent, ref } from '@nuxtjs/composition-api'
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
    const activeItemMenu = ref('')

    const getHoverMenu = (dependent) => {
      activeItemMenu.value = dependent
    }

    return {
      activeItemMenu,

      ROOT_NAVBAR,
      getHoverMenu
    }
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/top-home";
@import "@/assets/scss/components/sidebar";
</style>
