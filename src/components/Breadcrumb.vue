<template>
  <nav id="breadcrumb">
    <ul>
      <li v-for="(breadcrumb, index) in breadcrumbList" :key="index">
        <a @click="routeTo(index)" :class="{ linked: !!breadcrumb.link }">
          {{ breadcrumb.name }}
        </a>
        <span v-if="index !== breadcrumbList.length - 1">
          &nbsp;/&nbsp;
        </span>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
  setup() {
    const breadcrumbList = ref([])
    const route = useRoute()
    const router = useRouter()

    const updateList = () => (breadcrumbList.value = route.meta.breadcrumb)

    const routeTo = (index) => {
      if (breadcrumbList.value[index].link) {
        router.push(breadcrumbList.value[index].link)
      }
    }

    onMounted(() => {
      updateList()
    })

    watch(route, () => {
      updateList()
    })

    return {
      breadcrumbList,
      routeTo,
    }
  },
}
</script>

<style lang="css" scoped>
#breadcrumb {
  padding: 20px 0;
  font-size: 1.2rem;
}

ul {
  text-decoration: none;
  color: var(--grey-color);
  margin: 1rem;
  list-style-type: none;
  display: flex;
}

li a {
  color: var(--grey-color);
  text-decoration: none;
  cursor: pointer;
}

.linked {
  color: var(--grey-light-color);
  text-decoration: underline;
}
</style>
