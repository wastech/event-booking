<template>
  <div>
    <div
      class="row section__row q-my-xl q-col-gutter-lg"
      v-bind:style="$q.screen.lt.sm ? { width: '90%' } : { width: '75%' }"
    >
      <div
        class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12"
        v-for="item in items"
        :key="item.id"
      >
        <q-card class="my-card">
          <q-img :src="item.image" loading="false" />

          <q-card-section>
            <q-btn
              fab
              round
              class="absolute text-white q-mb-lg"
              style="
                top: 0;
                left: 20px;
                background: #f53f7b;
                transform: translateY(-50%);
              "
            >
              DEC <br />
              12,22
            </q-btn>

            <div class="text-h6 text-weight-medium q-mt-md">
              Phanxipang Tourist
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              m ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            </div>
          </q-card-section>
          <q-card-section>
            <div class="text-body2">
              <q-icon name="location_on" size="md" class="q-mr-sm material-icons-outlined text-blue" />
              Broadway 473 Broadwa...
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="between" class="text-weight-medium">
            <div class="">
              <span>Get Ticket</span>
            </div>
            <div class="">
              <span class="text__body"> $55.555 </span>
            </div>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data() {
    return {
      items: [
        {
          image:
            "https://ovatheme.com/em4u/wp-content/uploads/2017/10/event_sport_1-copy.jpg",
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
.section__row {
  margin: 0 auto;
}
.my-card {
  width: 100%;
  max-width: 100%;
  border: 1px solid #dfdfdf;
}
.my-card:hover {
  background-color: #f2f2f2;
}
.q-img {
  height: 20vh;
}
.text-h6 {
  margin-top: 1.5em;
}
.text-subtitle1 {
  font-size: 1rem;
  font-weight: 400;

  letter-spacing: 0em;
  text-align: justify;
}
.text__body {
  color: #f53f7b;
}
</style>
