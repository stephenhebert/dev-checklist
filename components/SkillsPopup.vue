<template>
    <div class="skill-popup absolute flex flex-col flex-gap-y-1 bg-white p-1 rounded-3 w-100vw">
      <SkillsPopupRow />
      <SkillsPopupRow />
      <SkillsPopupRow />
    </div>
</template>



<style scoped lang="scss">
.skill-popup :deep(.row) {
  padding: 4px 0;
  border-top: 0.5px solid rgba(0,0,0,.3);
  border-bottom: 0.5px solid rgba(0,0,0,.3);

  &:nth-child(odd) {
    background-color: rgba(0,0,0,.1)
  }
  &:nth-child(even) {
    background-color: rgba(0,0,0,.2)
  }

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
}
</style>