import { flinders } from '~/flinders/flindersHike'
import { golden_day_in_sweden } from '~/golden_day_in_sweden/golden_day_in_sweden'
import { los_angeles } from '~/los_angeles/los_angeles'
import { texas } from '~/texas/texas'
import { melbourne } from './melbourne/melbourne'
import { upstate_new_york } from './upstate_new_york/upstate_new_york'
import { london } from './london/london'
import type { Trip } from '@/functions/trips'
import { detroit } from './detroit/detroit'
import { tupelo } from './tupelo/tupelo'
import { minneapolis } from './minneapolis/minneapolis'

export const allTrips: Trip[] = [
  minneapolis,
  tupelo,
  upstate_new_york,
  london,
  golden_day_in_sweden,
  texas,
  detroit,
  melbourne,
  los_angeles,
  flinders
]
