<template>
    <header>
            <div class="container">
                <img v-motion-slide-visible-bottom class="logo" :src="url + frontpage.data.attributes.Logo.data.attributes.url" alt="" />
                <div v-motion-slide-visible-bottom class="header-btns"><Btn1 :href="`${frontpage.data.attributes.Btn1Link}`">{{ frontpage.data.attributes.Btn1Text }}</Btn1><Btn2 :href="`${frontpage.data.attributes.Btn2Link}`">{{ frontpage.data.attributes.Btn2Text }}</Btn2></div>
            </div>
            <img class="bg" :src="url + frontpage.data.attributes.Background.data.attributes.url">
    </header>
</template>

<script setup lang="ts">
    const url = useStrapiMedia();
    const { find } = useStrapi();
    const {data: frontpage} = await useAsyncData('Frontpage', () => find('Frontpage?populate=*'), {});
</script>

<style lang="scss" scoped>
header {
    height: 80vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    position: absolute;
    height: inherit;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #00000023;

    img {
        height: 350px;
        width: auto;
    }

    h1 {
        padding-top: 3rem;
        color: #fff;
        font-size: 4rem;
        text-shadow: 0 0 40px rgba(0,0,0,.69);
    }

    .header-btns {
        display: flex;
    }
}

.bg {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


@media screen and (max-width: 900px) {
    .container {

        img {
            height: auto;
            width: 100%;
        }

        .header-btns {
        margin-bottom: 0;
    }
    }
    .bg {
        height: 100%;
    }

    header {
    height: 70vh;
}
}
</style>