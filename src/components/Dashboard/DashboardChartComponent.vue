<template>
  <div class="chart-container">
    <div class="chart-container-header">
      <p>Analíticas</p>
      <SelectComponent
        v-model="selectedOption"
        :options="['Anual', 'Mensual', 'Semanal', 'Diario']"
        placeholder="Anual"
      />
    </div>
    <canvas ref="revenueChart"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Chart from 'chart.js/auto'
import SelectComponent from '../Shared/SelectComponent.vue'

const revenueChart = ref<HTMLCanvasElement | null>(null)
const selectedOption = ref('Anual')

onMounted(() => {
  if (revenueChart.value) {
    new Chart(revenueChart.value, {
      type: 'line',
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'No. of Sales',
            data: [30, 40, 60, 50, 70, 80, 60, 90, 100, 110, 90, 95],
            borderColor: '#8a8dff',
            backgroundColor: 'rgba(138, 141, 255, 0.2)',
            tension: 0.4,
            fill: true,
          },
          {
            label: 'Revenue',
            data: [20, 30, 50, 45, 60, 70, 55, 75, 85, 90, 80, 85],
            borderColor: '#00cc66',
            backgroundColor: 'rgba(0, 204, 102, 0.2)',
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    })
  }
})
</script>

<style scoped lang="scss">
.chart-container {
  position: relative;
  height: 400px;
  width: 100%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
}

.chart-container-header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

canvas {
  width: 100% !important;
  height: 300px !important;
  display: block;
}
</style>
