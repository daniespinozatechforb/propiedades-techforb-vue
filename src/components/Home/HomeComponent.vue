<template>
  <div>
    <HeroComponent />
    <div class="home-section">
      <h1 class="title">
        Explora nuestras <br />
        propiedades exclusivas.
      </h1>
      <p class="subtitle">Las propiedades que buscás, en un solo lugar</p>
    </div>

    <CarouselComponent />
    <SecurityCalmComponent />
    <div class="home-section">
      <h1 class="title">Oportunidades de inversión</h1>
      <p class="subtitle">Explora Nuestra Oferta de Complejos Residenciales</p>
    </div>
    <CarouselComponent />
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import HeroComponent from './HeroComponent.vue'
import CarouselComponent from './CarouselComponent.vue'
import SecurityCalmComponent from './SecurityCalmComponent.vue'
import FooterComponent from '../Layouts/FooterComponent.vue'
</script>

<style scoped lang="scss">
.home-section {
  background-color: #f8f9fb;
  padding-top: 2rem;
}

.title {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  text-align: center;
}

@media (max-width: 600px) {
  .title {
    font-size: 1.5rem;
  }

  .subtitle {
    font-size: 0.8rem;
  }
}
</style>
