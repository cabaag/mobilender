<template>
  <DataTableRow>
    <DataTableData style="width: 25rem;">
      <div class="change-data">
        <CounterSquare>
          <span v-if="index < 10">0{{ index }}</span>
          <span v-else>
            {{ index }}
          </span>
        </CounterSquare>
        <h3 class="change-file">
          {{ change.file }}
        </h3>
      </div>
    </DataTableData>
    <DataTableData>
      {{ change.date }}
    </DataTableData>
    <DataTableData>
      {{ change.changes }}
    </DataTableData>
  </DataTableRow>
</template>

<script>
import CounterSquare from '@/components/CounterSquare.vue'
import DataTableData from '@/components/DataTable/DataTableData.vue'
import DataTableRow from '@/components/DataTable/DataTableRow.vue'
export default {
  props: {
    change: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  components: { DataTableRow, DataTableData, CounterSquare },
  setup() {
    return {}
  },
}
</script>

<style lang="css" scoped>
.change-data {
  display: flex;
  align-items: center;
  width: 25rem;
}

.change-file {
  color: white;
  margin-left: 2rem;
}
</style>
