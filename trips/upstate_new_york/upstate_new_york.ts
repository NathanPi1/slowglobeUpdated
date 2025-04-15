import type { Trip } from '@/functions/trips'
import imgUrl from './images/square.jpg?w=600&gallery'

export const upstate_new_york: Trip = {
  id: 'upstate_new_york',
  name: 'A weekend in Poland',
  headerImage: imgUrl,
  date: '2024-09-22',
  locationText: 'Bräcke, Sweden',
  geography: {
    overview: {
      center: [15.4185552491721, 62.750063825451555],
      zoom: 7
    }
  }
}
