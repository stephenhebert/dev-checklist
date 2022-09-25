<template>
  <button 
    @click="toggle" 
    class="
      base-checkbox
      rounded
      shadow-md
      m-1
      ring-1
      shadow-md
      border-1
      flex
    "
  :class="[computedOuterClasses]"
    >
    <span 
      v-if="modelValue"
      class="m-auto text-white i-mdi-check-outline"
    ></span>
  </button>
</template>

<script>
export default {
  name: 'BaseCheckbox',
  emits: ['update:modelValue'],
  computed: {
    computedOuterClasses() {
      if (this.modelValue) return 'bg-green-500 border-green-500 ring-green-500/80'
      return 'border-gray-500 bg-white ring-gray-500/80'
    },
  },
  props: {
    'modelValue': Boolean,
  },
  methods: { 
    toggle() {
      this.$emit('update:modelValue', !this.modelValue )
    }
  }

}
</script>

<style scoped>
.base-checkbox {
  --responsive: clamp(12px, 4vw, 30px); 
  min-height: var(--responsive);
  min-width: var(--responsive);
  font-size: calc(var(--responsive) * .8);
}
</style>