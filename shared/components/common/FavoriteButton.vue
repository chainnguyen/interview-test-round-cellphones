<template>
  <div class="btn-wish-list">
    <span>Yêu thích &nbsp;</span>

    <div id="wishListBtn"
         @click.prevent="toggleFavoriteSubject(subjectId)">
      <button :class="{ 'active': favoriteFlag }" class="btn__effect">
        <svg viewBox="20 18 29 28" aria-hidden="true" focusable="false"
             class="heart-border icon-svg icon-svg--color-cps">
          <path
            d="M28.3 21.1a4.3 4.3 0 0 1 4.1 2.6 2.5 2.5 0 0 0 2.3 1.7c1 0 1.7-.6 2.2-1.7a3.7 3.7 0 0 1 3.7-2.6c2.7 0 5.2 2.7 5.3 5.8.2 4-5.4 11.2-9.3 15a2.8 2.8 0 0 1-2 1 3.4 3.4 0 0 1-2.2-1c-9.6-10-9.4-13.2-9.3-15 0-1 .6-5.8 5.2-5.8m0-3c-5.3 0-7.9 4.3-8.2 8.5-.2 3.2.4 7.2 10.2 17.4a6.3 6.3 0 0 0 4.3 1.9 5.7 5.7 0 0 0 4.1-1.9c1.1-1 10.6-10.7 10.3-17.3-.2-4.6-4-8.6-8.4-8.6a7.6 7.6 0 0 0-6 2.7 8.1 8.1 0 0 0-6.2-2.7z"></path>
        </svg>
        <svg viewBox="0 0 19.2 18.5" aria-hidden="true" focusable="false"
             class="heart-stroke icon-svg icon-svg--color-silver">
          <path
            d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path>
        </svg>
        <svg viewBox="0 0 19.2 18.5" aria-hidden="true" focusable="false"
             class="heart-full icon-svg icon-svg--color-cps">
          <path
            d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="5.707 17 48 20" class="broken-heart">
          <g fill="#D70018">
            <path
              d="M29.865 32.735V18.703a4.562 4.562 0 0 0-3.567-1.476c-2.916.017-4.378 2.403-4.538 4.756-.118 1.781.227 4.006 5.672 9.737a3.544 3.544 0 0 0 2.428 1.025l-.008-.008.013-.002z"
              class="broken-heart--left"></path>
            <path
              d="M37.868 22.045c-.135-2.588-2.277-4.823-4.697-4.823a4.258 4.258 0 0 0-3.302 1.487l-.004-.003v14.035a3.215 3.215 0 0 0 2.289-1.033c.598-.596 5.882-5.99 5.714-9.663z"
              class="broken-heart--right"></path>
          </g>
          <path fill="none" stroke="#FFF" stroke-miterlimit="10" d="M29.865 18.205v14.573"
                class="broken-heart--crack"></path>
        </svg>

        <span class="effect-group">
          <span class="effect"></span>
          <span class="effect"></span>
          <span class="effect"></span>
          <span class="effect"></span>
          <span class="effect"></span>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
// Composition
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'FavoriteButtonComponent',

  props: {
    subjectId: { type: [String, Number], required: true, default: '' },
    active: { type: Boolean, default: false },
  },

  setup(props) {
    const favoriteFlag = ref(props.active)

    const toggleFavoriteSubject = (subjectId) => {
      if (!subjectId) return
      favoriteFlag.value = !favoriteFlag.value
      // side effect
      // Handle post API to user favorite list
    }

    return {
      favoriteFlag,

      toggleFavoriteSubject
    }
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/helpers/mixins";
@import "@/assets/scss/helpers/variables";

.btn-wish-list {
  position: absolute;
  bottom: 10px;
  @include flex();
  justify-content: right;
  width: calc(100% - 20px);
  span {
    font-size: 12px;
    color: #777;
  }
}

#wishListBtn {
  @include flex();
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  padding: 0;
  border-radius: 50%;

  .btn__effect {
    display: inline-block;
    position: relative;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  .icon-svg {
    display: inline-block;
    vertical-align: middle;
    height: 20px;
    width: 20px;

    &--color-cps {
      fill: $primary-color;
      color: $primary-color;
    }
    &--color-silver {
      fill: $white;
      color: $white;
    }
  }

  .heart-border {
    position: absolute;
    top: 0;
    left: 50%;
    width: 20px;
    height: 20px;
    transform: translateX(-50%);
  }
  .heart-full {
    position: absolute;
    left: 6px;
    top: 1px;
    opacity: 0;
  }
  .broken-heart {
    position: absolute;
    left: -8px;
    top: 4px;
    opacity: 0;
    transform: scale(1.3);
  }

  .effect-group {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(25deg);

    .effect {
      display: block;
      position: absolute;
      top: 38%;
      left: 50%;
      width: 20px;
      transform-origin: 0 2px;

      &:before {
        content: "";
        display: block;
        position: absolute;
        right: 0;
        border-radius: 1.5px;
        height: 3px;
        background: $primary-color;
      }

      &:after {
        content: "";
        display: block;
        position: absolute;
        top: 10px;
        right: 10%;
        border-radius: 50%;
        width: 3px;
        height: 3px;
        background: #f60;
        transform: scale(0);
      }

      &:nth-child(2) {
        transform: rotate(72deg);
      }
      &:nth-child(3) {
        transform: rotate(144deg);
      }
      &:nth-child(4) {
        transform: rotate(216deg);
      }
      &:nth-child(5) {
        transform: rotate(288deg);
      }
    }
  }

  .active {
    .icon-svg {
      -webkit-animation: bounceIn .5s linear;
      animation: bounceIn .5s linear;
    }
    .heart-border {
      fill: $white;
      color: $white;
    }
    .heart-stroke {
      opacity: 0;
    }
    .heart-full {
      opacity: 1;
    }

    .effect:before {
      @include animation(fireworkLine .5s linear .1s);
    }
    .effect:after {
      @include animation(fireworkPoint .5s linear .1s);
    }
  }
}
</style>
