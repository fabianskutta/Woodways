<template>
    <PageHeader :Btn="eventslug.PageBtnText" :BtnLink="eventslug.PageBtnLink" :title="eventslug.Titel" :bg="url + eventslug.PageCover.data.attributes.url">{{ new Date(eventslug.Date).toLocaleDateString('de-DE') + " " + new Date(eventslug.Date).toLocaleTimeString('de-DE') + " Uhr"}}</PageHeader>
    <div class="page-content text" v-html="$markdown.render(eventslug.PageDescription)">
    </div>
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