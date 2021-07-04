<template>
  <div class="counter-square">
    <div class="counter-square__number">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="css" scoped>
.counter-square {
  border: 2px solid var(--accent-color);
  width: 4rem;
  height: 3.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.counter-square__number {
  color: white;
  font-size: 1.7rem;
}
</style>
