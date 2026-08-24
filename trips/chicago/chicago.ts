import type { Trip } from '@/functions/trips'
import imgUrl from '@/assets/images/other/20240922_172726-2.jpg?w=600&gallery'


export const chicago: Trip = {
  id: 'chicago',
  name: 'Visiting Joel in Chicago',
  headerImage: imgUrl,
  date: '2024-09-22',
  locationText: 'Chicago, Illinois, USA',
  geography: {
    overview: {
      center: [15.4185552491721, 62.750063825451555],
      
      zoom: 7
    }
    
  }
}