import type { Trip } from '@/functions/trips'
import imgUrl from './images/PXL_20241115_195041561.jpg?w=600&gallery'
import overviewGeo from './geometry.geojson?simplify'
import detailGeo from './geometry.geojson'

export const los_angeles: Trip = {
  id: 'los_angeles',
  name: 'A Cyclic Adventure',
  headerImage: imgUrl,
  date: '2024-11-16',
  locationText: 'Los Angeles, California, USA',
  geography: {
    overview: {
      center: [138.536236, -34.940122],
      zoom: 6,
      tracks: overviewGeo
    },
    detail: detailGeo
  }
}
