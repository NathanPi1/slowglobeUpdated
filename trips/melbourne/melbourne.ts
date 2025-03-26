import type { Trip } from '~/allTrips'
import imgUrl from '@/assets/images/other/20240922_172726-2.jpg?w=600&gallery'

export const melbourne: Trip = {
  id: 'melbourne',
  name: 'Melbourne for a Visa',
  headerImage: imgUrl,
  date: '2024-09-22',
  locationText: 'Bräcke, Sweden',
  geography: {
    overview: {
      center: [15.4185552491721, 62.750063825451555],
      zoom: 7
  }}
}