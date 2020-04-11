<script>
  import { link } from 'svelte-spa-router'
</script>

<style lang="stylus">
  @import "../style/variables.styl"

  div
    &.img-404
      background-image url("assets/404.svg")
      min-height 200px
      display block
      background-size: 100% 100%
      align-self: center
      @media (min-width $display-bp-mobile)
        min-height 450px

    & p.title
      font-size 22px
      text-align center
      @media (min-width $display-bp-mobile)
        font-size 32px

    & a.button
      text-align center
      margin auto
      max-width 135px
      font-weight 600
      display block
      padding 10px
      border-radius 4px

      &:hover
        background-color $color-background
</style>

<div class="img-404"></div>
<div>
  <p class="title">Whoooops, that page is gone</p>
  <a class="button" href="/forecast" use:link>Back to Forecast</a>
</div>
