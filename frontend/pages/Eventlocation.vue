<template>
    <PageHeader  title="Eventlocation" bg="https://cms.woodways.ms/uploads/IMG_20230908_WA_0017_d303205a98.jpg">Erlebe unvergessliche Augenblicke in unserer einzigartigen Eventlocation</PageHeader>
    <div class="page-content">
        <div class="featured-content text">
            <h2>Eine Bühne für besondere Woodways Momente</h2>
            <p>Immer mal wieder öffnen wir unseren Hofgarten oder das Lädchen für besondere Events, ob Musik, Märkte, Lesungen,  Theater, oder unseren Adventszauber. Wir haben immer wieder viele Ideen und laden euch von Herzen hierzu ein. Seid gespannt. Bitte beachte, dass unsere Eventlocation nicht zur Miete steht, sondern ausschließlich für Woodways Veranstaltungen genutzt wird.</p>
        </div>
        <h2 class="main-title">Veranstaltungen</h2>
        <div class="events2">
            <div v-if="!veranstaltungs[0]" class="text text-center">
                <p>Leider stehen derzeit keine bevorstehenden Veranstaltungen an.</p>
            </div>
            <EventSneak v-for="event in veranstaltungs" :event="event" :key="event.Slug"/>
        </div>
        <h2 class="main-title">Workshops</h2>
        <div class="events2">
            <div v-if="!works[0]" class="text text-center">
                <p>Leider stehen derzeit keine bevorstehenden Workshops an. Ihr seid kreativ, habt ein besonderes handwerkliches Talent welches ihr gerne in der kleinen Gruppe weitergeben möchtet?  Vielleicht mögt ihr unsere Räumlichkeiten ja auch für einen Workshop nutzen. Dann ruft mich gerne an und wir quatschen mal drüber.</p>
            </div>
            <EventSneak v-for="event in works" :event="event" :key="event.Slug"/>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
    const url = useStrapiMedia();
    const { find } = useStrapi();
    const {data: veranstaltungs} = await useAsyncData('veranstaltungs', () => find('events/?filters[Type][$eq]=Event&populate=*&sort=Date'), {
        transform: (data: any) => {
            if (data.data) {
                return data.data.map((event: any) => event.attributes)
            } else {
                return null;
            }
        }
    });

    const {data: works} = await useAsyncData('works', () => find('events/?filters[Type][$eq]=Work-Shop&populate=*&sort=Date'), {
        transform: (data: any) => {
            if (data.data) {
                return data.data.map((event: any) => event.attributes)
            } else {
                return null;
            }
        }
    });

    useHead({
  titleTemplate: () => `Woodways - Eventlocation`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  meta: [
    { name: "description", content: "Immer mal wieder öffnen wir unseren Hofgarten oder das Lädchen für besondere Events, ob Musik, Märkte, Lesungen,  Theater, oder unseren Adventszauber." },
    {property: "og:image", content: "https://cms.woodways.ms/uploads/SEO_Banner_e382b0803d.jpg"},
    {name: "twitter:card", content: "summary_large_image"},
    {name: "theme-color", content: "#869377"},

],
  charset: "utf-8",
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

.text-center {
    text-align: center;
    margin-bottom: 2rem;
}
.featured-content {
    margin: 100px 0;
    h2 {
        font-size: 2.25rem;
        text-align: center;
    }

    p {
        text-align: center;
        font-size: 20px;
    }
}
.events2 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.event-btn-all {
    display: flex;
    justify-content: center;
}
</style>