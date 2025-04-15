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
      <p>
        Dan dropped me off early at the train station – it was bittersweet, the start of a new
        adventure but also a farewell for an unknown length of time. But you can’t keep us apart for
        too long so I’m sure that we’ll run into each other again soon. Was a nice, relaxed train
        back to Stockholm airport where I grabbed some pastries, including my final Swedish cinnamon
        scroll, a sandwich and an average coffee before heading through to the international
        departure zone. Thanks Brexit. Nice to be able to say that I’m here for holiday and not for
        work.
      </p>
    </SGText>
    <SGMapCutout :fit-bounds-geometry="geom" :fitOnlyToIndexes="[4]" :reveal="3" />
    <SGText>
      <p>
        The flight to London went without hiccups though there was a slight delay which meant that I
        missed one of my booked trains. But a lady on her first shift in the trainline office at
        Paddington was able to book me onto the next one free of charge (after the general help
        people had said that I’d need to pay the full price). Paddington station is absolute chaos
        when trains are ready for departure, for whatever reason they allow passengers to crowd
        waiting for the line to open and then boom, like spray from a shotgun everyone rushes
        towards the train. Made it onto the train safely and sat next to a lovely old lady called
        Virginia. The time passed quickly while she chatted about England and her grandchildren
        before reaching her stop.
      </p>
    </SGText>
  </DetailView>
</template>
