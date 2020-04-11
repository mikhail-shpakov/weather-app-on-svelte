import Forecast from './routes/Forecast.svelte'
import About from './routes/About.svelte'
import Error404 from './routes/Error404.svelte'

const routes = {
  '/': Forecast,
  '/forecast': Forecast,
  '/about': About,
  '*': Error404,
}

export default routes
