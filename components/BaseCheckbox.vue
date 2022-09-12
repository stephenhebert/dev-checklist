<template>
  <button 
    @click="increment" 
    class="
    rounded
    shadow-md
    m-2
    bg-white
  "
  >
    <div
    class="
      ring-1
      rounded
      shadow-md
      border-1
      h-36px
      w-36px
      flex
    "
  :class="[computedOuterClasses]"
    >
    <span 
      v-if="modelValue > 0"
      class="inline-flex m-auto text-white z-1 i-mdi-check-outline"
      :class="[computedInnerClasses]"
    ></span>
    </div>
  </button>
</template>

<script>
const states = {
  0: { name: 'Uninitiated' },
  1: { name: 'Remembered' },
  2: { name: 'Understood' },
  3: { name: 'Applied' },
  4: { name: 'Analyzed' },
  5: { name: 'Evaluated' },
  6: { name: 'Created' },
}
export default {
  name: 'BaseCheckbox',
  emits: ['update:modelValue'],
  computed: {
    computedOuterClasses() {
      // if (this.modelValue === 6) return ['border-green-500 bg-green-500 ring-green-500/80']
      if (this.modelValue === 6) return ['bg-green-500 border-green-500 ring-green-500/80']
      const classes = []
      classes.push('border-gray-500 bg-white ring-gray-500/80')
      // if (this.modelValue > 0) classes.push(' ring-green-500/80')
      if (this.modelValue === 1) classes.push('!bg-green-500/10')
      if (this.modelValue === 2) classes.push('!bg-green-500/20')
      if (this.modelValue === 3) classes.push('!bg-green-500/30')
      if (this.modelValue === 4) classes.push('!bg-green-500/40')
      if (this.modelValue === 5) classes.push('!bg-green-500/50')
      // classes.push('border-green-500 bg-green-500')
      return classes
    },
    computedInnerClasses() {
      // if (this.modelValue === 0) return 'text-12px'
      if (this.modelValue === 1) return 'text-12px'
      if (this.modelValue === 2) return 'text-16px'
      if (this.modelValue === 3) return 'text-20px'
      if (this.modelValue === 4) return 'text-24px'
      if (this.modelValue === 5) return 'text-28px'
      if (this.modelValue === 6) return 'text-32px'
    }
  },
  setup() {
    return { states }
  },
  props: {
    'modelValue': Number,
  },
  created() {
    if (this.modelValue === undefined) this.$emit('update:modelValue',0)
  },
  methods: { 
    increment() {
      this.$emit('update:modelValue', (this.modelValue + 1) % 7 )
    }
  }

}
</script>

<style>

</style>