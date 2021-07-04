<template>
  <div class="circle-button__container" @click="action">
    <div class="circle-button">
      <div class="circle-button__icon">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    action: Function,
  },
  setup() {
    return {}
  },
}
</script>

<style lang="css" scoped>
.circle-button__container {
  position: relative;
  cursor: pointer;
}

.circle-button {
  width: 36px;
  height: 36px;
  margin-right: 16px;
  background-color: var(--grey-light-color);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.circle-button__icon {
  font-size: 2rem;
}
</style>
