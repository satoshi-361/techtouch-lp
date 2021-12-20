<template>
  <div class="l-main">
    <div class="hero-section-about">
      <div class="inner">
        <div class="hero-message-about">
          <h1 class="heading">Maximize <br>the power of tech</h1>
          <div class="subheading">テックの力を最大化する</div>
          <p class="content">我々は「爆発的な技術革新によって、社会が根本的に変わる」<br> デジタルトランスフォーメーションの時代に生きています。</p>
          <p class="content">テクノロジーを使いこなすことは、あらゆる場面において必要不可欠です。<br>我々はヒトとテクノロジーの架け橋となることで、テクノロジーの力を引き出すと同時に、<br>無駄を減らすことで、ヒトは本来集中すべき取り組みに思考リソースを集中できます。</p>
          <p class="content">ヒトが、ビジネスを、社会を、人生を変える手助けをしたい。<br>それが我々テックタッチの願いです。</p>
        </div>
      </div>
    </div>
    <div class="content-section -gray">
      <div class="inner -narrow">
        <h2 class="title">会社概要</h2>
        <div class="content">
          <ul class="about-list">
            <li class="item">
              <dl class="inner">
                <dt class="heading">社名</dt>
                <dd class="content">テックタッチ株式会社</dd>
              </dl>
            </li>
            <li class="item">
              <dl class="inner">
                <dt class="heading">設立</dt>
                <dd class="content">2018年3月1日</dd>
              </dl>
            </li>
            <li class="item">
              <dl class="inner">
                <dt class="heading">資本金</dt>
                <dd class="content">6.3億円（準備金含む）</dd>
              </dl>
            </li>
            <li class="item">
              <dl class="inner">
                <dt class="heading">役員</dt>
                <dd class="content">代表取締役　井無田 仲<br>取締役　日比野 淳</dd>
              </dl>
            </li>
            <li class="item">
              <dl class="inner">
                <dt class="heading">住所</dt>
                <dd class="content">〒100-6005<br>東京都千代田区霞ヶ関3-2-5<br>霞が関ビルディング5階<a class="text-link" href="https://goo.gl/maps/u8jhNhTEGS62" target="_blank">GoogleMaps<i class="ico-link"/></a></dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content-section">
      <div class="inner -narrow">
        <h2 class="title">役員</h2>
        <div class="content">
          <ul class="management-list">
            <li class="item">
              <img class="img" src="../assets/img/pic_imuta.jpg" alt="井無田 仲" width="200" height="200">
              <dl class="inner">
                <dt class="heading">井無田 仲<span class="subheading">代表取締役</span></dt>
                <dd class="content">ドイツ証券、新生銀行にて企業の資金調達/M&A助言業務に従事後、ユナイテッド社で事業責任者、米国子会社代表などを歴任し大規模サービスの開発・グロースなどを手がける。<br>慶應義塾大学法学部、コロンビア大学MBA卒。</dd>
              </dl>
            </li>
            <li class="item">
              <img class="img" src="../assets/img/pic_hibino.jpg" alt="日比野 淳" width="200" height="200">
              <dl class="inner">
                <dt class="heading">日比野 淳<span class="subheading">取締役</span></dt>
                <dd class="content">ファンコミュニケーションズ、ユナイテッドで広告ネットワーク構築、大規模toCアプリの立ち上げ、米国でのサービス立ち上げ等に従事。<br>高速仮説検証からの早期リリース、大規模サービスの運用まで幅広い経験を有する。</dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="careers" class="content-section -gray">
      <div class="inner">
        <h2 class="title">採用情報</h2>
        <div class="content">
          <p class="text">テックタッチでは一緒に働く仲間を募集しています。</p>
        </div>
        <script async class="speakerdeck-embed" data-id="64168d67cf2c4d7fb06963f5a68c6596" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>
        <div class="content">
          <div class="btn-group">
            <a class="btn -md -primary" href="https://www.wantedly.com/stories/s/wantedly_careers" target="_blank">入社エントリーを読む</a>
            <a class="btn -md -orange" href="https://herp.careers/v1/techtouch" target="_blank">募集職種を見る</a>
          </div>
        </div>
      </div>
    </div>
    <div class="floating-box" v-if="visibleFloatingBox">
      <div class="closeBtn" @click="closeFloatingBox"><i class="ico-close"/></div>
      <nuxt-link id="click_tlp" class="link" to="/leadership-program">
        <img class="img" src="../assets/img/tlp/img_tlp.jpg" alt="Techtouch Leadership Program">
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  layout: 'about'
})
export default class About extends Vue {
  visibleFloatingBox = true
  closeFloatingBox() {
    this.visibleFloatingBox = false
  }

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
    title: '会社概要',
    description: 'テックタッチ株式会社の会社概要です。',
    type: 'article',
    url: 'https://techtouch.jp/about',
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
@import '../assets/css/iconfonts.css'
@import '../assets/css/base/mixin.styl'
@import '../assets/css/base/variables.styl'
@import '../assets/css/base/reset.styl'
@import '../assets/css/layout/layout.styl'
@import '../assets/css/element/btn.styl'
@import '../assets/css/component/btn-group.styl'
@import '../assets/css/component/hero-section-about.styl'
@import '../assets/css/component/hero-message-about.styl'
@import '../assets/css/component/content-section.styl'
@import '../assets/css/component/about-list.styl'
@import '../assets/css/component/management-list.styl'
@import '../assets/css/component/text-link.styl'
@import '../assets/css/component/speakerdeck-embed-wrapper.styl'
</style>
