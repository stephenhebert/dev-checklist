<template>
  <Dialog :open="isOpen" @close="close" class="fixed inset-0 w-full min-h-100% flex items-center justify-center">
    <DialogOverlay class="absolute inset-0 bg-black/30" />
    <DialogPanel class="absolute z-2 bg-white w-500px rounded-4 shadow-lg flex flex-col flex-gap-y-2">
      <div class="p-4 bg-blue-600 text-white rounded-t-4">
        <DialogTitle class="fw-bold text-xl font-serif">Add/Edit Node</DialogTitle>
        <!-- <DialogDescription class="text-sm">
          This will permanently deactivate your account
        </DialogDescription> -->
      </div>
      <div class="p-4">
        <FormKit
          type="form"
          id="registration-example"
          submit-label="Save"
          @submit="submitHandler"
          #default="{ value }"
        >

          <FormKit
            type="text"
            name="name"
            label="Name"
            validation="required"
            validation-visibility="dirty"
          />

          <FormKit
            type="text"
            name="description"
            label="Description"
            validation="required"
            validation-visibility="dirty"
          />

          <div>{{ value }}</div>
        <!-- <div class="flex flex-row flex-gap-2">
          <button @click="close" class="fw-semibold p-2 border-1 rounded bg-blue border-blue-500 hover:bg-blue-500 color-white">Deactivate</button>
          <button @click="close" class="fw-semibold p-2 color-gray" >Cancel</button>
        </div> -->

        </FormKit>
      </div>
      <!-- <FormKit type="form"> -->
    </DialogPanel>
  </Dialog>
</template>

<script setup>
  // import { ref, define } from 'vue'
  import {
    Dialog,
    DialogOverlay,
    DialogPanel,
    DialogTitle,
    DialogDescription,
  } from '@headlessui/vue'

  const props = defineProps(['node'])
  const state = ref({
    id: undefined,
    name: '',
    description: '',
    resources: [],
    relatedNodes: [],
  })

  const isOpen = ref(true)

  const open = () => { isOpen.value = true}
  const close = () => { isOpen.value = false}

  const submitHandler = () => { 
    console.log('submit')
  }

  defineExpose({
    open,
    close
  })
</script>