<template>
  <div id="app">
    <Header />
    <div class="content">
      <Breadcrumb v-if="$route.name !== 'Login'" />
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import './globalStyles.css'
export default {
  name: 'App',
  components: {
    Header,
    Breadcrumb,
  },
}
</script>

<style lang="css" scoped>
.content {
  margin: 0 auto;
  width: 80%;
  min-height: 50rem;
  font-size: 1.3rem;
  margin-top: 60px;
  height: calc(100vh - 60px);
  /* background-color: var(--secondary-color); */
}
</style>
