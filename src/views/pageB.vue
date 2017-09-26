<template>
  <section>
    <header class="header">page-B</header>
    <div class="page-main bottom">
      <router-view></router-view>
    </div>
    <footer class="footer">
      <router-link to="/page-b" replace>tab-a</router-link>
      <router-link to="/page-b/tab-b" replace>tab-b</router-link>
    </footer>
  </section>
</template>

<style lang="stylus" scoped>
  @import '~@/styles/index'
  .bottom
    bottom $bottom
  .footer
    box-sizing border-box
    position absolute
    bottom 0
    left 0
    display flex
    align-items center
    width 100%
    height $bottom
    border-top solid 1px #eaeaea
    a
      width 50%
      text-align center
</style>