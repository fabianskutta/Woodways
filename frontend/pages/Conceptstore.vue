<template>
<PageHeader  title="Conceptstore" bg="https://cms.woodways.ms/uploads/IMG_20230908_WA_0018_b77d292bc9.jpg">Lorem ipsum dolor sit amet, consectetur adipiscing elit</PageHeader>
<div class="page-content">
  <div v-motion-slide-visible-bottom class="featured-content text">
            <h2>Nachhaltige Schätze für Herz und Zuhause</h2>
            <p>Tauche ein in unsere liebevoll kuratierte Auswahl an fair produzierten, umweltfreundlichen Produkten. Jedes Stück erzählt seine eigene Geschichte und wartet darauf, von dir entdeckt zu werden.</p>
  </div>
</div>
<Gallery>
  <img src="https://cms.woodways.ms/uploads/Whats_App_Bild_bbc017657b.jpg"/> 
  <img src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0018_b47f93c8c8.jpg"/> 
  <img src="https://cms.woodways.ms/uploads/2022_05_21_4ae1bada3e.jpg"/> 
  <img src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0021_42e7ce6602.jpg"/> 
  <img src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0010_7dc196d6e2.jpg"/> 
  <img src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0015_c611136774.jpg"/> 
  <img src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0006_8b1699bdc4.jpg"/>
  <img src="https://cms.woodways.ms/uploads/2022_05_213_3ca4f7182b.jpg"/> 
  <img src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0007_235f63a25b.jpg"/>
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