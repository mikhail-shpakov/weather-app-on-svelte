<script>
  import setIconsClass from './ForecastHelpers/setIconsClass'

  export let forecastList

  const dayName = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const fixDateForAllBrowsers = forecastList[0].dt_txt.replace(/-/g, '/');

    const d = new Date(fixDateForAllBrowsers.toString())
    console.log(d)
    return days[d.getDay()]
  }

  const getTemp = (border) => {
    const listFullTemp = forecastList.map(e => e.main[`temp_${border}`])
    return Math[border].apply(null, listFullTemp)
  }

  const iconInfo = forecastList[0]
</script>

<style lang="less">
  @import "node_modules/weathericons/less/weather-icons";

  div.weather {
    margin: 45px 30px;
    color: #AAAAAA;
    flex-flow: column;

    & i.weather-icon {
      font-size: 36px;
    }
  }
</style>

<div class="weather">
  <i class="{setIconsClass(iconInfo)} weather-icon"></i>
  <p class="weather-temp">{getTemp('min')} °C / {getTemp('max')} °C</p>
  <p class="day-of-week">{dayName()}</p>
</div>
