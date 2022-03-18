<template>
  <div class="feature__event">
    <div class="text text-center">
      <div class="text-h6 text-weight-bold q-my-md q-mt-xl">
        FEATURED EVENTS
      </div>
      <div
        class="text-body1 q-my-sm underline-small"
        v-bind:style="$q.screen.lt.sm ? { width: '90%' } : { width: '75%' }"
      >
        You can choose to display Featured, Upcoming, Past Events here
      </div>
    </div>

    <div class="event__card">
      <event-c-ard />
    </div>

    <div class="q-pa-md text-center q-gutter-sm q-my-xl">
      <q-btn flat  to="/events" class="btn" icon="chevron_right" label="ALL Events" no-caps />
    </div>
  </div>
</template>

<script>
import EventCArd from "./EventCArd.vue";
export default {
  components: { EventCArd },
  // name: 'ComponentName',
  setup() {
    return {};
  },
};
</script>
<style scoped>
.feature__event {
  margin-top: 50px;
}
span {
  border-bottom: 3px solid #f53f7b;
  margin-top: 2em;
}
.row {
  margin: 0 auto;
  width: 75%;
}
.my-card {
  width: 100%;
  max-width: 100%;
}
.underline-small {
  display: inline-block;
  position: relative;
}

.underline-small::after {
  content: "";
  height: 3px;
  width: 5%;
  background: #f53f7b;
  position: absolute;
  left: calc(60% - 10%);
  bottom: -12px;
}
.q-icon .material-icons {
  font-size: 1.415em !important;
  background-color: #f53f7b !important;
  color: #fff !important;
}
.btn {
  border: 1px solid #dbdbdb;
  background-color: #ffffff;
  color: #242b46;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  font-weight: 500;
  padding: 11.5px 40px;
  border-radius: 30px;
}
.btn:hover {
  background-color: #f53f7b;
  color: #fff;
}
</style>
