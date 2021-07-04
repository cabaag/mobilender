<template>
  <data-table>
    <tbody>
      <SoftwaresRow
        v-for="(software, index) in softwares"
        :key="index"
        :software="software"
        :index="index + 1"
      />
    </tbody>
  </data-table>
</template>

<script>
import DataTable from '@/components/DataTable/DataTable.vue'
import SoftwaresRow from './SoftwaresRow.vue'
import { getSoftwares } from '@/services/softwares'

export default {
  components: { DataTable, SoftwaresRow },
  async setup() {
    const softwares = await getSoftwares()

    return {
      softwares,
    }
  },
}
</script>
