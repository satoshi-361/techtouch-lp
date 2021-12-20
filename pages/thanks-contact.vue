<template>
  <div class="l-wrap">
    <div class="l-main">
      <div class="secondary-wrap">
        <div class="inner">
          <h2 class="title">お問い合わせ</h2>
          <div class="content">
            <p class="text">お問い合わせいただきありがとうございます。</p>
            <p class="text">担当者より折り返しご連絡させていただきます。</p>
            <p class="text">なお、3営業日を過ぎても返答がない場合はメールの受信がうまく行えていない可能性がございますので、お手数ではございますが改めてお問い合わせください。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Thanks extends Vue {
  meta = {
    title: '資料請求',
    description: 'テックタッチへの資料請求ありがとうございます',
    type: 'article',
    url: 'https://techtouch.jp/contact',
    image: 'https://techtouch.jp/ogp.png'
  }

  head() {
    return {
      title: this.meta.title,
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        },
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
@import '../assets/css/component/header-section.styl'
@import '../assets/css/component/global-navigation.styl'
@import '../assets/css/component/content-section.styl'
@import '../assets/css/component/secondary-wrap.styl'
@import '../assets/css/component/form-list.styl'
@import '../assets/css/component/form-box.styl'
@import '../assets/css/component/select-box.styl'
@import '../assets/css/component/error-message.styl'
</style>
