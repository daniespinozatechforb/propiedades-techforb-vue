<template>
  <div class="dashboard-card">
    <div class="dashboard-card__info">
      <span class="dashboard-card__title">{{ title }}</span>
      <p class="dashboard-card__amount">{{ amount }}</p>
    </div>
    <div class="dashboard-card__icon-container">
      <span class="dashboard-card__icon material-icons">{{ icon }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  amount: number
  icon: string
}>()
</script>

<style scoped lang="scss">
.dashboard-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: white;
  }

  &__title {
    font-size: 0.8rem;
    color: #666;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  &__amount {
    font-size: 1.4rem;
    font-weight: 600;
    text-align: start;
    background-color: white;
  }

  &__icon-container {
    display: flex;
    align-items: center;
    padding: 5px;
  }

  &__icon {
    color: #16a34a;
  }
}
</style>
