<template>
  <div class="inspeccionarTable-container">
    <SearchBar placeholder="ID, Nombre, email..." :change="onSearch" />
    <DataTable>
      <template #head>
        <thead>
          <tr>
            <th class="th-left" style="width: 30rem;">Cliente</th>
            <th class="th-left">E-mail</th>
            <th class="th-left"></th>
          </tr>
        </thead>
      </template>
      <tbody>
        <InspectRow
          v-for="(user, index) in filteredUsers"
          :key="user.first_name"
          :user="user"
          :index="index"
        />
      </tbody>
    </DataTable>
  </div>
</template>

<script>
import DataTable from '@/components/DataTable/DataTable.vue'
import SearchBar from '@/components/SearchBar.vue'
import { getUsers } from '@/services/users'
import InspectRow from './InspectRow.vue'

export default {
  components: { DataTable, InspectRow, SearchBar },
  data() {
    return {
      search: '',
    }
  },
  computed: {
    filteredUsers() {
      return this.users.filter(
        (u) =>
          this.search.includes(u.id) ||
          u.first_name.includes(this.search) ||
          u.last_name.includes(this.search) ||
          u.email.includes(this.search),
      )
    },
  },
  methods: {
    onSearch(search) {
      this.search = search
    },
  },
  async setup() {
    const users = await getUsers(1)
    return {
      users: users.data.data,
    }
  },
}
</script>

<style , DataTableDatalang="css" scoped>
.inspeccionarTable-container {
  display: flex;
  flex-direction: column;
}
.th-left {
  text-align: left;
  padding-left: 2.5rem;
}
</style>
