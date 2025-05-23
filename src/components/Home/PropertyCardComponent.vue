<template>
  <div class="property-card">
    <div class="property-card__image-container">
      <img :src="propiedad.imagenes[0]" class="property-card__image" />
    </div>

    <div class="property-card__header">
      <span class="property-card__type">{{ propiedad.tipoInmueble }}</span>
      <span class="property-card__price">$ {{ propiedad.precio }}</span>
    </div>

    <div class="property-card__icons">
      <div class="property-card__feature property-card__feature--bedroom">
        <span class="material-icons">hotel</span>
        <span class="property-card__value">{{ propiedad.dormitorios }}</span>
      </div>
      <div class="property-card__feature property-card__feature--bedroom">
        <span class="material-icons">bathtub</span>
        <span class="property-card__value">1</span>
      </div>
      <div class="property-card__feature property-card__feature--bedroom">
        <span class="material-icons">square_foot</span>
        <span class="property-card__value">{{ propiedad.superficie }} m²</span>
      </div>
    </div>

    <div class="property-card__location">{{ propiedad.ubicacion }}</div>
  </div>
</template>

<script setup lang="ts">
import type { Propiedad } from '@/models/interfaces/Propiedad.model'

defineProps<{
  propiedad: Propiedad
}>()
</script>

<style scoped lang="scss">
.property-card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 0;
  text-align: left;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 230px;

  &:hover {
    transform: translateY(-5px);
  }

  &__image-container {
    height: 200px;
    overflow: hidden;
    border-radius: 6px 6px 0 0;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    border-bottom-right-radius: 12px;

    .property-card:hover & {
      transform: scale(1.05);
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 15px 0 15px;
  }

  &__type {
    font-weight: 600;
    font-size: 0.8rem;
    color: #444;
  }

  &__price {
    font-size: 1.1rem;
    color: #2a6496;
    font-weight: bold;
  }

  &__feature {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &__icons {
    display: flex;
    justify-content: space-between;
    margin: 20px 15px 0 15px;
    align-items: center;
    .material-icons {
      font-size: 17px;
      color: #2a6496;
    }
  }

  &__value {
    font-size: 0.6rem;
  }

  &__location {
    font-size: 0.7rem;
    color: #666;
    margin: auto 15px 10px 15px;
  }
}
</style>
