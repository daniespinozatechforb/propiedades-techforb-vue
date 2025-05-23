<template>
  <div class="analytics-card">
    <div class="analytics-card__header">
      <span class="dashboard-title">Analíticas</span>
      <SelectComponent
        v-model="selectedOption"
        :options="['Anual', 'Mensual', 'Semanal', 'Diario']"
        placeholder="Anual"
      />
    </div>

    <div class="analytics-card__content">
      <div v-for="(item, index) in salesData" :key="index" class="analytics-card__item">
        <div class="analytics-card__item-title data">
          {{ item.label }} <span>{{ item.value }}%</span>
        </div>
        <div class="analytics-card__progress-bar">
          <div class="analytics-card__progress" :style="{ width: item.value + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SelectComponent from '../Shared/SelectComponent.vue'

const selectedOption = ref('Anual')

const salesData = ref([
  { label: 'Via Website', value: 50 },
  { label: 'Via Miembro Equipo', value: 12 },
  { label: 'Via Agentes', value: 6 },
  { label: 'Via Redes Sociales', value: 15 },
  { label: 'Via Marketing Digital', value: 12 },
  { label: 'Otros', value: 5 },
])
</script>

<style scoped lang="scss">
.analytics-card {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;

  &__header {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-weight: bold;
    font-size: 1rem;
  }

  &__content {
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__item {
    display: flex;
    flex-direction: column;
  }

  &__item-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
  }

  &__progress-bar {
    background-color: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
    height: 6px;
  }

  &__progress {
    background-color: #365196;
    height: 100%;
    transition: width 0.3s ease-in-out;
  }
}
</style>
