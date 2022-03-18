<template>
  <div class="latest__news ">
    <div class="text text-center  ">
<div class="text-h6 text-weight-bold  underline-small">
      LATEST NEWS
    </div>
    </div>


    <div class="event__card">
      <latest-newsc-card></latest-newsc-card>
    </div>
  </div>
</template>

<script>
import LatestNewscCard from "./LatestNewscCard.vue";
export default {
  components: { LatestNewscCard },
  // name: 'ComponentName',
  setup() {
    return {};
  },
};
</script>
<style scoped>
.latest__news{
  margin-top: 80px;
  margin-bottom: 70px;
}
.event__card{
  margin-top:50px;
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
