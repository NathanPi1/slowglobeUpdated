import type { Trip } from '@/functions/trips'
import imgUrl from './images/square.jpg?w=600&gallery'
import overviewGeo from './geometry.geojson?simplify'
import detailGeo from './geometry.geojson'

export const texas: Trip = {
  id: 'texas',
  name: 'A Concert in Texas',
  headerImage: imgUrl,
  date: '2025-02-08',
  locationText: 'Dallas, Texas, U.S.A.',
  geography: {
    overview: {
      center: [-96.98289295647044, 32.769234897428966],
      tracks: overviewGeo,
      zoom: 5.5
    },
    detail: detailGeo
  }
}
