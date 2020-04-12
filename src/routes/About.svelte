<style lang="stylus">
  @import "../style/variables.styl"

  div
    max-width 470px
    text-align center
    margin auto
    padding 0 15px
    line-height 1.5

    &.img-about
      background-image url("assets/about.svg")
      min-height 300px
      display block
      background-size: 100% 100%
      align-self: center
      @media (min-width $display-bp-mobile)
        min-height 320px

    & a
      &.author
        font-weight 500

      &:hover
        color $color-text-primary
</style>

<div class="img-about"></div>
<div>
  <p>
    by
    <a class="author" href="https://shpakov.dev" target="_blank" rel="noopener">Mikhail Shpakov</a>
  </p>
  <p>
    An example implementation of a weather application on
    <a href="https://svelte.dev/" target="_blank" rel="noopener">Svelte</a>
    using the
    <a href="https://openweathermap.org/api" target="_blank" rel="noopener">OpenWeather API</a>.
  </p>
  <p>
    Full description is available in the
    <a href="https://github.com/mikhail-shpakov/weather-app-on-svelte" target="_blank" rel="noopener">application
      repository</a>.
  </p>
</div>
