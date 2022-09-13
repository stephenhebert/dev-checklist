<template>
  <div class="app-underlay">
    <div class="fixed inset-0 flex flex-row min-h-full pe-1 bg-dark-300">
      <div class="left"></div>
      <div class="right bg-blue-500 min-h-full">
        <div class="grid min-h-full grid-flow-col auto-cols-auto">
          <div class="bg-red-700/50"></div>
          <div class="bg-orange-700/50"></div>
          <div class="bg-yellow-700/50"></div>
          <div class="bg-green-700/50"></div>
          <div class="bg-blue-700/50"></div>
          <div class="bg-indigo-700/50"></div>
        </div>
      </div>
    </div>
    <div class="fixed inset-0 flex min-h-full pe-1">
      <BaseRow>
        <template #right>
          <CategoryList />
        </template>
      </BaseRow>
    </div>
  </div>
</template>

<script>
import categories from '~/models/categories'
export default {
  setup() {
    return {categories}
  }
}
</script>