import weatherIcons from './weatherIcons'

export default (data) => {
  const prefix = 'wi wi-'
  const code = data.weather[0].id
  let icon = weatherIcons[code].icon

  if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
    icon = 'day-' + icon
  }

  return prefix + icon
}
