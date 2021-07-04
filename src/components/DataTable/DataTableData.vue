<template>
  <td class="datatable-data">
    <div>
      <slot></slot>
    </div>
  </td>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.datatable-data {
  padding: 1.5rem 2.5rem 1.5rem 2.5rem;
  background-color: var(--secondary-color);
}
</style>
