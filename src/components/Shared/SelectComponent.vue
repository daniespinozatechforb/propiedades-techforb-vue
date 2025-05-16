<template>
  <div class="dropdown">
    <select
      class="dropdown__field"
      :class="{ 'field-standard': fieldStandard }"
      id="dropdownField"
      :placeholder="placeholder"
    >
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

interface Props {
  fieldStandard?: boolean
  placeholder?: string
  options?: string[]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  fieldStandard: false,
  placeholder: 'Selecciona una opción',
  options: () => [],
})
</script>

<style scoped lang="scss">
.dropdown {
  position: relative;
  //width: 100%;

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
