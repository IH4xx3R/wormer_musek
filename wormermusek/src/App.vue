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
  titleTemplate: '%s | Wormer Musek a.s.b.l.',
  meta: [
      { name: "description", content: "Häerzlech Wëllkomm bei der Wormer Musek! Eng cool, jonk an dynamesch Musek aus der Rieslingsgemeen. Mir prouwen all Freideg vun 19.30 bis 21.30 zu Wormer an eisem Prouwesall am bloen Haus vis-à-vis vun der Gemeen." },
      { name: "keywords", content: "wormeldange, wormer, musek, musel, mosel, musik, orchester, harmonie de wormeldange, harmonie" }
      //you can also add open graph tags here
    ]
  },
  components : {
    Navigation, Footer1
  }
}

</script>