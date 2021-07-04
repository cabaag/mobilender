<template>
  <div class="error-alert">
    <slot></slot>
  </div>
</template>

<style lang="css" scoped>
.error-alert {
  background-color: rgb(185, 53, 53);
  width: 100%;
  height: 4rem;
  color: white;
  margin-bottom: 2rem;
  padding: 1rem;

  display: flex;
  justify-content: center;
}
</style>
