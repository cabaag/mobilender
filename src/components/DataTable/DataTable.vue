<template>
  <table class="datatable">
    <slot name="head"></slot>
    <slot></slot>
  </table>
</template>

<style lang="css" scoped>
.datatable {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 2rem;
}
</style>
