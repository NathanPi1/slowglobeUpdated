<script setup lang="ts">
import DetailView from '@/components/DetailView.vue'
import SGHeader from '@/components/SGHeader.vue'
import SGGallery from '@/components/SGGallery.vue'
import SGMapCutout from '@/components/SGMapCutout.vue'
import SGText from '@/components/SGText.vue'
import { upstate_new_york } from './upstate_new_york'
</script>

<template>
  <DetailView>
    <SGHeader>A weekend in Poland</SGHeader>
    <SGText>
      <p>
        The perks of having my own car while Cam is on vacation meant that after work, I drove home,
        packed the last few things into my bags, grabbed a quick shower, and headed straight to the
        cheap airport valet I’d found. A cookie and shuttle ride later, I was at the terminal and
        through security—though my dry bag packed with ground coffee for Jono and Abby raised some
        suspicion. Apparently, coffee looks a little suspicious under X-ray. With time to kill, I
        chatted with friends and family back in Australia, then finished off the last of my
        Detroit-style pizza (honestly, more dough-base than I would like) for dinner. I also enjoyed
        a few cornflake cookies that I’d baked, one of my favourites back in Australia! And they
        were almost as good.
      </p>
    </SGText>
    <SGMapCutout
      :center="[-79.21747409790754, 39.27080082407903]"
      :zoom="5.5"
      :pitch="0"
      :bearing="0"
      :reveal="2"
    />
    <SGText>
      <p>
        I couldn’t find any direct flights to Albany, and with the usual ‘cheaper’ option of
        frequent flyer points, so had two flights, first to Charlotte and then to Albany. I landed
        just after midnight and spent some time trying to locate Jono, he’d come into the airport
        with first 30min free parking but we must have missed each other. Eventually found each
        other and hit the road towards Poland, NY. A 90-minute drive, two near misses with deer, and
        were at his and Abby’s farmhouse. A quick house tour before promptly heading to bed.
      </p>
      <p>
        The next morning greeted me with snow still blanketing the town. Jono said it had been one
        of the snowiest years in a while—enough to cause some of the local roofs to collapse. He’d
        just finished repairing part of their church after a chunk of ice had come crashing through.
        After a healthy sleep-in after such a late night I was able to meet Abby and their little
        boy, Joey while enjoying bacon and eggs on homemade sourdough.
      </p>
    </SGText>
    <SGGallery
      :list="['PXL_20250315_131958470_noID.jpg', 'PXL_20250316_162812802_noID.jpg']"
    ></SGGallery>
    <SGText>
      <p>
        Soon after breakfast, James, one of Jono’s mates, picked us up for the Annual Sportsman
        Dinner hosted by a local church. We joined in on two sessions: “Deer Hunting for Beginners”
        and a wild foraging workshop. Both were quite interesting with many different facts
        including the fact that bow hunters and those that hunt with black powder (single shot
        rifles) get an extra couple weeks on their hunting season and that all parts of the
        dandelion are edible. The top tip from the foraging guy was: “If you don’t know what it is,
        don’t eat it.”
      </p>
      <p>
        Lunch was impressive—black bear sausage, venison chili, pulled pork, brisket, green beans,
        and several dessert tables stacked with an incredible variety of pies. Certainly, didn’t
        need it but they had so much that the three of us each managed at least four slices. I had
        pumpkin, blueberry, apple crisp, and a citrusy lemon-lime to finish. Completely stuffed but
        totally worth it.
      </p>
      <p>
        The final session involved duck and turkey hunting using decoy birds and call devices—clever
        stuff, and all very regulated to protect local wildlife. The event finished with the
        announcement of door prize winners with a grand prize of a .22 rifle. Even between the three
        of us and an extensive list of prizes, none of us managed to win a thing. But I did score a
        free stubby holder.
      </p>
      <p>
        Back at Jono’s, Abby had slow-cooked a beef brisket with roasted carrots and potatoes for
        dinner. Even after all that pie, I somehow found room to enjoy a small portion of all the
        above. We capped the night off with some apple and cinnamon tea and a solid late-night
        catch-up with Jono and I chatting for hours.
      </p>
    </SGText>
    <SGGallery :list="['PXL_20250315_155714883.jpg', 'PXL_20250315_172100018.MP.jpg']"></SGGallery>
    <SGText>
      <p>
        Sunday morning, Jono and I drove to Utica for a proper New York bagel breakfast. I went for
        an “everything” bagel (a bagel topped with a combination of salt, pepper, garlic, and poppy
        seeds) with bacon and eggs. Jono got the French toast version, surprisingly cinnamon and
        sugar go surprisingly well with eggs and sausage. We were back in Poland in time for their
        church service, where I was introduced as the weekend Aussie visitor—confusion followed
        until I clarified I was heading back to Detroit, not a weekend trip from Australia.
      </p>
      <p>
        Lunch was tacos, then came some proper country fun: a muddy, rainy afternoon of ‘plinking’
        (more commonly referred to as shooting) behind the barn. James joined us bringing along a
        .22, a lever-action 30-30, and a massive .50 cal muzzleloader. Jono grabbed his own .22. I
        threw on borrowed gumboots and a rain jacket before we spent an hour putting holes in cans
        and targets challenging the strong gusts of wind for accuracy.
      </p>
    </SGText>
    <SGGallery
      :list="[
        {
          img: 'PXL_20250316_181148496.MP.jpg',
          caption: 'Me with a bolt-action .22, and my borrowed rain jacket and boots'
        },
        'o_PXL_20250316_184319419.m4v'
      ]"
    ></SGGallery>
    <SGText>
      <p>
        Back at the farmhouse we warmed up with mulled apple cider (basically hot spiced apple juice
        with caramel) and a bit of Stewart’s ice cream—apparently a local favourite. Before heading
        off, Abby packed me two slices of her homemade sourdough pizza (pepperoni, sausage, and
        broccoli) which was a delicious dinner treat. I’d booked flights out from Syracuse instead
        of Albany which meant for a slightly shorter drive. Jono and I enjoyed our chats as he drove
        me to the airport for my late-night flight back to Detroit.
      </p>
    </SGText>
    <SGGallery
      :list="[
        {
          img: 'PXL_20250316_215643579.jpg',
          caption: 'Abbys delicious sourdough pizza'
        },
        'PXL_20250316_230556013.jpg'
      ]"
    ></SGGallery>
    <SGText>
      <p>
        I arrived safely back in Detroit at around midnight finding my way to the valet to collect
        my car and a hot drink for the road. I had thought about a late night stop at maccas but
        thankfully (haha) the local store was only accepting app-based orders and I can’t download
        the app on an Australian phone.
      </p>
      <p>
        Overall, it was an awesome weekend and a lovely opportunity to meet Jono’s family and to
        explore another interesting place in the US. I’m looking forward to another chance to visit
        these guys again, maybe in summer so we can go for a walk in one of the many surrounding
        forests.
      </p>
    </SGText>
    <SGMapCutout
      :center="[-79.21747409790754, 39.27080082407903]"
      :zoom="5.5"
      :pitch="0"
      :bearing="0"
      :reveal="4"
    />
  </DetailView>
</template>
