import type { Trip } from '@/functions/trips'
import imgUrl from './images/SQUARE.jpg?w=600&gallery'
import overviewGeo from './geometry.geojson?simplify'
import detailGeo from './geometry.geojson'

export const detroit: Trip = {
  id: 'detroit',
  name: 'Take Him to Detroit',
  headerImage: imgUrl,
  date: '2024-09-22',
  locationText: 'Bräcke, Sweden',
  geography: {
    overview: {
      center: [15.4185552491721, 62.750063825451555],
      zoom: 7,
      tracks: overviewGeo
    },
    detail: detailGeo
  }
}
