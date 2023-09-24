<template>
    <PageHeader  title="Café" bg="https://cms.woodways.ms/uploads/350096692_787350306108702_1803515624141503954_n_b271bb8858.jpeg">Lorem ipsum dolor sit amet, consectetur adipiscing elit</PageHeader>

<div class="page-content">
  <div class="featured-content text">
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Proin libero nunc consequat interdum varius sit amet mattis vulputate.</p>
</div>
</div>
<Gallery>
  <img src="https://cms.woodways.ms/uploads/331255796_3210046615952005_2603511354129028016_n_84ff5fe392.jpeg"/> 
  <img src="https://cms.woodways.ms/uploads/366556498_302980875722443_6326404471042150460_n_7d7c365287.jpeg"/> 
  <img src="https://cms.woodways.ms/uploads/374165140_299409226016940_6213255118563532301_n_afd323eaf4.jpeg"/> 
  <img src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0019_c7d335d873.jpg"/> 
  <img src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0009_2ddda99459.jpg"/> 
  <img src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0012_9e06079267.jpg"/> 
  <img src="https://cms.woodways.ms/uploads/350096692_787350306108702_1803515624141503954_n_b271bb8858.jpeg"/> 
  <img src="https://cms.woodways.ms/uploads/310801576_1036467390360927_2277127071436138682_n_497c9beae6.jpeg"/> 
  <img src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0003_67b9018dd1.jpg"/> 
</Gallery>

</template>

<script setup lang="ts">
useHead({
  titleTemplate: () => `Woodways - Café`,
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
}
</style>