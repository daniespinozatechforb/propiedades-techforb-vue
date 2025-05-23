<template>
  <div class="dropdown">
    <select
      class="dropdown__field"
      :class="{ 'field-standard': fieldStandard }"
      :value="modelValue"
      :placeholder="placeholder"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
      <option disabled value="" hidden>{{ placeholder }}</option>

      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

interface Props {
  modelValue: string
  fieldStandard?: boolean
  placeholder?: string
  options?: string[]
}

const { modelValue, fieldStandard, placeholder, options } = withDefaults(defineProps<Props>(), {
  modelValue: '',
  fieldStandard: false,
  placeholder: 'Selecciona una opción',
  options: () => [],
})

defineEmits(['update:modelValue'])
</script>

<style scoped lang="scss">
.dropdown {
  position: relative;

  &__label {
    font-size: 14px;
    color: #333;
    display: block;
    margin-bottom: 8px;
  }

  &__field {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: inherit;
    font-size: 16px;
    background-color: white;
    cursor: pointer;
    transition: border-color 0.3s;

    &:focus {
      outline: none;
      border-color: #0066cc;
      box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.2);
    }

    &.field-standard {
      padding: 12px;
      font-size: 14px;
    }
  }
}
</style>
