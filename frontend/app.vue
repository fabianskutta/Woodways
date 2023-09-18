<template>
  <h1>{{ frontpage }}</h1>
</template>

<script setup lang="ts">
  const url = useStrapiMedia();
  const { find } = useStrapi();
  const {data: frontpage} = await useAsyncData('frontpage', () => find('frontpage', {
      populate: '*',
  }));
</script>