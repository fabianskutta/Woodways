<template>
    <div class="btn1">
      <component
    :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    :target="target"
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
      },
      target: {
        type: String,
        default: null
      }
    }
  };
</script>

<style lang="scss" scoped>

.btn1 {
  padding: 0.5rem 1rem;
  color: var(--text1);
  background-color: var(--accent1);
  border-radius: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2.5px;
  cursor: pointer;
  width: fit-content;
  transition: .3s;
}

.btn1:hover{
  transform: scale(1.03);
}
</style>