<template>
  <div v-if="isRangeTime" id="topBarHeader">
    <div class="is-flex is-justify-content-center is-align-content-center">
      <div class="pulsingButton mr-3"></div>
      <nuxt-link :to="{ path: 'mobile/apple/iphone-14.html' }"
                 class="has-text-white text-topbar"
                 v-text=" 'iPhone 14 Series đặt hàng từ 7-13/10 - Đăng ký ngay!' "
      />
    </div>
  </div>
</template>

<script>
// Composition
import { defineComponent, computed } from '@nuxtjs/composition-api'
// Other
import moment from 'moment'

export default defineComponent({
  name: 'TopBarHeaderComponent',

  props: {
    releaseDate: { type: String, default: '' },
    expiredDate: { type: String, default: '' }
  },

  setup(props) {
    const isRangeTime = computed(() => {
      const startTime = props.releaseDate ? moment(props.releaseDate) : ''
      const endTime = props.expiredDate ? moment(props.expiredDate) : ''
      if (!startTime || !endTime) return true

      if (!startTime.isValid() || !endTime.isValid()) {
        console.warn('WARNING: Please double check TopBarHeader props. It may not date format')
        return true
      }

      return moment(new Date()).isBetween(startTime, endTime, 'day')
    })

    return { isRangeTime }
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/helpers/variables";

#topBarHeader {
  position: relative;
  width: 100%;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  height: 30px;
  background: linear-gradient(-170deg,#000,#444 80%);

  .pulsingButton {
    width: 10px;
    height: 10px;
    display: block;
    margin: auto;
    box-shadow: 0 0 0 0 rgb(215 0 24 / 70%);
    border-radius: 50%;
    background-color: #e41e31;
    -webkit-animation: pulsing 1.25s cubic-bezier(.66,0,0,1) infinite;
    animation: pulsing 1.25s cubic-bezier(.66,0,0,1) infinite;
    transition: all .3s ease-in-out;
  }

  @media #{$info-phone-normal} {
    .text-topbar {
      font-size: 12px;
    }
  }
}

@keyframes pulsing {
  100% {
    box-shadow: 0 0 0 20px rgb(232 76 61 / 0%);
  }
}
</style>
