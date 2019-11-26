<template>
  <div class="about">
    <div
      class="mx-auto h-24 w-full pt-8 text-center text-2xl tracking-widest font-bold bg-blue-800 text-white uppercase"
    >Agenda</div>

         <div class="md:p-16 p-4 bg-gray-200 ">
      <div class="md:p-16 p-8 bg-white shadow-xl antialiased text-gray-800">      

    <div v-for="n in 10" :key="n" class="md:flex flex-warp">
      <agenda-slot
        class="md:w-1/2"
        title="Concert"
        day="24"
        month="November"
        time="19:00"
        desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      ></agenda-slot>
      <agenda-slot
        class="md:w-1/2 md:ml-12"
        title="Concert"
        day="8"
        month="Januar"
        time="19:00"
        desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      ></agenda-slot>
    </div>
  </div>
         </div></div>
</template>


<script>
import AgendaSlot from "../components/agenda/AgendaSlot";
export default {
  components: {
    AgendaSlot
  }
};
</script>