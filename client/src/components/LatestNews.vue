<template>
  <div class="main">
    <div class="latest__news" v-bind:style="$q.screen.lt.sm ? { width: '90%' } : { width: '75%' }">
      <div class="text text-center">
        <div class="text-h6 text-weight-bold underline-small">LATEST NEWS</div>
      </div>

      <div class="event__card">
        <blog-cards :posts="posts" />
      </div>
    </div>
  </div>
</template>

<script>
import BlogCards from "../components/BlogCards.vue";
export default {
  components: { BlogCards },
  props: ["posts"],
  // name: 'ComponentName',
};
</script>
<style scoped>
.main{
 margin-top: 80px;
  margin-bottom: 70px;
}
.latest__news {
  /* */
    margin: 0 auto;
  width: 73%;
}
.event__card {
  margin-top: 50px;
}

.underline-small {
  display: inline-block;
  position: relative;
}

.underline-small::after {
  content: "";
  height: 3px;
  width: 20%;
  background: #f53f7b;
  position: absolute;
  left: calc(50% - 10%);
  bottom: -12px;
}
</style>
