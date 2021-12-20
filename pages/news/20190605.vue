<template>
  <div class="l-wrap">
    <div class="l-main">
      <div class="secondary-wrap">
        <ul class="breadcrumb-list">
          <li class="item"><nuxt-link to="/" class="link">TOP</nuxt-link><i class="ico-arrow-right"/></li>
          <li class="item"><nuxt-link to="/news" class="link">ニュース</nuxt-link><i class="ico-arrow-right"/></li>
          <li class="item"><span class="current">かわさきFMのラジオ番組「森清華のLife is the journey」に、弊社代表取締役 井無田が出演しました</span></li>
        </ul>
        <div class="inner">
          <div class="article-heading">
            <h1 class="title">かわさきFMのラジオ番組「森清華のLife is the journey」に、弊社代表取締役 井無田が出演しました</h1>
            <div class="date">2019.06.05</div>
            <div class="author">テックタッチ株式会社</div>
            <div class="mainImg">
              <img class="img" src="../../assets/img/news/img_20190605.png" alt="かわさきFMのラジオ番組「森清華のLife is the journey」に、弊社代表取締役 井無田が出演しました">
            </div>
          </div>
          <div class="article-box">
            <p>2019年6月5日19時に放映された、かわさきFMのラジオ番組「森清華のLife is the journey」に、弊社代表取締役 井無田が出演しました。<br><a href="https://podcasts.apple.com/jp/podcast/%E6%A3%AE%E6%B8%85%E8%8F%AF%E3%81%AElife-is-the-journey-%E7%AC%AC139%E5%9B%9E-%E3%83%86%E3%83%83%E3%82%AF%E3%82%BF%E3%83%83%E3%83%81%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE-%E4%BB%A3%E8%A1%A8%E5%8F%96%E7%B7%A0%E5%BD%B9-%E4%BA%95%E7%84%A1%E7%94%B0-%E4%BB%B2/id1161668516?i=1000440753767" target="_blank">podcast</a>にて放映内容を再生することができます。</p>
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
