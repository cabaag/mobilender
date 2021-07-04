<template>
  <tr class="datatable-row">
    <slot></slot>
  </tr>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="css">
.datatable-row > td:first-child {
  border-radius: 1.2rem 0 0 1.2rem;
  overflow: hidden;
  cursor: pointer;
}

.datatable-row > td:last-child {
  border-radius: 0 1.2rem 1.2rem 0;
  overflow: hidden;
}
</style>
