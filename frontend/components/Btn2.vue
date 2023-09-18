<template>
    <div class="btn2">
      <component
    :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    @click="$emit('click')"
  >
    <slot></slot>
  </component>
    </div>
</template>

<script>
export default {
    props: {
      to: {
        type: String,
        default: null
      },
      href: {
        type: String,
        default: null
      }
    }
  };
</script>

<style lang="scss" scoped>

.btn2 {
  padding: 0.5rem 1rem;
  color: var(--text1);
  border-color: var(--accent1);
  border-width: 2px;
  border-style: solid;
  border-radius: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px 0 0;
  cursor: pointer;
}
</style>