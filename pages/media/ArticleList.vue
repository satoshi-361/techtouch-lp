<template>
    <ul class="media-article-list-detail">
        <li v-for="article in articles.slice(0, 4)" :key="article.id" class="item">
            <Card :article="article" />
        </li>
    </ul>
</template>

<script lang="ts">
import { Component, Vue,Prop } from 'nuxt-property-decorator'
import  Card  from '../../components/Card.vue'

@Component({
  components: {
    Card
  }
})
export default class ArticleList extends Vue {
  @Prop()
  articles!: {
      categories: {
          name: string
          id: string
      }[]
      id: string
      coverImage: {
          url: string
      }
      sub_categories: {
          name: string
          id: string
      }[]
      tags: {
          name: string
          id: string
      }
  }[]  
}
</script>

<style lang="stylus">
@import '../../assets/css/base/mixin.styl'
@import '../../assets/css/base/variables.styl'
@import '../../assets/css/base/reset.styl'
@import '../../assets/css/layout/layout.styl'
@import '../../assets/css/element/btn.styl'
@import '../../assets/css/component/secondary-wrap.styl'
@import '../../assets/css/component/card-box.styl'

.media
    margin-top: 0 !important

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

</style>
