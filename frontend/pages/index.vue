<template>
    <h1>Home</h1>
    <Header />
    <div class="page-content">
        <div class="events">
            <EventSneak v-for="event in events" :event="event" :key="event.Slug"/>
        </div>
        <div class="event-btn-all"><Btn1 href="/events">Alle Events</Btn1></div>
    </div>
</template>

<script setup lang="ts">
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

</script>

<style lang="scss">
.events {
    display: flex;
    flex-wrap: wrap;
}

.event-btn-all {
    display: flex;
    justify-content: center;
}
</style>