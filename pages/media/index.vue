<template>
  <div v-if="articles.length > 0">
    <div v-for="(article,index) in articles" :key="article.id" class="media-article-list"> 
        <h2 v-if="article.contents.length > 0" :class="index===0 && `first`">{{article.contents[0].category.name}}</h2><br />
        <ArticleList v-if="article.contents.length > 0" :articles="article.contents" />
        <nuxt-link v-if="article.contents.length > 4"  :to="`/media/category/${article.contents[0].category.slug}`" class="link">
          <button class="more-btn -md btn -primary">もっと見る</button>
        </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import  Card  from '../../components/Card.vue'
import Sidebar from './Sidebar.vue'
import ArticleList from './ArticleList.vue'
import axios from 'axios'

@Component({
  layout: 'media',
  components: {
    Card,
    ArticleList,
    Sidebar
  }
})
export default class News extends Vue {
  data = {
    companyName: '',
    divisionName: '',
    contactName: '',
    email: '',
    phoneNumber: '',
    numberOfEmployees: '',
    category: '',
    content: '',
    articles: [],
  }
  articles:any[] = []
  error = null
  categories: {
    createdAt: string
    id: string
    name: string
    publishedAt: string
    revisedAt: string
    slug: string
    updatedAt: string
  }[] = []

  meta = {
    title: 'Techtouch journal',
    description: 'テックの力を最大化するWEBメディア',
    type: 'article',
    url: 'https://techtouch.jp/media',
    image: 'https://techtouch.jp/ogp.png'
  }
  $router: any
  
  async mounted () {
    try {
      const responseCategories = (await axios.get('https://tt-media.microcms.io/api/v1/categories?orders=-publishedAt',{ headers: { 'X-MICROCMS-API-KEY': 'd1a6e286587b42d0b937900a99167ed10e76' } })).data.contents
      this.categories = responseCategories
      this.articles = await Promise.all(this.categories.map(async(c) => {
        return (await axios.get(`https://tt-media.microcms.io/api/v1/articles?orders=-publishedAt&filters=category[equals]${c.id}&limit=5&fields=category,coverImage,id,slug,subCategory,title`,{ headers: { 'X-MICROCMS-API-KEY': 'd1a6e286587b42d0b937900a99167ed10e76' } })).data
      }))
    } catch (error) {
      this.error = error;
    }
  }

  onMove (to:string) {
    this.$router.push(`/media/category/${to}`)
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
@import '../../assets/css/layout/layout.styl'
@import '../../assets/css/element/btn.styl'
@import '../../assets/css/component/secondary-wrap.styl'
@import '../../assets/css/component/card-box.styl'
@import '../../assets/css/component/media-article-list.styl'

.more-btn
  margin: 2rem auto !important
  @media $desktop
    margin: 2.4rem 0 2.4rem 21rem !important
    
.first
  margin-top: 0 !important

</style>
