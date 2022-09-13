<template>
  <li class="resource-link relative">
    <a href="#">
      <div v-if="i" class="badge absolute text-8px text-white bg-black px-1 z-1 rounded right-0">{{i}}</div>
      <div class="i-mdi-link text-24px" />
    </a>
  </li>
</template>

<script>
export default {
  props: ['i']
}
</script>

<style lang="scss" scoped>
.resource-link {
  &:after {
    content: '';
    content: var(--i,1);
    position: absolute;
    top: 0;
    left: 0;
    color: black;
    z-index: 1000;

  }



}
</style>