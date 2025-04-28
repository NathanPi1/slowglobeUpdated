import type { Trip } from '@/functions/trips'
import imgUrl from './images/SQUARE.jpg?w=600&gallery'
import overviewGeo from './geometry.geojson?simplify'
import detailGeo from './geometry.geojson'

export const detroit: Trip = {
  id: 'detroit',
  name: 'Take Him to Detroit',
  headerImage: imgUrl,
  date: '2025-01-10',
  locationText: 'Detroit, Michigan, USA',
  geography: {
    overview: {
      center: [-83.328764, 42.237697],
      zoom: 7,
      tracks: overviewGeo
    },
    detail: detailGeo
  }
}
