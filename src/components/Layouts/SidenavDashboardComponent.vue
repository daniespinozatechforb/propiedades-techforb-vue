<template>
  <div class="sidenav" :class="{ 'sidenav--open': isOpen }">
    <ul class="sidenav__list">
      <li v-for="(item, index) in sidenavContent" :key="index" class="sidenav__item">
        <a
          href="#"
          class="sidenav__link"
          @click.prevent="item === 'Cerrar Sesion' ? logout() : null"
          >{{ item }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { getAuth, signOut } from 'firebase/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Props
defineProps<{
  isOpen: boolean
}>()

const displayName = ref(localStorage.getItem('displayName'))

const emit = defineEmits<{
  (e: 'close'): void
}>()

const router = useRouter()

// Lista del menú
const sidenavContent = [
  'Dashboard',
  'Perfil',
  'Propiedades',
  'Clientes',
  'Analiticas',
  'Mapa',
  'Contacto',
  'Inicio',
  'Cerrar Sesion',
]

const logout = () => {
  signOut(getAuth()).then(() => {
    localStorage.removeItem('displayName')
    emit('close')
    displayName.value = null
    router.push('/login')
  })
}
</script>

<style scoped lang="scss">
.sidenav {
  position: fixed;
  top: 60px;
  left: 0;
  width: 240px;
  height: calc(100% - 60px);
  background-color: #0f162a;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  overflow-x: hidden;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 1000;

  &--open {
    transform: translateX(0);
  }

  &__list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    padding: 1rem;
    border-bottom: 1px solid #eee;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: #365196;
    }
  }

  &__link {
    text-decoration: none;
    font-weight: 600;
    color: #8a8a8a;
    display: block;

    &:hover {
      color: #ffffff;
    }
  }
}
</style>
