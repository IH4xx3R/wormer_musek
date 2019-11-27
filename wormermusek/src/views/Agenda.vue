<template>
  <div class="about">
    <div
      class="mx-auto h-24 w-full pt-8 text-center text-2xl tracking-widest font-bold bg-blue-800 text-white uppercase"
    >Agenda</div>

         <div class="md:p-16 p-4 bg-gray-200 ">
      <div class="md:p-16 p-8 bg-white shadow-xl antialiased text-gray-800 overflow-hidden">      


<div class="md:flex flex-wrap ">
    <div v-for="agendaslot in agendaslots" :key="agendaslot.id" class="md:w-1/2">
      <agenda-slot
        class=""
        :title="agendaslot.title"
        :day="agendaslot.day"
        :month="agendaslot.month"
        :time="agendaslot.time"
        :desc="agendaslot.desc"
      ></agenda-slot>
    </div>
</div>
  </div>
         </div></div>
</template>


<script>
import AgendaSlot from "../components/agenda/AgendaSlot";
import Axios from 'axios';

export default {
  metaInfo: {
    title: 'Agenda',
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
        that.agendaslots = (response.data);
      })  
  }
};
</script>