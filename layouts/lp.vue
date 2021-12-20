<template>
  <div class="l-container">
    <header :class="{ '-fixed': scrollY !== 0 }" class="header-section">
      <nuxt-link class="logo -desktop" to="/"><img src="../assets/img/logo.svg" alt="Techtouch"></nuxt-link>
      <nuxt-link class="logo -mobile" to="/"><img src="../assets/img/symbol.svg" alt="Techtouch"></nuxt-link>
      <ul class="global-navigation">
        <li class="item"><nuxt-link class="link -btn -orange" to="/contact">お問い合わせ</nuxt-link></li>
      </ul>
    </header>
    <nuxt/>
    <footer class="footer-section">
      <div class="copyright">&copy; Techtouch, Inc.</div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  scrollY = 0

  mounted() {
    window.addEventListener('scroll', () => (this.scrollY = window.scrollY))
  }
}
</script>

<style lang="stylus">
@import '../assets/css/iconfonts.css'
@import '../assets/css/base/mixin.styl'
@import '../assets/css/base/variables.styl'
@import '../assets/css/base/reset.styl'
@import '../assets/css/layout/layout.styl'
@import '../assets/css/component/header-section.styl'
@import '../assets/css/component/global-navigation.styl'
@import '../assets/css/component/footer-section.styl'
</style>
