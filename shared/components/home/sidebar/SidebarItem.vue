<template>
  <nuxt-link :to="{ path: item.path }" target="_self" class="label-menu-tree">
    <div class="label-item">
      <i v-if="item.icon"
         class="icons-cate"
         :style="{'background-image': `url(${require(`@/assets/images/icons/${item.icon}`)})`}"/>
      <span v-text="item.name"/>
      <div class="icon-right">
        <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
        </svg>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
// Composition
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'SidebarItemComponent',

  props: {
    item: { type: Object, required: true, default: () => {} },
  },

  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/sidebar";
</style>
