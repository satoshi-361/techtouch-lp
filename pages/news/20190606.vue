<template>
  <div class="l-wrap">
    <div class="l-main">
      <div class="secondary-wrap">
        <ul class="breadcrumb-list">
          <li class="item"><nuxt-link to="/" class="link">TOP</nuxt-link><i class="ico-arrow-right"/></li>
          <li class="item"><nuxt-link to="/news" class="link">ニュース</nuxt-link><i class="ico-arrow-right"/></li>
          <li class="item"><span class="current">CDO Summit in Fukuoka G20で、弊社代表取締役 井無田が登壇しました</span></li>
        </ul>
        <div class="inner">
          <div class="article-heading">
            <h1 class="title">CDO Summit in Fukuoka G20で、弊社代表取締役 井無田が登壇しました</h1>
            <div class="date">2019.06.06</div>
            <div class="author">テックタッチ株式会社</div>
            <div class="mainImg">
              <img class="img" src="../../assets/img/news/img_20190606.png" alt="CDO Summit in Fukuoka G20で、弊社代表取締役 井無田が登壇しました">
            </div>
          </div>
          <div class="article-box">
            <p>2019年6月4日、5日に開催されたCDO Summit in Fukuoka G20（<a href="https://www.d20-cdosummit-fukuoka.com/" target="_blank">https://www.d20-cdosummit-fukuoka.com/</a> 主催：CDO Club Japan 代表理事 加茂 純）にて、弊社代表取締役 井無田が「DX時代の機先を制する〜デジタル技術を100%活用するために」というタイトルで講演を行いました。</p>
          </div>
          <nuxt-link to="/news" class="btn -md -primary">ニュース一覧へ</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class News extends Vue {
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
    title: 'ニュース',
    description: '弊社代表の井無田がかわさきFMのラジオ番組「森清華のLife is the journey」に出演しました',
    type: 'article',
    url: 'https://techtouch.jp/news/20190605',
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
@import '../../assets/css/base/mixin.styl'
@import '../../assets/css/base/variables.styl'
@import '../../assets/css/base/reset.styl'
@import '../../assets/css/layout/layout.styl'
@import '../../assets/css/element/btn.styl'
@import '../../assets/css/component/secondary-wrap.styl'
@import '../../assets/css/component/breadcrumb-list.styl'
@import '../../assets/css/component/article-heading.styl'
@import '../../assets/css/component/article-box.styl'
</style>
