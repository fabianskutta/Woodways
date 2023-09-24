<template>
    <div class="images-grid">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
    const url = useStrapiMedia();
    const { find } = useStrapi();
    const {data: general} = await useAsyncData('general', () => find('general?populate=*'), {
    });
</script>

<style lang="scss">
/* .images-grid */
.images-grid {
    text-align: center;
    padding: 2rem 3%;

    img {
        width: 100%;
    }
  }
  
  .images-grid img:not(:last-child) {
    margin-bottom: 1rem;
  }
  
  .images-grid img {
    transition: opacity 400ms;
  }
  
  /* MEDIA QUERIES */
  /* Tablets */
  @media screen and (min-width: 480px) {
    .images-grid {
      padding: 2rem 10%;
    }
  }
  
  /* Small Screens, laptops */
  @media screen and (min-width: 768px) {
    
    /*  .images-grid */
    .images-grid {
      columns: 2;
      column-gap: 1rem;
      padding: 2rem 10%;
    }
  }
  
  /* Desktop, large screens */
  @media screen and (min-width: 1024px) {
    /*  .images-grid */
    .images-grid {
      columns: 3;
      column-gap: 1.5rem;
      padding: 2rem 10%;
    }

    .film {
        columns: 2;
        column-gap: 1.5rem;
        padding: 2rem 10%;
      }
}

.film img {
  cursor: pointer;
}
</style>