<template>
    <PageHeader :Btn="eventslug.PageBtnText" :BtnLink="eventslug.PageBtnLink" :title="eventslug.Titel" :bg="url + eventslug.PageCover.data.attributes.url">{{ new Date(eventslug.Date).toLocaleDateString('de-DE') + " " + new Date(eventslug.Date).toLocaleTimeString('de-DE', {hour: '2-digit', minute:'2-digit'}) + " Uhr"}}</PageHeader>
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
  titleTemplate: () => `Woodways - ${slug}`,
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