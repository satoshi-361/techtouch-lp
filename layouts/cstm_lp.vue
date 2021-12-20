<template>
  <div class="l-container">
    <header :class="{ '-fixed': scrollY !== 0 }" class="header-section">
      <nuxt-link class="logo -desktop" to="/"><img src="../assets/img/logo.svg" alt="Techtouch"></nuxt-link>
      <nuxt-link class="logo -mobile" to="/"><img src="../assets/img/symbol.svg" alt="Techtouch"></nuxt-link>
      <ul class="lp-navigation">
          <div class="-ml">
            <li class="item"><a href="#" class="link">サービス</a></li>
            <li class="item"><nuxt-link class="link" to="/cases">事例</nuxt-link></li>
            <li class="item -desktop"><a href="#" class="link">お役立ち資料</a></li>
            <li class="item"><nuxt-link class="link" to="/event">セミナー</nuxt-link></li>
            <li class="item"><nuxt-link to="/news" class="link">ニュース</nuxt-link></li>
            <li class="item -desktop"><a href="/about" class="link">会社情報</a></li>
          </div>
          <div>
            <li class="item -desktop"><a class="link" href="https://editor.techtouch.jp" target="_blank">ログイン<i class="ico-link"/></a></li>
            <li class="item"><nuxt-link class="link -btn -black" to="/contact">お問い合わせ</nuxt-link></li>
          </div>
      </ul>
    </header>
    <nuxt/>
    <footer class="footer-section">
      <div class="footer-bg">
        <div class="inner">
          <p>お気軽にお問い合わせください</p>
          <div class="btn-group">
              <a class="btn -active">お問い合わせ<i class=""></i></a>
              <a class="btn">資料請求<i class=""></i></a>
          </div>
        </div>  
      </div>
      <div class="inner">
        <div class="heading">
          <nuxt-link class="logo" to="/"><img src="../assets/img/logo.svg" alt="Techtouch"></nuxt-link>
        </div>
        <div class="footer-navigation-group">
          <ul class="footer-navigation">
            <li class="item -sub-title"><a href="#" class="link">サービス</a></li>
            <li class="item"><a href="#" class="link">社内システムでご利用検討の方</a></li>
            <li class="item"><a href="#" class="link">クラウドサービス / SaaSプロバイダーの方</a></li>
          </ul>
          <ul class="footer-navigation">
            <li class="item -sub-title"><nuxt-link class="link" to="/cases">事例</nuxt-link></li>
            <li class="item"><a href="#" class="link">導入事例</a></li>
            <li class="item"><a href="#" class="link">導入企業一覧</a></li>
          </ul>
          <ul class="footer-navigation">
            <li class="item -sub-title"><a href="#" class="link">お役立ち資料</a></li>
            <li class="item -sub-title"><nuxt-link class="link" to="/event">セミナー / イベント</nuxt-link></li>
            <li class="item -sub-title"><nuxt-link to="/news" class="link">ニュース</nuxt-link></li>
          </ul>
          <ul class="footer-navigation">
            <li class="item -sub-title"><nuxt-link to="/about" class="link">会社情報</nuxt-link></li>
            <li class="item"><nuxt-link to="/about" class="link">会社情報</nuxt-link></li>
            <li class="item"><a href="#" class="link">採用情報</a></li>
            <li class="item"><a href="#" class="link">ブログタイトル</a></li>
            <li class="item"><a href="#" class="link">Developers Blog</a></li>
          </ul>
          <ul class="footer-navigation">
            <li class="item -sub-title"><a class="link" href="https://editor.techtouch.jp" target="_blank">ログイン<i class="ico-link"/></a></li>
          </ul>
          <ul class="footer-navigation">
            <li class="item -sub-title"><nuxt-link class="link" to="/contact">お問い合わせ</nuxt-link></li>
            <li class="item -sub-title"><a href="#" class="link">資料請求</a></li>
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
  }
}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap');
@import '../assets/css/iconfonts.css'
@import '../assets/css/base/mixin.styl'
@import '../assets/css/base/variables.styl'
@import '../assets/css/base/reset.styl'
@import '../assets/css/layout/layout.styl'
@import '../assets/css/component/header-section.styl'
@import '../assets/css/component/footer-section.styl'
@import '../assets/css/component/footer-navigation-group.styl'
@import '../assets/css/component/footer-navigation.styl'
@import '../assets/css/component/lp-navigation.styl'
</style>
