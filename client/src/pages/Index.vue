<template>
  <q-page>
    <app-hero />
    <popular-categories />
    <most-visited-places />
    <why-choose-us />
    <featured-events :items="items" />
    <parallax />
    <latest-news :posts="posts" />
  </q-page>
</template>

<script>
import postService from "../services/postService";
import eventService from "../services/eventService";
import AppHero from "../components/AppHero.vue";
import FeaturedEvents from "../components/FeaturedEvents.vue";
import LatestNews from "../components/LatestNews.vue";
import Parallax from "../components/Parallax.vue";
import MostVisitedPlaces from "../components/MostVisitedPlaces.vue";
import PopularCategories from "../components/PopularCategories.vue";
import WhyChooseUs from "../components/whyChooseUs.vue";

export default {
  components: {
    AppHero,
    PopularCategories,
    WhyChooseUs,
    MostVisitedPlaces,
    FeaturedEvents,
    LatestNews,
    Parallax,
  },
  name: "PageIndex",
  data() {
    return {
      items: [],
      posts: [],
    };
  },
  methods: {
    async queryindex() {
      try {
        await eventService.getEvents().then((response) => {
          this.items = response.data.data.slice(0, 3);
        });
      } catch (err) {
        console.log(err.response);
      }
    },
    async getPosts() {
      try {
        await postService.getPosts().then((response) => {
          this.posts = response.data.data.slice(0, 3);
          console.log("this.posts ", this.posts);
        });
      } catch (err) {
        console.log(err.response);
      }
    },
  },

  mounted() {
    this.queryindex();
    this.getPosts();
  },
};
</script>
