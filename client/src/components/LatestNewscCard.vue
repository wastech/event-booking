<template>
  <div
    class="slider"
   
  >
  <div class="row q-col-gutter-lg">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <blog-cards :posts="posts" />
        </div>
      </div>
  </div>
</template>

<script>

import BlogCards from "../components/BlogCards.vue";

export default {
  // name: 'ComponentName',
  components: { BlogCards },
 props: ["posts"]
};
</script>
<style scoped>
.slider{
  margin: 0 auto;
  width: 75%;
}
</style>
