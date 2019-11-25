<template>
<div>
    <div class="h-1 bg-blue-800"></div>
    <div class="h-16 px-12 bg-white flex items-center justify-between flex-wrap shadow-md">
            <span class="text-blue-800 font-light text text-2xl tracking-wide">WORMER MUSEK</span>
            <div class="md:block hidden">
                <router-link to="/" class=" lg:mt-0 bg-blue-900 hover:text-blue-800 hover:bg-white text-white px-4 py-2  border-2 border-blue-800 mr-4" >Home</router-link>
                <router-link to="/musek" class="mt-4 lg:mt-0 text-gray-500 hover:text-blue-800 mr-4" >Musek</router-link> 
                <router-link to="/agenda" class="mt-4 lg:mt-0 text-gray-500 hover:text-blue-800 mr-4" >Agenda</router-link> 
                <router-link to="/sponsoren" class="mt-4 lg:mt-0 text-gray-500 hover:text-blue-800 mr-4">Sponsoren</router-link> 
                <router-link to="/kontakt" class="mt-4 lg:mt-0 text-gray-500 hover:text-blue-800 mr-4" >Kontakt</router-link> 
                <a href="https://harmonie-wormeldange.lu/WM/memberen/login.php" class="mt-4 lg:mt-0 text-gray-500 hover:text-blue-800 mr-4" >Intranet</a> 
            </div>

            <div class="md:hidden block">
                <svg height="32" width="32" class="fill-current text-blue-800" xmlns="http://www.w3.org/2000/svg"><path d="M4 10h24a2 2 0 000-4H4a2 2 0 000 4zm24 4H4a2 2 0 000 4h24a2 2 0 000-4zm0 8H4a2 2 0 000 4h24a2 2 0 000-4z"/></svg>
            </div>
    </div>

           <div class="block bg-gray-200 sm:hidden text-center ">

               <div class="hover:bg-blue-800  mb-2">
                    <a class="block p-2 lg:mt-0 text-blue-900 hover:text-blue-100" href="#">Home</a>
               </div>

                <div class="hover:bg-blue-800 mb-2">
                    <a class="block p-2 lg:mt-0 text-blue-900 hover:text-blue-100" href="#">Musek</a>
               </div>

                <div class="hover:bg-blue-800 mb-2">
                <a class="block p-2 lg:mt-0 text-blue-900 hover:text-blue-100" href="#">Agenda</a>
               </div>

                <div class="hover:bg-blue-800 mb-2">
                        <a class="block p-2 lg:mt-0 text-blue-900 hover:text-blue-100" href="#">Sponsoren</a>
               </div>

                <div class="hover:bg-blue-800 mb-2">
                    <a class="block p-2 lg:mt-0 text-blue-900 hover:text-blue-100" href="#">Kontakt</a>
               </div>

                <div class="hover:bg-blue-800 ">
                    <a class="block p-2 lg:mt-0 text-blue-900 hover:text-blue-100" href="#">Intranet</a>
               </div>
               
            </div>
</div>
</template>

<script>
export default {

}
</script>