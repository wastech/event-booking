<template>
  <div class="q-my-xl">
    <div class="text-h5 text-weight-bold text-center q-my-md">
      Popular Categories
    </div>
    <div
      class="row row__section q-col-gutter-lg"
      v-bind:style="$q.screen.lt.sm ? { width: '90%' } : { width: '75%' }"
    >
      <div
        class="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-12"
        v-for="item in items"
        :key="item"
      >
        <div class="text-center cat_info">
          <div class="icon">
            <q-icon :name="item.icon"  size="xl" />
          </div>
          <div class="text-subtitle1">
            {{ item.subtitle }}
          </div>
          <!-- <div class="text-overline text-weight-medium text-grey"> -->
          <span class="count"> {{ item.count }}</span>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup() {
    return {
      items: [
        { icon: "work_outline", subtitle: "Businesses", count: 65 },
        { icon: "music_video", subtitle: "Concert", count: 2 },
        { icon: "videocam", subtitle: "Conference", count: 2 },
        { icon: "festival", subtitle: "Festival", count: 2 },
        { icon: "emoji_events", subtitle: "Sport", count: 2 },
        { icon: "map", subtitle: "Travel", count: 2 },
      ],
    };
  },
};
</script>
 <style scoped>
.row__section {
  margin: 0 auto;
}
.cat_info {
  background-color: #f2f2f2;
  border-radius: 4px;
  padding: 2em;
  text-align: center;
  /* background-color: #777; */
    color: #909090;
  transition: 0.4s;
  transform: scale(1);
  vertical-align: top;
}
.cat_info:hover {
  background-color: #f53f7b;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  color: white !important;
}
/* .q-card:hover,
.q-icon:hover {
  background-color: #f53f7b !important;
  color: #fff !important;
} */
.cat_info .icon {
  font-size: 38px;
  height: 40px;
  display: inline-block;
  margin-top: 20px;
  color: #f53f7b;
}
.cat_info:hover .icon {
 
  color: #fff;
}
/* span {
  border-bottom: 3px solid #f53f7b;
} */

.cat_info .text-subtitle1 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 400;
}

/* .q-icon:hover{
   color: #fff;
 } */
.cat_info .count {
  font-size: 13px;
  font-weight: 400;

  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.04);
  display: block;
  width: 40px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 0px;
  left: auto;
  right: auto;
  margin-bottom: 12px;
  transition: 0.4s;
  padding: 2px 0;
  line-height: 22px;
}


</style>