<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './components/pages/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    width: 100%;
    height: 100vh;
    background-color: #000;
  }
</style>
