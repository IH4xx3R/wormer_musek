<template>
  <div class="insidealbum">
    <div
      class="mx-auto h-24 w-full pt-8 text-center text-2xl tracking-widest font-bold bg-blue-800 text-white uppercase"
    ><span v-show="!is_inside_album"> Album</span> <span v-show="is_inside_album">{{pictures.name}}</span>
    
    </div>

         <div class="md:p-16 p-4 bg-gray-200 ">
      <div class="md:p-16 p-8 bg-white shadow-xl antialiased text-gray-800"> 

        <span class="md:hidden">
              <div  class="boxS">

                <CoolLightBox 
                    :items="items" 
                    :index="index"
                    @close="index = null">
                  </CoolLightBox>

                <div
                  class="image item h-64"
                  v-for="(image, imageIndex) in items"
                  :key="imageIndex"
                  @click="index = imageIndex"
                  :style="{ backgroundImage: 'url(' + image.thumb + ')' }"
                ></div>

                </div>
        </span>


        <span class="lg:hidden">
              <div  class="boxM">

                <CoolLightBox 
                    :items="items" 
                    :index="index"
                    @close="index = null">
                  </CoolLightBox>

                <div
                  class="image item h-64"
                  v-for="(image, imageIndex) in items"
                  :key="imageIndex"
                  @click="index = imageIndex"
                  :style="{ backgroundImage: 'url(' + image.thumb + ')' }"
                ></div>

                </div>
        </span>


                <span class="hidden lg:block">
              <div  class="boxL">

                <CoolLightBox 
                    :items="items" 
                    :index="index"
                    @close="index = null">
                  </CoolLightBox>

                <div
                  class="image item h-64"
                  v-for="(image, imageIndex) in items"
                  :key="imageIndex"
                  @click="index = imageIndex"
                  :style="{ backgroundImage: 'url(' + image.thumb + ')' }"
                ></div>

                </div>
        </span>



        </div>

    </div>
        </div>
</template>

<script>
import Axios from 'axios';
import CoolLightBox from 'vue-cool-lightbox'


export default {

    components: {
      CoolLightBox,
     },
    metaInfo: {
        title: 'Album',
    },
    data: function() {
        return {
            pictures : [],
            is_inside_album : false,
            key : undefined,

            items: [],
            index: null
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

        for(var i = 1 ; i <= that.pictures.pictures_count; i++){

          var item = {
            'src' : '',
            'thumb' : ''
          }

          item.src = "../"+that.pictures.pictures_path+"/"+i+".jpg";
          item.thumb =  "../"+that.pictures.pictures_path+"/thumbs/"+i+".jpg";
          that.items.push(item);

        }
      })
        }
}
</script>

<style scoped>
 .image{
   cursor: pointer;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
 }

 .boxL {
  display: grid;
  grid-gap: 10px;
  /* Space between items */
  grid-template-columns: 1fr 1fr 1fr;
  /* Decide the number of columns and size */
}

 .boxM {
  display: grid;
  grid-gap: 10px;
  /* Space between items */
  grid-template-columns: 1fr 1fr ;
  /* Decide the number of columns and size */
}

 .boxS {
  display: grid;
  grid-gap: 10px;
  /* Space between items */
  grid-template-columns: 1fr;
  /* Decide the number of columns and size */
}

.item {
  width: 100%;
}


</style>