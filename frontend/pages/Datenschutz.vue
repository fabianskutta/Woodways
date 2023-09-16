<template>
    <header>
            <div class="container">
                <h1>Datenschutz</h1>
            </div>
            <img class="bg" :src="`${url}/uploads/IMG_20230908_WA_0023_0a28f37bb8.jpg`">
    </header>
    <div class="page-content" v-html="$markdown.render(legal.data.attributes.Datenschutz)">
    </div>
</template>

<script setup lang="ts">
    const url = useStrapiMedia();
    const { find } = useStrapi();
    const {data: legal} = await useAsyncData('Legal', () => find('Legal'), {});
</script>

<style lang="scss" scoped>
</style>