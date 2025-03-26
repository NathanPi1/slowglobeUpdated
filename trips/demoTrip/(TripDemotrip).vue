<script setup lang="ts">
import { useTripDetails } from '@/functions/loaders'
import DetailView from '@/components/DetailView.vue'
import SGHeader from '@/components/SGHeader.vue'
import SGGallery from '@/components/SGGallery.vue'
import SGMapCutout from '@/components/SGMapCutout.vue'
import SGText from '@/components/SGText.vue'
import SGMapOrbit from '@/components/SGMapOrbit.vue'
import SGMapFollow from '@/components/SGMapFollow.vue'
import SpotifyEmbed from '@/components/SpotifyEmbed.vue'
import type { Feature, LineString } from 'geojson'
const { data: geom } = useTripDetails()
const everestHike = geom.value?.features[2] as Feature<LineString>
</script>

<template>
  <DetailView>
    <SGHeader>An Example Trip</SGHeader>
    <SGText>
      <p>This is an example trip. It shows some of the things you can do.</p>
      <p>
        You can create a new trip by running <em>npm run create-trip</em> and answering the
        questions.
      </p>
      <p>
        The first thing we did is fly to Sweden. (You can download flight paths from FlightAware as
        KML, and then convert them using the tools included. Read the readme for more information.)
        Once you have the geometry as geojson, you can put it in the <em>geometry.geojson</em> file
        inside the trip you created.
      </p>
    </SGText>
    <SGMapCutout :fit-bounds-geometry="geom" />
    <SGGallery
      :list="[
        '20240906_112409.jpg',
        {
          img: '20240906_104119.jpg',
          caption:
            'This image has a caption. Images can also have locations on the map. Just need to add coords, and add add-photos-to-map to the gallery',
          coords: [42.3978, 41.41228]
        }
      ]"
      :add-photos-to-map="true"
    ></SGGallery>
    <SGText>
      <p>
        The gallery component is simple, and can take a list of image names or objects. Use objects
        if you want to add a caption or location to an image. Images should be in the
        <em>images</em> folder of a trip ie: <em>demoTrip/images/20240906_112409.jpg</em>. You can
        also use videos in .m4v format. Videos can be optimised for the web using the
        <em>npm run encode-video</em> script, which will automatically optimise any video that
        doesn't start with <em>o_</em>.
      </p>
      <p>
        The second thing we did is catch a train. I tend to use
        <a href="https://signal.eu.org/osm">signal.eu.org/osm</a> to find the train route and
        download it as a geojson. In the below window, we only fit the train route to the map with
        the <em>fit-only-to-indexes</em> option.
      </p>
    </SGText>
    <SGMapCutout :fit-bounds-geometry="geom" :fit-only-to-indexes="[1]" />
    <SGText>
      <p>
        The third thing we did was hike up a mountain. We can show the mountain with the Orbit view.
        We can also switch on the satellite layers if we want to. We can also control the orbit
        pitch.
      </p>
    </SGText>
    <SGMapOrbit :center="[86.925, 27.9881]" :satellite="true" :pitch="50" />
    <SGText>
      <p>
        Before I climbed Mt Everest, I listened to my favourite song get me in the mood. You can
        embed songs from Spotify or Bandcamp. You can get the url from the sharing link for the
        song, just remove the start and end of the url.
      </p></SGText
    >
    <SpotifyEmbed url="track/54h1RKrrFJDsNOfhwmqu9o" :small="true" />
    <SGText>
      <p>
        Here's my whole hike. I can also hide the other parts of my journey that haven't happened
        yet in the story using the reveal option. This requires me to add the 'order' property to my
        geojson, which is completely arbitary (ie. not tied to the index of the feature). You don't
        need to include the order property if you're not using the reveal option at all, but if you
        use it anywhere on the page it needs to be included in all the features.
      </p>
      <p>We're also showing contour lines and hillshading in the view below.</p>
    </SGText>
    <SGMapCutout
      :fit-bounds-geometry="geom"
      :reveal="2"
      :fit-only-to-indexes="[2]"
      :satellite="'contours'"
    />
    <SGText>
      <p>We can also follow a path, useful for showing a hike for example.</p>
    </SGText>
    <SGMapFollow
      :geometry="everestHike"
      :follow="true"
      :overview="false"
      :satellite="true"
      :follow-zoom="13"
      :no-pre-scroll="true"
    />
    <SGText>
      <p>
        That's it for this demo trip. Find more examples by looking through published blogs.
      </p></SGText
    >
  </DetailView>
</template>
