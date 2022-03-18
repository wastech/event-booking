<template>
  <div class="main">
    <q-parallax
      class="paralax__container bg-transparent"
      :height="999"
      :speed="0.5"
      style=""
    >
      <template v-slot:media>
        <img
          src="https://ovatheme.com/em4u/wp-content/uploads/2019/03/search_event.jpg"
        />
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            top: scope.percentScrolled * 60 + '%',
            left: 0,
            right: 0,
          }"
        >
          <div class="text-h2 text-white text-center q-my-md">
            Find Nearby Location
          </div>
          <div class="text-h6 text-grey-3 text-center">
            Explore top-rated attractions, activities and more
          </div>
          <section class="form q-my-xl">
            <hero-form />
          </section>
          <div class="text-subtitle1 text-white text-center t">
            Or browse event by feature:
          </div>
          <div class="q-pa-md q-gutter-sm">
            <q-btn class="btn" icon="fas fa-spinner" label="Upcoming Events" no-caps />
            <q-btn class="btn" icon="fas fa-lightbulb" label="Featured Events" no-caps />
            <q-btn class="btn" icon="fas fa-archive" label="All events" no-caps />
          </div>
        </div>
      </template>
    </q-parallax>
  </div>
</template>

<script>
import HeroForm from "./HeroForm.vue";
export default {
  components: { HeroForm },
  // name: 'ComponentName',
  setup() {
    return {};
  },
};
</script>

<style scoped>
.form {
  border-radius: 50px;
  width: 70% !important;
}
.row {
}
.text-h2 {
  font-size: 44px;
  font-weight: 500;
  line-height: 50px;
  color: #fff;
}
.text-h6 {
  color: rgba(255, 255, 255, 0.65);
  font-size: 24px;
  font-weight: 200;
  line-height: 32px;
  margin-top: 0;
}
.main:first-child {
  padding-top: 0 !important;
}
.t {
  font-size: 16px;
  color: #fff;
  font-weight: 400;
}
.btn {
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: none;
  padding: 3px 15px;
  display: inline-block;
  border-radius: 50px;
  color: #fff;
  font-weight: 200;
  margin: 5px 5px;
  padding: 5px 15px;
  transition: all 0.15s ease-in-out;
}
.btn:hover {
  background-color: #fff;
  color: #343434;
}
</style>
