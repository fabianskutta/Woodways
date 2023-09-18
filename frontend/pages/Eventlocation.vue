<template>
    <div class="page-content">
        <h2 class="main-title">Veranstaltungen</h2>
        <div class="events">
            <EventSneak v-for="event in events" :event="event" :key="event.Slug"/>
        </div>
        <h2 class="main-title">Work-Shops</h2>
        <div class="events">
            <EventSneak v-for="event in works" :event="event" :key="event.Slug"/>
        </div>
    </div>
</template>

<script setup lang="ts">
    const url = useStrapiMedia();
    const { find } = useStrapi();
    const {data: events} = await useAsyncData('events', () => find('events/?filters[Type][$eq]=Event&populate=*&sort=Date'), {
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