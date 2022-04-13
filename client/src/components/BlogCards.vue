<template>
  <div
    class="main"
    v-bind:style="
      $q.screen.lt.sm ? { marginTop: '10em' } : { marginTop: '20em' }
    "
  >
    <div class="card__section">
      <div class="row q-col-gutter-lg">
        <div
          class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12"
          v-for="item in items"
          :key="item"
        >
          <div class="article__section">
            <q-img :src="item.imageUrl.url" class="image" v-if="item.imageUrl">
              <div class="bg-none transparent">
                <q-btn
                  color="white"
                  text-color="black"
                  :label="item.postcategoryId.title"
                  :to="{
                    name: 'category',
                    params: { id: item.postcategoryId._id },
                  }"
                  class="q-mt-lg"
                />
              </div>
            </q-img>
            <q-card-section class="q-px-md">
              <q-card-actions align="between">
                <div class="">
                  <q-icon name="calendar_today" />
                  <span>{{ moment(item.createdAt).fromNow() }}</span>
                </div>
                <div class="">
                  <q-icon name="message" /> <span>Comment off</span>
                </div>
              </q-card-actions>
            </q-card-section>
            <q-separator />
            <q-card-section class="q-px-xl">
              <div
                class="
                  text-subtitle1
                  ellipsis
                  text-medium text-uppercase
                  q-my-sm
                  text-bold
                  cursor-pointer
                "
                style="font-size: 16px"
              >
                <router-link
                  v-bind:to="{
                    name: 'blog',
                    params: { id: item.id },
                  }"
                >
                  {{ item.title }}</router-link
                >
              </div>
              <div class="ellipsis-3-lines">
                <div class="text-body2" v-html="item.description"></div>
              </div>
              <div class="read__more q-mt-lg q-pb-lg cursor-pointer">
                <a> Read More </a>
              </div>
            </q-card-section>
          </div>
        </div>
      </div>
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
/* .main {
  margin-top: 20em;
} */
.article__section {
  background-color: #f2f2f2;
}
.text-body2 {
  text-align: justify !important;
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
.q-icon {
  color: #f53f7b;
}
.image {
  height: 25vh !important;
  width: 100% !important;
}
</style>
