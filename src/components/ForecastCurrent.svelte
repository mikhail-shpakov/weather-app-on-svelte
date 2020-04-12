<script>
  import setIconsClass from './ForecastHelpers/setIconsClass'

  export let forecast = []
</script>

<style lang="less">
  @import "node_modules/weathericons/less/weather-icons";

  div.current-weather {
    margin: 50px 10px 30px;
    & div.current-weather-box {
      display: inline-flex;
      margin: 10px 40px;
      vertical-align: middle;
      color: #AAAAAA;
      @media (min-width: 796px) {
        margin: 0 40px;
      }

      &.column {
        flex-flow: column;

        & .current-weather-temp {
          font-size: 46px;
          margin: 15px 0 0;
          color: #363636;
          font-weight: 400;
        }
      }

      & i.current-icon {
        font-size: 80px;
      }

      & p.secondary-param {
        text-align: left;
        & i.wi-custom {
          font-size: 20px;
          margin-right: 15px;
          width: 25px;
          text-align: center;
        }
      }

      & .secondary-param-value {
        font-size: 20px;
        font-weight: 400;
        color: #363636;
      }
    }
  }
</style>

{#if forecast.length}
  <div class="current-weather">
    <div class="current-weather-box">
      <i class="{setIconsClass(forecast[0])} current-icon"></i>
    </div>
    <div class="current-weather-box column">
      <p class="current-weather-temp">{forecast[0].main.temp} °C</p>
      <p>Feels like: {forecast[0].main.feels_like} °C</p>
    </div>
    <div class="current-weather-box column">
      <p class="secondary-param">
        <i class="wi wi-strong-wind wi-custom"></i>
        <span class="secondary-param-value">{forecast[0].wind.speed}</span>, m/s
      </p>
      <p class="secondary-param">
        <i class="wi wi-barometer wi-custom"></i>
        <span class="secondary-param-value">{forecast[0].main.pressure}</span>, hPa
      </p>
      <p class="secondary-param">
        <i class="wi wi-humidity wi-custom"></i>
        <span class="secondary-param-value">{forecast[0].main.humidity}</span>, %
      </p>
    </div>
  </div>
{/if}
