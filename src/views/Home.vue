<template>
  <div class="home-container">
    <home-card url="/softwares">
      Listado de softwares
    </home-card>
    <home-card url="/search_group_credits">
      Buscar créditos grupales
    </home-card>
  </div>
</template>

<script>
import HomeCard from '../components/HomeCard.vue'
export default {
  components: { HomeCard },
}
</script>

<style lang="css" scoped>
.home-container {
  display: flex;
}
</style>
