import type { Trip } from '@/functions/trips'
import imgUrl from './images/square.jpg?w=600&gallery'
import overviewGeo from './geometry.geojson?simplify'
import detailGeo from './geometry.geojson'

export const tupelo: Trip = {
  id: 'tupelo',
  name: 'Painting Corollas in Tupelo',
  headerImage: imgUrl,
  date: '2025-03-20',
  locationText: 'Tupelo, Mississippi',
  geography: {
    overview: {
      center: [-88.89589381677982, 34.38122295451618],
      tracks: overviewGeo,
      zoom: 6
    },
    detail: detailGeo
  }
}
