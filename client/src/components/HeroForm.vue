<template>
  <div v-if="$q.platform.is.desktop">
    <q-form class="shadow-3 serach__form bg-white">
      <div class="row">
        <div class="col">
          <q-input
            borderless
            v-model="text"
            label="Rounded outlined"
            class="transparent"
          />
        </div>

        <div class="col">
          <q-select
            borderless
            v-model="model"
            transition-show="flip-up"
            transition-hide="flip-down"
            :options="options"
            label="all cities"
          />
        </div>
        <div class="col">
          <q-select
            borderless
            v-model="model"
            transition-show="flip-up"
            transition-hide="flip-down"
            :options="options"
            label="all venus"
          />
        </div>
        <div class="col">
          <q-select
            borderless
            transition-show="flip-up"
            transition-hide="flip-down"
            v-model="model"
            :options="options"
            label="All time"
          />
        </div>
        <div class="col">
          <q-select
            borderless
            v-model="model"
            :options="options"
            transition-show="flip-up"
            transition-hide="flip-down"
            label="all time"
          />
        </div>
        <div class="col">
          <q-select
            borderless
            v-model="model"
            transition-show="flip-up"
            transition-hide="flip-down"
            :options="options"
            label="all categories"
          />
        </div>
        <div class="col">
          <q-select
            borderless
            v-model="model"
            transition-show="flip-up"
            transition-hide="flip-down"
            :options="options"
            label="all categories"
          />
        </div>
        <div class="col q-py-sm">
          <q-btn
            class=""
            rounded
            style="background: #f53f7b; width: 130px; color: white"
            label="Search ..."
          />
        </div>
      </div>
    </q-form>

  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      model: ref(null),
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
    };
  },
};
</script>
<style scoped>
.serach__form {
  flex-direction: column;

  box-shadow: none;
  width: 100%;
  border-radius: 50px;

  padding: 1em;
}
</style>
