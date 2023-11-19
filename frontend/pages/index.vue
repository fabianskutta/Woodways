<template>
    <Header />
    <div class="page-content">
        <About/>
    </div>
    <Teaser />
    <div class="page-content">
        <h2 class="main-title">Unseren nächsten Veranstaltungen & Workshops</h2>
        <div class="events">
            <EventSneak v-for="event in events" :event="event" :key="event.Slug"/>
        </div>
        <div class="event-btn-all"><Btn1 href="/eventlocation">Alle Events ansehen</Btn1></div>
        <h2 class="main-title">Unser Team</h2>
        <img class="team-foto" src="https://cms.woodways.ms/uploads/Whats_App_Bild_2023_10_03_um_17_05_49_542343df_1b5d8c6094.jpg" alt="">
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
    { name: "description", content: "Woodways - Der kreative Hofladen in Sendenhorst • Conceptstore, veganes Café, Eventlocation • Nahchhaltig, Fair, Regional" },
    {property: "og:title", content: "Woodways - Der kreative Hofladen"},
    {property: "og:description", content: "Woodways - Der kreative Hofladen in Sendenhorst • Conceptstore, veganes Café, Eventlocation • Nachhaltig, Fair, Regional"},
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
    {
      src: 'https://cdn-cookieyes.com/client_data/bdcd74ae1c4f663e19b2b9b7/script.js',
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
    margin-bottom: 5rem;
}

.team-foto {
    width: 100%;
}


</style>