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
        <time v-if="getDisplayDate(article.publishedAt) !== getDisplayDate(article.updatedAt)">{{`${getDisplayDate(article.updatedAt)} (更新日)`}}</time>
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
    title: '問い合わせ対応における課題と効率化の実現方法をご紹介',
    description: '社外向け問い合わせ対応は、担当者による対応品質の差や経験の浅い担当者の対応時間長期化など課題を抱えがちです。また、社内向け問い合わせ対応も負担が大きいと、社内リソースを削ってしまいます。問い合わせ対応を効率化するためにはどのような方法があるかご紹介します。',
    type: 'article',
    keywords: '',
    url: 'https://techtouch.jp/media/inquirycorrespondence-efficiency',
    image: 'https://images.microcms-assets.io/assets/ad300821ff4546ccb965bd0b044ddd84/bac339ae9000474288fc051e3e6add08/4_78826433.jpg'
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
      const response = (await axios.get(`https://tt-media.microcms.io/api/v1/articles?filters=slug[equals]inquirycorrespondence-efficiency`,{ headers: { 'X-MICROCMS-API-KEY': 'd1a6e286587b42d0b937900a99167ed10e76' } })).data
      this.article = response.contents[0]
      if(this.article ){
        this.meta.keywords = this.article.metaKeywords ? this.article.metaKeywords : ''
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
@import '../../assets/css/base/variables.styl'
@import '../../assets/css/layout/layout.styl'
@import '../../assets/css/component/media-article.styl'

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
