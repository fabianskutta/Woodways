<template>
    <header>
            <div class="container">
                <h1>Eventlocation</h1>
            </div>
            <img class="bg" :src="`${url}/uploads/IMG_20230908_WA_0023_0a28f37bb8.jpg`">
    </header>
    <div class="page-content">
        <div class="events">
            <EventSneak v-for="event in events" :event="event" :key="event.Slug"/>
        </div>
    </div>
</template>

<script setup lang="ts">
    const url = useStrapiMedia();
    const { find } = useStrapi();
    const {data: events} = await useAsyncData('events', () => find('events/?populate=*&sort=Date'), {
        transform: (data: any) => {
            if (data.data) {
                return data.data.map((event: any) => event.attributes)
            } else {
                return null;
            }
        }
    });

</script>

<style lang="scss">
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