<template>
  <div class="card">
    <div class="card__header">
      <span class="dashboard-title">Transacciones Recientes</span>
      <a href="#" class="subtitle">Ver ordenes →</a>
    </div>

    <div class="card__body">
      <table class="table">
        <thead class="table__head">
          <tr>
            <th class="table__cell">Propiedad</th>
            <th class="table__cell">Fecha</th>
            <th class="table__cell">Nombre</th>
            <th class="table__cell">Precio</th>
            <th class="table__cell">Tipo</th>
            <th class="table__cell">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(transaction, index) in transactionListRef" :key="index">
            <td class="table__cell">
              <img :src="transaction.image" alt="Property" class="thumbnail" />
            </td>
            <td class="table__cell data">{{ transaction.date }}</td>
            <td class="table__cell">{{ transaction.name }}</td>
            <td class="table__cell data">{{ transaction.price }}</td>
            <td class="table__cell">{{ transaction.type }}</td>
            <td class="table__cell">
              <span
                class="transaction__badge"
                :class="{
                  'transaction__badge--paid': transaction.paid,
                  'transaction__badge--unpaid': !transaction.paid,
                }"
              >
                {{ transaction.paid ? 'Pago' : 'Impago' }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { transactions } from '@/models/transactionList'
import { ref } from 'vue'

const transactionListRef = ref(transactions)
</script>

<style scoped lang="scss">
.transaction__badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;

  &--paid {
    background-color: #d1fae5;
    color: #16a34a;
  }

  &--unpaid {
    background-color: #fee2e2;
    color: #dc2626;
  }
}
</style>
