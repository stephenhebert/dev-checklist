<template>
  <BaseRow>
    <div class="flex flex-wrap flex-gap-x-2 items-center text-dark">
      <span class="font-serif fw-600">Subskill 1</span>
      <ul class="resources text-xs underline inline text-blue-400 flex flex-gap-x-1">
        <!-- TODO: add a link badge number -->
        <ResourceLink :i="1" />
        <ResourceLink :i="2" />
        <ResourceLink :i="3" />
      </ul>
      <span class="description text-xs text-dark-100">This is a really really really long description</span>
    </div>
    <template #right>
      <CheckboxArray v-model="count" />
    </template>
  </BaseRow>
</template>

<script>
export default {
  data() {
    return {
      count: 75,
    }
  }
}
</script>

<style>

</style>