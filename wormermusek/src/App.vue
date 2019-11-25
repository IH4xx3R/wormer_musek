<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
  </div>
</template>

<script>

import Navigation from './components/Header.vue'
import './assets/css/main.css'


export default {
  name: 'app',
  components : {
    Navigation
  }
}

</script>