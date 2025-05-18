<template>
  <div class="card">
    <div class="card__header">
      <span class="dashboard-title">Top Propiedades</span>
      <a href="#" class="subtitle">Ver más →</a>
    </div>

    <div class="card__body">
      <table class="table">
        <thead class="table__head">
          <tr>
            <th class="table__cell">Propiedad</th>
            <th class="table__cell">Localización</th>
            <th class="table__cell">Tendencia</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(property, index) in propertiesRef" :key="index">
            <td class="table__cell property__info">
              <img :src="property.image" alt="Property" class="thumbnail" />
              <span>{{ property.name }}</span>
            </td>
            <td class="table__cell data">{{ property.location }}</td>
            <td class="table__cell">
              <span
                class="property__trend"
                :class="{
                  'property__trend--up': property.trend > 0,
                  'property__trend--down': property.trend < 0,
                }"
              >
                {{ property.trend > 0 ? '↑' : '↓' }} {{ property.trend }}%
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { properties } from '@/models/topProperties'
import { ref } from 'vue'

const propertiesRef = ref(properties)
</script>

<style scoped lang="scss">
.property__info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.property__trend {
  font-weight: bold;

  &--up {
    color: #16a34a;
  }

  &--down {
    color: #dc2626;
  }
}
</style>
