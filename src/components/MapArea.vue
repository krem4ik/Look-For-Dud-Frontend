<template>
  <div class="map-area">
    <GmapMap
      style="width: 100%; height: 100%"
      :center="{lat:38.5828992, lng:68.7829971}"
      :zoom="10"
      :options="mapOptions"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in mapMarkers"
        :position="m.position"
        :icon="m.icon"
        :clickable="true"
        :draggable="true"
        @click="getInfo(m)"
      />
    </GmapMap>
  </div>
</template>

<script>
import styles from '@/map-style';
import fire from '@/assets/fire.svg'
import { eventBus } from '@/main';
export default {
  name: 'MapArea',
  data() {
    return {
      mapOptions: {
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        disableDefaultUi: true,
        scaleControl: false,
        styles: [...styles]
      },
      mapMarkers: [
        {
          position:  { lat: 38.565707, lng: 68.751594 },
          icon: fire
        },{
          position: { lat: 38.568822, lng: 68.898076  },
          icon: fire
        }
      ]
    }
  },
  methods: {
    getInfo(m) {
      eventBus.$emit('getInfo', m);
    }
  }
};
</script>
<style lang="scss" scoped>
.map-area {
  position: relative;
  text-align: right;
  height: 100vh;
  width: calc(100% - 360px);
}
</style>
