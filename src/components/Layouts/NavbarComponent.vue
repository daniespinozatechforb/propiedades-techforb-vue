<template>
  <section class="navbar">
    <div class="navbar__container">
      <div class="navbar__header">
        <h1>L O G O</h1>
      </div>
      <nav class="navbar__navigation" :class="{ active: isMenuOpen }">
        <ul class="link-list">
          <li><a href="#" class="link-list__item">Inicio</a></li>
          <li><a href="#" class="link-list__item">Nosotros</a></li>
          <li><a href="#" class="link-list__item">Propiedades</a></li>
          <li>
            <a href="#" class="link-list__item" v-if="!displayName" @click.prevent="login">Login</a>
            <a href="#" class="link-list__item" v-else @click.prevent="logout">Logout</a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { signInWithPopup /* auth, provider */ } from '@/firebase'
import { getAuth, GoogleAuthProvider, signOut } from 'firebase/auth'
import router from '@/router'

const isMenuOpen = ref(false)
const displayName = ref(localStorage.getItem('displayName'))

const login = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      const user = result.user
      if (user.displayName) {
        localStorage.setItem('displayName', user.displayName)
        displayName.value = user.displayName
      }
      router.push('/home')
    })
    .catch((error) => {
      console.log(error)
    })
}

const logout = () => {
  signOut(getAuth()).then(() => {
    localStorage.removeItem('displayName')
    displayName.value = null
    router.push('/login')
  })
}
</script>

<style scoped lang="scss">
.navbar {
  width: 100%;
  height: auto;
  position: absolute;
  top: 58px;
  display: flex;
  gap: 24px;
  height: 45px;
  justify-content: center;

  &__container {
    width: 80%;
    display: flex;
    align-items: center;
  }

  &__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: xxx-large;
      color: white;
    }
  }

  &__toggle {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
  }
}

.link-list {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;

  &__item {
    display: inline-block;
    text-decoration: none;
    color: white;
    padding: 0.5rem 1.25rem;
    border-radius: 2rem;
    font-weight: 600;
    transition: all 0.3s ease;
    border: 1px solid transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border: 1px solid white;
    }

    &:focus {
      outline: none;
      border: 1px solid white;
      background-color: rgba(255, 255, 255, 0.15);
    }
  }
}

@media screen and (max-width: 600px) {
  .navbar {
    &__container {
      flex-direction: column;
    }

    &__toggle {
      display: block;
    }

    &__navigation {
      display: none;
      width: 100%;
      background-color: #f8f9fb;
      border-radius: 8px;
      padding: 1rem;
      margin-top: 1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      &.active {
        display: block;
      }

      .link-list {
        flex-direction: column;
        gap: 0.5rem;

        &__item {
          color: #333;
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #e0e0e0;
          border-radius: 0;

          &:hover {
            background-color: #e9ecef;
            border-bottom: 1px solid #e0e0e0;
          }

          &:last-child {
            border-bottom: none;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1124px) {
  .navbar {
    &__container {
      flex-direction: column;
    }
  }
}
</style>
