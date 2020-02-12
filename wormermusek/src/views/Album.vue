<template>
  <div class="sponsoren">
    <div
      class="mx-auto h-24 w-full pt-8 text-center text-2xl tracking-widest font-bold bg-blue-800 text-white uppercase"
    ><span v-show="!is_inside_album"> Album</span> <span v-show="is_inside_album">{{pictures.name}}</span>
    
    </div>

         <div class="md:p-16 p-4 bg-gray-200 ">
      <div class="md:p-16 p-8 bg-white shadow-xl antialiased text-gray-800"> 

     
     <div  class="md:flex flex-wrap">
         <div v-for="album in albums" :key="album.key" class="lg:w-1/3 md:w-1/2 p-2 pb-6">
            <div class="relative bg-gray-900 mx-2 h-64 shadow-xl overflow-hidden">
                <router-link :to="{name : 'insideAlbum', params : {id : album.key}}"> 
                    <div class="h-full w-full bg-cover bg-center overflow-hidden hover:opacity-25"  :style="{backgroundImage: `url(${album.thumbnail_path})`}"  title="Izeg 2012"></div>
                    <div class="inset-x-0 bottom-0 absolute px-4 py-2 bg-gray-800 text-2xl text-gray-100">{{album.name}}</div>
                </router-link>
            </div>
         </div>
     </div>

    <div  class="md:flex flex-wrap">
         <div v-for="i in pictures.pictures_count" :key="i" class="lg:w-1/3 md:w-1/2 p-2 pb-6">
            <div class="relative bg-gray-900 mx-2 h-64 shadow-xl overflow-hidden">
                <a class="" href="#">
                    <div class="h-full w-full bg-cover bg-center overflow-hidden hover:opacity-25"  :style="{backgroundImage: `url(${pictures.pictures_path}/thumbs/${i}.jpg)`}"  title=""></div>
                </a>
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
            pictures : [],
            is_inside_album : false,
            key : undefined        }
    },
    created: function(){
        /* eslint-disable no-console */
        this.key = this.$route.query.n;
        if(this.key !== undefined){
            this.is_inside_album = true;
        }else{
            this.is_inside_album = false;
            this.key = undefined;
            this.pictures = [];
        }
    }, 
    mounted: function(){
    var that = this;
    if(!this.is_inside_album){
      Axios.get('img/albums/data.json').then(function(response) {
        that.albums = response.data;
      })  
    }else{
      Axios.get('img/albums/data.json').then(function(response) {
        that.pictures = response.data[that.key];
        window.console.log(that.pictures);
      })  
    }
  }
}
</script>