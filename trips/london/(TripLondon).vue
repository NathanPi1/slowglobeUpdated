<script setup lang="ts">
import { useTripDetails } from '@/functions/loaders'
import DetailView from '@/components/DetailView.vue'
import SGHeader from '@/components/SGHeader.vue'
import SGGallery from '@/components/SGGallery.vue'
import SGMapCutout from '@/components/SGMapCutout.vue'
import SGText from '@/components/SGText.vue'
import { london } from './london'
const { data: geom } = useTripDetails()
</script>

<template>
  <DetailView>
    <SGHeader>Taking a Bath in London</SGHeader>
    <SGText>
      Dan dropped me off early at the train station – it was bittersweet, the start of a new
      adventure but also a farewell for an unknown length of time. But you can’t keep us apart for
      too long so I’m sure that we’ll run into each other again soon. Was a nice, relaxed train back
      to Stockholm airport where I grabbed some pastries, including my final Swedish cinnamon
      scroll, a sandwich and an average coffee before heading through to the international departure
      zone. Thanks Brexit. Nice to be able to say that I’m here for holiday and not for work.
    </SGText>
    <SGMapCutout
      :center="[7.679194970710796, 56.8072417166494]"
      :zoom="5"
      :pitch="0"
      :bearing="-27.2"
      :reveal="2"
    />
    <SGGallery
      :list="[{ img: '4f0fcc04-5298-42ee-b2d2-e28590ce2712.jpg', coords: [17.918611, 59.651944] }]"
      :add-photos-to-map="true"
    />
    <SGText>
      The flight to London went without hiccups though there was a slight delay which meant that I
      missed one of my booked trains. But a lady on her first shift in the trainline office at
      Paddington was able to book me onto the next one free of charge (after the general help people
      had said that I’d need to pay the full price). Paddington station is absolute chaos when
      trains are ready for departure, for whatever reason they allow passengers to crowd waiting for
      the line to open and then boom, like spray from a shotgun everyone rushes towards the train.
      Made it onto the train safely and sat next to a lovely old lady called Virginia. The time
      passed quickly while she chatted about England and her grandchildren before reaching her stop.
    </SGText>
    <SGMapCutout
      :center="[-1.056648935967587, 51.42624737904623]"
      :zoom="8"
      :pitch="0"
      :bearing="-17.6"
      :reveal="3"
    />
    <SGText>
      <p>
        I continued onto Bath ready to see Chantelle after an extended day of travel with train
        fiascos and an early morning. Finally figured out which exit to take (no reception
        underground) and quickly found Chantelle for an extended hug. It was so good to see her! It
        felt like it had been a long time but also being siblings, it felt like no time had passed.
        After our hug, Cosi, the young child that Chantelle has been au pair for looked up at me,
        confused as to who this stranger was. Not long after acknowledging that I was a friend of
        Chantelle’s he reached out with both arms waiting for a hug as well. I juggled Cosi and my
        suitcase up the hill while Chantelle pushed the now empty pram. It was a happy reunion.
      </p>
      <p>
        Upon arriving at Chantelle’s abode in Bath I was quickly introduced to the rest of Cosi’s
        family as they arrived home. Chantelle was on dinner prep cooking up a delicious chicken
        stir-fry. After Cosi was tucked in Chantelle and I hung out together watching the classic
        Jojo Rabbit, I had forgotten how good this film is, throwing an interesting perspective on
        Hitler Youth times back in WW2.
      </p>
    </SGText>
    <SGGallery :list="['IMG_6254.jpg', 'IMG_6258.jpg']" />
    <SGText>
      The following morning found us up bright and early with our suitcase packed ready to catch a
      train into London. We grabbed a coffee and an almond croissant from Chantelle’s favourite
      local café, now a spot I can picture in our future phone calls, before jumping on our train.
      We had a bit of trouble finding Chantelle’s youth rail pass, but the conductor was very
      patient, however purchasing another with sporadic internet made for a more stressful trip than
      planned.
    </SGText>
    <SGMapCutout
      :center="[-1.2439582582292132, 51.413790206456156]"
      :zoom="9"
      :pitch="0"
      :bearing="-35.9"
      :reveal="4"
    />
    <SGGallery :list="['PXL_20250301_083808040.MP.jpg', 'received_639762665081090.jpeg']" />
    <SGText>
      Safely in London we stowed our luggage at our accommodation for the night (an apartment owned
      by a relative of Chantelle’s host family) before heading out to explore. It was a stunning
      blue-sky day making it perfect for exploring London on foot. The day found us exploring the
      London Eye, Big Ben, Westminster Abbey, Buckingham Palace, a delightful little pastry shop, St
      James’s Park (where we called mum and dad with them reminiscing of being there with Chantelle
      only weeks prior), it was here that we learnt that they had decided to gift us a
      choose-your-own-adventure experience in London to further enjoy our time together. While we
      pondered what this experience could be we continued to explore icons including the Tower of
      London and London Tower Bridge. We grabbed the classic meal deal from the local supermarket
      allowing a main (sandwich or sushi), drink and a snack to be purchased together for cheaper.
      We found a quiet park to eat lunch in while enjoying the sunshine and blue skies, which both
      of us had been missing from our current places of residence.
    </SGText>
    <SGGallery
      :list="[
        { img: 'PXL_20250301_115311302.jpg' },
        { img: 'IMG_6293.jpg' },
        { img: 'PXL_20250301_120332281.MP.jpg', coords: [-0.124522, 51.500894] },
        { img: 'IMG_6321.PNG', coords: [-0.141144, 51.50165] },
        { img: 'IMG_6352.jpg', coords: [-0.0767, 51.5044] },
        { img: 'IMG_6325.JPG' }
        // { img: 'IMG_6343.JPG' },
      ]"
      :add-photos-to-map="true"
    />
    <SGMapCutout
      :center="[-0.10069963403861948, 51.50873507901039]"
      :zoom="12.5"
      :pitch="0"
      :bearing="0"
      :reveal="0"
    />
    <SGText>
      <p>
        After lunch we jumped on a bus to Decathlon, a large European hiking/camping store, for me
        to buy another pair of my favourite zipper pockets hiking pants. Chantelle also enjoyed
        exploring and found that they have deals on second-life gear inspiring her again towards
        planning a hiking trip somewhere in Europe (probably Scotland) while she’s here. In our
        afternoon adventures we’d decided how we wanted to spend the experience money from mum and
        dad… our aim was to watch a West End musical! With this in mind we jumped on the
        underground, enjoying a saved cinnamon scroll from the pastry shop, on our way to Charing
        Cross station. From here we attempted to get some cheaper last-minute tickets. But being a
        Saturday night everyone else had the same thought. We turned to looking online and found
        cheap tickets for Back to the Future, with Chantelle not having seen the film and me not
        having been to a musical we decided this would be a great first for both of us! With this
        booked we freshened up at our accommodation and headed to the Strand for a delicious dinner
        of dumplings and fried rice.
      </p>
      <p>
        We headed into the venue grabbing a drink, me a beer and Chantelle a cocktail inspired by
        the Flux Capacitor before sitting down to watch the show. It was incredible! They did an
        exceptionally good job of creating the film right there in front of you, there was some
        poetic license but the characters, the constantly changing sets and the flying DeLorean made
        for an incredible viewing experience. I would highly recommend! Show finished we meandered
        back to the accommodation stopping for ice cream, another drink in a bar that was just
        closing before finishing with a quick stop at maccas for a late-night burger. In total we
        cleaned up just over 15kms of walking over a day of exploring London by foot. Not a bad
        effort… with some very cool sites observed.
      </p>
    </SGText>
    <!-- <SGGallery :list="['IMG_6373.jpg']" /> -->
    <SGGallery
      :list="[
        'PXL_20250301_132038262.jpg',
        'PXL_20250301_162746553.jpg',
        'IMG_6373.jpg',
        'PXL_20250301_185317831.MP.jpg',
        'PXL_20250301_220911445.MP.jpg',
        'o_PXL_20250301_220758885.m4v'
      ]"
    />
    <SGText>
      <p>
        The next day found us sleeping in before packing everything back into our suitcase ready for
        a train trip back to Bath. We had no other real sites that we were aiming to tick off so
        slowly roamed the streets of London going via St Paul’s cathedral grabbing a coffee from a
        café started by Australians, exploring a few Sunday markets with some cool paintings spread
        in amongst all items of clothes, teddies, pillows, jewellery. The markets were also home to
        an array of international cuisine. We circled several times trying samples from different
        vendors before settling on some Asian inspired ‘choose 3’ deal. This was quite good!
      </p>
      <p>
        Our accommodation key swap time was quickly approaching so we made our way back to the
        accommodation grabbing some dinner to eat on the Train. We met Sarah’s dad slightly later
        than planned but handed over the keys and made a run back for the Elizabeth line.
      </p>
    </SGText>
    <SGGallery
      :list="[
        'PXL_20250302_120151460.MP~2.jpg',
        'PXL_20250302_112232601.jpg',
        'PXL_20250302_112647530.jpg',
        'PXL_20250302_114722026.jpg'
      ]"
    />
    <SGText>
      Arriving back at Paddington and with no direct train to Bath, we took one to Bristol—just past
      Bath but annoyingly skipping it. The train was absolutely packed, though Chantelle snagged a
      seat after someone left, and I briefly sat until an elderly woman boarded, so I stood again.
      We finally reached Bristol only to find the Bath-bound train had been cancelled. Frustrated
      and with Chantelle already late for work, we tried to get an Uber—no luck. Just as Google
      claimed the train was back on, we returned to the station, found a massive crowd waiting, and…
      nothing. The train never left. Tried Uber again—success! We got a ride straight to The Forum
      in Bath, where Chantelle clocked in and I waited for a free ticket to Inspired…Live,
      Gladiators. It was a surprisingly engaging mix of a former American Gladiator’s life story,
      faith journey, and mini athletic stunts, ending with a plug for the Alpha course. After
      swapping out all the movie posters for upcoming shows, Chantelle wrapped up work and we
      grabbed our suitcase. We swung by one of her go-to spots for a drink, then trekked back
      uphill—suitcase in tow—with a pit stop at Maccas for a late-night burger and wrap fix.
    </SGText>
    <SGGallery :list="['PXL_20250302_191115454.jpg', 'PXL_20250302_214856813.MP.jpg']" />
    <SGText>
      <p>
        The next morning was my last with Chantelle in the UK, so we made the most of it by
        exploring some of her current Bath highlights. We wandered past the historic locks, strolled
        by the famous baths, and found a bite for me to take on the train ride back to Heathrow. One
        final supermarket stop gave Chantelle the chance to send me off with another classic English
        lolly to try—plus I couldn’t resist grabbing one more of the Double Decker chocolate bars
        I’d grown fond of with my meal deals.
      </p>
      <p>
        After a few goodbye hugs, I was off—train to Paddington, lunch in hand, and then onto the
        Elizabeth Line straight to Heathrow. I ended up cutting it a bit close with the timing and
        missed my flight to Detroit. Maybe if I’d gone straight to the counter… but no use
        theorising now. I managed to book a later flight just a few hours after, though it came with
        the bonus feature of a longer, non-direct route. I finally made it back to Detroit
        ridiculously late, and after spending three painful hours sorting out the car hire, I called
        it and took the next day off work. Still—completely worth it for the extra time with
        Chantelle.
      </p>
    </SGText>
    <SGGallery :list="['IMG_6426.jpg', 'IMG_6429.jpg', 'IMG_6437.jpg', 'IMG_6440.JPG']" />
    <SGMapCutout
      :center="[-59.40781577464713, 51.737543237422415]"
      :zoom="3"
      :pitch="0"
      :bearing="0"
      :reveal="6"
    />
  </DetailView>
</template>
