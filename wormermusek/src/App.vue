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
  metaInfo: {
  // if no subcomponents specify a metaInfo.title, this title will be used
  title: 'Wormer Musek a.s.b.l.',
  // all titles will be injected into this template
  titleTemplate: '%s | Wormer Musek a.s.b.l.'
  },
  components : {
    Navigation, Footer1
  }
}

</script>