<template>
    <PageHeader :Btn="eventslug.PageBtnText" :BtnLink="eventslug.PageBtnLink" :title="eventslug.Titel" :bg="url + eventslug.PageCover.data.attributes.url">2.12.2023 14:00 Uhr & 03.12.2023 11:00 Uhr</PageHeader>
    <div class="page-content text eventpage" v-html="$markdown.render(eventslug.PageDescription)">
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
        
            useHead({
  titleTemplate: () => `Woodways - Adventszauber`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  meta: [{ name: "description", content: "Bei uns finden regelmäßig Veranstaltungen & Work-Shops statt." }],
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
    .test {
        color: #fff;
    }
    </style>