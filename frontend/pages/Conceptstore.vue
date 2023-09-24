<template>
<PageHeader  title="Conceptstore" bg="https://cms.woodways.ms/uploads/IMG_20230908_WA_0018_b77d292bc9.jpg">Lorem ipsum dolor sit amet, consectetur adipiscing elit</PageHeader>
<div class="page-content">
  <div class="featured-content text">
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Proin libero nunc consequat interdum varius sit amet mattis vulputate.</p>
  </div>
</div>
<Gallery>
  <img src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0018_b47f93c8c8.jpg"/> 
  <img src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0021_42e7ce6602.jpg"/> 
  <img src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0010_7dc196d6e2.jpg"/> 
  <img src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0015_c611136774.jpg"/> 
  <img src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0006_8b1699bdc4.jpg"/> 
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