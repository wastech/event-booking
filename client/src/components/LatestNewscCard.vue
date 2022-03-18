<template>
  <div
    class="slider"
    v-bind:style="$q.screen.lt.sm ? { width: '90%' } : { width: '75%' }"
  >
    <vueper-slides
      class="no-shadow"
      :visible-slides="3"
      slide-multiple
      bullets-outside
      fade
      infinite
      autoplay
      :gap="3"
      :slide-ratio="1 / 4"
      :dragging-distance="200"
      :breakpoints="{ 900: { visibleSlides: 1, slideMultiple: 1 } }"
      fixed-height="405px"
      :bullets="true"
      :arrows="false"
    >
      <vueper-slide v-for="item in items" :key="item.id">
        <template v-slot:content>
          <!-- <div class="row">
        <div
          class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12"

        > -->
          <q-card class="my-card">
            <q-img :src="item.image" />

            <q-card-section class="text-center">
              <q-btn
                fab
                round
                class="absolute text-white show q-mb-lg"
                style="
                  top: 0;
                  left: 40%;

                  background: #f53f7b;
                  transform: translateY(-50%);
                "
                icon="photo_size_select_actual"
              />

              <q-btn
                round
                fab
                icon="trending_flat"
                class="absolute text-white q-mb-lg hide"
                style="
                  top: 0;
                  left: 40%;

                  background: #f53f7b;
                  transform: translateY(-50%);
                "
              />

              <div
                class="text-h6 ellipsis q-pa-none q-mt-md text-weight-medium"
              >
                Phanxipang Tourist
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none text-center">
              <div class="text-subtitle1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mae...
              </div>
            </q-card-section>

            <q-separator />

            <q-card-actions align="between">
              <div class="">
                <q-icon name="calendar_today" /> <span>july 12, 2015</span>
              </div>
              <div class="">
                <q-icon name="message" /> <span>0</span> <span>coments</span>
              </div>
            </q-card-actions>
          </q-card>
          <!-- </div>
      </div> -->
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  // name: 'ComponentName',
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      items: [
        {
          image:
            "https://www.planetware.com/photos-large/F/france-paris-eiffel-tower.jpg",
        },
        {
          image:
            "https://ichef.bbci.co.uk/news/976/cpsprodpb/BE67/production/_123234784_tv073754613.jpg",
        },
        {
          image:
            "https://www.planetware.com/photos-large/F/france-paris-eiffel-tower.jpg",
        },
        {
          image:
            "https://www.planetware.com/photos-large/F/france-paris-eiffel-tower.jpg",
        },
        {
          image:
            "https://ichef.bbci.co.uk/news/976/cpsprodpb/BE67/production/_123234784_tv073754613.jpg",
        },
        {
          image:
            "https://www.planetware.com/photos-large/F/france-paris-eiffel-tower.jpg",
        },
        {
          image:
            "https://www.planetware.com/photos-large/F/france-paris-eiffel-tower.jpg",
        },
        {
          image:
            "https://www.planetware.com/photos-large/F/france-paris-eiffel-tower.jpg",
        },
      ],
    };
  },
};
</script>
<style scoped>
.slider {
  margin: 0 auto;
}
.my-card {
  width: 100%;
  max-width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #fff;
  height: 100vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.15s ease-in-out;
  border: 1px solid #dfdfdf;
}
.my-card:hover {
  background-color: #f2f2f2;
}
.q-img {
  height: 20vh;
}

.hide {
  display: none;
}
.my-card:hover .hide {
  display: block;
  background-color: #4862c4 !important;
  color: white;
  padding: 1.5em;
}
.my-card:hover .show {
  display: none;
}
.q-icon {
  color: #f53f7b;
}
</style>
