<template>
  <section class="carousel-section">
    <div class="property-carousel">
      <div class="property-carousel__divider"></div>

      <div class="property-carousel__container">
        <button
          class="property-carousel__nav-button property-carousel__nav-button--prev"
          @click="prevPage"
          :disabled="currentPage === 0"
        >
          ‹
        </button>

        <div class="property-carousel__grid">
          <PropertyCardComponent
            v-for="propiedad in paginatedProperties"
            :key="propiedad.id"
            :propiedad="propiedad"
          />
        </div>

        <button
          class="property-carousel__nav-button property-carousel__nav-button--next"
          @click="nextPage"
          :disabled="currentPage === totalPages - 1"
        >
          ›
        </button>
      </div>

      <div class="property-carousel__divider"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import PropertyCardComponent from '../Home/PropertyCardComponent.vue'
import { getAllProperties } from '@/services/propertiesService'
import type { Propiedad } from '@/models/interfaces/Propiedad.model'

/* interface Property {
  type: string
  price: string
  location: string
  image: string
}

// Datos de propiedades
const properties = ref<Property[]>([
  {
    type: 'Departamento',
    price: 'USD 800',
    location: 'Av. Los álamos 1440 Rosario',
    image: propiedad1,
  },
  {
    type: 'PH',
    price: 'USD 800',
    location: 'Av. Los álamos 1440 Rosario',
    image: propiedad2,
  },
  {
    type: 'Departamento',
    price: 'USD 800',
    location: 'Av. Los álamos 1440 Rosario',
    image: propiedad3,
  },
  {
    type: 'PH',
    price: 'USD 800',
    location: 'Av. Los álamos 1440 Rosario',
    image: propiedad4,
  },
  {
    type: 'Casa',
    price: 'USD 800',
    location: 'Av. Los álamos 1440 Rosario',
    image: propiedad1,
  },
  {
    type: 'Casa',
    price: 'USD 800',
    location: 'Av. Los álamos 1440 Rosario',
    image: propiedad4,
  },
  {
    type: 'Departamento',
    price: 'USD 800',
    location: 'Av. Los álamos 1440 Rosario',
    image: propiedad3,
  },
  {
    type: 'PH',
    price: 'USD 800',
    location: 'Av. Los álamos 1440 Rosario',
    image: propiedad2,
  },
  {
    type: 'Departamento',
    price: 'USD 800',
    location: 'Av. Los álamos 1440 Rosario',
    image: propiedad1,
  },
  {
    type: 'Casa',
    price: 'USD 800',
    location: 'Av. Los álamos 1440 Rosario',
    image: propiedad3,
  },
  {
    type: 'Departamento',
    price: 'USD 800',
    location: 'Av. Los álamos 1440 Rosario',
    image: propiedad2,
  },
  {
    type: 'Departamento',
    price: 'USD 800',
    location: 'Av. Los álamos 1440 Rosario',
    image: propiedad4,
  },
]) */

const fetchProperties = async () => {
  isLoading.value = true
  error.value = null
  try {
    properties.value = await getAllProperties()
  } catch (err) {
    error.value = 'Error al cargar las propiedades'
    console.error(err)
  } finally {
    isLoading.value = false
  }
}

const properties = ref<Propiedad[]>([])
const isLoading = ref(false)
const error = ref<string | null>(null)
const currentPage = ref(0)
const itemsPerPage = ref(4)

// Paginación
const totalPages = computed(() => {
  return Math.ceil(properties.value.length / itemsPerPage.value)
})

const paginatedProperties = computed(() => {
  const start = currentPage.value * itemsPerPage.value
  return properties.value.slice(start, start + itemsPerPage.value)
})

const nextPage = () => {
  if (currentPage.value < totalPages.value - 1) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--
  }
}

// Cargar datos al montar el componente
onMounted(() => {
  fetchProperties()
})
</script>

<style scoped lang="scss">
.carousel-section {
  width: 100%;
  background-color: #f8f9fb;
}

.property-carousel {
  text-align: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  &__divider {
    height: 1px;
    background-color: #ddd;
    margin: 1.5rem 0;
  }

  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 2rem 0;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    flex-grow: 1;
  }

  &__nav-button {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #2a6496;
    padding: 0 1rem;

    &:disabled {
      color: #ccc;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      color: #1a4b7a;
    }
  }
}

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

  &__icons {
    display: flex;
    justify-content: space-between;
    margin: 20px 10px 0 10px;
    align-items: center;
  }

  &__location {
    font-size: 0.7rem;
    color: #666;
    margin: auto 15px 10px 15px;
  }
}

/* Responsive design */
@media (max-width: 1024px) {
  .property-carousel__grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 600px) {
  .property-carousel__grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
