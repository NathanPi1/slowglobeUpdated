<template>
  <div class="attributionContainer">
    <div class="attribution">
      <PostageStamp image="\images\IMG_0067.JPG"></PostageStamp>
      <br /><br />
      <div>
        An account of exploration by
        <br /><br />
        <div class="name">Nathan Wuttke</div>
      </div>
      <br /><br />
      Text and photos on this site by me.
      <br /><br />
      Why ADVENTRICS? That was thanks to Chat-GPT...
      <br />
      <p>
        <b>ADV</b>enture, <b>E</b>xciting, <b>N</b>athan, <b>TR</b>avel, <b>I</b>nspiring,
        <b>C</b>hallenges, <b>S</b>cenery. <br />
      </p>
      The code has been written by my good friend Daniel Birch-Smith unless otherwise noted.
      <br /><br />
      <div>
        Map by&nbsp;
        <a
          class="mapboxgl-ctrl-logo"
          style="display: inline-block; vertical-align: -0.125em"
          target="_blank"
          rel="noopener nofollow"
          href="https://www.mapbox.com/"
          aria-label="Mapbox homepage"
        ></a
        >, style is based on Standard, with some modifications to reduce clutter. Forgive my
        cartography skills, mapmaking is hard.
      </div>
      <br />
      Daniel wrote this in programming languages including Vue, Vite, Typescript, using the Mapbox,
      VueUse, PhotoSwipe and vite-imagetools libraries.
    </div>
  </div>
</template>

<style scoped>
.attribution {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 2em;
  /* padding-top: 6em; */
  text-align: center;
  /* background-color: white; */
  max-width: 50em;
  a {
    color: var(--primary);
  }
}

.name {
  color: var(--primary);
  font-family: 'Libre Caslon Text', serif;
  font-weight: 600;
  font-size: 2em;
}
</style>
<script setup lang="ts">
import PostageStamp from '@/components/PostageStamp.vue'
</script>
