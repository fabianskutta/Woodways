<template>
<PageHeader  title="Conceptstore" bg="https://cms.woodways.ms/uploads/IMG_20230908_WA_0018_b77d292bc9.jpg">Entdecke einzigartige Produkte im Woodways Conceptstore</PageHeader>
<div class="page-content">
  <div class="featured-content text">
            <h2>Nachhaltige Schätze für Herz und Zuhause</h2>
            <p>Erlebe die faszinierende Vielfalt unserer sorgfältig ausgewählten, fair produzierten und umweltfreundlichen Produkten. Jedes Einzelstück birgt seine eigene einzigartige Geschichte und wartet nur darauf, von dir entdeckt zu werden.</p>
  </div>
</div>
<Gallery>
  <img v-motion-slide-visible-bottom src="https://cms.woodways.ms/uploads/Whats_App_Bild_bbc017657b.jpg"/> 
  <img v-motion-slide-visible-bottom src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0018_b47f93c8c8.jpg"/> 
  <img v-motion-slide-visible-bottom src="https://cms.woodways.ms/uploads/2022_05_21_4ae1bada3e.jpg"/> 
  <img v-motion-slide-visible-bottom src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0021_42e7ce6602.jpg"/> 
  <img v-motion-slide-visible-bottom src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0010_7dc196d6e2.jpg"/> 
  <img v-motion-slide-visible-bottom src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0015_c611136774.jpg"/> 
  <img v-motion-slide-visible-bottom src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0006_8b1699bdc4.jpg"/>
  <img v-motion-slide-visible-bottom src="https://cms.woodways.ms/uploads/2022_05_213_3ca4f7182b.jpg"/> 
  <img v-motion-slide-visible-bottom src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0007_235f63a25b.jpg"/>
</Gallery>

</template>

<script setup lang="ts">
useHead({
  titleTemplate: () => `Woodways - Conceptstore`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  meta: [{ name: "description", content: "Lorem ipsum dolor sit amet" }],
  charset: "utf-8",
  script: [
    {
      src: 'https://kit.fontawesome.com/97e635c580.js',
      type: "text/javascript",
      async: true,
    },
  ],
});
</script>

<style lang="scss" scoped>

.featured-content {
    margin: 100px 0;
    h2 {
        font-size: 2.25rem;
        text-align: center;
    }

    p {
        text-align: center;
        font-size: 20px;
    }
}</style>