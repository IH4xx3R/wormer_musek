<template>
  <div class="downloads">
    <div
      class="h-48 relative text-center bg-no-repeat bg-cover bg-center shadow-md"
      style="background-image: url('https://harmonie-wormeldange.lu/WM/images/cd_cover.jpg')"
    >
      <div class="absolute bg-blue-800 opacity-75 h-48 w-full"></div>
      <h1
        class="w-full px-8 absolute block font-light text-4xl md:text-5xl mt-16 md:mt-12 text-white leading-tight tracking-wider"
      >
        WM Live
        <span
          class="block font-light md:text-lg text-sm"
        >Ausschnett vun eisen Gala-Concerten an Videos</span>
      </h1>
    </div>

    <div class="md:p-16 p-4 bg-gray-200">
      <div class="md:p-16 p-8 bg-white shadow-xl antialiased text-gray-800">
        <div class="md:flex flex-wrap">
          <div class="md:w-1/3 p-8">
            <img src="https://harmonie-wormeldange.lu/WM/images/cd_cover.jpg" alt />
            <p class="text-2xl">CD Wormer Musek and Friends</p>
            <p>15€</p>
            <br />

            <video
              id="my_video_0"
              class="video-js vjs-default-skin"
              controls
              preload="none"
              poster="https://harmonie-wormeldange.lu/WM/downloads/cd.png"
              data-setup="{}"
            >
              <source
                src="https://harmonie-wormeldange.lu/WM/downloads/RTL_REPORTAGE.webm"
                type="video/webm"
              />
            </video>
          </div>
          <div class="md:w-2/3 p-8">
            <p class="font-bold">Inhalt vun der CD</p>
            <br />01 - Take 9 'Antiphonal Fanfare' (Kerry Turner)
            <br />02 - El Camino Real (Alfred Reed)
            <br />03 - Short Ride in a fast Machine (John Adams)
            <br />04 - Lion King (Hans Zimmer)
            <br />05 - King Kong (James Newton Howard)
            <br />06 - A Writers Fiction (Frank Aldwinson)
            <br />07 - African Symphony (Van McCoy)
            <br />08 - Children of Sanchez (Chuck Magione)
            <br />09 - Innuendo (Queen)
            <br />10 - Vanishing Lights (Ophidian)
            <br />11 - Tuareg Dunes (Steve Boehm + André Mergenthaler)
            <br />
            <br />

            <p
              class="font-bold"
            >Iwerweisen vun 15 Euro op een vun den Bankkonten mam Vermierk 'CD - Wormer Musek and Friends':</p>
            <br />Raiffeisenbank (CCRA)
            <br />LU27 0090 0000 3023 5386 - CCRALULL
            <br />Comptes Chèques Postaux (CCPL)
            <br />LU62 1111 0057 2906 0000 - CCPLLULL
            <br />Spuerkeess (BCEE)
            <br />LU13 0019 9400 6243 8000 - BCEELULL
            <br />
          </div>
        </div>

        <div class="md:flex flex-wrap">
          <div class="lg:w-1/3 md:1/2 p-8">
            <p class="block h-16">Sound the Bells (John Williams)</p>
            <audio controls>
              <source src="../assets/audio/Sound_Bells.mp3" type="audio/mp3" />Your browser does not support the audio element.
            </audio>
          </div>

          <div class="lg:w-1/3 md:1/2 p-8">
            <p class="block h-16">Inception</p>
            <audio controls>
              <source src="../assets/audio/INCEPTION.mp3" type="audio/mp3" />Your browser does not support the audio element.
            </audio>
          </div>

          <div class="lg:w-1/3 md:1/2 p-8">
            <p class="block h-16">Star Wars - 20th Century Fox and Main Theme</p>
            <audio controls>
              <source src="../assets/audio/STAR_WARS.mp3" type="audio/mp3" />Your browser does not support the audio element.
            </audio>
          </div>

          <div class="lg:w-1/3 md:1/2 p-8">
            <p class="block h-16">Tempered Steel (Charles Rochester Young)</p>
            <audio controls>
              <source src="../assets/audio/TEMPERED_STEEL.mp3" type="audio/mp3" />Your browser does not support the audio element.
            </audio>
          </div>

          <div class="lg:w-1/3 md:1/2 p-8">
            <p class="block h-16">The Incredibles</p>
            <audio controls>
              <source src="../assets/audio/Incredibles.mp3" type="audio/mp3" />Your browser does not support the audio element.
            </audio>
          </div>

          <div class="lg:w-1/3 md:1/2 p-8">
            <p class="block h-16">Short Ride in a fast machine (John Adams)</p>
            <audio controls>
              <source src="../assets/audio/SHORT_RIDE.mp3" type="audio/mp3" />Your browser does not support the audio element.
            </audio>
          </div>

          <div class="lg:w-1/3 md:1/2 p-8">
            <p class="block h-16">Out of Africa</p>
            <audio controls>
              <source src="../assets/audio/OUT_OF_AFRICA.mp3" type="audio/mp3" />Your browser does not support the audio element.
            </audio>
          </div>

          <div class="lg:w-1/3 md:1/2 p-8">
            <p class="block h-16">Harry Potter Suite - Harry's Wondrous World</p>
            <audio controls>
              <source src="../assets/audio/Harry_Potter_Wondrous.mp3" type="audio/mp3" />Your browser does not support the audio element.
            </audio>
          </div>

          <div class="lg:w-1/3 md:1/2 p-8">
            <p class="block h-16">Thriller (M. Jackson)</p>
            <audio controls>
              <source src="../assets/audio/THRILLER.mp3" type="audio/mp3" />Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>