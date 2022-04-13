<template>
  <div>
    <div class="row section__row q-my-xl q-col-gutter-lg">
      <div
        class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12 q-my-md"
        v-for="item in items"
        :key="item.id"
      >
        <div class="my-card">
          <q-img :src="item.imageUrl.url" v-if="item.imageUrl">
            <div class="absolute-full text-center image__text">
              <div class="icon">
                <br />
                <q-icon name="room" size="1.5em" />
              </div>
              <div class="text-subtitle1 q-mt-md text-capitalize">
                {{ item.address }}
              </div>
            </div>
          </q-img>

          <q-card-section>
            <q-btn
              fab
              round
              class="absolute text-white show q-mb-lg"
              style="
                top: 0;
                left: 37%;
                height: 70px;

                background: #f53f7b;
                transform: translateY(-50%);
              "
            >
              $ {{ item.silver_ticket }}
            </q-btn>
            <q-btn
              round
              padding="lg"
              class="absolute text-white q-mb-lg hide"
              style="
                top: 0;
                left: 37%;
                background: #f53f7b;
                transform: translateY(-50%);
              "
            >
              $ {{ item.gold_ticket }}
            </q-btn>

            <div class="text-h6 text-weight-medium text-center q-mt-md">
              <router-link
                v-bind:to="{
                  name: 'event',
                  params: { id: item.id },
                }"
              >
                {{ item.title }}</router-link
              >
            </div>
            <div class="text-subtitle1 upcoming__text q-mt-sm">upcoming</div>
          </q-card-section>

          <q-card-section class="q-pt-none q-mb-md">
            <div
              class="text-subtitle1 ellipsis-2-lines"
              v-html="item.description"
            ></div>
          </q-card-section>
          <div class="btn2 text-center">
            <router-link
              v-bind:to="{
                name: 'event',
                params: { id: item.id },
              }"
            >
              <button class="button button4">Get Started</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="q-pa-lg flex flex-center q-mt-xl">
      <q-pagination v-model="current" :max="5" direction-links />
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "PageIndex",
  props: ["items"],
  data() {
    return {
      tags: [],
    };
  },
  created: function () {
    this.moment = moment;
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
  background-color: #fff;
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
  text-align: center;
}
.text__body {
  color: #f53f7b;
}

/* .button {
  text-transform: capitalize;
  border-color: transparent;
  width: auto;
  background-color: #fff;
} */
.btn2 {
  margin-bottom: -1.7em;
}
/* .button:hover {
  border-radius: 30px;
    background-color: #fff;
} */
.button4 {
  background-color: white;
  /* color: black; */
  /* border: 2px solid #e7e7e7; */
  padding: 10px;
  width: 170px;
  border: none;
  border-radius: 50px;
}

.my-card:hover .btn2 button {
  border: 1px solid #4862c4;
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
.upcoming__text {
  color: #4862c4;
  font-size: 14px;
  line-height: 24px;
}
.image__text {
  display: none;
}
.my-card:hover .image__text {
  display: block;
}
a {
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 50px;
  color: #000;
  font-size: 14px;
  border-bottom: none;
  margin-top: 10px;
  text-decoration: none;
}
a:hover {
  color: #f53f7b;
}
</style>
