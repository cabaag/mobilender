<template>
  <data-table>
    <template #head>
      <thead>
        <tr>
          <th class="th-left">Archivo</th>
          <th class="th-left">Expedición</th>
          <th class="th-left">Calidad de la información (%) </th>
          <th class="th-left">Estatus</th>
          <th class="th-left">Finalización</th>
          <th class="th-left">Usuario</th>
          <th class="th-left">Acciones</th>
          <th class="th-left"></th>
        </tr>
      </thead>
    </template>
    <tbody>
      <CreditGroupsRow
        v-for="(credit, index) in creditos"
        :key="index"
        :credit="credit"
        :index="index"
      />
    </tbody>
  </data-table>
</template>

<script>
import DataTable from '@/components/DataTable/DataTable.vue'
import CreditGroupsRow from './CreditGroupsRow.vue'
import { searchCreditGroups } from '@/services/credits.js'

export default {
  components: {
    DataTable,
    CreditGroupsRow,
  },
  async setup() {
    const creditos = await searchCreditGroups()

    return {
      creditos,
    }
  },
}
</script>

<style lang="css" scoped>
.th-left {
  text-align: left;
  padding-left: 2.5rem;
}
</style>
