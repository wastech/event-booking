<template>
  <q-page class="q-my-xl main">
    <div class="bg">
      <div class="bg_cover"></div>
    </div>
    <div class="text__section">
      <div class="header__text">
        <div class="text-h2 text-white ova_title q-mb-xl">
          Phanxipang Tourist
        </div>
        <q-breadcrumbs>
          <q-breadcrumbs-el label="Home" />
          <q-breadcrumbs-el label="Event" />
          <q-breadcrumbs-el label="Phanxipang Tourist" />
        </q-breadcrumbs>
      </div>
      <div class="row text__row q-col-gutter-lg">
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-12">
          <div class="bg-white q-pa-xl">
            <div class="carousel__section">
              <q-carousel animated v-model="slide" arrows navigation infinite>
                <q-carousel-slide
                  :name="1"
                  img-src="https://cdn.quasar.dev/img/mountains.jpg"
                />
                <q-carousel-slide
                  :name="2"
                  img-src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-carousel-slide
                  :name="3"
                  img-src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
                <q-carousel-slide
                  :name="4"
                  img-src="https://cdn.quasar.dev/img/quasar.jpg"
                />
              </q-carousel>
            </div>

            <div class=" ">
              <div class="text-body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                <br />
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.It was popularised in the
                1960s with the release of Letraset sheets c ublishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.It was popularised in the
                1960s with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
              </div>
            </div>

            <q-card-actions align="between" class="text-weight-medium">
              <div class="">
                <span>
                  <q-icon name="local_offer" class="q-mr-sm" /> Tag:
                  <a href="" class="q-mx-sm text-caption">phanxipang</a>
                  <a href="" class="text-caption">tourist</a>
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
          <event-tab/>
          </div>
        </div>

        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xl-12">
          <event-side />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import EventSide from "../components/EventSide.vue";
import EventTab from "src/components/EventTab.vue";
// import BackgrounHeader from "../components/BackgrounHeader.vue";
export default {
  components: { EventSide, EventTab },
  // components: { BackgrounHeader },
  // name: 'PageName',
  setup() {
    return {
      slide: ref(1),
    };
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
