<script>
  import { link } from 'svelte-spa-router'
</script>

<style lang="stylus">
  @import "../style/variables.styl"

  nav.navbar
    position fixed
    top 0
    background #fff
    display flex
    width 100%
    padding 15px 0

    & div.navbar-container
      display flex
      width $display-width
      margin auto
      padding 0 10px

  div
    &.navbar-start, &.navbar-end
      display flex
      justify-content flex-start
      align-items stretch

    &.navbar-start
      margin-right auto

  a
    &.logo
      background-image url("assets/logo.svg")
      min-height 50px
      min-width 80px
      display block
      background-size: 100% 100%
      align-self: center

    &.repo
      background-image url("assets/icon-github.svg")
      min-height 20px
      min-width 20px
      display block
      background-size: 100% 100%
      align-self: center
      margin-left 10px

      &:hover
        filter: invert(35%) sepia(17%) saturate(5799%) hue-rotate(180deg) brightness(102%) contrast(68%)

  &.button
    align-self center
    color $color-text-primary
    padding 10px
    margin 0 3px
    border-radius 4px

    &:hover
      background-color $color-background
</style>

<nav class="navbar">
  <div class="navbar-container">
    <a class="logo" href="https://shpakov.dev" target="_blank"
       rel="noopener"></a>
    <div class="navbar-start">
    </div>
    <div class="navbar-end">
      <a class="button" href="/forecast" use:link>Forecast</a>
      <a class="button" href="/about" use:link>About</a>
      <a class="repo" href="https://github.com/mikhail-shpakov/weather-app-on-svelte" target="_blank"
         rel="noopener"></a>
    </div>
  </div>
</nav>
