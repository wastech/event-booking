<template>
  <div class="main">
    <!-- <div class="search__section q-my-xl">
      <q-input filled placeholder="Search">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div> -->
    <q-list bordered separator class="q-pa-md">
      <div class="text-h4 title">Recent Posts</div>

      <q-item clickable v-for="item in items.slice(o, 5)" :key="item.id">
        <q-item-section class="ellipsis">
          <router-link
            v-bind:to="{
              name: 'blog',
              params: { id: item._id },
            }"
          >
            {{ item.title }}
          </router-link>
        </q-item-section>
      </q-item>
    </q-list>

    <div class="category__section q-my-xl">
      <q-list bordered separator class="q-pa-md">
        <div class="text-h4 title">Categories</div>

        <q-item clickable v-for="category in categories" :key="category.id">
          <q-item-section>
            <router-link
              v-bind:to="{
                name: 'category',
                params: { id: category._id },
              }"
            >
              {{ category.title }}
            </router-link>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import postService from "../services/postService";
import postCategoriesService from "../services/postCategoriesService";
export default {
  name: "PageIndex",
  data() {
    return {
      tags: [],
      items: [],
      categories: [],
    };
  },
  created: function () {
    this.moment = moment;
  },
  methods: {
    async queryindex() {
      try {
        await postService.getPosts().then((response) => {
          this.items = response.data.data;
        });
      } catch (err) {
        console.log(err.response);
      }
    },
    async getPosts() {
      try {
        await postCategoriesService.getCategories().then((response) => {
          this.categories = response.data.data;
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.queryindex();
    this.getPosts();
  },
};
</script>
<style scoped>
.main {
  margin-top: 7em;
}
.title {
  text-transform: uppercase;
  color: #242b46;
  font-size: 18px;
  font-weight: 600;
  margin-top: 6px;
  margin-bottom: 20px;
}
.q-item-section:hover {
  color: #4862c4 !important;
}
a {
  text-decoration: none;
  color: #000;
}
</style>
