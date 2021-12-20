<template>
  <div class="l-wrap">
    <div class="l-main">
      <div class="secondary-wrap">
        <ul class="breadcrumb-list">
          <li class="item"><nuxt-link to="/" class="link">TOP</nuxt-link><i class="ico-arrow-right"/></li>
          <li class="item"><nuxt-link to="/news" class="link">ニュース</nuxt-link><i class="ico-arrow-right"/></li>
          <li class="item"><span class="current">日本最大のIT展示会、Japan IT week春に出展しました日本最大のIT展示会、Japan IT week春に出展しました日本最大のIT展示会、Japan IT week春に出展しました日本最大のIT展示会、Japan IT week春に出展しました日本最大のIT展示会、Japan IT week春に出展しました</span></li>
        </ul>
        <div class="inner">
          <div class="article-heading">
            <h1 class="title">日本最大のIT展示会、Japan IT week春に出展しました</h1>
            <div class="date">2019.05.10</div>
            <div class="author">テックタッチ株式会社</div>
            <div class="mainImg">
              <img class="img" src="../../assets/img/news/img_20190510.png" alt="日本最大のIT展示会、Japan IT week春に出展しました">
            </div>
          </div>
          <div class="article-box">
            <p>2019年5月8日、9日、10日に開催されたJapan IT week春（主催：リード エグジビション ジャパン株式会社）にて、デジタルトランスフォーメーション・プラットフォーム「テックタッチ」として巨大ブースを出展いたしました。<br>700社を超える方々へのデモを実施するなど、非常に盛況をいただきました。ご来場者の皆様、誠にありがとうございました。</p>
            <h2>「ITを導入したけど活用できない」を解決する「テックタッチ」</h2>
            <p>テックタッチ株式会社では、webシステムの操作画面上で直に操作をナビゲーションする「ガイド」を表示し、ユーザーの”わからない”をなくすソリューションを開発・提供してまいりました。これにより、お客様に下記の価値提供を行っております。</p>
            <ul>
              <li>エンドユーザーの業務システム利用体験を「わからなくて、面倒なもの」から「便利で、生産性を上げてくれるもの」へと転換します</li>
              <li>複雑なシステムオペレーションが要求されるビジネスフローも、正確・迅速にこなすことができるようになります</li>
              <li>システム導入時のユーザー側の立ち上がりが圧倒的に早くなります</li>
              <li>システム導入担当者のマニュアル作成、問い合わせ対応コスト、研修コストなどのシステム教育関連費用を半減します</li>
            </ul>
            <div class="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/s-6zoJavqHY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
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
    description: '日本最大のIT展示会、Japan IT week春に出展しました',
    type: 'article',
    url: 'https://techtouch.jp/news/20190510',
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
