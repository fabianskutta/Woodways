<template>
    <div class="logo-grid">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.logo-grid {
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    display: flex;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 0 2rem;

    img {
        max-height: 7rem;
        width: 7rem;
        margin: 1rem;
        object-fit: contain;
    }
}
</style>