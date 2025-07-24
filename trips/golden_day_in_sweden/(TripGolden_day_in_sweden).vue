<script setup lang="ts">
import DetailView from '@/components/DetailView.vue'
import SGHeader from '@/components/SGHeader.vue'
import SGGallery from '@/components/SGGallery.vue'
import SGMapCutout from '@/components/SGMapCutout.vue'
import SGText from '@/components/SGText.vue'
import { useTripDetails } from '@/functions/loaders'
import SGDayBreak from '@/components/SGDayBreak.vue'
const { data: geom } = useTripDetails()
</script>

<template>
  <DetailView>
    <SGHeader>A Golden Day in Sweden</SGHeader>
    <SGText>
      <p>
        This was a rare adventure where both Dan (the original creator of this very cool blog
        design) and I were able to collaborate together on a blog post... but first some preamble of
        my initial travels.
      </p>
      <p>
        Instead of rotating back to Australia work allowed me the cool option of going to visit my
        sister in the UK, alongisde this they were open to flying me via Sweden, creating the
        perfect opportunity for Dan and I to spend some time together. There were two flights to
        Stockholm, Sweden, with the first landing in Amsterdam where I enjoyed a breakfast of
        pastries . Arriving in Stockholm without any issues I found my way to the trainstation
        within the airport before grabbing a Swedish lunch meal deal of a hot dog, a pineapple drink
        and salted licorice chocolate. The train was uneventful but it was cool watching the snow
        covered landscape rush by with icy creeks, snowmobiles on frozen lakes, bee hives and even
        an Ikea keeping me entertained!
      </p>
      <p>
        Dan picked me up from the train station in Sundsvall and the rest of the adventure began...
      </p>
    </SGText>
    <SGGallery :list="['PXL_20250223_132312688.jpg']" />
    <SGText>
      <p>
        Thanks to some work-sponsored travel, both Bek and Nathan happened to be in Sundsvall for
        the week, which was a pleasant surprise. We made the most of our time together, enjoying
        several Swedish adventures.
      </p>
      <p>
        The moment Nathan arrived he was shown the snowman which Bek and Paula had been building
        based on on his likeness for the past few hours. Suitably impressed, the group ate their
        first (of many) Swedish burger meals, and piled into the car to drive to an undisclosed
        location.
      </p>
    </SGText>
    <SGGallery :list="['o_snowman-lapse.m4v', 'PXL_20250222_153320241.PORTRAIT.jpg']" />
    <SGText>
      <p>
        This location turned out to be the SCA arena, host to the evenings' hockey game between
        local team Timrå and visiting Leksands. The first hockey game for most of us turned out more
        exciting than we'd imagined, with the home team taking a 3-1 victory, and possibly scoring a
        final extra goal right on the buzzer, taking advantage of the oppositions lack of goalie.
        Timrå had a serious fanbase cheering them on the entire game, and the stadium was a sea of
        red and white (except for Nathan wearing his blue jacket - Leksands colours). It was an
        exciting start to the week, tempered only by the carpark gridlock leaving the stadium.
      </p>
    </SGText>
    <SGGallery :list="['PXL_20250222_185817425.jpg', 'o_ice_hockey.m4v']" />
    <SGText>
      <p>
        We decided to hit the slopes across town the next day, Bek and Paula on skis and Daniel and
        Nathan on snowboards. We had managed to borrow most of our gear from Fritidsbanken, a kind
        of free outdoor gear library. This first outing took us to the giddy heights of the free
        kids platter, giving us a downwards run of almost 200 meters. This was still plenty while we
        got our feet back under us, but started to get old fairly quickly.
      </p>
      <aside>
        A subsequent trip later in the week took Nathan and Dan to Sidsjöbacken, a slightly larger
        set of runs on the other side of the same mountain. Buying a lift pass didn’t get us away
        from the children however, as our visit coincided with a school trip, meaning we had to be
        on the lookout for small children pizza-ing straight down the hill.
      </aside>
      <p>
        We broke for a late lunch at Max, a Swedish burger chain, where we discovered some delicious
        dipping sauces, and then drove up to the North Mountain for a hike and to admire the sunset
        view over the town.
      </p>
    </SGText>
    <SGGallery
      :list="[
        'PXL_20250223_120146637.jpg',
        'PXL_20250223_132312688.jpg',
        'PXL_20250223_142501295.jpg',
        'PXL_20250223_150747554.jpg',
        'IMG_2244.jpg',
        '20250223_195157-ANIMATION.gif'
      ]"
    />
    <SGText>
      <p>
        Monday found us. It was fun. The Swedish migration system is not. Exploring the town was
        slippery. Lunch on a staircase confused the locals.
      </p>
      <p>
        Monday evening found us all at the bouldering gym in Sundsvall, where we were joined by
        Paula's friend Ebba for a climbing session reminiscent of the good old days in Adelaide.
        After feeling all muscles burning we decided to follow old traditions, finding one of the
        local burger joints (Apa) for dinner. The burgers were delicious, closing out what was a fun
        evening until arriving back at the cars to find that a nasty policeman had left us both a
        note objecting to our chosen parking location. This made for an expensive meal...
      </p>
    </SGText>
    <SGGallery :list="['PXL_20250224_192555796.jpg']" />
    <SGText>
      <p>
        Tuesday presented our first opportunity to play with some PCBs we'd been designing very
        slowly for the last few years. We'd finally finished the design the week before, working
        from opposite sides of the globe, and had been eagerly slipping to the mailbox all week to
        see if they'd been delivered.
      </p>
      <p>
        As with any of our projects, we quickly ran into some challenges getting everything running,
        and still hadn't solved them before it was time for lunch. As is common is Sweden, we headed
        to a global furniture store for our meatball fix. The gluten-capable among us made the most
        of the variety of pastries on offer.
      </p>
      <p>
        Bek got a private tour of Permobil while Nathan and Dan shopped for snowshoes, getting
        distracted with several other enticing purchases, and several less enticing chores. We
        explored SystemBolaget, Swedens' only (government run) alcohol store, and bought a few fun
        flavoured beverages, including liquorice liquor and chocolate rum-ball cider.
      </p>
    </SGText>
    <SGGallery :list="['IMG_7543.jpg', 'PXL_20250225_150840536.jpg']"></SGGallery>
    <SGText>
      <p>
        On Wednesday, those of us who weren't working headed 130km north to hike the High Coast, an
        area of Sweden that feels more like Norway, with islands, mountains and sheets of ice.
        Arriving in the carpark, we were alone except for a couple with four dogs. For reasons
        unknown to us, they left two of their dogs in the car, and set off on a several hour walk
        with the others, much to the dismay of the two left behind. We strapped on our new snowshoes
        with only minor difficulty and began trekking through the snow.
      </p>
    </SGText>
    <SGGallery
      :list="[
        'PXL_20250226_104859054.MP.jpg',
        { img: 'PXL_20250226_105100732.jpg', coords: [18.435472, 63.118161] },
        'PXL_20250226_111024044.jpg',
        { img: 'PXL_20250226_120300488.jpg', coords: [18.486225, 63.084917] }
      ]"
      :add-photos-to-map="true"
    />
    <SGText>
      <p>
        We quickly realised that the marked trails were so compacted that we were better off with
        studs. Walking off the beaten track was a lot of work for those breaking trail, and there
        were several patches were snow simply didn't exist. It was exciting to see our first signs
        of green again after a winter spent in the snow.
      </p>
      <p>
        After a kilometer or so, we decided that in the current snow conditions, we'd be better off
        with studs. So when we stopped for lunch we stowed the snowshoes and fired up the Jetboil to
        rehydrate some delicious and surprisingly filling reindeer stew that we'd found on sale
        alongside our snowshoes. We ate next to the frozen ocean, watching the sheets of ice slowly
        melt and drift.
      </p>
    </SGText>
    <SGMapCutout :fit-bounds-geometry="geom" :satellite="'contours'" />
    <SGGallery
      :list="[
        'PXL_20250226_115930950.jpg',
        { img: 'PXL_20250226_124230381.MP.jpg', coords: [18.502696784188856, 63.08801353796804] },
        'o_ice-lapse.m4v',
        'PXL_20250226_125011487.jpg'
      ]"
      :add-photos-to-map="true"
    />
    <SGText>
      <p>
        After lunch and a few more kilometers, we had a decision to make about our route back. The
        sensible thing to do would be to turn around, but of course we were keen to make it a loop,
        and see the view from the top. So we pushed on up the hill, quickly shedding our outer
        layers as the view and sunset slowly revealed themselves. The snow here was deeper at
        points, and Nathan was constantly up to his knees finding the uncompacted patches.
      </p>
      <p>
        Near the top, there's a frozen lake, offering another stunning view. A little bit further on
        is the famous Slåttdalsskrevan, a narrow gorge that cuts through the mountain. Right above
        that is the top of the mountain, where there's a lookout from which we could see golden
        colours descending over the bay.
      </p>
    </SGText>
    <SGGallery
      :list="[
        'PXL_20250226_142503218.jpg',
        'o_High Coast Walker Follow_waifu2x_2x_mp4.m4v',
        'PXL_20250226_134740920.jpg',
        'o_DJI_0122.m4v',
        'o_DJI_0125.m4v',
        'PXL_20250226_150914051.PANO.jpg',
        'PXL_20250226_154441366.jpg',
        'PXL_20250226_152839518.jpg',
        'o_DJI_0131.m4v',
        { img: 'PXL_20250226_153510325.jpg', coords: [18.501486, 63.110006] },
        'PXL_20250226_155447054.jpg'
      ]"
      :add-photos-to-map="true"
      :small-thumbnails="true"
    />
    <SGText>
      <p>
        By the time we began our descent, we had run out of non-golden light, and were beginning to
        run short of golden light too. After a few kilometers of walking the treacherous iced over
        boardwalks, we traded gold for silver, with headtorches lighting our way home. This section
        of the trail was raised above the snowdrifts, but the snow on the boardwalks had frozen
        solid. The studs on our shoes made sure we had plenty of grip on the ice, but the ice had no
        such guarantee of it's grip to the boards. Despite a few near misses, we made it back to the
        carpark without any major incidents.
      </p>
      <SGDayBreak />
      <p>
        All great trips include a culinary exploration experience, especially when Nathan and Dan
        are allowed to go shopping together. We bought several fun and unusual items to try
        throughout the week, including:
      </p>
      <ul>
        <li>
          <strong>Reindeer Stew</strong> - flavour-filled and surprisingly filling <br />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-half-rounded" inline />
        </li>
        <li>
          <strong>Siracha Cheese Spread</strong> - mildly inedible, tastes like off plastic <br />
          <iconify-icon icon="material-symbols:star-half-rounded" inline />
          <iconify-icon icon="material-symbols:star-outline-rounded" inline />
          <iconify-icon icon="material-symbols:star-outline-rounded" inline />
          <iconify-icon icon="material-symbols:star-outline-rounded" inline />
          <iconify-icon icon="material-symbols:star-outline-rounded" inline />
        </li>
        <li>
          <strong>Kalle (caviar paste)</strong> - intense, initially tasty, but strong aftertaste.
          Note: the happy boy on the packet has put way too much on <br />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-outline-rounded" inline />
          <iconify-icon icon="material-symbols:star-outline-rounded" inline />
          <iconify-icon icon="material-symbols:star-outline-rounded" inline />
        </li>
        <li>
          <strong>Blueberry/Strawberry Soup</strong> - surprisingly versatile, finding its way into
          breakfasts and desserts<br />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-outline-rounded" inline />
        </li>
        <li>
          <strong>Max Umami Sauce</strong> - basically cheap truffle mayo, delicious, found it later
          in the supermarket<br />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
        </li>
        <li>
          <strong>Pick and Mix</strong> - Incredibly large selection of sugar, all for a fixed per
          kilo price<br />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
        </li>
        <li>
          <strong>Swedish Chocolate</strong> - Several varieties were consumed, all were
          delicious<br />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
        </li>
        <li>
          <strong>BaconOst</strong> - Bacon flavoured cheese in a tube, what more could you want?<br />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-outline-rounded" inline />
        </li>
        <li>
          <strong>Mandelkubb</strong> - Tasty marzipan biscuits, best consumed on stairs<br />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-half-rounded" inline />
        </li>
        <li>
          <strong>Dill Flavoured Chips</strong> - Bek claims she was unimpressed, but ate most of
          the packet<br />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-rounded" inline />
          <iconify-icon icon="material-symbols:star-outline-rounded" inline />
        </li>
      </ul>
    </SGText>
    <SGGallery
      :list="[
        {
          img: 'PXL_20250227_212707341.jpg',
          caption: 'Posing with some of our experimental foods'
        },
        { img: 'PXL_20250227_171257098.jpg', caption: 'The mega pick and mix' }
      ]"
    />
  </DetailView>
</template>
