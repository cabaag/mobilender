<template>
  <button class="button__container" @click="action">
    <div class="button__icon">
      <slot name="icon"></slot>
    </div>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    action: {
      type: Function,
      required: true,
    },
  },
  setup() {
    return {}
  },
}
</script>

<style lang="css" scoped>
.button__container {
  background: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  outline: none;
  border: 2px solid white;
  border-radius: 0.5rem;
  color: var(--white-color);
  border-color: var(--accent-color);
  text-transform: uppercase;
  padding: 0.7rem 1.2rem 0.7rem 1.2rem;

  display: flex;
  justify-content: center;
  align-items: center;
}

.button__icon {
  margin-right: 1rem;
  font-size: 1rem;
}
</style>
