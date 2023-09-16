<template>
    <h1>{{ general }}</h1>
</template>

<script setup lang="ts">
    const url = useStrapiMedia();
    const { find } = useStrapi();
    const {data: general} = await useAsyncData('general', () => find('general', {
        populate: { Logo: true },
    }));
</script>