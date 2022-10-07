<template>
  <div v-show="open"
       class="header-overlay"
       :class="{ 'active': open }"
       @click="$emit('update:open', false)"/>
</template>

<script>
// Composition
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'HeaderOverlayComponent',

  props: {
    open: { type: Boolean, required: true, default: false }
  }
})
</script>

<style lang="scss" scoped>
.header-overlay {
  visibility: hidden;
  position: fixed;
  top: 94px;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,.53);
  opacity: 0;
  transition: all .3s;
  z-index: 30;

  &.active {
    visibility: visible;
    opacity: 1;
  }
}
</style>
