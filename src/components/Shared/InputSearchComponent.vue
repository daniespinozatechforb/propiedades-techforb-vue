<template>
  <div class="input">
    <label v-if="label" class="input__label" :for="inputId">{{ label }}</label>
    <input
      :id="inputId"
      class="input__field field-standard"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string
  label?: string
  type?: string
  placeholder?: string
}>()

const inputId = 'inputField'

const placeholder = computed(() => props.placeholder || 'Buscar por ubicación o palabra clave...')
</script>

<style scoped lang="scss">
.input {
  &__label {
    font-size: 14px;
    color: #333;
  }

  &__field {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;

    &:focus {
      outline: none;
      border-color: #0066cc;
      box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.2);
    }
  }
}
</style>
