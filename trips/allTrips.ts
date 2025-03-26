import { flinders } from '~/flinders/flindersHike'
import { golden_day_in_sweden } from '~/golden_day_in_sweden/golden_day_in_sweden'
import { los_angeles } from '~/los_angeles/los_angeles'
import { texas } from '~/texas/texas'
import { melbourne } from './melbourne/melbourne'
import { upstate_new_york } from './upstate_new_york/upstate_new_york'
import { london } from './london/london'

export interface Trip {
  id: string
  name: string
  headerImage: string
  date: string
  locationText: string
  geography: { overview: TripGeographyOverview; detail?: GeoJSON.FeatureCollection }
}

export interface TripGeographyOverview {
  center: [number, number]
  zoom: number
}

export function getTripById(id: string) {
  return allTrips.find((trip) => trip.id === id)
}

export function getTripHeaderInfoById(id: string) {
  const trip = getTripById(id)
  if (!trip) {
    return { locationText: '', date: '', headerImage: '' }
  }

  const { locationText, date, headerImage } = trip
  return { locationText, date, headerImage }
}

export const allTrips: Trip[] = [
  upstate_new_york,
  london,
  golden_day_in_sweden,
  texas,
  melbourne,
  los_angeles,
  flinders
]
