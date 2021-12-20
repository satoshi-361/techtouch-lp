<template>
  <div class="l-container">
    <header :class="{ '-fixed': scrollY !== 0 }" class="header-section -transparent">
      <nuxt-link class="logo -desktop" to="/"><img src="../assets/img/logo.svg" alt="Techtouch"></nuxt-link>
      <nuxt-link class="logo -mobile" to="/"><img src="../assets/img/symbol.svg" alt="Techtouch"></nuxt-link>
      <nuxt-link class="logo -desktop -transparent" to="/"><img src="../assets/img/logo-white.svg" alt="Techtouch"></nuxt-link>
      <nuxt-link class="logo -mobile -transparent" to="/"><img src="../assets/img/symbol-white.svg" alt="Techtouch"></nuxt-link>
      <ul class="global-navigation">
        <li class="item"><nuxt-link class="link" to="/techtouch">メリット</nuxt-link></li>
        <li class="item"><nuxt-link class="link" to="/cases">事例</nuxt-link></li>
        <li class="item"><nuxt-link class="link" to="/event">セミナー</nuxt-link></li>
        <li class="item"><nuxt-link class="link" to="/faq">よくある質問</nuxt-link></li>
        <li class="item"><nuxt-link class="link -btn -orange" to="/contact">お問い合わせ</nuxt-link></li>
        <li class="item -desktop"><a href="/about" class="link">会社概要</a></li>
        <li class="item -desktop"><a class="link" href="https://editor.techtouch.jp" target="_blank">ログイン<i class="ico-link"/></a></li>
      </ul>
    </header>
    <nuxt/>
    <footer class="footer-section">
      <div class="inner">
        <div class="heading">
          <nuxt-link class="logo" to="/"><img src="../assets/img/logo.svg" alt="Techtouch"></nuxt-link>
          <p class="subHeading">もう操作では迷わない。マニュアルの、その先へ。</p>
        </div>
        <div class="footer-navigation-group">
          <ul class="footer-navigation">
            <li class="item"><nuxt-link class="link" to="/techtouch">メリット</nuxt-link></li>
            <li class="item"><nuxt-link class="link" to="/cases">事例</nuxt-link></li>
            <li class="item"><nuxt-link class="link" to="/event">セミナー</nuxt-link></li>
            <li class="item"><nuxt-link class="link" to="/faq">よくある質問</nuxt-link></li>
            <li class="item"><nuxt-link class="link" to="/contact">お問い合わせ</nuxt-link></li>
          </ul>
          <ul class="footer-navigation">
            <li class="item -desktop"><a class="link" href="https://editor.techtouch.jp" target="_blank">ログイン<i class="ico-link"/></a></li>
          </ul>
          <ul class="footer-navigation">
            <li class="item"><a href="/about" class="link">会社概要</a></li>
            <li class="item" @click="scrollToCareers" ><nuxt-link :to="{ path: '/about', hash: '#careers' }" class="link" >採用情報</nuxt-link></li>
            <li class="item"><nuxt-link to="/news" class="link">ニュース</nuxt-link></li>
            <li class="item"><a class="link" href="https://tech.techtouch.jp/" target="_blank">Developers Blog<i class="ico-link"/></a></li>
          </ul>
          <ul class="footer-navigation">
            <li class="item"><a class="link" href="https://editor.techtouch.jp/terms" target="_blank">利用規約<i class="ico-link"/></a></li>
            <li class="item"><a class="link" href="https://editor.techtouch.jp/privacy" target="_blank">プライバシーポリシー<i class="ico-link"/></a></li>
            <li class="item"><img class="logo" src="../assets/img/logo-isms.png" alt="MSA-IS-301"></li>
          </ul>
        </div>
      </div>
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

    if (location.hash === '#careers') {
      setTimeout(() => {
        this.scrollToCareers()
      }, 1000)
    }
  }

  scrollToCareers() {
    console.log('scroll')
    const careersEl = document.getElementById('careers')
    if (careersEl) {
      careersEl.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
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
@import '../assets/css/component/footer-navigation-group.styl'
@import '../assets/css/component/footer-navigation.styl'
</style>
