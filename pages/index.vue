<template>
  <div>
    <AppHeader />
    <div>This is the index</div>
    <div class="inline-flex relative">
      <div class="absolute inset-0 bg-white">
        <div class="grid min-h-full grid-flow-col auto-cols-auto">
          <div class="bg-red-700/50"></div>
          <div class="bg-orange-700/50"></div>
          <div class="bg-yellow-700/50"></div>
          <div class="bg-green-700/50"></div>
          <div class="bg-blue-700/50"></div>
          <div class="bg-indigo-700/50"></div>
        </div>
      </div>
      <div class="flex flex-col flex-gap-y-4 z-1 py-2">
        <CategoryList />

        <CheckboxArray v-model="count" />
        <CheckboxArray v-model="count" />
        <CheckboxArray v-model="count" />
      </div>
    </div>
  </div>
</template>

<script>
import { useUser } from '~/stores/user'
export default {
  setup() {
    const user = useUser();
    return { user }
  },
  data() {
    return {
      count: 75,
    }
  }
}
</script>

