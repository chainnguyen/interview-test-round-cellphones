<template>
  <div class="product-info-container">
    <div class="product-info">
      <nuxt-link :to="{ path: '/samsung-galaxy-tab-a7-lite.html' }" class="product__link">
        <div class="product__image">
          <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/s/a/samsung-galaxy-tab-a7-lite-gray-600x600.jpg"
               alt="Samsung Galaxy Tab A7 Lite"
               class="product__img">
        </div>

        <div class="product__name">
          <h3>Samsung Galaxy Tab A7 Lite</h3>
        </div>
        <div class="block-box-price">
          <span class="title-price" style="display: none;">:</span>
          <div class="box-info__box-price">
            <p class="product__price--show">3.800.000&nbsp;₫</p>
            <p class="product__price--through">4.490.000&nbsp;₫</p>

            <div class="product__price--percent">
              <p class="product__price--percent-detail">Giảm&nbsp;15%</p>
            </div>
          </div>
        </div>
      </nuxt-link>

      <product-rating star-volume="4"/>
    </div>

    <favorite-button subject-id="any_subject_id"/>
  </div>
</template>

<script>
// Composition
import { defineComponent } from '@nuxtjs/composition-api'
import ProductRating from '/shared/components/product/ProductRating'
import FavoriteButton from '/shared/components/common/FavoriteButton'

export default defineComponent({
  name: 'ProductBlockComponent',

  components: {
    ProductRating,
    FavoriteButton
  },

  props: {}
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/hot-sale";
@import "@/assets/scss/components/product";
</style>
