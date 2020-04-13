<script>
  import { onMount } from 'svelte'
  import superagent from 'superagent'
  import { debounce } from 'throttle-debounce'
  import ForecastCurrent from '../components/ForecastCurrent.svelte'
  import ForecastNextDays from '../components/ForecastNextDays.svelte'
  import Spinner from 'svelte-spinner'

  // вставьте сюда ваш токен с OpenWeatherAPI
  const appid = process.env.OPEN_WEATHER_API_KEY || process.env.open_weather_api_key
  let feelsLike = 'unclear'
  let city = 'Saint Petersburg'
  let weather = []
  let units = 'metric'
  let widthInput = '240px'
  let errorRequest = false
  let isLoading = true

  Date.prototype.addDays = function (days) {
    let date = new Date(new Date().setUTCHours(24, 0, 0, 0))
    date.setDate(date.getDate() + days)
    return date
  }

  const onlyNeedDay = (shift) => {
    let today = new Date()

    const shiftDays = weather.filter(e =>
        e.dt < Date.parse(today.addDays(shift)) / 1000
    )

    return shiftDays.slice(shiftDays.length - 8)
  }

  const requestWeather = async () => {
    errorRequest = false

    await superagent
        .get('https://api.openweathermap.org/data/2.5/forecast')
        .query({ q: city, appid, units }) // query string
        .end((err, res) => {
          if (err) {
            isLoading = false

            errorRequest = true
            return
          }

          weather = res.body.list
          feelsLike = res.body.list[0].weather[0].description

          isLoading = false
        })
  }

  const changeInputValue = debounce(1500, () => {
    if (city) requestWeather()
  })

  const changeInputWidth = () => {
    isLoading = true

    widthInput = ((city.length + 1) * 15) + 'px'
    return true
  }

  onMount(async () => {
    await requestWeather()
  })
</script>

<style lang="stylus">
  @import "../style/variables.styl"

  div.content
    margin 20px
    text-align center
    font-size 18px
    display flex
    flex-flow column
    height 100%
    @media (min-width $display-bp-mobile)
      margin auto

    &.wrapper
      flex 1 0 auto
      min-height 100%

    & p.search
      color $color-text-secondary
      line-height 2

      & input
        border none
        border-bottom 1px solid $color-text-secondary
        color $color-text-primary
        font-weight 500
        outline none
        font-size 24px
        text-align center
        max-width 280px

    & div.weather-next-days
      display block
      justify-content center
      @media (min-width: 796px)
        display flex

    & div.error-request-img
      margin 80px 10px 30px
      background-image url("assets/error-request.svg")
      min-height 300px
      display block
      background-size: 100% 100%
      align-self: center
      @media (min-width $display-bp-mobile)
        min-height 320px

    & p span
      font-weight 500

  p.refAPI
    text-align center
    flex 0 0 auto
    margin 60px 10px 30px

    &.isLoading
      margin-top 200px
    @media (min-width $display-bp-mobile)
      margin auto 10px 10px !important

  a
    font-weight 500

    &:hover
      color $color-text-primary

  .spinner
    position absolute
    top 30%
    left calc(50% - 50px)
</style>

<div class="content">
  <div class="wrapper">
    <p class="search">Right now in
      <span>
      <input bind:value={city} on:input={() => changeInputWidth() && changeInputValue()} style="width: {widthInput}"
             type="text">
    </span>
      {feelsLike}.</p>

    {#if isLoading}
      <div class="spinner">
        <Spinner
            size="100"
            speed="750"
            color="#2980b9"
            thickness="1"
            gap="40"
        />
      </div>
    {:else}

      {#if errorRequest}
        <div class="error-request-img"></div>
        <p><span>Whooops!</span> No such city was found.</p>
        <p>Try a different city.</p>
      {:else}

        {#if weather.length}
          <ForecastCurrent forecast={weather}/>
          <div class="weather-next-days">
            {#each {length: 4} as _, i (i)}
              <ForecastNextDays forecastList={onlyNeedDay(i + 1)}/>
            {/each}
          </div>
        {/if}
      {/if}
    {/if}
  </div>

  <p class="refAPI" class:isLoading>
    Weather data provided
    <a href="https://openweathermap.org/" target="_blank" rel="noopener">Open Weather API</a>.
  </p>
</div>
