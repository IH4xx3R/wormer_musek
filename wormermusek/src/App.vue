<template>
  <div id="app">
    <navigation/>
    <router-view/>
    <footer1/>
  </div>
</template>

<script>

import Navigation from './components/Header.vue'
import Footer1 from './components/Footer.vue'

import './assets/css/main.css'


export default {
  name: 'app',
  components : {
    Navigation, Footer1
  }
}

</script>