<template>
  <div class="sponsoren">
    <div
      class="mx-auto h-24 w-full pt-8 text-center text-2xl tracking-widest font-bold bg-blue-800 text-white uppercase"
    ><span v-show="!is_inside_album"> Album</span> <span v-show="is_inside_album">{{pictures.name}}</span>
    
    </div>

         <div class="md:p-16 p-4 bg-gray-200 ">
      <div class="md:p-16 p-8 bg-white shadow-xl antialiased text-gray-800"> 

    
    <div  class="md:flex flex-wrap">



<br>

         <div v-for="i in pictures.pictures_count" :key="i" class="lg:w-1/3 md:w-1/2 p-2 pb-6">
           <!-- <div class="relative bg-gray-900 mx-2 h-64 shadow-xl overflow-hidden">
                <a class="" href="#">
                    <div class="h-full w-full bg-cover bg-center overflow-hidden hover:opacity-25"  :style="{backgroundImage: `url(../${pictures.pictures_path}/thumbs/${i}.jpg)`}"  title=""></div>
                </a>
            </div>-->


            <a :href="'/'+pictures.pictures_path+'/'+i+'.jpg'" data-mediabox="my-gallery-name" data-title="Sample image">
                <img :src="'/'+pictures.pictures_path+'/thumbs/'+i+'.jpg'" alt="Image" />
            </a> 


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
            pictures : [],
            is_inside_album : false,
            key : undefined
            }
    },
    created: function(){
        /* eslint-disable no-console */
        this.key = this.$route.params.id;
        if(this.key !== undefined){
            this.is_inside_album = true;
        }
    }, 
    mounted: function(){
    var that = this;
      Axios.get('../img/albums/data.json').then(function(response) {
        that.pictures = response.data[that.key];
      })  
    
  }
}
</script>