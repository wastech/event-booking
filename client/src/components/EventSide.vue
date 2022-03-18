<template>
  <div class="side__event q-my-none">
    <div class="wrap_btn_book">
      <a class="book_now_btn" href="#">Register Event Now</a>
    </div>

    <div class="event_widget event_info">
      <div class="text-h4 title">Event Detail</div>
      <q-card-actions align="between" class="text-weight-medium">
        <div class="text-subtitle1">State Date:</div>
        <div class="text-caption">Dec 18, 2024 7:01</div>
      </q-card-actions>
      <q-card-actions align="between" class="text-weight-medium">
        <div class="text-subtitle1">End Date::</div>
        <div class="text-caption">Dec 18, 2024 7:01 pm</div>
      </q-card-actions>
      <q-card-actions align="between" class="text-weight-medium">
        <div class="text-subtitle1">Room: :</div>
        <div class="text-caption">Room 02</div>
      </q-card-actions>
      <q-card-actions align="between" class="text-weight-medium">
        <div class="text-subtitle1">Venue::</div>
        <div class="text-caption">Beekman Street, New York</div>
      </q-card-actions>
      <q-card-actions align="between" class="text-weight-medium">
        <div class="text-subtitle1">Address:</div>
        <div class="text-caption">
          Broadway 473 Broadway, New York, NY 10012
        </div>
      </q-card-actions>
    </div>

    <div class="event_widget event_info">
      <div class="text-h4 title">Organizers</div>
      <q-card-actions align="between" class="text-weight-medium">
        <div class="text-subtitle1">Name:</div>
        <div class="text-caption">Ovatheme</div>
      </q-card-actions>
      <q-card-actions align="between" class="text-weight-medium">
        <div class="text-subtitle1">Email:</div>
        <div class="text-caption">ovatheme@gmail.com</div>
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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </div>
      </q-card-actions>
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