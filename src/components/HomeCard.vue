<template>
  <router-link exact :to="url" class="root">
    <div class="homecard">
      <h2 class="homecard__text">
        <slot></slot>
      </h2>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {}
  },
}
</script>

<style lang="css" scoped>
.root {
  text-decoration: none;
}
.homecard {
  width: 30rem;
  height: 20rem;
  border-radius: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--secondary-color);
  padding: 2rem;
  cursor: pointer;
  margin: 2rem 2rem 2rem;
}
.homecard__text {
  color: var(--white-color);
  text-transform: uppercase;
}
</style>
