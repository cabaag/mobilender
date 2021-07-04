<template>
  <header id="header">
    <div class="header__container">
      <h1>Integra<span class="software">Software</span></h1>
      <UserMenu
        v-if="$route.name !== 'Login'"
        firstName="Carlos"
        lastName="Barranco"
      />
    </div>
  </header>
</template>

<script>
import UserMenu from "./UserMenu";

export default {
  components: {
    UserMenu,
  },
};
</script>

<style lang="css" scoped>
#header {
  position: fixed;
  top: 0;

  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: var(--secondary-color);
  font-size: 1.4rem;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
}

.software {
  color: var(--accent-color);
}
</style>
