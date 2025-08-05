<script setup lang="ts">
import { useTripDetails } from '@/functions/loaders'
import DetailView from '@/components/DetailView.vue'
import SGHeader from '@/components/SGHeader.vue'
import SGGallery from '@/components/SGGallery.vue'
import SGMapCutout from '@/components/SGMapCutout.vue'
import SGText from '@/components/SGText.vue'
const { data: geom } = useTripDetails()
</script>

<template>
  <DetailView>
    <SGHeader>Easter with Family Friends</SGHeader>
    <SGText>
      <p>
        This year’s been vanishing like Batman in a dark alley. Soon after getting home from Tupelo,
        I realised that it was almost April and therefore time for Easter. It is celebrated here in
        the States but unlike back in Australia there are no official public holidays tied to it.
      </p>
      <p>
        Mum had been in touch with some old friends from parenting courses and Bible studies back in
        Aus—including some whom have since migrated to the US. One of them, Jenn, and her family,
        lived in Minneapolis, Minnesota and were more than happy to host me. So, I teed up a long
        weekend visit, even managing to snag an extra day off to make the most of it. I’ve been
        experimenting a bit with hot cross bun recipes as this is something they’re definitely
        lacking in here in the US. It took me a few attempts, but I finally found and completed a
        recipe that I’m happy with! I made a batch to take along to Minneapolis, this was enjoyed
        warmed and with butter.
      </p>
      <p>
        A week later and I was peeling myself out of bed at 3:30 a.m. for an early Friday flight
        from Detroit to Minneapolis. I treated myself to airport coffee and brekkie—proceeded to
        spend more on that than I had on the actual flight.
      </p>
    </SGText>
    <SGGallery
      :list="[
        {
          img: 'PXL_20250418_111648793.jpg',
          caption: 'Early morning flight views'
        }
      ]"
    ></SGGallery>
    <SGText>
      <p>
        Jenn and her youngest son Micah greeted me at the airport, armed with a second breakfast and
        whisked me straight to the Mall of America—which, for some reason, I had never heard of?
        Turns out it’s the largest indoor mall in America! There’s even an amusement park inside it,
        complete with water-based rides. Micah and I took the obligatory tourist photos, wandered
        through the indoor greenery, and marvelled at the massive Lego sculptures guarding the Lego
        store.
      </p>
      <p>
        From there, we visited the jewellery store where Jenn’s parents still work. It was cool to
        see a place where so much of the family is involved, the young and the old. Sauli—Jenn’s
        husband—has played a large part in aspects of the décor at the store including some
        copper-based paint providing a very rustic feel to his office space.
      </p>
    </SGText>
    <SGGallery
      :list="[
        {
          img: 'lego_shop_mallOfAmerica.jpg',
          caption: 'Lego Guardians of the Mall of America'
        }
      ]"
    ></SGGallery>
    <SGText>
      <p>
        After a quick drop-off at the family home (and the surprise discovery of an Easter basket
        with American treats waiting by my bed—legends), we were off again to Top Golf. If you
        haven’t heard of it, it’s basically a high-tech driving range that uses cameras and RFID
        sensors to track your golf shots. Nikolai, the eldest son, drove us over and shared tales of
        his many sports (including bowling and the integration of a sport pattern for more
        difficulty). I was objectively terrible at golf, but Micah and Niko were patient and offered
        up pointers in between bites of lunch—a solid burger and some self-filled donut holes that
        were far more accurate than my golf swing. My shots were varied, most were average (if not
        below average) but there were a few good shots hidden amongst these.
      </p>
      <p>
        Upon completion we headed home for a nap and a quiet read before regrouping for a dinner of
        chicken enchiladas with Annika (the eldest daughter), the family and a special guest of
        Niko’s. After dinner we headed through to their regular church for a multi-pastor service
        focused on Isaiah 53-reflecting on Jesus as the suffering servant. It was well done and
        really encouraging. After getting back home we unwound with some good chats before calling
        it a night.
      </p>
    </SGText>
    <SGGallery
      :list="[
        {
          img: 'donuts_topgolf.jpg',
          caption: 'Donut holes at Top Golf'
        },
        'PXL_20250418_163327088.MP.jpg',
        {
          img: 'PXL_20250418_163900421.jpg',
          caption: 'Easter Treats'
        },
        'o_top_golf.m4v'
      ]"
    ></SGGallery>
    <SGText>
      <p>
        Saturday kicked off with coffee and Swedish pancakes, berries, and sausages. Then a few of
        us went to watch Niko play a solid round of doubles tennis with an uncommon partner. Despite
        the unfamiliar pairing, they played like a well-oiled machine. Later, Sauli and I embarked
        on a mission to find chair cushions for some wooden outdoor seats he’d picked up for free.
        We struck out twice—one set was too small, and the other store didn’t have any options that
        were anywhere near suitable. We did manage to tighten all the screws, though, so the chairs
        were sittable but were put to the side waiting for an online large cushion order.
      </p>
      <p>
        In the afternoon, Niko and I prepped a campfire for later. It was a whole family celebration
        including Eila (the younger daughter with a surprise package to be born later in the year)
        and her husband. The afternoon passed quickly into evening with snacks, campfire, Five
        Crowns and a dinner of sous vide steak (if you know, you know—precision water bath cooking
        followed by a sear = absolute perfection), paired with roasted veg. Dessert was a berry
        cheesecake and chocolate cake. Because it was Easter I decided to treat myself and got a
        small slice of both and some strawberries to take back with me for some Sunday plane snacks.
        A few of us finished off the evening with a session in the hot tub, a perfect way to finish
        Easter Saturday.
      </p>
    </SGText>
    <SGGallery
      :list="[
        {
          img: 'family_night.jpg',
          caption: 'Five Crowns with the family'
        },
        {
          img: 'PXL_20250419_210638450.MP.jpg',
          caption: 'Easter Campfire'
        },
        {
          img: 'spa_time.jpeg',
          caption: 'Perfect finish to the day'
        },
        {
          img: 'old_times.jpeg',
          caption: 'An old photo of most of us from back in Australia'
        }
      ]"
    ></SGGallery>
    <SGText>
      <p>
        Sunday morning, we headed to church for a joyfilled Easter service, celebrating the
        resurrection of Jesus Christ—a hope shared across the globe. Back at home, breakfast was an
        oven-baked egg dish with cheese and a crunchy top. The rest of the day blurred by in a mix
        of packing, rounds of Codenames, chatting, and last bites of leftover sweets before it was
        time to head to the airport.
      </p>
      <p>
        Sauli kindly drove me there. On the way, I learned that my first flight to Charlotte had
        been delayed, which in hindsight meant we probably could’ve taken it a bit slower. Traffic
        was banked up in patches, but I still arrived with significant time to spare. Boarding and
        the flight went smoothly but once I got to Charlotte, we found another plane in our gate.
        Waiting for them to clear left me with a 30-minute window for my next flight which ended up
        being plenty of time, thankfully.
      </p>
    </SGText>
    <SGGallery
      :list="[
        {
          img: 'PXL_20250420_171428183.jpg',
          caption: 'Codenames on Sunday'
        },
        {
          img: 'PXL_20250420_234837309.jpg',
          caption: 'Sunset views from the plane'
        }
      ]"
    ></SGGallery>
    <SGText>
      <p>
        Despite the travel antics, the weekend in Minneapolis was exactly what I needed. The family
        time, the games, the food, the laughter—all things I’ve been missing since starting working
        abroad. It was the kind of Easter that made me grateful for friendship, hospitality, and an
        extra helping of cheesecake.
      </p>
    </SGText>
  </DetailView>
</template>
