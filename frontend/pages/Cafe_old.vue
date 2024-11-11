<template>
    <PageHeader  title="Café" bg="https://cms.woodways.ms/uploads/350096692_787350306108702_1803515624141503954_n_b271bb8858.jpeg">Kaffee und Kuchen, Genuss pur</PageHeader>

<div class="page-content">
  <div class="featured-content text">
            <h2>Genuss und Gemütlichkeit vereint</h2>
            <p>Gönn dir eine Auszeit in unserem gemütlichen Café, wo du vegane Leckereien, tolle Kuchen, die besten Waffeln oder auch mal kleine Snacks genießen kannst. Über die Herbst- und Wintermonate könnt ihr bei usseligem Wetter drinnen, in einer der gemütlichen Sitzecken inmitten des Lädchens platznehmen. Unser schöner Ofen, sorgt dabei für hyggelige Wärme. 
</p>
</div>
<LogoGrid>
  <img class="invert" src="https://cms.woodways.ms/uploads/Liba_Logo_4432597416.png"/> 
  <img class="invert" src="https://cms.woodways.ms/uploads/fam2_1_png_e6a316f19f.webp"/> 
  <img src="https://cms.woodways.ms/uploads/tina_d5d41cae92.png"/>
  <img class="invert" src="https://cms.woodways.ms/uploads/herr_Hase_123fcee71c.png"/>
  <img src="https://cms.woodways.ms/uploads/Hofgenuss_fe03d0f1d2.png"/> 
  <img src="https://cms.woodways.ms/uploads/casa_logo_schwarz_4e60721cc6.png"/>
  </LogoGrid>
</div>
<Gallery>
  <img v-motion-slide-visible-bottom  src="https://cms.woodways.ms/uploads/331255796_3210046615952005_2603511354129028016_n_84ff5fe392.jpeg"/> 
  <img v-motion-slide-visible-bottom  src="https://cms.woodways.ms/uploads/366556498_302980875722443_6326404471042150460_n_7d7c365287.jpeg"/> 
  <img v-motion-slide-visible-bottom  src="https://cms.woodways.ms/uploads/374165140_299409226016940_6213255118563532301_n_afd323eaf4.jpeg"/> 
  <img v-motion-slide-visible-bottom  src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0019_c7d335d873.jpg"/> 
  <img v-motion-slide-visible-bottom  src="https://cms.woodways.ms/uploads/Whats_App_Bild_2023_10_03_um_16_43_14_58a0e94f_d74500da44.jpg"/> 
  <img v-motion-slide-visible-bottom  src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0009_2ddda99459.jpg"/> 
  <img v-motion-slide-visible-bottom  src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0012_9e06079267.jpg"/>
  <img v-motion-slide-visible-bottom  src="https://cms.woodways.ms/uploads/350096692_787350306108702_1803515624141503954_n_b271bb8858.jpeg"/> 
  <img v-motion-slide-visible-bottom  src="https://cms.woodways.ms/uploads/Whats_App_Bild_2023_10_03_um_16_43_14_6183917a_f3f3f2329f.jpg"/> 
  <img v-motion-slide-visible-bottom  src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0003_67b9018dd1.jpg"/> 
</Gallery>

</template>

<script setup lang="ts">
useHead({
  titleTemplate: () => `Woodways - Café`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  meta: [
    { name: "description", content: "Gönn dir eine Auszeit in unserem gemütlichen Café, wo du vegane Leckereien, tolle Kuchen, die besten Waffeln oder auch mal kleine Snacks genießen kannst." },
    {property: "og:image", content: "https://cms.woodways.ms/uploads/SEO_Banner_e382b0803d.jpg"},
    {name: "twitter:card", content: "summary_large_image"},
    {name: "theme-color", content: "#869377"},

],
  charset: "utf-8",
  script: [
    {
      src: 'https://kit.fontawesome.com/97e635c580.js',
      type: "text/javascript",
      async: true,
    },
    {
      src: 'https://cdn-cookieyes.com/client_data/bdcd74ae1c4f663e19b2b9b7/script.js',
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