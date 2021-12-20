<template>
  <div class="l-wrap">
    <div class="l-main">
      <div class="secondary-wrap">
        <div class="inner -wide">
          <h2 class="title">セミナー・イベント</h2>
          <div class="content">
            <ul class="article-list">
              <li class="item">
                <nuxt-link to="/event/20210128" class="link">
                  <div class="card-box">
                    <img class="img" src="../../assets/img/event/img_20210128.jpg" alt="入力ミス8割減！開発不要のシステムUI改善 あいおいニッセイ同和損保 テックタッチ">
                    <div class="label">終了</div>
                    <div class="content">
                      <p class="description">入力ミス8割減！開発不要のシステムUI改善</p>
                      <p class="date">2021年1月28日(木) 11:00-12:00</p>
                      <p class="label"><i class="ico-location"/>オンライン</p>
                    </div>
                  </div>
                </nuxt-link>
              </li>
            </ul>
          </div>
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
    title: 'セミナー・イベント',
    description: 'テックタッチのセミナー・イベント情報です。',
    type: 'article',
    url: 'https://techtouch.jp/event',
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
@import '../../assets/css/component/article-list.styl'
@import '../../assets/css/component/card-box.styl'
</style>
