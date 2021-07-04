<template>
  <div class="user-menu">
    <div class="user-menu__name">
      {{ firstName + ' ' + lastName }}
    </div>
    <div class="user-menu__avatar">
      <UserAvatar :firstName="firstName" :lastName="lastName" />
    </div>
    <div class="user-menu__menu">
      <i class="fas fa-chevron-down" style="color: grey;"></i>
    </div>
    <div class="user-menu__options">
      <ul>
        <li @click="signOut">Cerrar Sesión</li>
      </ul>
    </div>
  </div>
</template>

<script>
import UserAvatar from './UserAvatar.vue'
export default {
  components: { UserAvatar },
  props: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  methods: {
    signOut() {
      this.$store.commit('logOut')
      this.$router.push({ name: 'Login' })
    },
  },
}
</script>

<style lang="css" scoped>
.user-menu {
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 100%;
  padding: 1rem;
  position: relative;
  width: 20rem;
}
.user-menu__avatar {
  margin: 0 1rem 0 1rem;
}

.user-menu:hover {
  background-color: var(--primary-color);
}

.user-menu:hover .user-menu__options {
  transition: all 0.5s ease;
  transform: translateY(6rem);
  opacity: 100%;
}

.user-menu__options {
  opacity: 0%;
  background-color: var(--secondary-color);
  position: absolute;
  left: 0rem;
  width: 20rem;
  z-index: -1;
}

.user-menu__options > ul {
  text-decoration: none;
  list-style-type: none;
}

.user-menu__options > ul > li {
  padding: 2rem;
}
</style>
