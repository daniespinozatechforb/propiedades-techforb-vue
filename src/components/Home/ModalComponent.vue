<template>
  <div class="modal-overlay" @click.self="emit('close')">
    <div class="modal-container">
      <h2 class="modal-title">Resultados de la búsqueda</h2>
      <div class="property-grid" v-if="results && results.length">
        <PropertyCardComponent v-for="(prop, index) in results" :key="index" :propiedad="prop" />
      </div>
      <div v-else>
        <h3>No se encontraron resultados, intente nuevamente.</h3>
      </div>
      <button class="modal-close" @click="emit('close')">Cerrar</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Propiedad } from '@/models/interfaces/Propiedad.model'
import PropertyCardComponent from '../Home/PropertyCardComponent.vue'

defineProps<{
  results: Propiedad[]
}>()

const emit = defineEmits(['close'])
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  overflow-y: auto;
}

.modal-container {
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  width: 100%;
  max-width: 80%;
  max-height: 90vh;
  overflow-y: auto;
  animation: zoomIn 0.3s ease-out;
  transform-origin: center center;
}

.modal-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.property-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  place-items: center;
}

.modal-close {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #365196;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

@keyframes zoomIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
