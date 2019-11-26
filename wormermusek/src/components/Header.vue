<template>
  <div class>
    <div class="h-1 bg-blue-800"></div>
    <div
      class="h-16 px-6 md:px-12 lg:px-24 bg-white flex items-center justify-between flex-wrap shadow-md"
    >
      <a href="/" class="text-blue-800 font-light text text-2xl tracking-wide">WORMER MUSEK</a>
      <div class="md:block hidden">
        <router-link
          v-on:click.native="isDropdownOpen=false"
          to="/"
          class="border-0 px-4 py-2 border-gray-300 mt-4 lg:mt-0 text-gray-700 hover:text-blue-800 lg:mx-2"
        >Home</router-link>

        <span
          @click="isDropdownOpen = !isDropdownOpen"
          class="border-0 cursor-pointer pl-2 border-gray-300 mt-4 lg:mt-0 text-gray-700 hover:text-blue-800 lg:mx-2"
        >
          Musek
          <div
            v-if="isDropdownOpen"
            class="absolute pin-t pin-l mt-6 ml-24 w-48 py-4 bg-white z-20 shadow-xl rounded"
          >
            <div class="hover:bg-blue-800 mb-2">
              <a
                v-on:click.native="isDropdownOpen=false"
                href="#/orchester"
                class="block p-2 pl-4 lg:mt-0 text-blue-900 hover:text-blue-100"
              >Orchester</a>
            </div>

            <div class="hover:bg-blue-800 mb-2">
              <a
                v-on:click.native="isDropdownOpen=false"
                href="#/dirigenten"
                class="block p-2 pl-4 lg:mt-0 text-blue-900 hover:text-blue-100"
              >Dirigenten</a>
            </div>

            <div class="hover:bg-blue-800">
              <a
                v-on:click.native="isDropdownOpen=false"
                href="#/verwaltung"
                class="block p-2 pl-4 lg:mt-0 text-blue-900 hover:text-blue-100"
              >Verwaltung</a>
            </div>


            <div class="hover:bg-blue-800">
              <a
                v-on:click.native="isDropdownOpen=false"
                href="#/downloads"
                class="block p-2 pl-4 lg:mt-0 text-blue-900 hover:text-blue-100"
              >WM Live</a>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block w-5 h-5 -mt-3 fill-current text-gray-700 pr-2"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
            />
          </svg>
        </span>

        <router-link
          v-on:click.native="isDropdownOpen=false"
          to="/agenda"
          class="border-0 px-4 py-2 border-gray-300 mt-4 lg:mt-0 text-gray-700 hover:text-blue-800 lg:mx-2"
        >Agenda</router-link>
        <router-link
          v-on:click.native="isDropdownOpen=false"
          to="/sponsoren"
          class="border-0 px-4 py-2 border-gray-300 mt-4 lg:mt-0 text-gray-700 hover:text-blue-800 lg:mx-2"
        >Sponsoren</router-link>
        <router-link
          v-on:click.native="isDropdownOpen=false"
          to="/kontakt"
          class="border-0 px-4 py-2 border-gray-300 mt-4 lg:mt-0 text-gray-700 hover:text-blue-800 lg:mx-2"
        >Kontakt</router-link>
        <a
          href="https://harmonie-wormeldange.lu/WM/memberen/login.php"
          class="border-0 px-4 py-2 border-gray-300 mt-4 lg:mt-0 text-gray-700 hover:text-blue-800 lg:mx-2"
        >Intranet</a>
      </div>

      <button @click="toggleMenu = !toggleMenu" class="md:hidden block">
        <svg
          height="32"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
          class="fill-current text-blue-800"
          viewBox="0 0 384.97 384.97"
        >
          <path
            d="M12.03 84.212h360.909c6.641 0 12.03-5.39 12.03-12.03 0-6.641-5.39-12.03-12.03-12.03H12.03C5.39 60.152 0 65.541 0 72.182c0 6.641 5.39 12.03 12.03 12.03zM372.939 180.455H12.03c-6.641 0-12.03 5.39-12.03 12.03s5.39 12.03 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03s-5.389-12.03-12.03-12.03zM372.939 300.758H12.03c-6.641 0-12.03 5.39-12.03 12.03 0 6.641 5.39 12.03 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03.001-6.641-5.389-12.03-12.03-12.03z"
          />
        </svg>
      </button>
    </div>

    <div class="block bg-gray-200 text-center" v-if="toggleMenu">
      <div @click="toggleMenu = false" class="hover:bg-blue-300 mb-2">
        <router-link to="/" exact class="block p-2 lg:mt-0 text-blue-900">Home</router-link>
      </div>

      <div @click="toggleMenu = false"  class="bg-white mb-2">
        <span class="block p-2 lg:mt-0 text-blue-900" href="#">Musek</span>
      </div>

      <div @click="toggleMenu = false"  class="hover:bg-blue-300 mb-2 bg-gray-300">
        <router-link to="/orchester" class="block p-2 lg:mt-0 text-blue-900">Orchester</router-link>
      </div>

      <div @click="toggleMenu = false"  class="hover:bg-blue-300 mb-2 bg-gray-300">
        <router-link to="/dirigenten" class="block p-2 lg:mt-0 text-blue-900">Dirigenten</router-link>
      </div>

      <div @click="toggleMenu = false"  class="hover:bg-blue-300 mb-2 bg-gray-300">
        <router-link to="/verwaltung" class="block p-2 lg:mt-0 text-blue-900">Verwaltung</router-link>
      </div>

      <div @click="toggleMenu = false"  class="hover:bg-blue-300 mb-2 bg-gray-300">
        <router-link to="/downloads" class="block p-2 lg:mt-0 text-blue-900">WM Live</router-link>
      </div>

      <div @click="toggleMenu = false" class="hover:bg-blue-300 mb-2">
        <router-link to="/agenda" class="block p-2 lg:mt-0 text-blue-900">Agenda</router-link>
      </div>

      <div @click="toggleMenu = false" class="hover:bg-blue-300 mb-2">
        <router-link to="/sponsoren" class="block p-2 lg:mt-0 text-blue-900">Sponsoren</router-link>
      </div>

      <div @click="toggleMenu = false" class="hover:bg-blue-300 mb-2">
        <router-link to="/kontakt" class="block p-2 lg:mt-0 text-blue-900">Kontakt</router-link>
      </div>

      <div class="hover:bg-blue-300">
        <a
          href="https://harmonie-wormeldange.lu/WM/memberen/login.php"
          class="block p-2 lg:mt-0 text-blue-900"
        >Intranet</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleMenu: false,
      isDropdownOpen: false
    };
  }
};
</script>


<style scoped>
.router-link-exact-active {
  @apply px-4 mt-4 bg-white text-blue-800 border-2 py-2 border-blue-800 mx-2;
}
</style>