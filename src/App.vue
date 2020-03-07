<template>
  <div id="app">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <Home />
      </div>
      <div class="section" style="color: white;">
        Second section ...
      </div>
      <div class="section" style="color: white;">
        Third section ...
      </div>
    </full-page>
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
