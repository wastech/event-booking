<template>
  <div class="">
    <q-header class="bg-black text-white q-py-sm q-mb-none">
      <q-toolbar>
        <q-btn-group rounded class="lt-md" style="width: 100%">
          <!-- <q-btn class="full-width" label="menu" @click="left = !left" /> -->
          <q-btn icon="menu" @click="left = !left" />
        </q-btn-group>
        <q-space />
        <q-toolbar-title class="gt-sm" @click="$router.push('/')">
          Toolbar
        </q-toolbar-title>
        <q-space />
        <!--  v-model="tab" -->
        <q-tabs class="gt-sm" shrink>
          <q-route-tab exact name="Blog" to="/blogs" class="text-white" label="Blog" />
          <q-btn-dropdown stretch flat label="Categories">
            <q-list>
              <q-item clickable v-close-popup v-for="item in items" :key="item">
                <router-link
                  v-bind:to="{
                    name: 'ecategory',
                    params: { id: item._id },
                  }"
                >
                  {{ item.title }}</router-link
                >
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <!-- name="tab2"  -->
          <q-tab @click="$router.push('/events')" label="event" />
          <q-btn-dropdown stretch flat label="Location">
            <q-list>
              <q-item to="/blogs" clickable v-close-popup> Folders </q-item>
              <q-item clickable v-close-popup> Folders </q-item>
              <q-item clickable v-close-popup> Folders </q-item>
              <q-item clickable v-close-popup> Folders </q-item>
              <q-item clickable v-close-popup> Folders </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-tabs>
        <q-space />
        <q-btn
          flat
          round
          dense
          icon="https"
          class="q-mr-lg"
          @click="$router.push('/login')"
        />
        <q-btn flat round dense icon="key" @click="$router.push('/register')" />
        <q-space />
      </q-toolbar>

      <q-separator />
      <q-drawer v-model="left" side="left" bordered class="full-width">
        <q-scroll-area class="fit">
          <q-list bordered padding class="rounded-borders text-primary">
            <a href="/">
              <q-item clickable v-ripple>
                <q-item-section>Home</q-item-section>
              </q-item>
            </a>

            <q-expansion-item label="Categories">
              <q-list class="q-pl-lg">
                <q-item to="/inbox" active-class="q-item-no-link-highlighting">
                  <q-item-section>
                    <q-item-label>Image Post</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item to="/" active-class="q-item-no-link-highlighting">
                  <q-item-section>
                    <q-item-label>video Post</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item to="/" active-class="q-item-no-link-highlighting">
                  <q-item-section>
                    <q-item-label>Audio Post</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>

            <q-item to="/events" exact>
              <q-item-section>Event</q-item-section>
            </q-item>

            <q-expansion-item label="Location">
              <q-list class="q-pl-lg">
                <q-item to="/-" active-class="q-item-no-link-highlighting">
                  <q-item-section>
                    <q-item-label>Image Post</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item to="/" active-class="q-item-no-link-highlighting">
                  <q-item-section>
                    <q-item-label>video Post</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item to="/" active-class="q-item-no-link-highlighting">
                  <q-item-section>
                    <q-item-label>Audio Post</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
    </q-header>
  </div>
</template>

<script>
import categoriesService from "../services/eventCategoriesService";
export default {
  // name: 'ComponentName',
  data() {
    return {
      left: false,
      items: [],
    };
  },
  methods: {
    async getPosts() {
      try {
        await categoriesService.getCategories().then((response) => {
          this.items = response.data.data;
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
a {
  text-transform: uppercase;

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
