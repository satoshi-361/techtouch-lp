<template>
  <div class="navigation-menu">
    <img src="../assets/img/icon-close.svg" @click="hide">
    <ul class="global-navigation">
      <li class="item"><nuxt-link to="/">TOP</nuxt-link></li>
      <li class="item"><nuxt-link to="/contact">CONTACT</nuxt-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
  hide() {
    this.$emit('hide')
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/base/variables.styl'

.navigation-menu
  width: 100%
  height: 100vh
  padding: 1.6rem
  position: fixed
  top: 0
  left: 0
  z-index: 3
  background-image: linear-gradient(to right, $primary-color, lighten($primary-color, 10))
  display: flex
  justify-content: center
  align-items: center

  img
    width: 2.2rem
    position: absolute
    top: 1.6rem
    right: 1.6rem
</style>
