<template>
  <div class="is-flex">
    <figure>
      <img :src="require(`@/assets/images/icons/${item.icon}`)"
           :alt="`${item.name}-icon`"
      >
    </figure>
    <p v-text="item.name"/>
  </div>
</template>

<script>
// Composition
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'NavBarItemComponent',

  props: {
    item: { type: Object, required: true, default: () => {} },
  },

  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
img {
  width: 30px;
}
</style>
