<template>
  <div class="user-avatar">
    <span v-if="!image">{{ initials }}</span>
    <img v-else :src="image" alt="avatar" class="user-avatar__avatar" />
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    image: String,
  },
  setup(props) {
    const initials = computed(function() {
      const firstLetter = props.firstName.split("")[0];
      const secondLetter = props.lastName.split("")[0];
      return firstLetter + secondLetter;
    });

    return { initials };
  },
};
</script>

<style lang="css" scoped>
.user-avatar {
  width: 4rem;
  height: 4rem;
  background-color: var(--grey-light-color);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  overflow: hidden;
}
.user-avatar__avatar {
  width: 4rem;
  height: 4rem;
  vertical-align: middle;
}
</style>
