<template>
  <DataTableRow @click="() => $router.push({ name: 'ChangesControl' })">
    <DataTableData>
      <div class="cliente-data">
        <UserAvatar
          :firstName="user.first_name"
          :lastName="user.last_name"
          :image="user.avatar"
        />
        <h3 class="fullName-data">
          {{ fullName }}
        </h3>
      </div>
    </DataTableData>
    <DataTableData>
      {{ user.email }}
    </DataTableData>
    <DataTableData class="chevron-data">
      <i class="fas fa-chevron-right chevron-right"></i>
    </DataTableData>
  </DataTableRow>
</template>

<script>
import DataTableData from '@/components/DataTable/DataTableData.vue'
import DataTableRow from '@/components/DataTable/DataTableRow.vue'
import UserAvatar from '@/components/UserAvatar.vue'

export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  components: { DataTableRow, DataTableData, UserAvatar },
  setup(props) {
    const fullName = props.user.first_name + ' ' + props.user.last_name
    return { fullName }
  },
}
</script>

<style lang="css" scoped>
.cliente-data {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}

.fullName-data {
  color: white;
  margin-left: 2rem;
}

.chevron-data {
  width: 5rem;
}
.chevron-right {
  color: grey;
}
</style>
