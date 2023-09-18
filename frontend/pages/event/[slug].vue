<template>
    <h1> {{ event }}</h1>
</template>

<script setup lang="ts">
const url = useStrapiMedia();
const { slug } = useRoute().params;

const { findOne } = useStrapi();
    const {data: event} = await useAsyncData('event?populate=*', 
    () => findOne('events', {
        filters: {
            Slug: {$eq: slug}
        }}), {
        transform: (data: any) => {
            if (data.data[0]) {
                return data.data[0].attributes;
            } else {
                return null;
            }
        }
    });
</script>