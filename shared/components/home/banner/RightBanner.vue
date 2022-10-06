<template>
  <div class="block-top-home__right-banner">
    <div class="right-banner">
      <template v-for="(item, index) in rightBannerLists">
        <nuxt-link :to="{ path: item.path }" :key="index" class="right-banner__item">
          <img :src="require(`@/assets/images/banner/${item.banner}`)"
               :alt="`${item.banner_title}-icon`"
               loading="lazy"
               class="right-banner__img"
          >
        </nuxt-link>
      </template>
    </div>
  </div>
</template>

<script>
// Composition
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'RightBannerComponent',

  setup() {
    const rightBannerLists = ref([
      {
        path: '/samsung-galaxy-z-fold-3.html',
        banner: 'Fold3.png',
        banner_title: 'GALAXY FOLD3 <br>Giá rẻ bất ngờ'
      },
      {
        path: '/tablet/ipad-pro.html?tablet_chipset_filter=2336',
        banner: 'rightbanner-des-ipapro11.png',
        banner_title: 'iPad Pro m1<br>Hiệu năng cực khủng'
      },
      {
        path: '/laptop/asus/zenbook.html?stock_available=46',
        banner: 'zenbook 14.png',
        banner_title: 'ASUS ZENBOOK 14<br>MỎNG NHẸ SANG TRỌNG'
      }
    ])

    return { rightBannerLists }
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/helpers/variables";

.right-banner {
  width: 100%;
  max-width: 265px;
  height: 376px;
  &__item {
    display: block;
    min-height: calc(33.33333% - 10px);
    margin-bottom: 15.5px;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  }
  &__img {
    float: left;
  }
}
</style>
