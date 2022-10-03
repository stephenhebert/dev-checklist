<template>
  <div>
    <!-- header -->
    <!-- {{ rootChildren }} -->
    <AdminNode v-for="child in rootChildren" v-bind="{ ...child }" />
  </div>
</template>

<script setup>
import axios from 'axios'
const rootChildren = ref([])
  try {
    const responseData = await axios.get('api/children')
    if (responseData) 
      rootChildren.value = responseData.data?.result
  } catch (error) {
    console.error(error)
  }


</script>