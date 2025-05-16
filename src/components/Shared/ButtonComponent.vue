<template>
  <button
    class="button"
    :class="[`button--${type}`, { 'button--active': isActive }, 'field-standard']"
    :disabled="disabled"
    @click="handleClick"
  >
    <span v-if="type === 'search'" class="button__icon material-icons">{{ icon || 'search' }}</span>
    <span v-if="type === 'filter'" class="button__icon material-icons">{{ icon || 'filter' }}</span>
    <span v-if="!(type === 'search' && !text)" class="button__text">{{ text }}</span>
    <span v-if="type === 'menu'" class="button__icon material-icons">{{ icon || 'menu' }}</span>
  </button>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

interface Props {
  text?: string
  type?: 'menu' | 'filter' | 'search' | 'tab'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  isActive?: boolean
  icon?: string
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  type: 'menu',
  size: 'medium',
  disabled: false,
  isActive: false,
  icon: undefined,
})

const emit = defineEmits(['click'])

const handleClick = () => {
  if (!props.disabled) {
    emit('click')
  }
}
</script>

<style scoped lang="scss">
@import 'material-icons/iconfont/material-icons.css';
@import '@/assets/variables.scss';

.button {
  font-family: inherit;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  background: $font-color;
  transition: all 0.1s ease;
  font-weight: 500;
  color: $font-subtitle-color;

  &--search {
    background: $primary-color;
    color: $font-color;
    border-radius: 4px;

    &:hover {
      background: darken($primary-color, 10%);
    }
  }

  &--filter {
    background: $font-color;
    color: $primary-color;

    &:hover {
      background: darken(#ffffff, 10%);
    }
  }

  &--tab {
    &:hover {
      color: $font-title-color;
    }
  }

  &--menu {
    border: 0.5px solid #d2d2d2;
    border-radius: 5px;
    padding: 5px;
    background: none;
    cursor: pointer;
    height: 40px;

    &:hover {
      background: darken($background-color, 10%);
    }
  }

  &--active {
    border-bottom: 2px solid transparent;
    font-weight: 600;
    border-bottom-color: $primary-color-active;
    border-bottom-width: 3px;
    color: $font-title-color;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
}
</style>
