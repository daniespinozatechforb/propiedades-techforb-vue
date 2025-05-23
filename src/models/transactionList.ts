import casaImage from '@/assets/casa.jpg'
import type { Transaction } from './interfaces/Transactions.model'

export const transactions: Transaction[] = [
  {
    image: casaImage,
    date: '10/08/2023',
    name: 'Mr. Cristino',
    price: '$12450',
    type: 'Venta',
    paid: false,
  },
  {
    image: casaImage,
    date: '10/08/2023',
    name: 'Mr. Jack',
    price: '$12450',
    type: 'Venta',
    paid: true,
  },
  {
    image: casaImage,
    date: '10/08/2023',
    name: 'Ms. Cally',
    price: '$12450',
    type: 'Venta',
    paid: false,
  },
  {
    image: casaImage,
    date: '10/08/2023',
    name: 'Ms. Cristina',
    price: '$1245/M',
    type: 'Alquiler',
    paid: false,
  },
  {
    image: casaImage,
    date: '10/08/2023',
    name: 'Mr. Jack',
    price: '$12450',
    type: 'Venta',
    paid: true,
  },
  {
    image: casaImage,
    date: '10/08/2023',
    name: 'Ms. Cally',
    price: '$12450',
    type: 'Venta',
    paid: false,
  },
  {
    image: casaImage,
    date: '10/08/2023',
    name: 'Ms. Cristina',
    price: '$1245/M',
    type: 'Alquiler',
    paid: false,
  },
]
