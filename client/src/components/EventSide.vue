<template>
  <div class="side__event q-my-none">
    <div class="wrap_btn_book">
      <a class="book_now_btn" href="#">Register Event Now</a>
    </div>

    <div class="event_widget event_info">
      <div class="text-h4 title">Event Detail</div>
      <q-card-actions align="between" class="text-weight-medium">
        <div class="text-subtitle1">Started Date:</div>
        <div class="text-caption">{{ moment(item.start_date).format("MMM Do YY") }}</div>
      </q-card-actions>
      <q-card-actions align="between" class="text-weight-medium">
        <div class="text-subtitle1">End Date::</div>
        <div class="text-caption">{{ moment(item.end_date).format("MMM Do YY")}}</div>
      </q-card-actions>
      <q-card-actions align="between" class="text-weight-medium">
        <div class="text-subtitle1">Room: :</div>
        <div class="text-caption">{{ item.room }}</div>
      </q-card-actions>
      <q-card-actions align="between" class="text-weight-medium">
        <div class="text-subtitle1">Venue::</div>
        <div class="text-caption">{{ item.venue }}</div>
      </q-card-actions>
      <q-card-actions align="between" class="text-weight-medium">
        <div class="text-subtitle1">Address:</div>
        <div class="text-caption">
          {{ item.address }}
        </div>
      </q-card-actions>
    </div>

    <div class="event_widget event_info" v-if="item.userId">
      <div class="text-h4 title">Organizers</div>
      <q-card-actions align="between" class="text-weight-medium">
        <div class="text-subtitle1">Name:</div>
        <div class="text-caption">{{item.userId.name}}</div>
      </q-card-actions>
      <q-card-actions align="between" class="text-weight-medium">
        <div class="text-subtitle1">Email:</div>
        <div class="text-caption">{{item.userId.email}}</div>
      </q-card-actions>
      <q-card-actions align="between" class="text-weight-medium">
        <div class="text-subtitle1">Phone:</div>
        <div class="text-caption">4000123456789</div>
      </q-card-actions>
      <q-card-actions align="between" class="text-weight-medium">
        <div class="text-subtitle1">website:</div>
        <div class="text-caption">http://ovathemes.com</div>
      </q-card-actions>
      <q-card-actions align="between" class="text-weight-medium">
        <div class="text-subtitle1">Description:</div>
        <div class="text-caption">
         {{item.userId.description}}
        </div>
      </q-card-actions>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  // name: 'ComponentName',
  props: ["item"],
  data() {
    return {};
  },
  created: function () {
    this.moment = moment;
  },
};
</script>
<style scoped>
.side__event {
  margin-top: -3.5em;
}
.wrap_btn_book {
  margin-left: 30px;
  padding: 25px;
  background-color: #f53f7b;
  color: #fff;

  border: 1px solid #f53f7b;
  border-top-color: rgb(245, 63, 123);
  border-right-color: rgb(245, 63, 123);
  border-bottom-color: rgb(245, 63, 123);
  border-left-color: rgb(245, 63, 123);
  border-radius: 4px;
  margin-bottom: 90px;
  text-align: center;
  cursor: pointer;
}
.book_now_btn:hover,
.book_now_btn:focus {
  color: #fff;
}
a {
  text-decoration: none;
  outline: none;
  color: #fff;
  font-size: large;
  font-weight: 500;
}
a:hover,
a:focus {
  text-decoration: none;
  outline: none;
}
.event_widget {
  background-color: #fff;
  padding: 25px;
  margin-top: 60px;
  margin-left: 30px;
}
.title {
  text-transform: uppercase;
  color: #242b46;
  font-size: 18px;
  font-weight: 500;
  margin-top: 6px;
  margin-bottom: 50px;
  position: relative;
}
</style>
