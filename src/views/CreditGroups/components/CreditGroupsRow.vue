<template>
  <DataTableRow>
    <DataTableData class="archivo">
      {{ credit.archivo }}
    </DataTableData>
    <DataTableData style="flex: 1;">
      {{ credit.expedicion }}
    </DataTableData>
    <DataTableData style="flex: 1;">
      {{ credit.calidadInformacion }}
    </DataTableData>
    <DataTableData
      style="flex: 1;"
      :class="getStatusStyleObj(credit.estatus)"
    >
      {{ credit.estatus }}
    </DataTableData>
    <DataTableData style="flex: 1;">
      {{ credit.finalizacion }}
    </DataTableData>
    <DataTableData style="flex: 1;">
      {{ credit.usuario }}
    </DataTableData>
    <DataTableData>
      <i class="fas fa-plus-square table-action-button"></i>
    </DataTableData>
    <DataTableData>
      <i class="fas fa-chevron-right table-action-button"></i>
    </DataTableData>
  </DataTableRow>
</template>

<script>
import DataTableData from '@/components/DataTable/DataTableData.vue'
import DataTableRow from '@/components/DataTable/DataTableRow.vue'

export default {
  props: {
    credit: {
      type: Object,
      required: true,
    },
  },
  components: { DataTableRow, DataTableData },
  setup() {
    const getStatusStyleObj = (status) => {
      switch (status) {
        case 'Finalizado':
          return {
            'text-green': true,
          }
        case 'En proceso':
          return {
            'text-yellow': true,
          }
        case 'Rechazado':
          return {
            'text-red': true,
          }
        default:
          return { 'text-green': false }
      }
    }
    return { getStatusStyleObj }
  },
}
</script>

<style lang="css" scoped>
.text-red {
  color: rgb(170, 55, 55);
}

.text-green {
  color: var(--accent-color);
}

.text-yellow {
  color: rgb(211, 211, 44);
}
.archivo {
  /* flex: 1 0 20rem; */
  font-size: 1.5rem;
  text-decoration: underline;
  cursor: pointer;
}

.table-action-button {
  color: grey;
  cursor: pointer;
}
</style>
