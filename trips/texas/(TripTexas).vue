<script setup lang="ts">
import DetailView from '@/components/DetailView.vue'
import SGHeader from '@/components/SGHeader.vue'
import SGGallery from '@/components/SGGallery.vue'
import SGMapCutout from '@/components/SGMapCutout.vue'
import SGText from '@/components/SGText.vue'
import { texas } from './texas'
</script>

<template>
  <DetailView>
    <SGHeader>A Concert in Texas</SGHeader>
    <SGText>
      <p>
        This was one of my more spontaneous decisions… I wanted to watch some concerts while in the
        US and found out that TobyMac, an artist I’ve loved since being a kid was performing nearby.
        With the spontaneity of some aspects of work I learned that I’d be in Europe on vacation the
        weekend he was performing in Detroit. I decided to research the rest of his tour and found
        that he’d be in Texas that coming weekend. Thanks to Qantas and being a Frequent Flyer I
        found some incredibly cheap flights, only $20 AUD for the entire trip, before booking
        concert tickets and finding a reasonably cheap AirBNB to seal the deal. The rest of the work
        week passed incredibly quickly and the next thing I knew Cam was dropping me off at the
        airport on Friday afternoon.
      </p>
      <p>
        Check-in and security complete I headed through to find a spot for dinner. I decided to try
        the famed Coney Island Hotdog, it was good but soggy with chilli unless eaten quickly. After
        some walking around in the terminal I made my way to the gate for an uneventful direct
        flight to Dallas. It was nice to be flying at sunset with some pretty colours and views. At
        Dallas Fort Worth, I jumped on a train and then a bus to my accomodation for the weekend.
        Stopped to grab snacks and milk for breakfast at the local Dollar Store (the pretzels and
        ginger snaps were both open by the end of the walk). The AirBNB had secure keypad locks, and
        after a late arrival, I made the most of a sleep-in.
      </p>
    </SGText>
    <SGGallery
      :list="[
        {
          img: 'PXL_20250206_111824477.MP.jpg',
          caption: 'Ice on the car the morning I left for Texas'
        },
        {
          img: 'PXL_20250207_211618959.MP.jpg',
          caption: 'The famed Coney Dog with a side of fries'
        },
        {
          img: 'PXL_20250207_222134414.jpg',
          caption: 'I was very much impressed with my premium legroom'
        },
        'PXL_20250207_224429509.jpg'
      ]"
    ></SGGallery>
    <SGText>
      <p>
        I’d done a bit of research before arriving in Dallas and had decided upon spending the day
        doing a free walking tour of downtown Dallas. I caught the bus into town while binging a few
        extra episodes of Lethal Weapon (a TV show I could only find in America). 1.5hrs later and I
        was ready to explore in the perfect 30C weather, a pleasant change to the freezing
        temperatures of Detroit. The Dallas City Hall was the first point on the map, you might
        recognise this from the original Robocop movie.
      </p>
      <p>
        From here I continued exploring the city highlights - kinetic sculptures, artworks including
        a giant eyeball, steers and drovers made of bronze (the largest bronze monument of it’s kind
        in the world), the markers and memorials created following the assassination of JFK in 1963
        and a large amount of old buildings hidden amongst the modern skyscrapers including a log
        cabin lived in by the founder of Dallas. The heat eventually caught up with me, so I found a
        local Texas BBQ joint for lunch and sat down to a Texas brisket with a side of jalapeño
        cornbread. Would highly recommend, tender and delicious!
      </p>
    </SGText>
    <SGGallery
      :list="[
        {
          img: 'PXL_20250208_171733772.jpg',
          caption: 'Me at the JFK memorial, an interesting structure'
        },
        'P1430957.png',
        'P1430958.png',
        'PXL_20250208_165540453.jpg',
        {
          img: 'PXL_20250208_192253619.jpg',
          caption: 'Some UberEats delivery vehicles I found'
        },
        'PXL_20250208_170142056.jpg',
        'P1430973.png',
        'P1430978.png',
        {
          img: 'PXL_20250208_181459402.jpg',
          caption: 'A delicious lunch of brisket and cornbread'
        }
      ]"
      :small-thumbnails="true"
    ></SGGallery>
    <SGText>
      <p>
        I ticked off most of the items on the walking tour before grabbing a 7Eleven coconut ice
        cream and jumping on a bus back to the AirBNB. At a changeover I decided to stop for a fresh
        fade at one of the local barbers. He only accepted Venmo or cash, two ATMs later and I made
        my way back to the bus station with less hair than I'd started with. I grabbed a beef
        sandwich and a pastry for dinner, having this in a local park before heading to the AirBNB
        to freshen up before the concert. I caught an Uber to the concert for 3.5hrs of nostalgia
        and great music!
      </p>
    </SGText>
    <SGGallery
      :list="[
        {
          img: 'PXL_20250208_235413259.jpg',
          caption: 'Dinner in a park with a sunset view'
        },
        'PXL_20250209_015626078.MP.jpg',
        'o_PXL_20250209_011910093.m4v',
        'PXL_20250209_034551972.MP.jpg',
        'o_PXL_20250209_034946104.m4v',
        'PXL_20250209_044137848.MP.jpg',
        'o_PXL_20250209_030551062.m4v',
        'PXL_20250207_224429509.jpg'
      ]"
      :small-thumbnails="true"
    ></SGGallery>
    <SGText>
      <p>
        Concert finished and I attempted to walk back to the AirBNB, quickly finding a
        pedestrian-unfriendly bridge forcing me to call an Uber. Just as my phone died the Uber
        arrived dropping me back home with all necessary pin numbers memorised.
      </p>
      <p>
        Sunday provided a nice chance for another lazy morning before checking out at 10am. I had
        planned to go for a walk in the local park but my 9kg backpack and the fact that it had just
        started to rain made that less appealing. Instead I took a bus and a train back to the
        airport only to find that my flight had been delayed by 2hrs and that I’d already arrived
        earlier than planned.
      </p>
      <p>
        Throughout the extra time I found several different ways to pass the time, phone calls to
        family, walking from one end of my terminal to the other and back, binging more Lethal
        Weapon, eating maccas and trying the Subway footlong churro (meh), people watching, and
        pondering life. Eventually it came time for me to board the plane enroute back to Detroit
        where Cam kindly picked me up from the airport despite it being much later than I'd
        originally asked. In hindsight I should have made more use of my last day in Texas maybe
        popping into one of the large thrift stores I’d seen from the bus… but, you can’t always
        predict rain or flight delays and... there’s always next time!
      </p>
    </SGText>
  </DetailView>
</template>
