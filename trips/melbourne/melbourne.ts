import type { Trip } from '@/functions/trips'
import imgUrl from './images/square.jpg?w=600&gallery'
import overviewGeo from './geometry.geojson?simplify'
import detailGeo from './geometry.geojson'

export const melbourne: Trip = {
  id: 'melbourne',
  name: 'Melbourne for a Visa',
  headerImage: imgUrl,
  date: '2025-01-02',
  locationText: 'U.S. Consulate, Melbourne',
  geography: {
    overview: {
      center: [144.98004665492755, -37.84688846387312],
      zoom: 15,
      tracks: overviewGeo
    },
    detail: detailGeo
  }
}
