<template>
    <PageHeader  title="Impressum" bg="https://cms.woodways.ms/uploads/375067098_994424788597686_2871287286949219759_n_92e0a3f6da.jpg"></PageHeader>
    <div class="page-content text" v-html="$markdown.render(legal.data.attributes.Impressum)">
    </div>
</template>

<script setup lang="ts">
    const url = useStrapiMedia();
    const { find } = useStrapi();
    const {data: legal} = await useAsyncData('Legal', () => find('Legal'), {});
</script>

<style lang="scss" scoped>
.text {
  p {
    font-family: 'Roboto', sans-serif;
  }
}
</style>