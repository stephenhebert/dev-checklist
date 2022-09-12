<template>
  <div class="flex flex-row items-center justify-end">
    <img :src="user.photoURL" height="64" width="64" class="rounded-1/2 border-1" />
    <!-- <div class="h3">Welcome, {{ user.displayName }}</div> -->
  </div>
</template>

<script>
import { useUser } from '~/stores/user'
export default {
  setup() {
    const user = useUser();
    return { user }
  },
}
</script>

<style>

</style>