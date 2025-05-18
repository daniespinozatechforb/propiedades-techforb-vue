<template>
  <div>
    <NavbarDashboardComponent @toggle-sidenav="onToggleSidenav" />
    <SidenavDashboardComponent :is-open="isSidenavOpen" />

    <main :class="['dashboard', { 'dashboard--sidenav-open': isSidenavOpen }]">
      <section class="dashboard__header">
        <span class="dashboard__title">Hola, {{ user }}</span>
        <span class="dashboard__subtitle">¡Bienvenido de nuevo!</span>
      </section>

      <section class="dashboard__cards">
        <DashboardCardComponent
          v-for="(item, index) in cardListRef"
          :key="index"
          :title="item.title"
          :amount="item.amount"
          :icon="item.icon"
        />
      </section>

      <section class="dashboard__analytics">
        <DashboardChartComponent class="dashboard__analytics-chart" />
        <DashboardDataComponent class="dashboard__analytics-data" />
      </section>

      <section class="dashboard__bottom-cards">
        <DashboardMapComponent />
        <DashboardTransactionsComponent />
        <DashboardTopPropertiesComponent />
      </section>
    </main>

    <FooterDashboardComponent />
  </div>
</template>

<script setup lang="ts">
import { ref /* computed, onMounted */ } from 'vue'

import NavbarDashboardComponent from '../Layouts/NavbarDashboardComponent.vue'
import SidenavDashboardComponent from '../Layouts/SidenavDashboardComponent.vue'
import { cardList } from '@/models/cardList.model'
import DashboardCardComponent from './DashboardCardComponent.vue'
import DashboardChartComponent from './DashboardChartComponent.vue'
import DashboardDataComponent from './DashboardDataComponent.vue'
import DashboardMapComponent from './DashboardMapComponent.vue'
import DashboardTransactionsComponent from './DashboardTransactionsComponent.vue'
import DashboardTopPropertiesComponent from './DashboardTopPropertiesComponent.vue'
import FooterDashboardComponent from '../Layouts/FooterDashboardComponent.vue'

const isSidenavOpen = ref(false)
const cardListRef = ref(cardList)
const onToggleSidenav = () => {
  isSidenavOpen.value = !isSidenavOpen.value
}

// Suponiendo que `useLoginService` devuelva un reactive o computed
const user = localStorage.getItem('displayName')
</script>

<style scoped lang="scss">
.dashboard {
  padding: 1.5rem;
  transition: margin-left 0.3s ease;
  background-color: #f8f9fb;

  &--sidenav-open {
    margin-left: 240px;
  }

  &__header {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: 1rem;
    font-weight: bold;
  }

  &__subtitle {
    font-size: 0.8rem;
    color: #666;
    font-weight: 500;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }

  &__analytics {
    display: flex;
    gap: 24px;
    margin-top: 32px;
    margin-bottom: 32px;
  }

  &__analytics-chart {
    flex: 2;
    min-width: 0;
  }

  &__analytics-data {
    flex: 1;
    min-width: 0;
  }

  &__bottom-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 1.5rem;
    width: 100%;
    margin-top: 2rem;
  }
}

@media (max-width: 768px) {
  .dashboard {
    &__analytics {
      flex-direction: column;
    }

    &--sidenav-open {
      margin-left: 0;
    }

    &__cards {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    &__title {
      font-size: 0.9rem;
    }
  }
}
</style>
