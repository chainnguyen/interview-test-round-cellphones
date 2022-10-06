<template>
  <div class="horizontal-banner">
    <template v-for="(item, index) in horizontalLists">
      <nuxt-link :to="{ path: item.link }"
                 :key="index"
                 target="_self"
                 class="horizontal-banner__item">
        <img :src="require(`@/assets/images/banner/${item.banner}`)"
             :alt="item.title"
             loading="lazy"
             class="horizontal-banner__img"
        >
      </nuxt-link>
    </template>
  </div>
</template>

<script>
// Composition
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'HorizontalBannerComponent',

  setup() {
    const horizontalLists = ref([
      {
        title: 'iphone14',
        banner: 'Special-Banner-des-iphone-combo.png',
        link: '/apple'
      }
    ])

    return { horizontalLists }
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/helpers/variables";

.horizontal-banner {
  margin-bottom: 15px;
  &__item {
    min-height: 75px;
    width: 100%;
    display: flex;
    height: auto;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%);
    border-radius: 10px;
    overflow: hidden;
    &:not(:last-child) {
      margin-bottom: 10px;
    }

    @media #{$info-laptop-smallest} {
      min-height: calc(6.25vw - 1.25px);
    }
  }

  &__img {
    height: 100%;
  }
}
</style>
