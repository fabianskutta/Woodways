<template>
    <PageHeader  title="Eventlocation" bg="https://cms.woodways.ms/uploads/IMG_20230908_WA_0017_d303205a98.jpg">Bei uns finden regelmäßig Veranstaltungen & Workshops statt.</PageHeader>
    <div class="page-content">
        <div v-motion-slide-visible-bottom class="featured-content text">
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Proin libero nunc consequat interdum varius sit amet mattis vulputate.</p>
        </div>
        <h2 class="main-title">Veranstaltungen</h2>
        <div class="events2">
            <EventSneak v-for="event in veranstaltungs" :event="event" :key="event.Slug"/>
        </div>
        <h2 class="main-title">Workshops</h2>
        <div class="events2">
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