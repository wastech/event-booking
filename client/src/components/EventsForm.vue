<template>
  <div class="main q-py-xl">
    <div class="form__section">
      <form action="">
        <div class="row q-col-gutter-lg">
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <q-input
              outlined
              v-model="text"
              placeholder="Event Name ..."
              class="bg-white"
            />
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <q-select
              outlined
              v-model="model"
              :options="options"
              label="all cities"
              class="bg-white"
            />
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <q-select
              outlined
              v-model="model"
             
              :options="options"
              label="All Categories"
              class="bg-white"
            />
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <q-select
              outlined
              v-model="model"
             
              :options="options"
              label="All States"
              class="bg-white"
            />
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <q-select
              outlined
              v-model="model"
              :options="options"
              label="All Cities"
              class="bg-white"
            />
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <q-select
              outlined
              v-model="model"
              :options="options"
              label="All Venue"
              class="bg-white"
            />
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <q-input
              outlined
              type="date"
              class="bg-white"
              placeholder="Outlined"
            />
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <q-btn
              class="full-width q-py-md"
              style="background-color: #f53f7b; color: white"
              label="Find Event"
              no-caps
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  // name: 'ComponentName',
  setup() {
    return {
      model: ref(null),
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
    };
  },
};
</script>
<style scoped>
.main {
  margin-top: 12em;
  background-color: #f2f2f2;
}
.form__section {
  margin: 0 auto;
  width: 65%;
}
.ovaem_submit {
  display: inline-block;
  width: 100%;
  margin-right: 1%;
  margin-bottom: 15px;
}
.q-btn:hover {
  background-color: #4862c4 !important ;
}
</style>