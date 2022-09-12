<template>
  <div class="flex flex-row justify-around gap-2 mx-1 my-2 text-upright">
    <div class="vertical" v-for="category in categories" :key="category">{{ category }}</div>
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

<style scoped>
.vertical { 
  writing-mode: vertical-rl; 
  /* text-orientation: upright;  */
  text-transform: uppercase;
  font-weight: 500;
  transform: rotate(180deg);
}
</style>