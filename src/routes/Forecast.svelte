<script>
  let feelsLike = 'it`s mostly cloud'
  let inputSize ='Moscow'
</script>

<style lang="stylus">
  @import "../style/variables.styl"

  div.content
    margin auto
    text-align center
    & p
      color $color-text-secondary
      & input
        border none
        border-bottom 1px solid $color-text-secondary
        color $color-text-primary
        font-weight 600
        outline none
        font-size 20px
        text-align center
</style>

<div class="content">
  <p>Right now in
    <span>
      <input bind:value={inputSize} size="{inputSize.length}" type="text" placeholder="Enter city">
    </span>
    , {feelsLike}.</p>
</div>
