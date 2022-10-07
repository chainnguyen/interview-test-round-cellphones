<template>
  <div>
    <header class="cps-header sticky">
      <top-bar-header
        release-date="2022-10-05"
        expired-date="2022-10-13"
      />

      <!-- Container -->
      <div class="cps-container">
        <nav class="cps-navbar">
          <!-- Logo -->
          <nuxt-link :to="{ path: '/' }" class="navbar-brand">
            <div class="box-logo cps-navbar__logo logo__desktop navbar-item">
              <logo-component/>
            </div>

            <div class="box-logo cps-navbar__logo logo__mobile navbar-item">
              <logo-component is-mobile/>
            </div>
          </nuxt-link>

          <!-- Category -->
          <a href="javascript:void(0)"
             class="header-item btn-menu"
             @click.prevent="toggleFlagByType('categories')">
            <div class="about__box-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.99 26.99">
                <defs>
                  <style>.cls-1 {
                    fill: none;
                    stroke: #fff;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 1.8px;
                  }</style>
                </defs>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <line x1="7.06" y1="7.52" x2="19.92" y2="7.52" class="cls-1"></line>
                    <line x1="7.06" y1="13.49" x2="19.92" y2="13.49" class="cls-1"></line>
                    <line x1="7.06" y1="19.47" x2="11.95" y2="19.47" class="cls-1"></line>
                    <rect x="0.9" y="0.9" width="25.19" height="25.19" rx="4.71" class="cls-1"></rect>
                  </g>
                </g>
              </svg>
            </div>
            <div class="about__box-content"><p v-text="'Danh mục'"/></div>
          </a>

          <!-- Region -->
          <div id="dropdown-region"
               role="menu"
               class="dropdown"
               :class="{ 'is-active': flagController.controlRegion }"
               @click.prevent="toggleFlagByType('region')">
            <div class="dropdown-trigger">
              <div class="box-local-store">
                <div class="box-icon">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.22 30.36" width="25" height="25">
                      <defs></defs>
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                          <path
                            d="M11.61.9A10.77,10.77,0,0,0,.9,11.69C.9,20.14,10.6,28.87,11,29.23a.87.87,0,0,0,1.18,0c.42-.36,10.12-9.09,10.12-17.54A10.77,10.77,0,0,0,11.61.9Z"
                            class="cls-1"></path>
                          <path d="M11.61,16.35a4.74,4.74,0,1,1,4.74-4.74,4.75,4.75,0,0,1-4.74,4.74Z"
                                class="cls-1"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>

                <div class="box-content">
                  <p class="title">Xem giá tại</p>
                  <p><span v-text="REGIONS[selectedRegion].region"/> 
                    <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="10" height="10">
                      <path
                        d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"></path>
                    </svg>
                  </p>
                </div>
              </div>
            </div>
            <!-- Region list -->
            <div id="dropdown-region-menu" role="menu" class="dropdown-menu">
              <div class="dropdown-content">
                <template v-for="(item, index) in REGIONS">
                  <a :key="item.region_id"
                     class="dropdown-item"
                     :class="{ 'active': item.region_id === selectedRegion }"
                     @click.prevent="switchRegion(item.region_id)"
                     v-text="item.region"/>
                  <hr v-if="index !== (REGIONS.length - 1)" class="dropdown-divider">
                </template>
              </div>
            </div>
            <!-- Suggestions choose store popup -->
            <div class="suggestions-choose-store" style="display: none">
              <div class="box-content d-flex justify-content-around align-items-center">
                <div>
                  <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"></path>
                  </svg>
                </div>
                <p class="mb-0 font-14">Hãy chọn địa chỉ cụ thể để chúng tôi cung cấp chính xác giá và khuyến mãi.</p>
              </div>
              <div class="box-btn d-flex mt-3">
                <button type="button" class="button is-success mr-3">Chọn địa điểm
                </button>
                <button type="button" class="button is-danger">Đóng</button>
              </div>
            </div>
            <header-overlay :open="flagController.controlRegion"/>
          </div>

          <!-- Search -->
          <search-header/>

          <!-- Information -->
          <a href="tel:18002097" class="header-item about-contact">
            <div class="about__box-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.83 30.94" width="24" height="24">
                <defs>
                  <style>.cls-1 {
                    fill: none;
                    stroke: #fff;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 1.8px;
                  }</style>
                </defs>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      d="M6.78,20.27a31,31,0,0,0,10.29,8.06A15.91,15.91,0,0,0,22.82,30h.41a4.77,4.77,0,0,0,3.7-1.59,0,0,0,0,0,0,0,14.62,14.62,0,0,1,1.17-1.2c.28-.28.57-.56.85-.85A2.91,2.91,0,0,0,29,22L25.33,18.4a2.94,2.94,0,0,0-2.13-1,3.07,3.07,0,0,0-2.15,1l-2.16,2.17c-.2-.12-.4-.22-.6-.32a6.74,6.74,0,0,1-.66-.36,22.82,22.82,0,0,1-5.47-5A13.11,13.11,0,0,1,10.32,12c.56-.52,1.09-1.05,1.61-1.58l.55-.56a3.07,3.07,0,0,0,1-2.17,3.08,3.08,0,0,0-1-2.18l-1.8-1.8L10.07,3c-.4-.41-.82-.83-1.23-1.21A3,3,0,0,0,6.72.9a3.07,3.07,0,0,0-2.15.94L2.31,4.09a4.64,4.64,0,0,0-1.38,3,11.09,11.09,0,0,0,.84,4.83,28.11,28.11,0,0,0,5,8.37Z"
                      class="cls-1"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div class="about__box-content">
              <p class="title">Gọi mua hàng<br> <strong>1800.2097</strong></p>
            </div>
          </a>

          <nuxt-link :to="{ path: '/dia-chi-cua-hang' }"
                     target="_blank"
                     class="header-item about-store">
            <div class="about__box-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.22 30.36" width="25" height="25">
                <defs>
                  <style>.cls-1 {
                    fill: none;
                    stroke: #fff;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 1.8px;
                  }</style>
                </defs>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      d="M11.61.9A10.77,10.77,0,0,0,.9,11.69C.9,20.14,10.6,28.87,11,29.23a.87.87,0,0,0,1.18,0c.42-.36,10.12-9.09,10.12-17.54A10.77,10.77,0,0,0,11.61.9Z"
                      class="cls-1"></path>
                    <path d="M11.61,16.35a4.74,4.74,0,1,1,4.74-4.74,4.75,4.75,0,0,1-4.74,4.74Z" class="cls-1"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div class="about__box-content">
              <p class="title">Cửa hàng<br>gần bạn</p>
            </div>
          </nuxt-link>

          <nuxt-link :to="{ path: '/tra-cuu-don-hang-online' }"
                     target="_blank"
                     class="header-item about-delivery-tracking">
            <div class="about__box-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.22 25.85" height="24">
                <defs>
                  <style>.cls-1, .cls-2, .cls-3 {
                    fill: none;
                    stroke: #fff;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  }
                  .cls-1 {stroke-width: 1.66px;}
                  .cls-2 {stroke-width: 1.66px;}
                  .cls-3 {stroke-width: 1.8px;}</style>
                </defs>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <circle cx="7.66" cy="22.02" r="3" class="cls-1"></circle>
                    <circle cx="24.79" cy="22.02" r="3" class="cls-2"></circle>
                    <path d="M28.61,22h4.13a1.44,1.44,0,0,0,1.44-1.44v-6" class="cls-3"></path>
                    <path d="M27.12.9H14.82a1.44,1.44,0,0,0-1.44,1.44V20.58A1.44,1.44,0,0,0,14.82,22h6.29"
                          class="cls-3"></path>
                    <path
                      d="M10.27,5.92H6.75A2.65,2.65,0,0,0,4.54,7.11L1.33,12A2.64,2.64,0,0,0,.9,13.47v6.46A2.1,2.1,0,0,0,3,22h.75"
                      class="cls-3"></path>
                    <path d="M34.18,3.47V2.34A1.44,1.44,0,0,0,32.74.9H25.08" class="cls-3"></path>
                    <line x1="43.32" y1="6.97" x2="32.57" y2="6.97" class="cls-3"></line>
                    <line x1="40.5" y1="11.05" x2="32.57" y2="11.05" class="cls-3"></line>
                    <line x1="42.09" y1="16.33" x2="38.07" y2="16.33" class="cls-3"></line>
                  </g>
                </g>
              </svg>
            </div>
            <div class="about__box-content">
              <p class="title">Tra cứu<br>đơn hàng</p>
            </div>
          </nuxt-link>
          <!-- Information - END -->

          <!-- Cart -->
          <nuxt-link :to="{ path: '/cart' }" class="header-item about-cart">
            <div class="about__box-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.95 35.07" width="25" height="25">
                <defs>
                  <style>.cls-1 {
                    fill: none;
                    stroke: #fff;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 1.8px;
                  }</style>
                </defs>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path d="M10,10.54V5.35A4.44,4.44,0,0,1,14.47.9h0a4.45,4.45,0,0,1,4.45,4.45v5.19"
                          class="cls-1"></path>
                    <path
                      d="M23.47,34.17h-18A4.58,4.58,0,0,1,.91,29.24L2.5,8.78A1.44,1.44,0,0,1,3.94,7.46H25a1.43,1.43,0,0,1,1.43,1.32L28,29.24A4.57,4.57,0,0,1,23.47,34.17Z"
                      class="cls-1"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div class="about__box-content">
              <p class="title">Giỏ&nbsp;<br>hàng</p> <span id="items_in_cart">0</span>
            </div>
          </nuxt-link>

          <!-- Sign in -->
          <div class="header-item about-5 about-smember cta-smember"
               @click.prevent="toggleFlagByType('signIn', 'open')">
            <div class="about__box-icon">
              <svg id="icon-smember" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560" width="20">
                <defs>
                  <style>#icon-smember .cls-1 {
                    fill: none;
                    stroke: #fff;
                    stroke-width: 30px;
                  }</style>
                </defs>

                <title v-text=" 'Smember' "/>

                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <circle cx="280" cy="280" r="265" class="cls-1"></circle>
                    <circle cx="280" cy="210" r="115" class="cls-1"></circle>
                    <path d="M86.82,461.4C124.71,354.71,241.91,298.93,348.6,336.82A205,205,0,0,1,473.18,461.4"
                          class="cls-1"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div class="about__box-content">
              <span class="title" v-text=" 'Đăng nhập' "/>
            </div>
          </div>
        </nav>
      </div>
      <!-- Container - END -->
    </header>

    <div class="clear"></div>
    <header-overlay :open.sync="flagController.controlSignIn"/>
  </div>
</template>

<script>
// Composition
import { defineComponent, ref } from '@nuxtjs/composition-api'
// Components
import TopBarHeader from '~/shared/components/common/header/TopBarHeader'
import LogoComponent from '@/shared/components/common/Logo'
import SearchHeader from '@/shared/components/common/header/SearchHeader'
import HeaderOverlay from '@/shared/components/common/header/HeaderOverlay'
// Others
import { REGIONS } from '~/core/enums/region.enum'

export default defineComponent({
  name: 'HeaderComponent',

  components: {
    TopBarHeader,
    LogoComponent,
    SearchHeader,
    HeaderOverlay
  },

  setup() {
    const selectedRegion = ref(0)
    const flagController = ref({
      controlCategories: false,
      controlRegion: false,
      controlSignIn: false
    })

    const switchRegion = (idx) => {
      if (!idx && idx !== 0) return
      selectedRegion.value = idx
      // action loading switch region
    }

    /**
     * @param type{string} ['categories', 'region', 'signIn']
     * @param command{string} ['open', 'close', 'toggle']
     */
    const toggleFlagByType = (type, command = 'toggle') => {
      switch (type) {
        case 'categories':
          command === 'toggle'
            ? flagController.value['controlCategories'] = !flagController.value['controlCategories']
            : flagController.value['controlCategories'] = command === 'open'
          break
        case 'region':
          command === 'toggle'
            ? flagController.value['controlRegion'] = !flagController.value['controlRegion']
            : flagController.value['controlRegion'] = command === 'open'
          break
        case 'signIn':
          command === 'toggle'
            ? flagController.value['controlSignIn'] = !flagController.value['controlSignIn']
            : flagController.value['controlSignIn'] = command === 'open'
          break
      }
    }

    return {
      selectedRegion,
      flagController,

      REGIONS,
      switchRegion,
      toggleFlagByType
    }
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/dropdown";
@import "@/assets/scss/layouts/header";
</style>
