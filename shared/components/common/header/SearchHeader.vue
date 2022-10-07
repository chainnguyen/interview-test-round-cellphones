<template>
  <div class="box-search cps-navbar__search">
    <form>
      <div class="cps-group-input is-flex">
        <div class="input-group-btn">
          <button type="button">
            <div>
              <svg height="15" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-search">
                <path fill="currentColor"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </div>
          </button>
        </div>

        <input id="input-search-header"
               type="text"
               placeholder="Bạn cần tìm gì?"
               autocomplete="off"
               class="cps-input">

        <div id="search_autocomplete" class="box-search-result search-autocomplete is-hidden">
          <div class="my-2"></div>
        </div>

        <div class="is-hidden"><span id="btn-close-search">×</span></div>
      </div>
    </form>

    <header-overlay :open="false"/>
  </div>
</template>

<script>
// Composition
import { defineComponent } from '@nuxtjs/composition-api'
// Components
import HeaderOverlay from '@/shared/components/common/header/HeaderOverlay'

export default defineComponent({
  name: 'SearchHeaderComponent',

  components: { HeaderOverlay }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/search-header";
</style>
