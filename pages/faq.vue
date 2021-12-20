<template>
  <div class="l-wrap">
    <div class="l-main">
      <div class="secondary-wrap">
        <div class="inner">
          <h2 class="title">よくある質問</h2>
          <ul class="faq-list">
            <li class="item">
              <p class="text -question">Q. 価格体系について教えてもらえますか？</p>
              <p class="text -answer">お客さまの環境や使い方により料金体系が変わりますので、具体的なお見積りについてはお問い合わせください。</p>
              <nuxt-link class="btn -md -orange -center" to="/contact">お問い合わせ</nuxt-link>
            </li>
            <li class="item">
              <p class="text -question">Q. 最低利用期間はありますか？</p>
              <p class="text -answer">1年単位での契約更新です。</p>
            </li>
            <li class="item">
              <p class="text -question">Q. デスクトップアプリケーションは対象となりますか？</p>
              <p class="text -answer">対象はwebアプリケーションのみとなり、こちらは対象外です。</p>
            </li>
            <li class="item">
              <p class="text -question">Q. 対応OSとブラウザの指定はありますか？</p>
              <p class="text -answer">Windows / Macユーザーを問いません。<br>ブラウザはInternet Explorer 11 / Google Chrome / Firefox / Microsoft Edgeに対応しています。<br>他のブラウザについても開発検討中ですので、詳しくはお問い合わせください。</p>
              <nuxt-link class="btn -md -orange -center" to="/contact">お問い合わせ</nuxt-link>
            </li>
            <li class="item">
              <p class="text -question">Q. サービス利用後のサポートはありますか？</p>
              <p class="text -answer">カスタマーサクセスによるオンボーディング、チャット、メールでのタイムリーなサポートを提供します。</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="content-section -gray">
        <div class="inner -secondary">
          <div class="contact-box">
            <h2 class="title">テックタッチは<br>DX<span class="smallText">（デジタルトランスフォーメーション）</span>を推進させます</h2>
            <div class="btn-group">
              <nuxt-link class="btn -md -orange" to="/contact">お問い合わせ</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Price extends Vue {
  data = {
    companyName: '',
    divisionName: '',
    contactName: '',
    email: '',
    phoneNumber: '',
    numberOfEmployees: '',
    category: '',
    content: ''
  }

  meta = {
    title: 'よくある質問',
    description: 'テックタッチによくある質問です、その他ご不明点についてもお気軽にお問い合わせください',
    type: 'article',
    url: 'https://techtouch.jp/price',
    image: 'https://techtouch.jp/ogp.png'
  }

  head() {
    return {
      title: this.meta.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.meta.description
        },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.meta.description
        },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { hid: 'og:image', property: 'og:image', content: this.meta.image }
      ]
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/css/base/mixin.styl'
@import '../assets/css/base/variables.styl'
@import '../assets/css/base/reset.styl'
@import '../assets/css/layout/layout.styl'
@import '../assets/css/element/btn.styl'
@import '../assets/css/component/btn-group.styl'
@import '../assets/css/component/header-section.styl'
@import '../assets/css/component/global-navigation.styl'
@import '../assets/css/component/content-section.styl'
@import '../assets/css/component/secondary-wrap.styl'
@import '../assets/css/component/form-list.styl'
@import '../assets/css/component/form-box.styl'
@import '../assets/css/component/select-box.styl'
@import '../assets/css/component/error-message.styl'
</style>
