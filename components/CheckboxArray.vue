<template>
  <div data-checkbox-array class="flex flex-row justify-around gap-2 mx-1">
    <BaseCheckbox v-for="i of 6" :key="i" v-model="reversedBits[i-1]" />
  </div>
</template>

<script>
export default {
  props: {
    'modelValue': Number
  },
  emits: ['update:modelValue'],
  computed: { 
    bitValue() {
      const bitmap = this.reversedBits.map(b => b ? '1' : '0')
      return parseInt(bitmap.reverse().join(''),2)
    }
  },
  data() {
    return { 
      reversedBits: [false,false,false,false,false,false,false]
    }
  },
  watch: {
    modelValue: { 
      handler(val) {
        if (this.modelValue === this.bitValue) return
        const bitmap = val.toString(2)
        this.reversedBits = bitmap.split('').reverse().map(b => +b === 1)
      },
      immediate: true
    },
    bitValue(val) {
      if (this.modelValue === this.bitValue) return
      this.$emit('update:modelValue', val)
    }
  }
}
</script>

<style>

</style>