<template>
    <PageHeader  title="Impressum" bg="https://cms.woodways.ms/uploads/IMG_20230908_WA_0017_d303205a98.jpg"></PageHeader>
    <div class="page-content eventpage text" v-html="$markdown.render(legal.data.attributes.Impressum)">
    </div>
</template>

<script setup lang="ts">
    const url = useStrapiMedia();
    const { find } = useStrapi();
    const {data: legal} = await useAsyncData('Legal', () => find('Legal'), {});

    useHead({
  titleTemplate: () => `Woodways - Impressum`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
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
.text {
  p {
    font-family: 'Roboto', sans-serif;
  }
}
</style>