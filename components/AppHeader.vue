<template>
  <div class="flex flex-row items-center px-4 py-2 bg-dark shadow-md z-1000">
    <div class="font-serif text-48px fw-bold lh-48px text-white shadow-lg">Frontend Dev Skills Checklist</div>
    <img v-if="user.photoURL" :src="user.photoURL" height="64" width="64" class="ml-auto rounded-1/2 border-1 shadow-lg shrink-0" />
    <!-- <div class="h3">Welcome, {{ user.displayName }}</div> -->
  </div>
</template>

<script>
import { useUser } from '~/stores/user'
export default {
  setup() {
    const { user } = useUser();
    return { user }
  },
}
</script>

<style>

</style>