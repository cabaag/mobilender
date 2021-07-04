<template>
  <div>
    <NavigationTitle>
      <template #back-button>
        <CircleButton :action="() => $router.back()">
          <i class="fas fa-arrow-left"></i>
        </CircleButton>
      </template>

      <template #icon>
        <i class="fas fa-search"></i>
      </template>

      Inspeccionar
    </NavigationTitle>
    <div v-if="error">
      {{ error }}
    </div>
    <Suspense>
      <template #default>
        <InspectTable />
      </template>
      <template #fallback>
        <loader />
      </template>
    </Suspense>
  </div>
</template>

<script>
import { ref, onErrorCaptured } from "vue";
import CircleButton from "@/components/CircleButton.vue";
import NavigationTitle from "@/components/NavigationTitle.vue";
import Loader from "@/components/Loader.vue";
import InspectTable from "./components/InspectTable.vue";
export default {
  components: {
    NavigationTitle,
    CircleButton,
    InspectTable,
    Loader,
  },
  setup() {
    const error = ref(null);
    onErrorCaptured((e) => {
      error.value = e;
      return true;
    });
    return { error };
  },
};
</script>

<style lang="css" scoped></style>
