<template>
  <div class="area-map-card">
    <div class="area-map-card__header">
      <span class="dashboard-title">Mapa</span>
      <span class="area-map-card__last-update"> Última actualización: Hace 5 días </span>
    </div>
    <div class="area-map-card__body">
      <img :src="mapamundi" alt="Area Map" class="area-map-card__image" />
    </div>
  </div>
</template>

<script setup lang="ts">
import mapamundi from '@/assets/mapamundi.png'
</script>

<style scoped lang="scss">
.area-map-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 16px;
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  &__title {
    font-size: 1rem;
    font-weight: bold;
  }

  &__last-update {
    color: #8a8a8a;
    font-size: 0.8rem;
  }

  &__body {
    display: flex;
  }

  &__image {
    width: 100%;
    max-height: 310px;
    object-fit: cover;
  }
}
</style>
