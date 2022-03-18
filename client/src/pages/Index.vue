<template>
  <q-page>
    <app-hero />
    <popular-categories />
    <most-visited-places />
    <why-choose-us />
    <featured-events />
    <parallax />
    <latest-news />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import AppHero from "../components/AppHero.vue";
import FeaturedEvents from "../components/FeaturedEvents.vue";
import LatestNews from "../components/LatestNews.vue";
import Parallax from "../components/Parallax.vue";
import MostVisitedPlaces from "../components/MostVisitedPlaces.vue";
import PopularCategories from "../components/PopularCategories.vue";
import WhyChooseUs from "../components/whyChooseUs.vue";

export default defineComponent({
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
});
</script>
