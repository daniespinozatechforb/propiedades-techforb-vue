<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <section class="hero">
    <div class="hero__overlay"></div>
    <NavbarComponent class="hero__navbar" />
    <div class="hero__content">
      <h1 class="hero__title">Tu Hogar Ideal: Encuentra la Propiedad de tus Sueños con Nosotros</h1>
      <div class="hero__actions">
        <div class="hero__tabs">
          <ButtonComponent
            text="Comprar"
            type="tab"
            :isActive="activeTab === 'buy'"
            @click="setActiveTab('buy')"
          />
          <ButtonComponent
            text="Alquilar"
            type="tab"
            :isActive="activeTab === 'rent'"
            @click="setActiveTab('rent')"
          />
        </div>
        <div class="hero__form">
          <div class="hero__input-search">
            <InputSearchComponent type="text" />
          </div>
          <div class="hero__search">
            <SelectComponent
              :fieldStandard="true"
              :options="['Departamento', 'Casa', 'Ph']"
              placeholder="Departamento"
            />
            <SelectComponent
              :fieldStandard="true"
              :options="['1 ambiente', '2 ambientes', '3 ambientes']"
              placeholder="Ambientes"
            />
            <SelectComponent
              :fieldStandard="true"
              :options="['$100', '$200', '$300']"
              placeholder="Precio"
            />
            <ButtonComponent icon="tune" type="filter" />
            <ButtonComponent icon="search" type="search" @click="search" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavbarComponent from '../Layouts/NavbarComponent.vue'
import ButtonComponent from '../Shared/ButtonComponent.vue'
import InputSearchComponent from '../Shared/InputSearchComponent.vue'
import SelectComponent from '../Shared/SelectComponent.vue'

const activeTab = ref('buy')
//const searchTerm = ref('');

const setActiveTab = (tab: string) => {
  activeTab.value = tab
  if (tab === 'buy') {
    console.log('estoy ejecutando ' + tab)
  } else {
    console.log('estoy ejecutando ' + tab)
  }
}

const search = () => {
  console.log('se envian los resultados')
}
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  background-image: url('@/assets/9091c3970e9fa10716c85be2550f79a3cd4021e5.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  color: white;
}

.hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero__navbar {
  position: relative;
  z-index: 1000;
  display: flex;
  animation: fade-down 0.5s;
}

.hero__content {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  text-align: center;
  padding: 0 1rem;
  flex-direction: column;
  animation: fade-down 0.5s;
}

.hero__title {
  font-size: 2rem;
  max-width: 800px;
  margin-bottom: 1.5rem;
}

.hero__actions {
  width: 80%;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  gap: 20px;
}

.hero__tabs {
  border-radius: 5px;
  gap: 10px;
  display: flex;
}

.hero__form {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.hero__input-search {
  flex: 1;
}

.hero__search {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}

@keyframes fade-down {
  0% {
    opacity: 0;
    transform: translateY(-30px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
}

@media (max-width: 600px) {
  .hero__title {
    font-size: 1.5rem;
  }
}

@media screen and (min-width: 1345px) {
  .field-standard {
    height: 60px;
  }
}

@media screen and (max-width: 1124px) {
  .hero__actions {
    flex-direction: column;
  }
  .hero__form {
    flex-direction: column;
    align-items: start;
  }
}
</style>
