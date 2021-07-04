<template>
  <DataTable>
    <template #head>
      <thead>
        <tr>
          <th class="th-left" style="width: 25rem;">Fecha</th>
          <th class="th-left">Archivo</th>
          <th class="th-left">Cambios</th>
        </tr>
      </thead>
    </template>
    <tbody>
      <ChangesControlRow
        v-for="(change, index) in changes"
        :key="index"
        :change="change"
        :index="index + 1"
      />
    </tbody>
  </DataTable>
</template>

<script>
import DataTable from '@/components/DataTable/DataTable.vue'
import ChangesControlRow from './ChangesControlRow.vue'
import { getChanges } from '@/services/changes-control'

export default {
  components: { DataTable, ChangesControlRow },
  async setup() {
    const changes = await getChanges()

    return {
      changes,
    }
  },
}
</script>

<style , DataTableDatalang="scss" scoped></style>
