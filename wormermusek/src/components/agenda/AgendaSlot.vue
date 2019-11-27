<template>
<div>
    <div class="flex flex-no-wrap mb-12" >
        <div class="block bg-blue-800 p-2 pt-3 md:p-6 h-16 w-16 md:h-24 md:w-24 flex-shrink-0 text-white text-center leading-none md:pt-5" >
            <span class="block text-2xl md:text-4xl font-extrabold">{{day}}</span>
            <span class="block text-md md:text-xl font-light">{{month.slice(0,3)}}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="absolute md:ml-16 md:-mt-12 ml-12 -mt-8 text-center fill-current text-blue-800" ><path d="M21 12L3 24V0z"/></svg>
        </div>

        <div class="ml-8 leading-tight">
            <h3 class="text-gray-900 text-2xl font-bold">{{title}}</h3>
            <span class="text-gray-600 font-light text-sm">{{day }} {{month}} | {{time}}</span>
            <p class="pt-4">{{desc}}</p>
        </div>
    </div>
</div>       
</template>


<script>
export default {
    props:['title', 'day', 'month', 'time', 'desc']
    
}
</script>