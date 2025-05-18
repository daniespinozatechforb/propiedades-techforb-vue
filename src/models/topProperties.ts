import casaImage from '@/assets/casa.jpg'
import type { Property } from './interfaces/Property.model'

export const properties: Property[] = [
  {
    name: 'Luxury Villa',
    location: 'Beverly Hills, CA',
    image: casaImage,
    trend: 12.5,
  },
  {
    name: 'Modern Apartment',
    location: 'New York, NY',
    image: casaImage,
    trend: -3.2,
  },
  {
    name: 'Cozy Cottage',
    location: 'Aspen, CO',
    image: casaImage,
    trend: 5.1,
  },
  {
    name: 'Beach House',
    location: 'Malibu, CA',
    image: casaImage,
    trend: 8.3,
  },
  {
    name: 'Urban Loft',
    location: 'Chicago, IL',
    image: casaImage,
    trend: -1.7,
  },
  {
    name: 'Mountain Retreat',
    location: 'Lake Tahoe, NV',
    image: casaImage,
    trend: 4.9,
  },
  {
    name: 'Penthouse Suite',
    location: 'Miami, FL',
    image: casaImage,
    trend: 6.7,
  },
]
