import 'es6-shim'
import App from './App.svelte'
import './registerServiceWorker'

var app = new App({
  target: document.body,
})

export default app
