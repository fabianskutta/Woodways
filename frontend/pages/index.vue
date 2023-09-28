<template>
    <h1>Home</h1>
    <Header />
    <Teaser />
    <div class="page-content">
        <About/>
        <h2 v-motion-slide-visible-bottom class="main-title">Unsere nächsten Veranstaltungen & Workshops</h2>
        <div class="events">
            <EventSneak v-for="event in events" :event="event" :key="event.Slug"/>
        </div>
        <div class="event-btn-all"><Btn1 href="/eventlocation">Alle Events ansehen</Btn1></div>
    </div>
    <OpeningTimes />
</template>

<script setup lang="ts">
    const route = useRoute();
    const { find } = useStrapi();
    const {data: events} = await useAsyncData('events', () => find('events/?populate=*&sort=Date&pagination[pageSize]=3'), {
        transform: (data: any) => {
            if (data.data) {
                return data.data.map((event: any) => event.attributes)
            } else {
                return null;
            }
        }
    });

    useHead({
  titleTemplate: () => `Woodways - Der kreative Hofladen`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [
    { name: "description", content: "Der kreative Hofladen in Sendenhorst • Conceptstore, veganes Café, Eventlocation • Nahchhaltig, Fair, Regional" },
    {property: "og:title", content: "Woodways - Der kreative Hofladen"},
    {property: "og:description", content: "Der kreative Hofladen in Sendenhorst • Conceptstore, veganes Café, Eventlocation • Nachhaltig, Fair, Regional"},
    {property: "og:image", content: "https://cms.woodways.ms/uploads/SEO_Banner_e382b0803d.jpg"},
    {name: "twitter:card", content: "summary_large_image"},
    {name: "theme-color", content: "#869377"},


],
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
.events {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.event-btn-all {
    display: flex;
    justify-content: center;
}


</style>