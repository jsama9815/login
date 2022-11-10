<template>
  <login_page />
</template>

<script>
import login_page from './build/login_page.vue'

export default {
  name: 'App',
  components: {
    login_page
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
