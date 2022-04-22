<template>
  <q-page class="events">
    <div class="bg">
      <div class="bg_cover"></div>
    </div>
    <div class="text__section">
      <div class="header__text">
        <div class="text-h2 text-white ova_title q-mb-xl">
          {{ this.$route.params.id }}
        </div>
        <q-breadcrumbs class="text-white q-my-md">
          <q-breadcrumbs-el label="Home" />
          <q-breadcrumbs-el :label="this.$route.params.id" />
        </q-breadcrumbs>
      </div>
    </div>
    <div class="event__form">
      <events-form />
    </div>
    <q-banner
      dense
      inline-actions
      class="text-white bg-red q-pa-xl q-ma-xl"
      v-if="items.length <= 0"
    >
      We're currently working on adding more data to this searched category
    </q-banner>
    <div
      class="blog__section"
      v-bind:style="$q.screen.lt.sm ? { width: '90%' } : { width: '65%' }"
    >
      <div class="row q-col-gutter-lg">
        <div
          class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"
          v-if="items.length > 0"
        >
          <events-card :items="items" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import EventsCard from "../components/EventsCard.vue";
import EventsForm from "../components/EventsForm.vue";
import postService from "../services/eventService";
export default {
  components: { EventsCard, EventsForm },
  data() {
    return {
      items: [],
      id: this.$route.params.id,
      category: "",
      tags: "",
    };
  },
  methods: {
    async getPosts() {
      try {
        await postService.getTags(this.id).then((response) => {
          this.items = response.data.event;
        });
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  async mounted() {
    this.getPosts();
  },
};
</script>
<style scoped>
.events {
  margin-top: 50px;
}
.bg {
  background-image: url(https://ovatheme.com/em4u/wp-content/themes/em4u/assets/img/bg_heading-compressor.jpg);
  padding: 277px 0px 80px 0px;

  position: relative;
  height: 36vh !important;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
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
.blog__section {
  margin: 0 auto;
}
.ova_title {
  font-size: 70px;
  font-weight: bold;
  margin-bottom: 0;
  margin-top: 0;
  color: #fff;
  line-height: 80px;
}
.q-banner {
  width: 50%;
  margin: 0 auto;
  text-align: center;
}
</style>
