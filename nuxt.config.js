const parseArgs = require('minimist')
const argv = parseArgs(process.argv.slice(2), {
  alias: {
    H: 'hostname',
    p: 'port'
  },
  string: ['H'],
  unknown: parameter => false
})

const port =
  argv.port ||
  process.env.PORT ||
  process.env.npm_package_config_nuxt_port ||
  '3000'
const host =
  argv.hostname ||
  process.env.HOST ||
  process.env.npm_package_config_nuxt_host ||
  'localhost'

const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/landing-page/'
        }
      }
    : {}

module.exports = {
  mode: 'universal',
  env: {
    baseUrl: process.env.BASE_URL || `https://${host}:${port}`,
    NODE_ENV: process.env.NODE_ENV || 'development'
  },
  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    title:
      'テックタッチ | デジタルトランスフォーメーションプラットフォーム(DXP) | マニュアルの、その先へ。',
    titleTemplate: '%s | テックタッチ（Techtouch）',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'テックタッチは、企業がテクノロジーを使いこなし事業や働き方を変革するための、デジタルトランスフォーメーションプラットフォーム（DXP）です。マニュアルを圧倒的な簡単さで作成して、ユーザーのストレスもなくします。'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'テックタッチ（Techtouch）'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://techtouch.jp'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'テックタッチ（Techtouch）'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'テックタッチは、企業がテクノロジーを使いこなし事業や働き方を変革するための、デジタルトランスフォーメーションプラットフォーム（DXP）です。マニュアルを圧倒的な簡単さで作成して、ユーザーのストレスもなくします。'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://techtouch.jp/ogp.png'
      },
      {
        name: 'twitter:card',
        content: 'summary'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#88A5FF' },
  /*
   ** Build configuration
   */
  build: {
    extend(config) {
      const path = require('path')
      config.resolve.alias['vue'] = path.join(
        __dirname,
        'node_modules/vue/dist/vue.runtime.esm.js'
      )
    },
    splitChunks: {
      layouts: true
    }
  },
  // warn vendor has been deprecated due to webpack4 optimization
  modules: ['@nuxtjs/axios', '@nuxtjs/recaptcha', '@nuxtjs/markdownit'],
  axios: {},
  recaptcha: {
    siteKey: '6LdGnMwUAAAAAEfR_J6lFXkqMGGXpvvYP-9xoUEK',
    language: 'ja',
    version: 2
  },
  markdownit: { 
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    html: true,
    use: ['markdown-it-div', 'markdown-it-attrs'],
  },
  css: ['assets/css/main.css'],
  ...routerBase
}
