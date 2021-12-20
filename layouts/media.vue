<template>
  <div class="l-container">
    <header :class="{ '-fixed': scrollY !== 0 }" class="media-header-section">
      <nuxt-link class="logo -desktop" to="/media"><img src="../assets/img/logo.svg" alt="Techtouch"></nuxt-link>
      <nuxt-link class="logo -mobile" to="/media"><img src="../assets/img/symbol.svg" alt="Techtouch"></nuxt-link>
      <ul class="media-global-navigation">
        <li v-for="category in categories" :key="`category_${category.id}`" class="item">
           <nuxt-link :to="`/media/category/${category.slug}`" class="link">{{category.name}}</nuxt-link>
        </li>
      </ul>
    </header>

<div class="l-wrap">
    <div class="l-main">
      <div class="secondary-wrap">
        <div class="inner -wide media">
            <div class="content">
                <div class="content-media">
                <nuxt :categories="categories" />
                <Sidebar :categories="categories" :tags="tags" :subCategories="subCategories" />
                </div>
            </div>
        </div>
     </div>
   </div>
    </div>
    <footer class="footer-section">
      <div class="inner">
        <div class="heading">
          <nuxt-link class="logo" to="/media"><img src="../assets/img/logo.svg" alt="Techtouch"></nuxt-link>
          <p class="subHeading">テックの力を最大化するWEBメディア</p>
        </div>
        <div class="footer-navigation-group">
            <ul v-for="category in categories" :key="`category_${category.id}`" class="media-footer-navigation">
                <li class="item">
                    <nuxt-link :to="`/media/category/${category.slug}`" class="link">{{category.name}}</nuxt-link>
                    <ul class="ul-indent">
                        <span v-for="subCategory in subCategories" :key="`category_${subCategory.id}`" >
                            <li v-if="subCategory.category.name === category.name" class="item">
                                <nuxt-link  :to="`/media/subcategory/${subCategory.slug}`" class="link">{{subCategory.name}}</nuxt-link>
                            </li>
                        </span>
                    </ul>
                </li>
            </ul>
            <ul class="media-footer-navigation">
                <li class="item"><nuxt-link to="/about" class="link">運営会社</nuxt-link></li>
                <li class="item"><a class="link" href="https://editor.techtouch.jp/privacy" target="_blank">個人情報の取り扱いについて<i class="ico-link"/></a></li>
                <li class="item"><a class="link" href="https://editor.techtouch.jp/terms" target="_blank">利用規約<i class="ico-link"/></a></li>
            </ul>
        </div>
      </div>
      <div class="copyright">&copy; Techtouch, Inc.</div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Sidebar from '../pages/media/Sidebar.vue'
import axios from 'axios'

@Component({
    components:{
        Sidebar
    }
})
export default class extends Vue {
  scrollY = 0
  categories = []
  subCategories = []
  tags = []
  error = null

  checkContainArticles(sub) {
      const subCat: any = this.subCategories.find((s:any) => s.id ===  sub.id)
      return subCat ? subCat.articles.length > 0 : false
  }

  async mounted () {
    window.addEventListener('scroll', () => (this.scrollY = window.scrollY))
    try {
        const responseCategories = await axios.get('https://tt-media.microcms.io/api/v1/categories?orders=-publishedAt',{ headers: { 'X-MICROCMS-API-KEY': 'd1a6e286587b42d0b937900a99167ed10e76' } })
        const responseSubCategories = await axios.get('https://tt-media.microcms.io/api/v1/sub-categories?orders=-publishedAt',{ headers: { 'X-MICROCMS-API-KEY': 'd1a6e286587b42d0b937900a99167ed10e76' } })
        const responseTags = await axios.get('https://tt-media.microcms.io/api/v1/tags?orders=-publishedAt',{ headers: { 'X-MICROCMS-API-KEY': 'd1a6e286587b42d0b937900a99167ed10e76' } })
      this.categories = responseCategories.data.contents
      this.subCategories = responseSubCategories.data.contents
      this.tags = responseTags.data.contents
    } catch (error) {
      this.error = error;
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
@import '../assets/css/component/media-header-section.styl'
@import '../assets/css/component/media-content.styl'
@import '../assets/css/component/media-global-navigation.styl'
@import '../assets/css/component/footer-section.styl'
@import '../assets/css/component/footer-navigation-group.styl'
@import '../assets/css/component/media-footer-navigation.styl'

.media
    margin-top: 0 !important

.footer-group-title
    font-weight: bold
    font-size: 18px
    margin-bottom: 20px

.media-footer-navigation
    li {
            list-style:none;
        }
    li:before { content:"- " }
    .ul-indent
        margin: 8px 0 12px 20px
        li {
            list-style:none;
            line-height: 1.5
            margin-bottom: 0.4rem
        }
        li:before { content:"- " }
</style>
