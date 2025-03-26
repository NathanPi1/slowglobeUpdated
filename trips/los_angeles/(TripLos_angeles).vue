<script setup lang="ts">
import DetailView from '@/components/DetailView.vue'
import SGHeader from '@/components/SGHeader.vue'
import SGGallery from '@/components/SGGallery.vue'
import SGMapCutout from '@/components/SGMapCutout.vue'
import SGText from '@/components/SGText.vue'
</script>

<template>
  <DetailView>
    <SGHeader>A Cyclic Adventure</SGHeader>

    <SGText>
      Now this was an extended adventure (60hrs in total)... and not one I would wish on anyone. Our
      trip began uneventfully at the Adelaide airport, where Cam, Dom and myself checked in with
      plenty of time to spare and boarded our flight to Melbourne.
    </SGText>
    <SGGallery
      :list="[{ img: 'PXL_20241115_195041561.jpg', coords: [138.536236, -34.940122] }]"
      :add-photos-to-map="true"
    />
    <!-- Map to Melbourne -->
    <SGMapCutout :center="[144.850992, -37.668561]" :zoom="10" />
    <SGText>
      Upon arrival, we navigated through immigration and made our way to the international terminal,
      preparing for the long-haul journey ahead. Soon, we were airborne again, en route to Los
      Angeles.
    </SGText>
    <SGGallery
      :list="[
        { img: 'PXL_20241116_032029102.jpg', caption: 'The meal on the way to LA' },
        { img: 'PXL_20241116_143107596.jpg', caption: 'The view from the plane at sunrise' }
      ]"
    />
    <SGText>
      Upon landing in LA, after a 2.5hr dogleg line two of us made it through immigration without
      issue, but one of our group, Dom, was pulled aside for further questioning. Cam and I
      collected all our luggage, waiting anxiously for any updates on Dom’s situation. We eventually
      handed over his luggage to the authorities and continued waiting, uncertain of what was
      happening behind the scenes.
    </SGText>
    <!-- Map to show full Flight Path -->
    <SGMapCutout :center="[-164.81767273497297, -2.04786030420415]" :zoom="1.5" :pitch="0" />
    <SGGallery
      :list="[{ img: 'PXL_20241116_175359577.jpg', coords: [-118.409936, 33.943494] }]"
      :add-photos-to-map="true"
    />
    <SGText>
      Then, unexpectedly, Cam and I were also pulled into immigration. What started as a routine
      entry into the U.S. turned into a prolonged ordeal. We were led through a series of security
      measures—belts removed, full pat-downs, a thorough count of any Australian cash we carried.
      Soon, we found ourselves in a holding room with another traveller from Germany, who had
      already been stuck there for 24 hours. The space was sparse, with little to do but eat an
      excessive number of Cheetos and sweet pretzels while watching Family Guy reruns on a nearby
      television.
      <br />
      <br />
      After five hours of waiting, we were finally called in for formal interviews. Two hours later,
      we received the news we had been dreading—we were being denied entry and would be sent home.
      With only a single message allowed to be sent to my dad, the reality of the situation sank in.
      The waiting continued for several more hours before we were escorted onto a flight back to
      Melbourne. The three of us ended up in our own rows on the plane but as an added precaution, a
      flight attendant held onto our passports throughout the journey.
    </SGText>
    <SGGallery
      :list="[
        { img: 'PXL_20241117_082054740.jpg', caption: 'Tired but hungry on the flight back' },
        'PXL_20241117_080252460.jpg'
      ]"
    />
    <!-- <SGMapCutout :fit-bounds-geometry="los_angeles.geography.detail" /> -->
    <!-- Map to Melbourne -->
    <SGMapCutout :center="[144.850992, -37.668561]" :zoom="11" />
    <SGText>
      Back in Melbourne, the three of us reunited over a much-needed beer before parting ways—Dom
      heading back to Hobart while Cam and I caught a flight to Adelaide. Finally, an Uber ride to
      Aldgate and a good chat with family marked the end of a long and exhausting experience. The
      moment I arrived home, I collapsed into bed, eager to recover from an unexpected and surreal
      journey.
    </SGText>
    <SGGallery
      :list="[{ img: 'PXL_20241117_235638157.jpg', coords: [144.850992, -37.668561] }]"
      :add-photos-to-map="true"
    />
  </DetailView>
</template>
