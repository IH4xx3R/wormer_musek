<template>
  <div class="flex justify-between bg-gray-900 text-gray-600 px-6 md:px-24 py-12">
    <div class="text-sm md:text-md">
      <div>© 2019 Wormer Musek</div>
      <div>Harmonie Wormeldange A.s.b.l</div>
      <div>94, rue Principale</div>
      <div>L-5480 Wormeldange</div>
    </div>

    <div>
      <router-link to="/impressum" class="text-gray-200 hover:text-blue-500">Impressum</router-link>
      <br />
      <router-link to="/datenschutz" class="text-gray-200 hover:text-blue-500">Datenschutz</router-link>
      <div>_</div>
      <div class="text-xs">
        by
        <a href="http://stevek.org">Steve Klicek</a> &
        <br />Steinmetz Luc
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>