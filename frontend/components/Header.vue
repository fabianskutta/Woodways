<template>
    <header>
            <div class="container">
                <img class="logo" :src="url + frontpage.data.attributes.Logo.data.attributes.url" alt="" />
                <div class="header-btns"><Btn1 :href="`${frontpage.data.attributes.Btn1Link}`">{{ frontpage.data.attributes.Btn1Text }}</Btn1><Btn2 :href="`${frontpage.data.attributes.Btn2Link}`">{{ frontpage.data.attributes.Btn2Text }}</Btn2></div>
            </div>
            <img class="bg" :src="url + frontpage.data.attributes.Background.data.attributes.url">
    </header>
</template>

<script setup lang="ts">
    const url = useStrapiMedia();
    const { find } = useStrapi();
    const {data: frontpage} = await useAsyncData('Frontpage', () => find('Frontpage?populate=*'), {});
</script>

<style lang="scss">
header {
    height: 600px;
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
    background-color: #0000004f;

    img {
        height: 50%;
        width: auto;
    }

    h1 {
        padding-top: 3rem;
        color: #fff;
        font-size: 4rem;
    }

    .header-btns {
        display: flex;
    }
}

.bg {
        width: 100%;
        object-fit: cover;
    }


@media screen and (max-width: 900px) {
    .container {

        img {
            height: auto;
            width: 100%;
        }
    }
    .bg {
        height: 100%;
    }
}
</style>