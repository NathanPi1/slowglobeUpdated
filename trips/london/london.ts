import type { Trip } from '@/functions/trips'
import imgUrl from './images/IMG_6292_square.JPG?w=600&gallery'
import overviewGeo from './geometry.geojson?simplify'
import detailGeo from './geometry.geojson'

export const london: Trip = {
  id: 'london',
  name: 'Taking a Bath in London',
  headerImage: imgUrl,
  date: '2025-02-28',
  locationText: 'London, UK',
  geography: {
    overview: {
      center: [-0.107991, 51.512546],
      zoom: 7,
      tracks: overviewGeo
    },
    detail: detailGeo
  }
}
