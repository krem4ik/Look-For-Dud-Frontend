<template>
  <div id="wrapper" class="wrapper">
    <Navbar />
    <MapArea />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import MapArea from '@/components/MapArea.vue';

export default {
  name: 'App',
  components: { MapArea, Navbar },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
  color: #222222;
}
.wrapper {
  display: flex;
  min-height: 100vh;
}
</style>
