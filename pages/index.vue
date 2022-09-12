<template>
  <div>
    <AppHeader />
    <div>This is the index</div>
    <div><BaseCheckbox v-model="checkbox" /></div>
  </div>
</template>

<script>
import { useUser } from '~/stores/user'
export default {
  setup() {
    const user = useUser();
    // const checkboxes = ref([])
    return { user }
  },
  data() {
    return {
      checkbox: 0,
    }
  }
}
</script>

<style scoped>

</style>