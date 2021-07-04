<template>
  <div>
    <NavigationTitle>
      <template #icon>
        <i class="far fa-file-excel"></i>
      </template>

      Listado de softwares

      <template #action-button>
        <AppButton>
          <template #icon>
            <i class="fas fa-plus"></i>
          </template>
          Agregar Nuevo
        </AppButton>
      </template>
    </NavigationTitle>
    <div v-if="error">
      {{ error }}
    </div>
    <Suspense>
      <template #default>
        <SoftwaresTable />
      </template>
      <template #fallback>
        <loader />
      </template>
    </Suspense>
  </div>
</template>

<script>
import { ref, onErrorCaptured } from 'vue'
import AppButton from '@/components/AppButton.vue'
import NavigationTitle from '@/components/NavigationTitle.vue'
import Loader from '@/components/Loader.vue'
import SoftwaresTable from './components/SoftwaresTable.vue'
export default {
  components: {
    NavigationTitle,
    AppButton,
    SoftwaresTable,
    Loader,
  },
  setup() {
    const error = ref(null)
    onErrorCaptured((e) => {
      error.value = e
      return true
    })
    return { error }
  },
}
</script>

<style lang="css" scoped></style>
