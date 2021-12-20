<template>
<div v-if="article" class="media-article">
    <h1>{{article.title}}</h1>
    <span class="category_link">
    <nuxt-link v-if="article.category" :to="`/media/category/${article.category.slug}`">{{article.category.name}}</nuxt-link>
    <span v-if="article.sub_category" class="border">|</span>
    <nuxt-link v-if="article.sub_category" :to="`/media/subcategory/${article.sub_category.slug}`">{{article.sub_category.name}}</nuxt-link>
    </span>
    <span v-for="tag in article.tags" :key="tag.name" >
        <nuxt-link :to="`/media/tag/${tag.slug}`" class="tag">{{`#${tag.name}`}}</nuxt-link>
    </span>
    <br />
    
    <div class="date">
        <time v-if="getDisplayDate(article.publishedAt) !== getDisplayDate(article.updatedAt)" >{{`${getDisplayDate(article.updatedAt)} (更新日)`}}</time>
        <time >{{`${getDisplayDate(article.publishedAt)} (公開日)`}}</time>
    </div>
    <img class="cover-image" :src="article.coverImage.url" :alt="article.title">
    <div v-html="$md.render(article.text)"></div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import axios from 'axios'

@Component(
    {
        layout: 'media'
    }
)
export default class extends Vue {
  article: {
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
      publishedAt: Date
      updatedAt: Date
      metaTitle: string
      metaDescription: string
      metaKeywords: string
  } | null  = null
  error = null
  $route: any

  meta = {
    title: '',
    description: '',
    type: 'article',
    keywords: '',
    url: '',
    image: ''
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
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.meta.keywords
        },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.meta.description
        },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { hid: 'og:image', property: 'og:image', content: this.meta.image },
        {
            hid: 'og:site_name',
            property: 'og:site_name',
            content: 'Techtouch journal'
        },
      ]
    }
  }

  async mounted () {
    try {
      const response = (await axios.get(`https://tt-media.microcms.io/api/v1/articles/${this.$route.query.id}`,{ headers: { 'X-MICROCMS-API-KEY': 'd1a6e286587b42d0b937900a99167ed10e76' } })).data
      this.article = response
      if(this.article ){
        this.meta.title = this.article.metaTitle ? this.article.metaTitle : this.article.title
        this.meta.description = this.article.metaDescription ? this.article.metaDescription : ''
        this.meta.keywords = this.article.metaKeywords ? this.article.metaKeywords : ''
        this.meta.url = window.location.href
        this.meta.image = this.article.coverImage.url || ''
      }
      
    } catch (error) {
      this.error = error;
    }
  }

  getDisplayDate(sorce:Date){
      const sorceDate = new Date(sorce)
      const year = sorceDate.getFullYear()
      const month = sorceDate.getMonth() + 1
      const date = sorceDate.getDate()

      return `${year}年${month}月${date}日`
  }
}
</script>

<style lang="stylus">
@import '../../../assets/css/base/variables.styl'
@import '../../../assets/css/layout/layout.styl'
@import '../../../assets/css/component/media-article.styl'

.tag
    display: inline-block
    padding: 0.6rem
    color: darken($gray, 25) !important;
    text-decoration: none !important
    font-size: 14px;
    margin: 4px;
    border-radius: 3px
    background-color: lighten($gray, 40);
    &:hover
      background-color: lighten($gray, 35);

.category_link
    font-size: 14px;
    margin: 0 12px 8px 0

.border
    margin: 0 8px

.date
    display: flex
    font-size: 14px;
    margin-top: 8px;
    gap:12px;
    flex-wrap: wrap;
</style>
