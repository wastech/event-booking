<template>
  <q-page class="events">
    <div class="bg">
      <div class="bg_cover"></div>
    </div>
    <div class="text__section">
      <div class="header__text">
        <div class="text-h2 text-white ova_title q-mb-xl">Events</div>
        <q-breadcrumbs>
          <q-breadcrumbs-el label="Home" />
          <q-breadcrumbs-el label="Event" />
        </q-breadcrumbs>
      </div>
    </div>
    <div class="event__form">
      <events-form />
    </div>
    <div class="event__card">
      <events-card :items="items" />
    </div>
    <div class="q-pa-lg flex flex-center q-mt-sm">
      <q-pagination
        v-model="pagination.page"

        :max="pagesNumber"
        size="md"
        :boundary-links="true"
        :to-fn="(page) => ({ query: { page: page } })"
      />
    </div>
  </q-page>
</template>

<script>
import { api } from "boot/axios";
import EventsCard from "../components/EventsCard.vue";
import EventsForm from "../components/EventsForm.vue";
import postService from "../services/eventService";
export default {
  components: { EventsCard, EventsForm },

  // name: 'ComponentName',
  data() {
    return {
      items: [],
      perPage: null,
      currentPage: null,
      total: null,
      page: null,
      pagination: {},
    };
  },
  created() {
    (this.pagination = {
      page: this.currentPage,
      perPage: this.limit,
    }),
      this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  computed: {
    pagesNumber() {
      return Math.ceil(this.total / this.perPage);
    },
  },
  mounted() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      try {
        this.pagination.page = this.$route.query.page;
        await api
          .get(`events`, {
            params: {
              page: this.pagination.page,
            },
          })
          .then((response) => {
            this.items = response.data.data;
            this.current_page = response.data.current_page;
            this.perPage = response.data.limit;
            this.total = response.data.total;
          });
      } catch (err) {

      }
    },
    viewPost(item_id) {
      this.$router.push({ name: "blog", params: { id: item_id } });
    },
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
.event__card {
  width: 65% !important;
  margin: 0 auto;
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
</style>
