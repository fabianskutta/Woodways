<template>
    <PageHeader  title="Datenschutz" bg="https://cms.woodways.ms/uploads/375067098_994424788597686_2871287286949219759_n_92e0a3f6da.jpg"></PageHeader>
    <div class="page-content text" v-html="$markdown.render(legal.data.attributes.Datenschutz)">
    </div>
</template>

<script setup lang="ts">
    const url = useStrapiMedia();
    const { find } = useStrapi();
    const {data: legal} = await useAsyncData('Legal', () => find('Legal'), {});

    useHead({
  titleTemplate: () => `Woodways - Datenschutz`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
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
.text {
  p {
    font-family: 'Roboto', sans-serif;
  }
}
</style>