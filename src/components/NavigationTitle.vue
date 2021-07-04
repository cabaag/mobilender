<template>
  <div>
    <div class="navigation-title">
      <div class="navigation-title__section1">
        <slot name="back-button"></slot>
        <div class="navigation-title__icon">
          <slot name="icon"></slot>
        </div>
        <h1 class="navigation-title__title">
          <slot />
        </h1>
      </div>

      <div class="navigation-title__section2">
        <slot name="action-button"></slot>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="css" scoped>
.navigation-title__section1 {
  display: flex;
  align-items: center;
  flex: 1;
}

.navigation-title {
  display: flex;
  align-items: center;
}

.navigation-title__title {
  margin-left: 1.5rem;
}

.navigation-title__icon {
  font-size: 2rem;
}

hr {
  border: 1px solid var(--secondary-color);
  margin-top: 2rem;
}
</style>
