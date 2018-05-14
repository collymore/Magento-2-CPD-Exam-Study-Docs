---
features:
- title: Magento Developer
  details: Minimal setup with markdown-centered project structure helps you focus on writing.
- title: Vue-Powered
  details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
- title: Performant
  details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
footer: MIT Licensed | Develo Design Ltd <Luke@develodesign.co.uk>
---
<template>
  <div class="home">
    <div class="hero">
      <h1>{{ data.heroText || $title || 'Hello' }}</h1>
      <VueSticker className="heroImage" prefix="--" :d="210" :deg="180"></VueSticker>
      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>
    <p class="action">
        <a href="/index/" class="nav-link action-button">Get Started →</a>
    </p>
    </div>
    <div class="features" v-if="data.features && data.features.length">
      <div class="feature" v-for="feature in data.features">
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>
    <div class="footer" v-if="data.footer">
      {{ data.footer }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>
<style lang="stylus">
.heroImage--main-image,
.heroImage--backside-image{
    background-image: url(/dash.png);
     background-repeat: repeat;
    background-size: contain;
    background-origin: center;
    background-color: rgba(0, 0, 0, .05);
    background-position: 0 -4px;
}
.heroImage--backside-image {
    opacity: .8;
  background-image:url(/dashb.png);
  width:50%;
}
    
$accentColor = #3eaf7c
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34
$arrowBgColor = #ccc
$navbarHeight = 3.6rem
$sidebarWidth = 20rem
$contentWidth = 740px
$MQNarrow = 959px
$MQMobile = 719px
$MQMobileNarrow = 419px

.content:not(.custom) > *:first-child{
    padding-top:0;
}
.heroImage--wrapper{
    margin: 0px auto 0;
}
.home
  padding $navbarHeight 2rem 0
  max-width 960px
  margin 0px auto
  .hero
    text-align center
    img
      max-height 280px
      display block
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content strech
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>