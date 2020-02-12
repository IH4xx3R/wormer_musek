<template>
  <div class="sponsoren">
    <div
      class="mx-auto h-24 w-full pt-8 text-center text-2xl tracking-widest font-bold bg-blue-800 text-white uppercase"
    ><span> Album</span>
    
    </div>

      <div class="lg:p-16 md:p-8 p-4 bg-gray-200 ">
      <div class="lg:p-16 md:p-8 p-4 bg-white shadow-xl antialiased text-gray-800"> 

     
     <div  class="md:flex flex-wrap sm:pt-2">
          <div v-for="album in albums" :key="album.key" class="lg:w-1/3 md:w-1/2 p-2 pb-6 md:pb-2">
            <div class="relative bg-gray-900 mx-2 h-64 shadow-xl overflow-hidden">
                <router-link :to="{name : 'insideAlbum', params : {id : album.key}}"> 
                    <div class="h-full w-full bg-cover bg-center overflow-hidden hover:opacity-25"  :style="{backgroundImage: `url(${album.thumbnail_path})`}"  title="Izeg 2012"></div>
                    <div class="inset-x-0 bottom-0 absolute px-4 py-2 bg-gray-800 text-2xl text-gray-100">{{album.name}}</div>
                </router-link>
            </div>
         </div>
     </div>

    </div>
  </div>    
  </div>
</template>

<script>
import Axios from 'axios';

export default {
    metaInfo: {
        title: 'Album',
    },
    data: function() {
        return {
            albums: [],
       }
    },
    mounted: function(){
    var that = this;
      Axios.get('img/albums/data.json').then(function(response) {
        that.albums = response.data;
      })  
    
  }
}
</script>