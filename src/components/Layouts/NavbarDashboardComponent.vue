<template>
  <nav class="navbar">
    <div class="navbar__left">
      <h1 class="navbar__logo">L O G O</h1>
      <ButtonComponent icon="menu" type="menu" @click="emitToggleSidenav" />
      <input type="text" placeholder="Buscar..." class="navbar__search-input" />
    </div>

    <div class="navbar__right">
      <img :src="language" class="navbar__icon" />
      <svg
        class="navbar__notification-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
        fill="#000000"
      >
        <path
          d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"
        />
      </svg>
      <img :src="profile" class="navbar__user-photo" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import ButtonComponent from '../Shared/ButtonComponent.vue'
import language from '@/assets/argentina.png'
import profile from '@/assets/profile.jpg'

const emit = defineEmits<{
  (e: 'toggleSidenav'): void
}>()

const emitToggleSidenav = () => {
  emit('toggleSidenav')
}
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #f8f9fb;

  &__left {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__menu-button {
    border: 0.5px solid #d2d2d2;
    border-radius: 5px;
    padding: 5px;
    background: none;
    cursor: pointer;
  }

  &__search-input {
    height: 36px;
    padding: 0 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    width: 300px;
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  &__icon,
  &__notification-icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  &__user-photo {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    &__search-input {
      display: none;
    }

    &__logo {
      font-size: 1.2rem;
    }

    &__menu-button {
      display: block;
    }

    padding: 0 8px;

    &__right {
      gap: 12px;
    }
  }
}
</style>
