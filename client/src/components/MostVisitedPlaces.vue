<template>
  <div>
    <div class="text text-center">
      <div
        class="text-h6 text-weight-bold q-my-md q-mt-xl text-uppercase underline-small"
      >
        Most Visited Places
      </div>
      <div class="text-body1 q-my-sm">Browse Popular Location</div>
    </div>
    <div
      class="row row__section q-col-gutter-lg"
      v-bind:style="$q.screen.lt.sm ? { width: '90%' } : { width: '75%' }"
    >
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div class="image">
          <div class="image-box">
            <img
              class="left__image"
              src="https://ovatheme.com/em4u/wp-content/uploads/2019/03/HoustonSkylineTexas_m.jpg"
              alt="This zooms-in really well and smooth"
              v-bind:style="
                $q.screen.lt.md ? { height: '100px;' } : { height: '470px' }
              "
            />
            <div class="text__section text-white">
              <div class="text-h5 text-weight-bolder text-capitalize">
                texas
              </div>
              <div class="text-overline text-bold">4 events</div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div class="row">
          <div class="col-lg-12 q-mb-sm">
            <div class="image">
              <div class="img-hover-zoom">
                <img
                  src="https://ovatheme.com/em4u/wp-content/uploads/2019/03/cali_m.jpg"
                  alt="This zooms-in really well and smooth"
                  class="right__top__image"
                  v-bind:style="
                    $q.screen.lt.md ? { height: '100px;' } : { height: '270px' }
                  "
                />
                <div class="text__section text-white">
                  <div class="text-h5 text-weight-bolder text-capitalize">
                    texas
                  </div>
                  <div class="text-overline text-bold">4 events</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row q-col-gutter-sm">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div class="image">
              <div class="uder__image">
                <img
                  src="https://ovatheme.com/em4u/wp-content/uploads/2019/03/t33.jpg"
                  alt="This zooms-in really well and smooth"
                  v-bind:style="
                    $q.screen.lt.md ? { height: '100px;' } : { height: '200px' }
                  "
                  class="right__botom__image"
                />
                <div class="text__section text-white">
                  <div class="text-h5 text-weight-bolder text-capitalize">
                    texas
                  </div>
                  <div class="text-overline text-bold">4 events</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div class="image">
              <div class="uder__image">
                <img
                  src="https://ovatheme.com/em4u/wp-content/uploads/2019/03/t44.jpg"
                  alt="This zooms-in really well and smooth"
                  class="right__botom__image"
                  v-bind:style="
                    $q.screen.lt.md ? { height: '100px;' } : { height: '200px' }
                  "
                />
                <div class="text__section text-white">
                  <div class="text-h5 text-weight-bolder text-capitalize">
                    texas
                  </div>
                  <div class="text-overline text-bold">4 events</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
.left__image {
  width: 100%;
  object-fit: cover;
}
.image {
  position: relative;
  width: 100%;
  /* height: 360px; */
  margin: 0 auto;
  overflow: hidden;
}
.text__section {
  justify-content: center;
  align-items: center;
  position: absolute;

  color: white;
  bottom: 0;
  left: 0;
  width: 100%;

  margin: 0;
  padding: 10px;
  text-align: center;
}
.row__section {
  margin: 0 auto;
}

.divi__image {
  height: 200px;
}
img {
  width: 100%;
  border-radius: 10px;
}
/* .right__botom__image {
  height: 182px;
} */

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
  /*   another way you can achieve this
  Check this link:
  https://goo.gl/GgRdjz

  */
}
.image-box {
  position: relative;

  overflow: hidden;
  width: 100%;
  border-radius: 10px;
}
.image-box img {
  max-width: 100%;
  transition: all 0.3s;
  display: block;
  width: 100%;

  transform: scale(1);
}
.img-hover-zoom {
  position: relative;

  overflow: hidden;
  width: 100%;
  border-radius: 10px;
}
.img-hover-zoom img {
  max-width: 100%;
  transition: all 0.3s;
  display: block;
  width: 100%;
  border-radius: 10px !important;
  transform: scale(1);
}
.img-hover-zoom:hover img {
  transform: scale(1.1);
  border-radius: 10px !important;
}
.image-box:hover img {
  transform: scale(1.1);
}
.uder__image{

    position: relative;
 
  overflow: hidden;
  width: 100%;
  border-radius: 10px;
}
.uder__image img{
 max-width: 100%;
  transition: all 0.3s;
  display: block;
  width: 100%;
  height: auto;
  transform: scale(1);


}
.uder__image:hover img{
    transform: scale(1.1);
}
</style>
