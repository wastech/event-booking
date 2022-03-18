<template>
  <div class="parallax" v-if="$q.platform.is.desktop">
    <div class="bg__image ">
      <div class="bg__color">
        <div class="row q-col-gutter-xl">
          <div
            class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 q-my-xl"
            v-for="item in items"
            :key="item.id"
          >
            <div class="col__section text-white text-center">
              <img :src="item.icon" />
              <div class="text-h3">{{ item.total }}</div>
              <div class="text-h4">{{ item.title }}</div>
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
  data() {
    return {
      items: [
        {
          icon: "https://img.icons8.com/external-filled-outline-geotatah/64/000000/external-participant-training-management-system-filled-outline-filled-outline-geotatah.png",
          total: "1256",
          title: "PARTICIPANT",
        },
        {
          icon: "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-event-camping-kiranshastry-lineal-color-kiranshastry-1.png",
          total: "126",
          title: "Total Events",
        },
        {
          icon: "https://img.icons8.com/officel/64/000000/performance--v2.png",
          total: "1256",
          title: "VENUES",
        },
        {
          icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-sponsor-athletics-flaticons-lineal-color-flat-icons-3.png",
          total: "22",
          title: "Sponsors",
        },
      ],
    };
  },
};
</script>
<style scoped>
.parallax{

    margin-top: 50px
}
.row {
  width: 72%;
  margin: 0 auto;
  /* right: 50%;
  bottom: 60%;
  transform: translate(50%, 50%);
  position: absolute; */
}

.text-h3 {
  color: #fff;
  font-size: 24px;
  font-weight: 600;

  z-index: 2;

}
.bg__image {
  background-image: url(https://ovatheme.com/em4u/wp-content/uploads/2017/09/bg3.jpg);

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg__color {
  background-color: rgba(0, 0, 0, 0.56);
}
.text-h4 {
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;

}
img{
  font-size: 80px;
opacity: 0.9;
color: #677198;
z-index: 1
}
</style>