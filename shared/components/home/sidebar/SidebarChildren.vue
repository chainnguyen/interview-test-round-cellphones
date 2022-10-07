<template>
  <div class="menu-tree-child columns m-0 box">
    <div v-for="(rootItem, rootIndex) in childrenList"
         :key="rootIndex"
         class="menu-child-item column group is-one-fifth">

      <strong class="group-title" v-text="rootItem.folder_title"/>

      <template v-if="rootItem.children.length">
        <div v-for="(item, index) in rootItem.children"
             :key="index"
             class="menu-child-item column menu-item">
          <nuxt-link :to="{ path: item.path }" target="_self" class="label-wrapper">
            <div class="label-item"><span v-text="item.name"/></div>
          </nuxt-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
// Composition
import { defineComponent, computed } from '@nuxtjs/composition-api'
// Others
import { ROOT_NAVBAR } from '@/core/enums/navbar/root-navbar.enum'

export default defineComponent({
  name: 'SidebarChildrenComponent',

  props: {
    type: { type: String, required: true, default: '' },
  },

  setup(props) {
    const childrenList = computed(() => {
      const objItemNavbar = ROOT_NAVBAR.find(i => i.dependent === props.type)
      return objItemNavbar ? objItemNavbar.categories : []
    })

    return { childrenList }
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/sidebar";
</style>
