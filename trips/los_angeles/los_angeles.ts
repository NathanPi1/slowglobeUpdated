import type { Trip } from '~/allTrips'
import imgUrl from './images/PXL_20241115_195041561.jpg?w=600&gallery'
import LAGeo from './los_angeles.json'
import type { FeatureCollection } from 'geojson'

export const los_angeles: Trip = {
  id: 'los_angeles',
  name: 'A Cyclic Adventure',
  headerImage: imgUrl,
  date: '2024-11-16',
  locationText: 'Los Angeles, California, USA',
  geography: {
    overview: {
      center: [138.536236, -34.940122],
      zoom: 6
    },
    detail: LAGeo as FeatureCollection
  }
}
