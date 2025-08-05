import type { Trip } from '@/functions/trips'
import imgUrl from './images/square.jpg?w=600&gallery'
import overviewGeo from './geometry.geojson?simplify'
import detailGeo from './geometry.geojson'

export const minneapolis: Trip = {
  id: 'minneapolis',
  name: 'Easter with Family Friends',
  headerImage: imgUrl,
  date: '2025-04-18',
  locationText: 'Minneapolis, Minnesota',
  geography: {
    overview: {
      center: [-93.29937080017488, 45.20609287757003],
      tracks: overviewGeo,
      zoom: 4
    },
    detail: detailGeo
  }
}
