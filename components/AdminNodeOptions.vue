<template>
  <VDropdown class="flex flex-col items-center">
    <button class="i-mdi-more-vert" />
    <template #popper>
      <div class="flex flex-col flex-gap-2">
        <button class="i-mdi-edit" @click="$emit('edit')" />
        <button class="i-mdi-arrow" @click="$emit('move')" />
        <button class="i-mdi-remove" @click="$emit('remove')" />
      </div>
    </template>
  </VDropdown>
</template>

