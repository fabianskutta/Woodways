<template>
    <a  :href="`/event/${event.Slug}`" class="event-sneak">
        <div class="event-container">
            <h3>{{ event.Titel }}</h3>
            <p>{{ new Date(event.Date).toLocaleDateString('de-DE') }}</p>
            <Btn1 :to="`/event/${event.Slug}`">{{ event.BtnText }}</Btn1>
        </div>
        <img class="event-bg" :src="url + event.EventSneakCover.data.attributes.url">

    </a>
</template>

<script setup lang="ts">
const url = useStrapiMedia();
defineProps<{event: Event;}>();
</script>

<style lang="scss" scoped>
.event-sneak {
    position: relative;
    flex-basis: calc(33.333% - 2rem);
    height: 450px;
    width: 100%;
    margin: 0 1rem 2rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    transition: .3s;
}

.event-container {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    background-color: #0000002f;
    color: #fff;

    h3 {
        font-size: 27px;
        margin: 0;
        text-shadow: 0 0 40px rgba(0,0,0,.69);
    }

    p {
        font-weight: 100;
        margin: 0 0 10px 0;
    }
}

.event-sneak:hover {
    transform: scale(1.04);
}
.event-bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
@media screen and (max-width: 1000px) {
    .event-sneak {
        flex-basis: calc(50% - 2rem);
    }
  }

  @media screen and (max-width: 600px) {
    .event-sneak {
        flex-basis: calc(100% - 2rem);
    }
  }
</style>