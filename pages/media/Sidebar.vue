<template>
  <div class="sidebar">
    <span v-if="banners.length > 0">
      <a v-for="banner in banners" :key="banner.id" :href="banner.url" target="_blank">
        <img :src="`${banner.image.url}`" :alt="banner.image.alternativeText">
      </a>
    </span>
    <div class="lowerRow">
      <h2 v-if="seminars.length > 0" class="sidebar-title">Seminar</h2>
      <span v-if="seminars.length > 0">
        <a v-for="seminar in seminars" :key="seminar.id" :href="seminar.url" target="_blank">
          <img :src="`${seminar.image.url}`" :alt="seminar.image.alternativeText">
        </a>
      </span>
      
      <h2 class="sidebar-title">Categories</h2>
      <ul v-for="category in categories" :key="`category_${category.id}`" class="media-footer-navigation ul-style">
          <li class="item" >
            <nuxt-link :to="`/media/category/${category.slug}`" class="link">{{category.name}}</nuxt-link>
　　　　　　　<ul class="subItem">
              <span v-for="subCategory in subCategories" :key="`category_${subCategory.id}`" >
                  <li v-if="subCategory.category.name === category.name" class="item">
                      <nuxt-link  :to="`/media/subcategory/${subCategory.slug}`" class="link">{{subCategory.name}}</nuxt-link>
                  </li>
              </span>
        　　</ul>
          </li>
      </ul>

      <h2 v-if="tags.length > 0" class="sidebar-title">Tags</h2>
      <div v-if="tags.length > 0" class="tag-container">
        <span v-for="tag in tags" :key="`tag_${tag.id}`">
          <nuxt-link  :to="`/media/tag/${tag.slug}`" class="tag">{{`#${tag.name}`}}</nuxt-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import  Card  from '../../components/Card.vue'
import ArticleList from './ArticleList.vue'
import axios from 'axios'

@Component({
  components: {
    Card,
    ArticleList
  }
})
export default class Sidebar extends Vue {
  @Prop()
  categories
  @Prop()
  tags
  @Prop()
  subCategories

  seminars = []
  banners = []
  error = null

  async mounted () {
    try {
      const responseSeminars = (await axios.get(`https://tt-media.microcms.io/api/v1/seminars?orders=-publishedAt`,{ headers: { 'X-MICROCMS-API-KEY': 'd1a6e286587b42d0b937900a99167ed10e76' } })).data.contents
      const responseBanners = (await axios.get(`https://tt-media.microcms.io/api/v1/banners?orders=-publishedAt`,{ headers: { 'X-MICROCMS-API-KEY': 'd1a6e286587b42d0b937900a99167ed10e76' } })).data.contents
      this.seminars = responseSeminars
      this.banners = responseBanners
    } catch (error) {
      this.error = error;
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
@import '../../assets/css/component/card-box.styl'

.sidebar
    width: 100%
    margin-top: 2.4rem
    @media $desktop
      width: 300px;
      margin-top: 0
      
.lowerRow
    padding: 20px;
    background-color: $white;
    border-radius: 3px;
    height: min-content;
    box-sizing: border-box
    line-height: 1.3

.sidebar-title 
    padding: 0 0 12px;
    width: fit-content;
    border-bottom: 3px solid #0974E8;
    border-top: 0px;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px

.sidebar li 
    font-size: 14px;
    color: #252729;
    word-break: break-all
    line-height: 1.3

.sidebar li .subItem
    padding-left: 12px;
    margin-top: 0.4rem
    li {
      margin-bottom: 0.4rem
    }

.tag-container
    margin: 0 0 0 -2px
.tag
    display: inline-block
    padding: 0.6rem
    color: darken($gray, 25);
    font-size: 14px;
    margin: 4px 4px;
    border-radius: 3px
    background-color: lighten($gray, 40);
    &:hover
      background-color: lighten($gray, 35);

.sidebar img
    height: auto
    margin-bottom: 3.2rem

.ul-style
  margin-bottom: 2rem
</style>
