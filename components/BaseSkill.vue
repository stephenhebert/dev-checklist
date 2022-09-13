<template>
  <div class="skill inline-flex relative grow z-2">
    <div>
      <BaseRow>
        <div class="flex flex-row items-center">
          <div class="header text-green-300" :class="{ open: isOpen }">{{ name }}</div>
          <button @click="toggle" class="rounded-1/2 py-1 px-1"><div class="text-32px text-white duration-150" :class="[(isOpen ? 'i-mdi-eye-off-outline' : 'i-mdi-eye')]"></div></button>
        </div>
      </BaseRow>
      <SkillsPopup v-if="isOpen"/>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['name'])
const isOpen = ref(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>


<style scoped lang="scss">
.header {
  // width: calc(100% - var(--clamped-width));
  font-family: var(--font-serif);
  font-weight: 600;
  font-size: 32px;
  line-height: 32px;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 0 8px 0 8px;
  position: relative;
  display: inline-block;

}

.header.open::after {
    content:'';
    position: absolute;
    z-index: -1;
    left: calc(50% - 8px); 
    bottom: -24px;
    width: 16px; 
    height: 16px;
    border-radius: 4px;
    background-color: white;
    transform:rotate(45deg);
}


</style>