<template>
    <header>
        <div class="container">
            <h1>{{ eventslug.Titel }}</h1>
            <p>{{ new Date(eventslug.Date).toLocaleDateString('de-DE') }}</p>
        </div>
        <img class="bg" :src="url + eventslug.PageCover.data.attributes.url">
    </header>
    </template>
    
    <script setup lang="ts">
        const url = useStrapiMedia();
        const { slug } = useRoute().params;
        const { findOne } = useStrapi();
        
        const {data: eventslug} = await useAsyncData('events', () => findOne('events', {
                populate: '*',
                filters: {
                    Slug: {$eq: slug}
                },
            
            }), {
                transform: (data: any) => {
                    if (data.data[0]) {
                        return data.data[0].attributes;
                    } else {
                        return null;
                    }
                }
            });
        </script>
    
    <style lang="scss" scoped>
    </style>