<template>
  <data-table>
    <tbody>
      <softwares-table-row
        v-for="(software, index) in softwares"
        :key="index"
        :software="software"
        :index="index"
      />
    </tbody>
  </data-table>
</template>

<script>
import DataTable from "@/components/DataTable/DataTable.vue";
import axiosClient from "@/axiosClient";
import softwaresMock from "@/mocks/softwares.json";
import SoftwaresTableRow from "./SoftwaresTableRow.vue";

export default {
  components: { DataTable, SoftwaresTableRow },
  async setup() {
    const softwares = await axiosClient.get("/api/unknown");

    // mocking data
    const setMockData = new Promise((resolve) => {
      setTimeout(() => {
        softwares.data = softwaresMock;
        resolve(softwares);
      }, 1000);
    });

    await setMockData;

    return {
      softwares: softwares.data,
    };
  },
};
</script>

<style , DataTableDatalang="scss" scoped></style>
