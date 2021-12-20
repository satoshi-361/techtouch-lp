<template>
  <div class="l-main">
    <div class="hero-section-merit">
      <div class="inner">
        <div class="hero-message-merit">
          <h1 class="heading">テックタッチは<br><span class="largeText">DX</span>を<br><span class="smallText">デジタルトランスフォーメーション</span><br>推進させます</h1>
        </div>
        <img class="img" src="../assets/img/img-main.png" alt="テックタッチ">
      </div>
    </div>
    <div class="content-section -gray">
      <div class="inner">
        <ul class="merit-list -second">
          <li class="item -rtl">
            <div class="content">
              <div class="number">01</div>
              <h2 class="title">マニュアルはもういらない</h2>
              <p class="description">せっかく時間をかけてマニュアル作成しても、誰も見てくれない。<br>テックタッチなら、システムの画面内で操作方法がわかるので、初めてシステムを利用するユーザーも簡単に操作できるようになります。</p>
            </div>
            <div class="imgBox -center">
              <img class="img -merit04" src="../assets/img/img-02.png" alt="マニュアルはもういらない">
            </div>
          </li>
          <li class="item">
            <div class="content">
              <div class="number">02</div>
              <h2 class="title">研修よりも効果的</h2>
              <p class="description">せっかく準備とコストを掛けてユーザー研修しても、実際にシステムを利用するときにはユーザーは忘れてしまうもの。<br>システムの画面からいつでもナビゲーションを呼び出せるテックタッチなら、実際の利用時に操作方法を知ることができシステム定着化を推進します。</p>
            </div>
            <div class="imgBox -right">
              <img class="img -merit05" src="../assets/img/sample-03.png" alt="研修よりも、効果的">
            </div>
          </li>
          <li class="item -rtl">
            <div class="content">
              <div class="number">03</div>
              <h2 class="title">問い合わせ対応件数の削減</h2>
              <p class="description">オンラインマニュアルやヘルプページがあっても、ひっきりなしにくるユーザーからの問い合わせ。<br>ユーザーの疑問はスムーズに自己解決されて、生産性改善・業務効率化につながります。</p>
            </div>
            <div class="imgBox -center">
              <img class="img -merit06" src="../assets/img/img-03.png" alt="問い合わせ対応、減らします">
            </div>
          </li>
          <li class="item">
            <div class="content">
              <div class="number">04</div>
              <h2 class="title">入力ミスの削減</h2>
              <p class="description">データ入力の精度、正確性向上はお任せください。<br>入力ミスによる差し戻し、名寄せなどの作業は一掃します。<br>「この欄には何を記入すればいいの？」とユーザーが迷うこともありません。</p>
            </div>
            <div class="imgBox -right">
              <img class="img -merit07" src="../assets/img/sample-04.png" alt="こんな機能、あったのか">
            </div>
          </li>
          <li class="item -rtl">
            <div class="content">
              <div class="number">05</div>
              <h2 class="title">システム導入効果の最大化</h2>
              <p class="description">使い方が分からないから気付いていないだけで、今お使いのシステム、実は有用な機能がたくさんあります。<br>テックタッチがあれば、その機能を誰もが簡単に使えるようになるので、業務進行が格段と改善します。</p>
            </div>
            <div class="imgBox -center">
              <img class="img -merit08" src="../assets/img/img-04.png" alt="イライラに、さよなら">
            </div>
          </li>
          <li class="item">
            <div class="content">
              <div class="number">06</div>
              <h2 class="title">働き方改革、業務効率化</h2>
              <p class="description">改革のために取り入れたwebシステム。ユーザーが使いこなせないので社内に浸透せず、結果余計に時間がかかっていることありませんか？<br>企業のデジタルトランスフォーメーションの第一歩は、ユーザーがシステムを使いこなすことからです。</p>
            </div>
            <div class="imgBox -center">
              <img class="img -merit09" src="../assets/img/img-05.png" alt="時間の使い方が、変わる">
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="content-section -gray">
      <div class="inner">
        <div class="contact-box">
          <h2 class="title">テックタッチは<br>DX<span class="smallText">（デジタルトランスフォーメーション）</span>を推進させます</h2>
          <div class="btn-group">
            <nuxt-link class="btn -md -orange" to="/contact">お問い合わせ</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Merit extends Vue {

  head() {
    const meta = {
      title: 'メリット',
      description: 'テックタッチなら、新規システム導入時に発生するユーザートレーニングやマニュアル作成が不要になります。研修コストや入力ミスを削減しユーザーの自己解決を促すことで、業務効率化を促進します。',
      type: 'article',
      url: 'https://techtouch.jp/merit',
      image: 'https://techtouch.jp/ogp.png'
    }
    return {
      title: meta.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: meta.description
        },
        { hid: 'og:type', property: 'og:type', content: meta.type },
        { hid: 'og:title', property: 'og:title', content: meta.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: meta.description
        },
        { hid: 'og:url', property: 'og:url', content: meta.url },
        { hid: 'og:image', property: 'og:image', content: meta.image }
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
@import '../assets/css/component/hero-section-merit.styl'
@import '../assets/css/component/hero-message-merit.styl'
@import '../assets/css/component/content-section.styl'
@import '../assets/css/component/merit-list.styl'
@import '../assets/css/component/faq-list.styl'
@import '../assets/css/component/contact-box.styl'
</style>
