<template>
  <span>
    <h2 class="category-name" v-if="tagName">{{tagName}}</h2>
    <ul class="media-article-list-detail">
      <li  v-for="article in articles" :key="article.id" class="item">
          <Card :article="article" />
      </li>
    </ul>
  </span>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import axios from 'axios'
import  Card  from '../../../components/Card.vue'

@Component({
  layout: 'media',
  components: {
    Card
  }
})
export default class extends Vue {
  tagName: string = ''
  articles: {
      category: {
          name: string
          id: string
      }
      id: string
      coverImage: {
          url: string
      }
      sub_category: {
          name: string
          id: string
      }[]
      tags: {
          name: string
          id: string
      }
      text: string
      title: string
      published_at: Date
      updated_at: Date
      metaData: {
          metaTitle: string
          metaDescription: string
          metaKeywords: string
      }
  }[] =[]
  error = null
  $route: any

  meta = {
    title: 'Techtouch journal',
    description: 'テックの力を最大化するWEBメディア',
    type: 'article',
    url: 'https://techtouch.jp/media',
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

  async mounted () {
    this.meta.url = window.location.href

    try {
      const responseTag = (await axios.get(`https://tt-media.microcms.io/api/v1/tags?filters=slug[equals]${this.$route.params.id}`,{ headers: { 'X-MICROCMS-API-KEY': 'd1a6e286587b42d0b937900a99167ed10e76' } })).data.contents[0]
      const responseArticles = (await axios.get(`https://tt-media.microcms.io/api/v1/articles?orders=-publishedAt&filters=tags[contains]${responseTag.id}&limit=20&fields=category,coverImage,id,slug,subCategory,title`,{ headers: { 'X-MICROCMS-API-KEY': 'd1a6e286587b42d0b937900a99167ed10e76' } })).data.contents

      this.articles = responseArticles
      this.tagName = responseTag.name
      if(this.articles){
        this.meta.title = this.tagName
      }     
    } catch (error) {
      this.error = error;
    }
  }
}
</script>

<style lang="stylus">
@import '../../../assets/css/base/variables.styl'
@import '../../../assets/css/layout/layout.styl'
@import '../../../assets/css/component/media-article.styl'

.media-article-list-detail
  @media $desktop
    display: flex;
    flex-wrap: wrap;
    margin-top: -40px;
    align-items: initial
    flex-flow: row wrap;
    height: min-content
  > .item
    display: flex;
    margin-bottom: 16px;

    &:last-child
      margin-bottom: 0;

    @media $desktop
      max-width: 320px;
      margin-top: 40px;
      margin-right: 40px;
      margin-bottom: 0;

  > .item > .link
    display: flex;
  
.category-name
  font-size: 2.0rem
  font-weight: bold
  margin: 0 0 1.2rem
  line-height: 1.5
  @media $desktop
      margin: 0 0 2.4rem
      font-size: 2.4rem
</style>
