<template>
  <section>
    <header class="header">主页</header>
    <div class="page-main">
      <ul>
        <li><router-link to="/page-a">page A</router-link></li>
        <li><router-link to="/page-b">page B</router-link></li>
        <li><router-link to="/page-c">page C</router-link></li>
      </ul>
    </div>
  </section>
</template>

<style lang="stylus">
  @import '~@/styles/index'
  li
    margin-bottom rem(30)
</style>