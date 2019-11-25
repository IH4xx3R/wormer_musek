<template>
<div>
    <div class="h-1 bg-blue-900"></div>
    <div class="h-16 px-12 bg-white flex items-center justify-between flex-wrap shadow-md">
            <span class="text-blue-900 font-light text text-2xl tracking-wide">WORMER MUSEK</span>
            <div class="sm:block hidden">
                <router-link to="/" class="mt-4 lg:mt-0 text-blue-900 hover:text-blue-900 mr-4" >Home</router-link>
                <router-link to="/musek" class="mt-4 lg:mt-0 text-gray-500 hover:text-blue-900 mr-4" >Musek</router-link> 
                <router-link to="/agenda" class="mt-4 lg:mt-0 text-gray-500 hover:text-blue-900 mr-4" >Agenda</router-link> 
                <router-link to="/sponsoren" class="mt-4 lg:mt-0 text-gray-500 hover:text-blue-900 mr-4">Sponsoren</router-link> 
                <router-link to="/kontakt" class="mt-4 lg:mt-0 text-gray-500 hover:text-blue-900 mr-4" >Kontakt</router-link> 
                <router-link to="/intranet" class="mt-4 lg:mt-0 text-gray-500 hover:text-blue-900 mr-4" >Intranet</router-link> 
            </div>
    </div>

           <!-- <div class="block bg-gray-300 sm:hidden x-12 mb-4 text-center">
                <a class="block mt-4 lg:mt-0 text-blue-900 hover:text-blue-900 mr-4" href="#">Home</a>
                <a class="block mt-4 lg:mt-0 text-gray-500 hover:text-blue-900 mr-4" href="#">Musek</a>
                <a class="block mt-4 lg:mt-0 text-gray-500 hover:text-blue-900 mr-4" href="#">Agenda</a>
                <a class="block mt-4 lg:mt-0 text-gray-500 hover:text-blue-900 mr-4" href="#">Sponsoren</a>
                <a class="block mt-4 lg:mt-0 text-gray-500 hover:text-blue-900 mr-4" href="#">Kontakt</a>
                <a class="block mt-4 lg:mt-0 text-gray-500 hover:text-blue-900 mr-4" href="#">Intranet</a>
            </div>-->
</div>
</template>

<script>
export default {}
</script>