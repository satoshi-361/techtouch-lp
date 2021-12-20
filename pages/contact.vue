<template>
  <div class="l-wrap">
    <div class="l-main">
      <div class="secondary-wrap">
        <div class="inner">
          <h2 class="title">お問い合わせ</h2>
          <div class="content">
            <p class="description">テックタッチに興味を持っていただきありがとうございます。<br>サービスに関するご質問・ご相談は、以下のフォームよりお送りください。</p>
            <ul class="form-list">
              <li class="item">
                <dl class="content">
                  <dt class="heading -required">お問い合わせ内容</dt>
                  <dd class="form-box">
                    <ul class="radio-list">
                      <li class="item">
                        <input class="input" type="radio" name="radio" id="radio-01" checked="checked" v-model="data.purpose" value="サービス資料がほしい">
                        <label class="label" for="radio-01">サービス資料がほしい</label>
                      </li>
                      <li class="item">
                        <input class="input" type="radio" name="radio" id="radio-02" v-model="data.purpose" value="サービス内容を詳しく聞きたい">
                        <label class="label" for="radio-02">サービス内容を詳しく聞きたい</label>
                      </li>
                      <li class="item">
                        <input class="input" type="radio" name="radio" id="radio-03" v-model="data.purpose" value="採用関連">
                        <label class="label" for="radio-03">採用関連</label>
                      </li>
                      <li class="item">
                        <input class="input" type="radio" name="radio" id="radio-04" v-model="data.purpose" value="メディア関連">
                        <label class="label" for="radio-04">メディア掲載</label>
                      </li>
                      <li class="item">
                        <input class="input" type="radio" name="radio" id="radio-05" v-model="data.purpose" value="その他">
                        <label class="label" for="radio-05">その他</label>
                      </li>
                    </ul>
                  </dd>
                </dl>
              </li>
              <transition name="slide-fade">
                <div class="form-list" v-if="data.purpose === 'サービス内容を詳しく聞きたい'">
                  <li class="item">
                    <dl class="content">
                      <dt class="heading -required">検討内容</dt>
                      <dd class="form-box">
                        <div class="select-box">
                          <select class="select" required v-model="data.consider">
                            <option value="">検討内容を選択してください</option>
                            <option>社内で利用したい</option>
                            <option>自社サービスに組み込みたい</option>
                            <option>他社に提案したい</option>
                          </select>
                          <i class="ico-arrow-down"/>
                        </div>
                      </dd>
                    </dl>
                  </li>
                  <li class="item">
                    <dl class="content">
                      <dt class="heading -required">対象システム</dt>
                      <dd class="form-box">
                        <input class="input" type="text" placeholder="例）Salesforce" required v-model="data.system">
                      </dd>
                    </dl>
                  </li>
                  <li class="item">
                    <dl class="content">
                      <dt class="heading -required">対象ブラウザ</dt>
                      <dd class="form-box">
                        <div class="select-box">
                          <select class="select" required v-model="data.browser">
                            <option value="">対象ブラウザを選択してください</option>
                            <option>Google Chrome</option>
                            <option>Internet Explorer 11</option>
                            <option>Edge</option>
                            <option>Firefox</option>
                            <option>その他</option>
                          </select>
                          <i class="ico-arrow-down"/>
                        </div>
                      </dd>
                    </dl>
                  </li>
                  <li class="item">
                    <dl class="content">
                      <dt class="heading -required">想定利用ユーザー数</dt>
                      <dd class="form-box">
                        <div class="select-box">
                          <select class="select" required v-model="data.userAmount">
                            <option value="">想定利用ユーザー数を選択してください</option>
                            <option>1-50名</option>
                            <option>51-200名</option>
                            <option>201-500名</option>
                            <option>501-1,000名</option>
                            <option>1,001-3,000名</option>
                            <option>3,001名以上</option>
                          </select>
                          <i class="ico-arrow-down"/>
                        </div>
                      </dd>
                    </dl>
                  </li>
                  <li class="item">
                    <dl class="content">
                      <dt class="heading -required">導入時期</dt>
                      <dd class="form-box">
                        <div class="select-box">
                          <select class="select" required v-model="data.startDate">
                            <option value="">導入時期を選択してください</option>
                            <option>すぐにでも</option>
                            <option>半年以内</option>
                            <option>来年以降</option>
                            <option>未定</option>
                          </select>
                          <i class="ico-arrow-down"/>
                        </div>
                      </dd>
                    </dl>
                  </li>
                </div>
              </transition>
              <li class="item">
                <dl class="content">
                  <dt class="heading">お問い合わせ詳細</dt>
                  <dd class="form-box">
                    <textarea v-model="data.content" class="textarea" placeholder="例）料金について詳しく知りたい。"/>
                  </dd>
                </dl>
              </li>
              <li class="item">
                <dl class="content">
                  <dt class="heading -required">貴社名</dt>
                  <dd class="form-box">
                    <input v-model="data.companyName" class="input" type="text" placeholder="例）テックタッチ株式会社" required>
                  </dd>
                </dl>
              </li>
              <li class="item">
                <dl class="content">
                  <dt class="heading -required">従業員数</dt>
                  <dd class="form-box">
                    <div class="select-box">
                      <select v-model="data.numberOfEmployees" class="select" required>
                        <option value="">従業員数を選択してください（単体ベース）</option>
                        <option>1-50名</option>
                        <option>51-200名</option>
                        <option>201-500名</option>
                        <option>501-1,000名</option>
                        <option>1,001-3,000名</option>
                        <option>3,001名以上</option>
                      </select>
                      <i class="ico-arrow-down"/>
                    </div>
                  </dd>
                </dl>
              </li>
              <li class="item">
                <dl class="content">
                  <dt class="heading -required">部署名</dt>
                  <dd class="form-box"><input v-model="data.divisionName" class="input" type="text" placeholder="例）情報システム部" required></dd>
                </dl>
              </li>
              <li class="item">
                <dl class="content">
                  <dt class="heading -required">ご担当者氏名</dt>
                  <dd class="form-box"><input v-model="data.contactName" class="input" type="text" placeholder="例）山田太郎" required></dd>
                </dl>
              </li>
              <li class="item">
                <dl class="content">
                  <dt class="heading -required">メールアドレス</dt>
                  <dd class="form-box"><input v-model="data.email" :class="{ '-error': mailError }" class="input" type="text" placeholder="例）example@techtouch.co.jp" required>
                  <p v-if="mailError" class="error-message">{{ mailError }}</p></dd>
                </dl>
              </li>
              <li class="item">
                <dl class="content">
                  <dt class="heading -required">電話番号</dt>
                  <dd class="form-box"><input v-model="data.phoneNumber" :class="{ '-error': phoneError }" class="input" type="text" placeholder="例）0312345678" required>
                  <p v-if="phoneError" class="error-message">{{ phoneError }}</p></dd>
                </dl>
              </li>
            </ul>
            <p class="note"><a class="link" href="https://editor.techtouch.jp/privacy" target="_blank">プライバシーポリシー</a>をお読みいただき、同意いただいたうえで送信してください。</p>
            <recaptcha @success="onCaptchaSuccess"/>
            <button :disabled="disabled" class="btn -primary" @click="submit">送信</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import axios from 'axios'
import { Payload } from '../lambda/contact-api/types/contact'

@Component
export default class Contact extends Vue {
  submitted = false

  data: Payload & { captchaResponse: string } = {
    purpose: 'サービス資料がほしい',
    consider: '',
    system: '',
    browser: '',
    userAmount: '',
    startDate: '',
    companyName: '',
    divisionName: '',
    contactName: '',
    email: '',
    phoneNumber: '',
    numberOfEmployees: '',
    content: '',
    captchaResponse: '',
    urlParam: ''
  }

  meta = {
    title: 'お問い合わせ',
    description: '資料請求や機能、料金に関する質問など、お気軽にお問い合わせください',
    type: 'article',
    url: 'https://techtouch.jp/contact',
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

  get disabled() {
    // 必須項目を入力後、送信可能にする
    return (
      !this.data.purpose ||
      !this.data.companyName ||
      !this.data.divisionName ||
      !this.data.contactName ||
      !this.data.email ||
      !this.data.phoneNumber ||
      !this.data.numberOfEmployees ||
      !this.data.captchaResponse ||
      this.data.purpose === 'サービス内容を詳しく聞きたい' && (
        !this.data.consider ||
        !this.data.system ||
        !this.data.browser ||
        !this.data.userAmount ||
        !this.data.startDate
      )
    )
  }

  get mailError() {
    // メールアドレスのフォーマットになっているか
    // 参照 https://emailregex.com/
    const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return this.submitted && !regexp.exec(this.data.email)
      ? 'メールアドレスを正しく入力してください'
      : ''
  }

  get phoneError() {
    // 電話番号は0から始まる && 9,10桁のみ
    const regexp = /^0[0-9]{9,10}$/
    return this.submitted && !regexp.exec(this.data.phoneNumber)
      ? '電話番号を正しく入力してください'
      : ''
  }
  onCaptchaSuccess(token) {
    this.data.captchaResponse = token
  }
  async submit() {
    this.submitted = true
    if (!this.mailError && !this.phoneError) {
      const res = await axios.post(
        'https://o7jqp835ze.execute-api.ap-northeast-1.amazonaws.com/production/contact-lp',
        this.data
      )
      // @ts-ignore
      this.$router.push('/thanks-contact')
    }
  }
  mounted(){
    if(this.$store.state.urlParam){
      this.data.urlParam = this.$store.state.urlParam
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
@import '../assets/css/component/radio-list.styl'
@import '../assets/css/component/select-box.styl'
@import '../assets/css/component/error-message.styl'
@import '../assets/css/component/g-recaptcha.styl'

.slide-fade-enter-active
  transition: all .3s ease

.slide-fade-leave-active
  transition: all .2s ease

.slide-fade-enter, .slide-fade-leave-to
  transform: translateY(-10px)
  opacity: 0
</style>
