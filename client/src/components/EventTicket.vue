<template>
  <div class="main">
    <div class="row q-col-gutter-lg">
      <div class="col-xl-4 col-lg-4 col-sm-4 col-md-4 col-xs-12">
        <div class="card__section">
          <q-btn color="black" class="full-width" label="Free Package" />
          <div class="top q-pa-lg">
            <div class="section text-center">
              <div class="icon q-my-sm">
                <img
                  src="https://ovatheme.com/em4u/wp-content/plugins/ova-events-manager/assets/img/price_icon.png"
                  alt=""
                />
              </div>
              <div class="price">
                <div class="text-subtitle1 text-white text-bold q-my-sm">
                  {{ item.free_ticket }}
                </div>
                <div class="text-caption text-white">
                  {{ item.number_of_free_ticket }} Tickets
                </div>
              </div>
            </div>
          </div>
          <div class="q-my-lg">
            <q-card-actions>
              <div class="q-my-sm">
                <q-icon name="trending_flat" class="q-ml-md q-mr-xl" /> Regular
                Seating
              </div>
              <div class="q-my-sm">
                <q-icon name="trending_flat" class="q-ml-md q-mr-xl" /> Free
                Snacks
              </div>
              <div class="q-my-sm">
                <q-icon name="trending_flat" class="q-ml-md q-mr-xl" /> Regular
                Seating
              </div>
              <div>
                <q-icon name="trending_flat" class="q-ml-md q-mr-xl" /> Custom
                Badge
              </div>
            </q-card-actions>
          </div>
          <div class="btn text-center q-my-md">
            <q-btn outline color="primary" label="Register Event" />
          </div>
        </div>
      </div>
<!-- Silver Ticket section -->
      <div class="col-xl-4 col-lg-4 col-sm-4 col-md-4 col-xs-12">
        <div class="card__section">
          <q-btn color="black" class="full-width" label="Silver Ticket" />
          <div class="top q-pa-lg">
            <div class="section text-center">
              <div class="icon q-my-sm">
                <img
                  src="https://ovatheme.com/em4u/wp-content/plugins/ova-events-manager/assets/img/price_icon.png"
                  alt=""
                />
              </div>
              <div class="price">
                <div class="text-subtitle1 text-white text-bold q-my-sm">
                 $ {{ item.silver_ticket }}
                </div>
                <div class="text-caption text-white">
                  {{ item.number_of_silver_ticket }} Tickets
                </div>
              </div>
            </div>
          </div>
          <div class="q-my-lg">
            <q-card-actions>
              <div class="q-my-sm">
                <q-icon name="trending_flat" class="q-ml-md q-mr-xl" /> Regular
                Seating
              </div>
              <div class="q-my-sm">
                <q-icon name="trending_flat" class="q-ml-md q-mr-xl" /> Free
                Snacks
              </div>
              <div class="q-my-sm">
                <q-icon name="trending_flat" class="q-ml-md q-mr-xl" /> Regular
                Seating
              </div>
              <div>
                <q-icon name="trending_flat" class="q-ml-md q-mr-xl" /> Custom
                Badge
              </div>
            </q-card-actions>
          </div>
          <div class="btn text-center q-my-md">
            <q-btn outline color="primary" label="Register Event" />
          </div>
        </div>
      </div>
<!-- Gold Ticket section -->
      <div class="col-xl-4 col-lg-4 col-sm-4 col-md-4 col-xs-12">
        <div class="card__section">
          <q-btn color="black" class="full-width" label="Gold Ticket" />
          <div class="top q-pa-lg">
            <div class="section text-center">
              <div class="icon q-my-sm">
                <img
                  src="https://ovatheme.com/em4u/wp-content/plugins/ova-events-manager/assets/img/price_icon.png"
                  alt=""
                />
              </div>
              <div class="price">
                <div class="text-subtitle1 text-white text-bold q-my-sm">
                  $ {{ item.gold_ticket }}
                </div>
                <div class="text-caption text-white">
                  {{ item.number_of_gold_ticket }} Tickets
                </div>
              </div>
            </div>
          </div>
          <div class="q-my-lg">
            <q-card-actions>
              <div class="q-my-sm">
                <q-icon name="trending_flat" class="q-ml-md q-mr-xl" /> Regular
                Seating
              </div>
              <div class="q-my-sm">
                <q-icon name="trending_flat" class="q-ml-md q-mr-xl" /> Free
                Snacks
              </div>
              <div class="q-my-sm">
                <q-icon name="trending_flat" class="q-ml-md q-mr-xl" /> Regular
                Seating
              </div>
              <div>
                <q-icon name="trending_flat" class="q-ml-md q-mr-xl" /> Custom
                Badge
              </div>
            </q-card-actions>
          </div>
          <div class="btn text-center q-my-md">
            <q-btn outline color="primary" label="Register Event" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: ["item"],
  setup() {
    return {};
  },
};
</script>
<style scoped>
.card__section {
  border: 1px solid #e2e2e2;
  border-top-color: rgb(226, 226, 226);
  border-top-style: solid;
  border-top-width: 1px;
  border-top: none;
}
/* .top {
  background: url("https://ovatheme.com/em4u/wp-content/plugins/ova-events-manager/assets/img/bg_price.png")
    no-repeat bottom center;
} */
.top {
  background: url("https://ovatheme.com/em4u/wp-content/plugins/ova-events-manager/assets/img/bg_price_feature.png")
    no-repeat bottom center;
  background-size: auto;
  z-index: 1;
  position: relative;
  background-size: cover;
}
.price .text-subtitle1 {
  font-size: 30px;
  color: #000;
  font-weight: 600;
}
.price .text-caption {
  padding-bottom: 35px;
  color: #8c8c8c;
}
</style>
