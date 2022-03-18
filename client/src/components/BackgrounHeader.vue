<template>
  <div class="bg">
    <div class="text__section"></div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup() {
    return {};
  },
};
</script>
<style scoped>
.bg {
  background-image: url(https://ovatheme.com/em4u/wp-content/themes/em4u/assets/img/bg_heading-compressor.jpg);
  padding: 277px 0px 80px 0px;
  padding-bottom: 80px;
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.text__section {
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
