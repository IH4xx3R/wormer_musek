<template>
  <div>
    <!-- INTRO -->
    <div
      class="h-64 relative text-center bg-no-repeat bg-cover bg-center shadow-md font-light text-2xl md:text-4xl text-white tracking-wider p-6"
       :style="{backgroundImage: `url(${require(`../assets/img/IMG_5743.jpg`)})`}" style="  display: flex;
  align-items: center;
  justify-content: center;"
    >
      <h1
        class=""
      >
        Wëllkomm bei der Wormer Musek!
        <span
          class="block font-light md:text-lg text-sm"
        >Eng cool, jonk an dynamesch Musek aus der Rieslingsgemeen.</span>
      </h1>
    </div>

        <div class="md:pl-16 md:pb-16 md:pr-16 pl-4 pb-4 pr-4 bg-gray-200 ">
      <div class="md:p-16 p-8 bg-white shadow-xl antialiased text-gray-800">   

    <!-- PLAKAT + AGENDA -->
    <div class="md:flex flex-1 flex-wrap">
      <!-- PLAKAT -->
      <div class="md:w-1/3 lg:w-1/2 md:pr-6">
        <img
          class="h-auto mb-12 md:mb-0 mx-auto"
          src="../assets/img/kreschtmaart2019.png"
          alt
        />
      </div>

      <!-- AGENDA 4x-->
      <div class="md:w-2/3 lg:w-1/2 md:pl-6">

      <div v-for="agendaslot in agendaslots" :key="agendaslot.id">
        <agenda-slot
          class=""
          :title="agendaslot.title"
          :day="agendaslot.day"
          :month="agendaslot.month"
          :time="agendaslot.time"
          :desc="agendaslot.desc"
        ></agenda-slot>
      </div>

        <div class="flex flex-row-reverse">
        <a class=" w-64 text-center px-4 py-2 border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-gray-100" href="./agenda" >Weider zum Agenda</a>
        </div>

      </div>
    </div>      </div>
    </div>

    <!-- MUSEK INFO -->
    <div
      class="h-64 p-6 md:p-24 text-center text-md md:text-xl tracking-wide flex bg-blue-800 text-white bg-no-repeat bg-cover bg-center"
       :style="{backgroundImage: `url(${require(`../assets/img/concert_kanech_medium.jpeg`)})`}" style="  display: flex;
  align-items: center;
  justify-content: center;"
    >
        <div class="">
          D'Harmonie Wormeldange a.s.b.l. ass 1904 gegrënnt ginn.
          <br />Zur Zäit hu mir 35 aktiv Musikantinnen a Musikanten.
          <br />Mir prouwen all Freideg vun 19.30 bis 21.30 zu Wormer an eisem Prouwesall am bloen Haus vis-à-vis vun der Gemeen.
        </div>
    </div>
  </div>
</template>

<script>
import AgendaSlot from "../components/agenda/AgendaSlot";
import Axios from 'axios';


export default {
      metaInfo: {
      title: 'Home',
      // override the parent template and just use the above title only
      //titleTemplate: null
    },
  components: {
    AgendaSlot
  },
  data: function() {
    return {
      agendaslots: []
    }
  },
  mounted: function(){
    var that = this;
      Axios.get('https://harmonie-wormeldange.lu/WM/api/agenda/api.php/').then(function(response) {
        that.agendaslots = (response.data.slice(1, 5));
      })  
  }
};
</script>


<style>
</style>

