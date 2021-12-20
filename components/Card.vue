<template>
<nuxt-link :to="`/media/${article.slug}`" class="link">
    <div class="card-box">
        <img class="img" :src="article.coverImage.url" :alt="article.coverImage.alternativeText">
        <div class="content">
            <p class="description">{{article.title}}</p>
            <p class="label">{{article.subCategory && article.subCategory.name}}</p>
        </div>
    </div>
</nuxt-link>
</template>

<script lang="ts">
import { Component, Vue,Prop } from 'nuxt-property-decorator'

@Component
export default class Card extends Vue {
  @Prop()
  article!: {
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
      }
      tags: {
          name: string
          id: string
      }[]
      published_at: string
      slug: string
  }

  toDoubleDigits(num) {
    num += "";
    if (num.length === 1) {
        num = "0" + num;
    }
    return num;     
　}
  
  getSlug() {
      if(this.article.slug) return this.article.slug
      const published_at = new Date(this.article.published_at)
      const year = published_at.getFullYear()
      const month = published_at.getMonth() + 1
      const date = published_at.getDate()
      return `${year}${this.toDoubleDigits(month)}${this.toDoubleDigits(date)}`
  }

}
</script>

<style lang="stylus">
@import '../assets/css/base/variables.styl'
@import '../assets/css/component/card-box.styl'
</style>
