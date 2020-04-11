<script>
  import Navbar from './components/Navbar.svelte'
  import Router from 'svelte-spa-router'
  import routes from './routes.js'
</script>

<style lang="stylus">
  @import "./style/variables.styl"

  section.content
    max-width $display-width
    margin 150px auto 80px
</style>

<Navbar/>
<section class="content">
  <Router {routes}/>
</section>
