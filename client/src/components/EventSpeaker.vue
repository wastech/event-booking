<template>
  <div>
    <div class="row q-col-gutter-sm" v-if="item.userId">
      <div
        class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12"

      >
        <div class="speaker__section">
          <div class="image">
            <img :src="item.userId.avatar.url" alt="ite" />
          </div>

          <div class="text text-center">
            <div class="text-h6 .title">{{item.userId.name}}</div>
            <div class="text-subtitle2 job">{{item.userId.emTitle}}</div>
          </div>

          <q-card-actions align="around" class="q-mx-sm icon">
            <q-icon name="fab fa-facebook-f" />
            <q-icon name="fab fa-twitter" />
            <q-icon name="fab fa-linkedin-in" />
            <q-icon name="fab fa-google-play" />
          </q-card-actions>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props:['item'],
  data() {
    return {

    };
  },
};
</script>
<style scoped>
.speaker__section {
  padding: 15px;
  position: relative;
  background: #f2f2f2;
}
img {
  width: 100%;
  object-fit: cover;
  height: 25vh;
}
.title {
  margin-top: 0;
  margin-bottom: 2px;
  font-size: 18px;
  clear: both;
  font-weight: 500;
  margin: 36px 0 12px;
  margin-top: 36px;
  margin-bottom: 12px;
}
.job {
  color: #4862c4;
  line-height: 24px;
  text-transform: uppercase;
}
.text {
  background: #fff;
  width: 90%;
  height: 120px;
  text-align: center;
  padding: 30px 0px;
  margin-top: 40px;
  position: absolute;
}
.icon {
  /* display: none; */
  color: grey;

  margin-top: 10em;
}
.speaker__section .text {
  margin: 0 auto;
}
/* }
.speaker__section:hover .text {
  margin-top: -4em;
  width: 90%;
}
.speaker__section:hover .icon {
} */
</style>
