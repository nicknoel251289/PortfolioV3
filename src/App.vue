<template>
  <div id="app">
    <div id="nav">
      <NavBar></NavBar>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  components: {
    NavBar: NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    overflow: hidden;
  }

  body {
  }
</style>
