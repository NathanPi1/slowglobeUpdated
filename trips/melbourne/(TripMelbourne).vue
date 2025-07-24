<script setup lang="ts">
import { useTripDetails } from '@/functions/loaders'
import DetailView from '@/components/DetailView.vue'
import SGHeader from '@/components/SGHeader.vue'
import SGGallery from '@/components/SGGallery.vue'
import SGMapCutout from '@/components/SGMapCutout.vue'
import SGText from '@/components/SGText.vue'
import { melbourne } from './melbourne'
const { data: geom } = useTripDetails()
</script>

<template>
  <DetailView>
    <SGHeader>Melbourne for a Visa</SGHeader>
    <SGText>
      <p>
        After our Los Angeles debacle in November, we found ourselves back at the ASA Adelaide
        office, waiting for another overseas assignment. There wasn’t much to do, but we wrapped up
        the final components of the meeting room we had built and worked on reviving an old paint
        robot. Amidst all this, we applied for a U.S. work visa, which required an in-person
        appointment in Melbourne to finalise.
      </p>
      <p>
        It’s been a frustrating process. When I first took this job, I was told I’d be overseas
        within months. Instead, after finally securing a trip, we were sent home before it even
        began. But I guess that’s all part of the adventure we call life! On the bright side,
        staying in Australia for thies extra time gave me the chance to reconnect with friends I
        thought I wouldn’t be seeing for some months.
      </p>
    </SGText>
    <SGGallery
      :list="[
        'PXL_20241128_104504338.jpg',
        'PXL_20241205_084016683.jpg',
        'PXL_20241207_092710471.jpg',
        'PXL_20241210_080517324.jpg',
        'PXL_20241212_073120625.jpg',
        'PXL_20241213_225601817.jpg'
      ]"
    />
    <SGText>
      <p>
        I even got to attend the ASA Christmas party, which featured axe throwing and a city lunch.
        We received a Christmas gift hamper from work, packed with snacks—most of which I enjoyed
        over movies with friends. Christmas itself was spent in Waikerie with nearly the entire
        extended family, including the Brisbane Wuttke crew! Then, in the middle of our waiting
        game, ASA finally sent an email—our flights and accommodation were booked for an appointment
        on January 2nd. Not long now.
      </p>
      <p>
        In the meantime, I took the opportunity to update my house. I spent time with Dad choosing
        paint colors and tackled the master bedroom with Laura—painting, removing the old freeze,
        patching nail holes, and fixing a random hole in the walk-in robe. Just in time, too, as I
        lined up two new housemates—one moving in within a week, the other in a couple of months.
        New Year's Eve was another unexpected bonus. I got to celebrate with friends from church, a
        great way to spend time with an amazing group before theoretically heading to the U.S. for
        months.
      </p>
    </SGText>
    <SGGallery
      :list="[
        'PXL_20241231_132946635.jpg',
        'received_504768699395210.jpeg',
        'PXL_20241229_073645163.jpg',
        'PXL_20241228_094447299.MP.jpg'
      ]"
    />
    <SGText>
      New Year came and went, and soon Cameron and I were meeting at the airport for our overnight
      trip to Melbourne. We've made it a requirement that when we fly together we need to have a
      beer at least somewhere along the flight route. We arrived without issue, took an Uber to our
      hotel (Oaks Melbourne, St Kilda), and settled in. Conveniently, it was right across from the
      U.S. consulate, making our morning appointment much easier.
    </SGText>
    <SGMapCutout :fit-bounds-geometry="geom" />
    <SGGallery :list="['PXL_20250102_044915013.jpg']" />
    <SGText>
      Cameron went into town to meet a mate for dinner, while I found an Asian fusion spot through
      the Entertainment Book. A walk through some side streets of Melbourne—including directly under
      a hospital’s helicopter landing zone, where they block pedestrian traffic due to the
      noise—left me ready for an Asian fusion beef rice bowl. Delicious, with just enough leftovers
      for breakfast.
    </SGText>
    <SGGallery :list="['PXL_20250102_091846919.MP.jpg', 'PXL_20250102_095959301.MP.jpg']" />
    <SGText>
      <p>
        The next morning, we were both ready, several documents in hand. After checking in, a
        security guard sent us up the elevator. There were some flashbacks to our time in detainment
        on American soil, but we quickly realized the staff here were much friendlier.
      </p>
      <p>
        Cameron was called up first, answered the required questions, and—despite bringing a stack
        of paperwork—only needed a single document. When it was my turn, the U.S. official
        determined my case was identical to Cameron’s, making it a very quick process. He found our
        prior detention and refused entry "strange and unconventional," but reassured us that our
        denied ESTA wouldn’t be an issue. Our new work visas would be more than sufficient. After
        paying the hefty fee, we grabbed coffee and croissants to celebrate.
      </p>
      <p>
        With hours to kill before our flight, we Ubered into the city and found a cinema, the ones
        in Melbourne are absolutely massive! We passed the time watching the new Sonic movie
        (bizarre, but entertaining), then grabbed sushi for lunch before heading back to the
        airport.
      </p>
      <p>Now, Melbourne has our passports. The waiting game continues…</p>
    </SGText>
  </DetailView>
</template>
