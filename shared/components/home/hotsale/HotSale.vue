<template>
  <div class="is-flex">
    <ProductBlock v-for="(_, index) in 5" :key="index"/>
  </div>
</template>

<script>
// Composition
import { defineComponent } from '@nuxtjs/composition-api'
import ProductBlock from '@/shared/components/product/ProductBlock'

export default defineComponent({
  name: 'HotSaleComponent',

  components: {
    ProductBlock
  },
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/hot-sale";
</style>
