import type { Trip } from '@/functions/trips'
import imgUrl from './images/square.jpg?w=600&gallery'
import overviewGeo from './geometry.geojson?simplify'
import detailGeo from './geometry.geojson'

export const upstate_new_york: Trip = {
  id: 'upstate_new_york',
  name: 'A weekend in Poland',
  headerImage: imgUrl,
  date: '2024-09-22',
  locationText: 'Poland, NY, USA',
  geography: {
    overview: {
      center: [-75.04360372469009, 43.24879241978641],
      tracks: overviewGeo,
      zoom: 7
    },
    detail: detailGeo
  }
}
