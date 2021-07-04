<template>
  <div class="searchbar__container">
    <i class="fas fa-search searchbar__icon"></i>
    <input
      type="search"
      class="searchbar__input"
      :placeholder="placeholder"
      v-model="search"
      @keyup="onSearch(search)"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String,
    change: Function,
  },
  data() {
    return {
      search: '',
    }
  },
  setup(props) {
    const onSearch = (search) => {
      if (props.change) {
        props.change(search)
      }
    }
    return {
      onSearch,
    }
  },
}
</script>

<style lang="css" scoped>
.searchbar__icon {
  color: grey;
  font-size: 2.3rem;
  margin-left: 2rem;
}
.searchbar__container {
  background-color: var(--primary-color);
  border: 2px solid var(--grey-color);
  border-radius: 0.8rem;
  margin-top: 0.5rem;
  width: 100%;

  display: flex;
  align-items: center;
}
.searchbar__input {
  background-color: none;
  background-color: var(--primary-color);
  border: none;
  outline: none;
  border-radius: 0.2rem;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  font-size: 1.6rem;

  flex: 1;
  height: 100%;
  padding: 2rem;
}
</style>
