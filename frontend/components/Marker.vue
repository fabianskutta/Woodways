<script setup lang="ts">
    import { MarkerOptions } from 'mapbox-gl';
    import { ref, watch } from 'vue';
    import { defineMapboxMarker } from '#imports';

    const props = defineProps<{ markerId: string, options: MarkerOptions & { lnglat: [number, number] } }>()
    const markerRef = ref<HTMLElement | null>(null)


    const marker = defineMapboxMarker(props.markerId, props.options, markerRef, (m) => {
        m.setLngLat([7.82502208, 51.86914234])
    })
</script>

<template>
  <div ref="markerRef" class="marker" >

    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M192 96c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0-256C85.961 0 0 85.961 0 192c0 77.413 26.97 99.031 172.268 309.67 9.534 13.772 29.929 13.774 39.465 0C357.03 291.031 384 269.413 384 192 384 85.961 298.039 0 192 0zm0 473.931C52.705 272.488 32 256.494 32 192c0-42.738 16.643-82.917 46.863-113.137S149.262 32 192 32s82.917 16.643 113.137 46.863S352 149.262 352 192c0 64.49-20.692 80.47-160 281.931z"></path></svg>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="circle" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19.17 17.4" style="enable-background:new 0 0 19.17 17.4;" xml:space="preserve"><path fill="#C79B66" d="M8.83,16.31c-0.4-0.03-0.8-0.08-1.2-0.16c-0.51-0.11-1-0.27-1.51-0.43c-0.45-0.14-0.89-0.32-1.32-0.53c-0.93-0.51-1.75-1.21-2.39-2.06c-0.16-0.21-0.3-0.42-0.43-0.65c-0.12-0.23-0.23-0.46-0.32-0.7c-0.18-0.44-0.33-0.89-0.42-1.36c-0.06-0.35-0.08-0.7-0.08-1.05c-0.02-0.38-0.02-0.77,0-1.15c0.11-0.83,0.36-1.64,0.73-2.4c0.09-0.2,0.23-0.36,0.41-0.48l0,0c0.24-0.45,0.53-0.88,0.84-1.29c0.34-0.41,0.68-0.82,1-1.22c0.38-0.39,0.81-0.72,1.28-1c0.45-0.3,0.94-0.53,1.46-0.68C7.38,1,7.89,0.9,8.4,0.84c0.5-0.05,1-0.05,1.5,0c0.54,0.03,1.08,0.11,1.6,0.24c0.25,0.07,0.5,0.15,0.74,0.25l0.68,0.33c0.47,0.23,0.93,0.49,1.37,0.78c0.46,0.31,0.88,0.66,1.26,1.06c0.36,0.37,0.7,0.76,1,1.18c0.34,0.45,0.62,0.93,0.83,1.45c0.19,0.49,0.34,0.99,0.46,1.5c0.12,0.54,0.19,1.1,0.19,1.66c0,0.57-0.07,1.13-0.21,1.68c-0.18,0.62-0.47,1.2-0.85,1.72c-0.31,0.44-0.64,0.86-1,1.26c-0.38,0.39-0.8,0.72-1.27,1c-0.4,0.24-0.8,0.48-1.2,0.7c-0.45,0.25-0.94,0.42-1.44,0.53c-0.48,0.11-0.98,0.19-1.47,0.24H9.83C9.54,16.35,9.17,16.34,8.83,16.31z"></path></svg>
</div>
</template>

<style>
    .marker {
        display: flex;
        border: none;
        padding: 0;
        align-items: center;
        color: var(--text1);

        img {
            width:30px;
            height: 100%;
        }

        .fa-map-marker-alt {
            position: absolute;
            top: 15px;
            left: 17px;
            width: 20px;
            z-index: 5;
        }

        .circle {
            position: absolute;
            top: 5px;
            width: 55px;
            z-index: 1;
            -webkit-animation:spin 4s linear infinite;
            -moz-animation:spin 4s linear infinite;
            animation:spin 4s linear infinite;
        }
    }

    @-moz-keyframes spin { 
    100% { -moz-transform: rotate(360deg); } 
}
@-webkit-keyframes spin { 
    100% { -webkit-transform: rotate(360deg); } 
}
@keyframes spin { 
    100% { 
        -webkit-transform: rotate(360deg); 
        transform:rotate(360deg); 
    } 
}
</style>
     