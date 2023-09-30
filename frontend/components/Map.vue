<template>
    <div>
        <div class="info-wrapper">
            <div class="info">
            <div class="info-container text">
                <h2>Woodways - Der kreative Hofladen</h2>
                <p >Elmenhorst 1 <br>
48324 Sendenhorst</p>
<Btn1 target="_blank" href="https://maps.app.goo.gl/9MwkVBZpea1ZeLSS6">Anfahrt</Btn1>
            </div>
        </div>
        </div>
      <MapboxMap map-id="map"
        :options="{
          style, // style URL
          center: [7.82502208, 51.86914234], // starting position [lng, lat]
          zoom: 12, // starting zoom
          scrollZoom: false,
          boxZoom: false,
          doubleClickZoom : false,
          dragPan: false,
          dragRotate: false,
          touchPitch: false,
        }"
        :style="{
          height: `600px`,
          position: `relative`
        }"
      >
        <Marker
          marker-id="marker"
          :options="{
            lnglat,
          }"
        />
      </MapboxMap>
    </div>
  </template>
  
  <script setup>
  import { ref } from '#imports';
  
  const enabled = ref(true);
  
  const lnglat = ref([7.82502208, 51.86914234]);
  
  const style = ref('mapbox://styles/fabianskutta/clmwoiyyz00wh01qn853v7kvq');


  </script>

<style lang="scss" scoped>
.info-wrapper {
    position: absolute;
    z-index: 10;
    height: 600px;
    display: flex;
    align-items: center;
    margin-left: 50px;
}

.info {
    background-color: #fff;
    padding: 1rem;

    p {
        margin-bottom: 30px;
    }
}

@media screen and (max-width: 900px) {

    .info {
        width: 100%;
    }
    .info-wrapper {
    align-items:baseline; 
    margin-left: 00px;
    padding: 1rem;
    width: 100%;

    h2 {
        font-size: 1.25rem;
    }
}
  }

</style>
  