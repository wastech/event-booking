<template>
  <q-page class="q-my-xl main">
    <div class="bg">
      <div class="bg_cover"></div>
    </div>
    <div class="text__section">
      <div class="header__text">
        <div class="text-h2 text-white ova_title q-mb-xl">
          {{ item.title }}
        </div>
        <q-breadcrumbs>
          <q-breadcrumbs-el label="Home" />
          <q-breadcrumbs-el label="Event" />
          <q-breadcrumbs-el :label="item.title" />
        </q-breadcrumbs>
      </div>
      <div class="row text__row q-col-gutter-lg">
        <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
          <div class="bg-white q-pa-xl">
            <div class="carousel__section">
              <q-carousel
                animated
                v-model="slide"
                v-if="item.imageUrl"
                arrows
                navigation
                infinite
              >
                <q-carousel-slide :name="1" :img-src="item.imageUrl.url" />
              </q-carousel>
            </div>

            <div class="">
              <div class="text-body1" v-html="item.description"></div>
            </div>

            <q-card-actions align="between" class="text-weight-medium">
              <div class="">
                <span>
                  <q-icon name="local_offer" class="q-mr-sm" /> Tag:
                  <span>
                    <router-link
                      class="q-mx-sm text-caption"
                      v-for="(tag, index) in item.tags"
                      :key="index"
                      v-bind:to="{
                        name: 'eventtag',
                        params: { id: tag },
                      }"
                      v-html="tag"
                    >
                    </router-link>
                  </span>
                </span>
              </div>
              <div class="">
                <span class="text__body">
                  <q-btn flat> </q-btn>Share:
                  <q-icon name="fab fa-facebook-f" class="q-mr-md" />
                  <q-icon name="fab fa-twitter"
                /></span>
              </div>
            </q-card-actions>
          </div>
          <!-- tag section -->
          <div class="section">
            <!-- import event tab -->
            <event-tab :item="item" />
          </div>
        </div>

        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xl-12">
          <event-side :item="item" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import EventSide from "../components/EventSide.vue";
import EventTab from "src/components/EventTab.vue";
import postService from "../services/eventService";

export default {
  components: { EventSide, EventTab },

  data() {
    return {
      slide: 1,
      id: this.$route.params.id,
      item: {},
    };
  },
  methods: {
    async getSinglePost() {
      try {
        await postService.showpost(this.id).then((response) => {
          this.item = response.data.event;
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getSinglePost();
  },
};
</script>
<style scoped>
.bg {
  background-image: url(https://ovatheme.com/em4u/wp-content/themes/em4u/assets/img/bg_heading-compressor.jpg);
  padding: 277px 0px 80px 0px;

  position: relative;
  height: 36vh !important;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.main {
  background-color: #f2f2f2;
}
.bg_cover {
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.text__section {
  width: 65% !important;
  margin: 0 auto;
  margin-top: -19em;
  position: relative;
  height: 100%;

  z-index: 2;
}
.header__text {
  color: white;
}
.ova_title {
  font-size: 70px;
  font-weight: bold;
  margin-bottom: 0;
  margin-top: 0;
  color: #fff;
  line-height: 80px;
}
.text__row {
  margin-top: 4em;
}
.text-body1 {
  margin-top: 20px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #e3e3e3;
  font-size: 14px;
  line-height: 24px;
  font-weight: normal;
  color: #242b46;
}
.q-icon {
  color: #f53f7b;
}
a {
  background-color: transparent;
  text-decoration: none;
  color: #000;
}
a:hover {
  color: #f53f7b;
}
a:focus {
  color: #f53f7b;
}
</style>
