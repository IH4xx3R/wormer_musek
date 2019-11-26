<template>
<div>
  <!-- INTRO -->
  <div class="h-64 relative text-center bg-no-repeat bg-cover bg-center shadow-md mb-12" style="background-image: url('https://harmonie-wormeldange.lu/WM/gallery/albums/gala_2019/previews/021-IMG_5743.jpg.medium.jpeg')">
    <div class=" absolute bg-blue-800 opacity-75 h-64 w-full"></div>
    <h1 class="w-full  px-8 absolute block font-light text-2xl md:text-4xl mt-24 text-white tracking-wider">Wëllkomm bei der Wormer Musek!
          <span class="block font-light md:text-lg text-sm">Eng cool, jonk an dynamesch Musek aus der Rieslingsgemeen.</span>
    </h1>
  </div>

    <!-- PLAKAT + AGENDA -->
    <div class="md:flex px-4 md:px-12 lg:px-24 pt-2 pb-12 flex-1 flex-wrap"> 

          <!-- PLAKAT -->
          <div class="md:w-1/3 lg:w-1/2  md:pr-4">
            <img class="h-auto mb-12 md:mb-0" src="https://harmonie-wormeldange.lu/WM/images/kreschtmaart2019.png" alt="">
          </div>

          <!-- AGENDA 4x-->
          <div  class="md:w-2/3 lg:w-1/2 ">
            <agenda-slot class="" title="Concert" day="24" month="November" time="19:00" desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."></agenda-slot>
            <agenda-slot class="" title="Concert" day="8" month="Januar" time="19:00" desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."></agenda-slot> 
            <agenda-slot class="" title="Concert" day="24" month="November" time="19:00" desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."></agenda-slot>
            <agenda-slot class="" title="Concert" day="8" month="Januar" time="19:00" desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."></agenda-slot> 
          </div>

    </div>

    <!-- MUSEK INFO -->
    <div class="h-64 relative text-center bg-blue-800 text-white bg-no-repeat bg-cover bg-center" style="background-image: url('https://harmonie-wormeldange.lu/WM/gallery/albums/concert_canach_30052019/previews/009-C59C9D12-6324-4721-81CA-9F8C7E558FED.JPG.medium.jpeg')">
          <div class="absolute h-64 bg-blue-800 h-full overflow-hidden opacity-75 w-full"></div>
          <div class="absolute h-64 block w-full md:px-12 lg:px-24 px-6 pt-20 pb-24 text-md md:text-xl text-white md:tracking-wider">
           <p>D'Harmonie Wormeldange a.s.b.l. ass 1904 gegrënnt ginn.<br>
            Zur Zäit hu mir 35 aktiv Musikantinnen a Musikanten.<br>
            Mir prouwen all Freideg vun 19.30 bis 21.30 zu Wormer an eisem Prouwesall am bloen Haus vis-à-vis vun der Gemeen.</p>
          </div>
    </div>

  </div>
</template>

<script>
import AgendaSlot from '../components/agenda/AgendaSlot'
export default {
  components : {
    AgendaSlot
  }
}
</script>


<style>
</style>

