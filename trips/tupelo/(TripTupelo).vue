<script setup lang="ts">
import DetailView from '@/components/DetailView.vue'
import SGHeader from '@/components/SGHeader.vue'
import SGGallery from '@/components/SGGallery.vue'
import SpotifyEmbed from '@/components/SpotifyEmbed.vue'
// import SGMapCutout from '@/components/SGMapCutout.vue'
import SGText from '@/components/SGText.vue'
// import { tupelo } from './tupelo'
</script>

<template>
  <DetailView>
    <SGHeader>Painting Corollas in Tupelo</SGHeader>
    <SGText>
      <p>
        This was my first site-based project and was a cool experience to finally have an
        opportunity to see where our paint process work actually ends up. Cam headed back to
        Australia for a vacation trip in Japan and my next was project was only set to start up at
        the start of April, a few weeks away. I spoke with my manager over here as to what projects
        might be available to fill my time with while I waited for the mod-build. He suggested I
        could work in the lab helping get setup for another project or I could potentially go to
        Toyota down in Mississippi.
      </p>
      <p>
        I quickly said that I’d be keen to get as much onsite experience as I could! The project was
        a line speedup at the Toyota Corolla factory near Tupelo, Mississippi. This would allow the
        factory to produce a few more thousand cars per year where they already produce near to 800
        Corollas per day at least 5 days a week! Tupelo is the birthplace of the legendary Elvis
        Presley so many of the shops and diners hold elements of memorabilia or claim to be his
        favourite spot while growing up.
      </p>
      <p>
        The flight was booked for the 20th of March giving me just enough time to help Joe with some
        of the clean-up items regarding our previous project for Ford and to spend some time with
        Sai learning some extra skills regarding being a paint process engineer. It was a good time
        of learning, making a few mistakes but also learning from those.
      </p>
    </SGText>
    <SGGallery
      :list="[
        {
          img: 'PXL_20250320_180038808.jpg',
          caption: 'A somewhat Swedish snack to start the trip'
        },
        {
          img: 'PXL_20250320_142607114.jpg',
          caption: 'A 15min flight to Chicago'
        },
        {
          img: 'car_hire.jpg',
          caption: 'My car in Memphis, a Mazda CX-9'
        },
        {
          img: 'PXL_20250320_184725546.jpg',
          caption: 'Chicago popcorn'
        }
      ]"
    ></SGGallery>
    <SGText>
      <p>
        I opted to fly with American airlines (racking in the frequent flyer points where I can)
        which meant that I was flying through Chicago rather than direct from Detroit. This created
        the perfect opportunity to experience a very small amount of Chicagoan cuisine. I chose to
        try a Chicago hotdog (good but a street store as opposed to airport would probably be
        better) and some caramel/cheese popcorn which is supposedly a Chicago combo. This was
        surprisingly good though the yellow of the cheese popcorn really stuck to your fingers! I
        also grabbed a cinnamon scroll but only because I felt I could justify it since I was
        chatting to a friend in Sweden while at the airport, not as good as the ones from Ikea.
      </p>
    </SGText>
    <SpotifyEmbed url="track/5fgkjhICZnqFctrV0AyuQD" :small="true" />
    <SGText>
      <p>
        Both flights went smoothly and before I knew it, I was ‘Walking in Memphis.’ I successfully
        collected my Mazda CX-9, my hire car for my time here before driving the 1.5hrs to Tupelo to
        meet the team for dinner at the Blue Lagoon. Three out of the four of us decided to try the
        fried catfish sandwich. This was delicious! The meat of the catfish is tender and the extra
        crunch of the ‘grits’ (cornmeal-based coating) paired exceptionally well with the coleslaw
        and fries. Dinner and a beer later, and I was heading for my new hotel home, Home2Suites, to
        get some rest.
      </p>
    </SGText>
    <SGGallery
      :list="[
        {
          img: 'PXL_20250321_002315713.MP.jpg',
          caption: 'Catfish at the Blue Lagoon (from left to right: me, Joe, Blase and Eric)'
        }
      ]"
    ></SGGallery>
    <SGText>
      <p>
        Friday morning found me sleeping in before making the most of the buffet breakfast making
        myself a fresh waffle alongside a healthy side of fried chicken and maple syrup. I started
        working 12hr split shifts at midday allowing me to go in and get my badge sorted before
        watching a few hours of production before they speed up the line. Joe and Blase were able to
        step me through some of the software setting me up so I could take backups from the robot
        controllers. At 6pm nightshift started, and Sai and I got to work promptly, stepping through
        the paint programs we’d developed with a physical vehicle.
      </p>
      <p>
        All ran relatively smoothly except for the one instance where we started lifting a car as
        the arm cover got caught on the front door lip. The pathwork was adjusted to ensure this
        wouldn’t happen again. Midnight quickly arrived and I headed back to the hotel to get some
        rest.
      </p>
      <p>
        Saturday morning found me sleeping in a touch more than usual to adjust to the late nights
        before enjoying another buffet breakfast of cereal and pastries in the sun. This provided
        the perfect opportunity for some Bible reading out in the sun which was delightful! I’d
        sourced a small induction stove from the hotel reception so I spent some time before
        starting my shift making a stir-fry to take for dinners. I did get a touch distracted at
        Walmart while shopping though and purchased a bunch of American snacks that Jono and Abby
        had suggested I try. These didn't last very long.
      </p>
    </SGText>
    <SGGallery
      :list="[
        {
          img: 'bd6d594f-d385-4d8b-8cbe-ad2bab945f39.jpg',
          caption: 'American snacks'
        },
        {
          img: 'PXL_20250322_142002577.jpg',
          caption: 'Pastry brunch in the sun'
        }
      ]"
      :small-thumbnails="true"
    ></SGGallery>
    <SGText>
      <p>
        The Saturday split shift was uneventful as we continued running test units to match the
        paint quality of the old line speed. It ended up that the exterior zone (not our robots),
        had more trouble with the increased line speed than we did which meant that most of our wait
        time was caused by them. Nightshift came and we continued ensuring that we could replicate
        the required quality. The split shifts very quickly blurred together before Sunday night
        arrived. Eric was heading back to Detroit, and I was taking his place on nightshift. I
        finished my split shift Sunday night before Sai and I went to Waffle House for a midnight
        snack. It was pretty good… waffles and American hashbrowns.
      </p>
      <p>
        I spent the rest of Sunday night awake, preparing for my first nightshift on Monday. I'd
        planned to watch shows to stay awake but instead ended up chatting with some friends across
        the globe. With these chats the time passed quickly and before I knew it, it was 6am, time
        for a 'dinner' of hotel breakfast buffet'. Blackout curtains shut, and I slept for the rest
        of the day.
      </p>
    </SGText>
    <SGGallery
      :list="[
        {
          img: 'PXL_20250324_041404579.MP.jpg',
          caption: 'Sai and I at Waffle House'
        },
        {
          img: 'PXL_20250321_225703699.MP.jpg',
          caption: 'Me in my excellent looking paint suit'
        }
      ]"
      :small-thumbnails="true"
    ></SGGallery>
    <SGText>
      <p>
        After sleeping throughout the day, I was rudely awakened with the fire alarm. I woke up
        bleary eyed and annoyed waiting it for intermittently stop and start. Eventually I got sick
        of it, jumped out of bed, and went for a 5 km run. In the end the run paired with a cold
        shower was not a bad way to start my first round of nightshift.
      </p>
      <p>
        The days/nights quickly blurred while Sai and I continued working on what we in the industry
        call ‘production support’. They typically run two 10hr production shifts per day so most of
        a 12hr shift is spent monitoring the performance of the cell and helping the plant if it
        encounters any issues. For the most part, as these lines have been running smoothly for 6
        years, there weren't any issues but we did manage to decrease some intermittent faults they
        had been having. There were a few nights at the plant where we had tornado warnings, but the
        paint zone of the warehouse is completely isolated from the outside world, so we had no idea
        what the weather looked like outside. This made it much easier to be on nightshift as you
        couldn’t even tell if it was actually day or night.
      </p>
      <p>
        I tried to get up ‘early’ most days to do some form of exercise before having ‘breakfast’
        (typically some form of dinner-related food) and then heading into the plant. While on
        nightshift I tried the ‘best American smash burger’ (I’ll be honest, neither Sai or I would
        agree with this rating), Thai red curry, a crawfish/beef combo burger back at Blue Canoe
        (much better than the smash burger), burritos, fried chicken, tacos… as well as a few
        mini-stove made simple stir-fry meals. We had one day/night off while I was on nightshift on
        which the full crew caught up for dinner and drinks at a place that sold some exceptionally
        good Thai tacos! I spent the rest of the evening off working on a few blog posts and
        chatting with friends back in Australia.
      </p>
    </SGText>
    <SGGallery
      :list="[
        {
          img: 'PXL_20250330_013240186.MP.jpg',
          caption: 'Near empty drinks after tacos'
        },
        {
          img: 'o_PXL_20250321_191023771.m4v',
          caption: 'Corollas in our basecoat paint cell'
        },
        {
          img: 'o_PXL_20250330_012905740.m4v',
          caption: 'Pillow fighting is supposedly a broadcastable sport in the US'
        },
        {
          img: 'PXL_20250401_221308835.MP.jpg',
          caption: 'Sai and I out for Thai'
        }
      ]"
    ></SGGallery>
    <SGText>
      <p>
        The two weeks of the project passed exceptionally quickly and before I knew it, we were in
        the last week with both Sai and Blase being sent back to base early. This left Joe on
        dayshift and me on nightshift to finish up the last few days of production support. Friday
        night, our last night at the plant, appeared and Joe stepped me through my final tasks for
        the night ahead. I was flying Saturday morning with flight details received late the night
        before.
      </p>
      <p>
        I proceeded to step through the ‘clearpath’ procedures ensuring that our robots could be
        extracted from the car interior in the instance of any significant faults. This went
        successfully for our basecoat cell, but I quickly ran into problems in our clearcoat cell,
        problems that I wasn’t sure how to fix. This was supposed to be a shorter night of clean-up
        tasks and backups but I ended up working a 13-hour shift and wasn’t able to solve all the
        problems I’d run into. I finally called it a night, driving back to the hotel after sending
        a few emails. Arriving back, I fell straight into bed skipping my shower routine as I was
        completely spent.
      </p>
    </SGText>
    <SGGallery
      :list="[
        {
          img: 'PXL_20250404_194954800.jpg',
          caption: 'The final product, a complete Corolla'
        }
      ]"
    ></SGGallery>
    <SGText>
      <p>
        A few hours of sleep later and I was up ready to head to the airport. I packed up everything
        in my room and headed down for my final buffet breakfast. Making the most of the variety of
        foods! Grabbing a few spares to enjoy later at the airport for some lunch. The drive to the
        airport back in Memphis was uneventful apart from the rain and the occasional warning sign
        that there was a chance of tornados in the afternoon. I ended up needing to fill-up with
        fuel in Tupelo just before leaving and again at the airport before returning the car.
      </p>
      <p>
        I met Joe at the airport, and we debriefed my final night listing the steps that would need
        to be completed back in Detroit to ensure that all plant issues were fixed. The flight went
        smoothly and I Ubered back to the house at Lake Orion. Not my best decision but I’d booked
        tickets to watch Connor Price (a ‘Christian’ small time rapper that I enjoy listening to on
        occasion) the evening I got back into Detroit, so I had a quick spot of dinner before
        catching another Uber back into Detroit. The concert was good, definitely an experience, but
        I’ll be honest… I prefer his music pre-recorded. I caught another Uber back and headed
        straight for bed. Luckily, I got back on a Saturday which meant that I had an additional
        recovery day before heading back in for work again on Monday morning. Overall, the trip was
        a success and I'm glad that I've finally had the opportunity to see a site-based job to know
        what we're actually developing. The nightshifts took their toll and especially the swap back
        from day to night but I did enjoy the small bonus to the bank account for my overtime hours.
      </p>
    </SGText>
    <SGGallery
      :list="[
        'PXL_20250405_224659371.jpg',
        {
          img: 'o_PXL_20250406_020243485.m4v',
          caption: 'One of the songs from rapper Connor Price'
        }
      ]"
      :small-thumbnails="true"
    ></SGGallery>
    <SGText>
      <p>
        Overall, the trip was a success and I'm glad that I've finally had the opportunity to see a
        site-based job to know what we're actually developing as paint process engineers. The
        nightshifts took their toll but the swap from night to day was definitely harder. I did
        enjoy the small bonus to the bank account for my overtime hours though so honestly can't
        complain.
      </p>
    </SGText>
  </DetailView>
</template>
