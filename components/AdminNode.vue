<template>
  <div class="flex flex-col flex-gap-2 ml-10">
    <div class="flex flex-row items-center flex-gap-x-2">
      <div>{{ name }}</div>
      <AdminNodeOptions 
        @edit="edit"
        @move="move"
        @remove="remove"
      />
      <button v-if="!expanded" class="i-mdi-expand-more" @click="expand" />
      <button v-if="loading" class="i-mdi-hourglass" />
    </div>
    <div>

        <button class="i-mdi-add ml-10" @click="add" />
    </div>
    <AdminNodeEditModal ref="addNodeModal" />
  </div>
</template>

<script setup>
const props = defineProps(['name','id'])
const children = ref([])
const expanded = ref(false)
const loading = ref(false)

const addNodeModal = ref(null)

const expand = async() => {
  expanded.value = true
  loading.value = true
  console.log('expand', props.id)

  loading.value = false
}

const add = () => {
  console.log('add', props.id)
  addNodeModal.value.open()
}

const edit = () => {
  console.log('edit', props.id)
}

const move = () => {
  console.log('move', props.id)
}

const remove = () => {
  console.log('remove', props.id)
}



</script>