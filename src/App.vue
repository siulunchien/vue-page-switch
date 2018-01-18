<template>
  <main id="app" ref="app">
    <div class="header"></div>
    <transition :name="transitionName">
      <router-view class="page" :class="{'no-animate': isAnimate}"></router-view>
    </transition>
  </main>
</template>

<style lang="stylus">
  @import '~@/styles/reset.css'
  @import '~@/styles/main'
  @import '~@/styles/index'
  #app
    max-width 540px
    margin 0 auto
  #app, .page, .page-main
    position absolute
    top 0
    left 0
    right 0
    bottom 0
  .page
    background #fff
    transition all .5s cubic-bezier(.55, 0, .1, 1)
  .no-animate
    transition all 0s cubic-bezier(.55, 0, .1, 1)
  .slide-left-enter, .slide-right-leave-active
    opacity 0
    transform: translate(30px, 0);
  .slide-left-leave-active, .slide-right-enter
    opacity 0
    transform translate(-30px, 0)
  .header
    height $top
    line-height $top
    text-align center
    background $header
    color #fff
  .page-main
    box-sizing border-box
    top $top
    padding rem(30) rem(30) 0
    overflow: hidden
    overflow-y: auto
    -webkit-overflow-scrolling: touch
</style>

<script>
  import { routesHistory } from '@/utils/mixins'
  export default {
    name: 'app',
    mixins: [ routesHistory ],
    created () {
      this.resetPageKey('animate')
    },
    mounted () {
      this.$refs.app.addEventListener('touchstart', this.touchstart, false)
      this.$refs.app.addEventListener('touchend', this.touchend, false)
    },
    data () {
      return {
        transitionName: 'slide-left',
        isAnimate: false,
        isTouch: false
      }
    },
    methods: {
      touchstart (e) {
        const max = this.$refs.app.clientWidth
        if (e.touches[0].clientX <= 30 || max - e.touches[0].clientX <= 100) {
          this.isTouch = true
        }
      },
      touchend (e) {
        setTimeout(() => {
          this.isTouch = false
        }, 500)
      }
    },
    watch: {
      '$route' (to, from) {
        this.transitionName = this.isBackPage('animate') ? 'slide-right' : 'slide-left'
        this.isAnimate = this.isTouch ? this.isTouch : to.meta && to.meta.hideAnimate
        if (!this.isBackPage('animate')) {
          this.resetPageKey('animate')
        }
      }
    }
  }
</script>