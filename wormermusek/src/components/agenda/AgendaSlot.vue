<template>
<div>
    <div class="flex flex-no-wrap mb-12" >
        <div class="block bg-blue-800 p-6 h-24 w-24 flex-shrink-0 text-white text-center leading-none pt-5" >
            <span class="block text-4xl font-extrabold">{{day}}</span>
            <span class="block text-xl font-light">{{month.slice(0,3)}}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="absolute ml-16 -mt-12 text-center fill-current text-blue-800" ><path d="M21 12L3 24V0z"/></svg>
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