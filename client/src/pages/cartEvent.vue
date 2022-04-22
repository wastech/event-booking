<template>
  <q-page class="events">
    <div class="bg">
      <div class="bg_cover"></div>
    </div>
    <div class="text__section">
      <div class="header__text text-white">
        <div class="text-h2 text-white ova_title q-mb-xl">Cart Event</div>
        <q-breadcrumbs>
          <q-breadcrumbs-el label="Home" />
          <q-breadcrumbs-el label=" Cart Event" />
        </q-breadcrumbs>
      </div>
    </div>

    <div class="blog__section">
      <div class="text-subtitle1 cart__row">You can use coupon code: D10</div>
      <div class="row q-col-gutter-lg">
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-12">
          <q-card class="q-pa-lg q-my-xl">
            <q-markup-table class="q-my-xl">
              <thead>
                <tr class="" colspan="5">
                  <th class="text-left text-weight-bold">
                    <div class="text-subtitle2 text-weight-bold">Remove</div>
                  </th>
                  <th class="text-left">
                    <div class="text-subtitle2 text-weight-bold">
                      Event Name
                    </div>
                  </th>
                  <th class="text-left">
                    <div class="text-subtitle2 text-weight-bold">Price</div>
                  </th>
                  <th class="text-left">
                    <div class="text-subtitle2 text-weight-bold">Quantity</div>
                  </th>
                  <th class="text-right">
                    <div class="text-subtitle2 text-weight-bold">Total</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-left"><q-icon name="close" size="md" /></td>
                  <td class="text-left">Phanxipang Tourist - Gold Ticket37</td>
                  <td class="text-left">$2000</td>
                  <td class="text-left">
                    <q-input type="number" filled style="max-width: 70px" />
                  </td>
                  <td class="text-right">$3000</td>
                </tr>
              </tbody>
            </q-markup-table>
            <div class="row justify-end">
              <q-btn label="UPDATE CART" class="q-py-md cbl" />
            </div>
          </q-card>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 q-my-xl">
          <q-card class="my-card q-pa-md">
            <q-card-section>
              <div class="text-h6 q-my-md">Discount code</div>
              <form action="">
                <q-input outlined v-model="text" label="Outlined" />
                <div class="btn q-my-md">
                  <q-btn label="apply coupon" class="bl" />
                </div>
              </form>
              <div class="text-h6 q-my-lg">Cart Total</div>

              <q-list>
                <q-separator />
                <q-item clickable v-ripple>
                  <q-item-section
                    ><div class="text-subtitle2 text-weight-bold">Subtotal</div>
                  </q-item-section>
                  <q-item-section avatar>
                    <q-avatar>
                      <div class="text-subtitle2 text-weight-medium">$10</div>
                    </q-avatar>
                  </q-item-section>
                </q-item>

                <q-separator />
                <q-item clickable v-ripple>
                  <q-item-section>
                    <div class="text-subtitle2 text-weight-bold">
                      Total
                    </div></q-item-section
                  >
                  <q-item-section avatar>
                    <q-avatar>
                      <div class="text-subtitle2 text-weight-bold">
                        $10
                      </div></q-avatar
                    >
                  </q-item-section>
                </q-item>

                <div class="btn q-my-md">
                  <q-btn label="check out" class="cbl full-width" />
                </div>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
<style scoped>
.events {
  margin-top: 50px;
}
.bg {
  background-image: url(https://ovatheme.com/em4u/wp-content/themes/em4u/assets/img/bg_heading-compressor.jpg);
  padding: 277px 0px 80px 0px;

  position: relative;
  height: 36vh !important;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg_cover {
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.text__section {
  width: 65% !important;
  margin: 0 auto;
  margin-top: -19em;
  position: relative;
  height: 100%;

  z-index: 2;
}
.blog__section {
  width: 65% !important;
  margin: 0 auto;
}
.ova_title {
  font-size: 70px;
  font-weight: bold;
  margin-bottom: 0;
  margin-top: 0;
  color: #fff;
  line-height: 80px;
}
.cart__row {
  margin-top: 12em;
}
tr,
.q-table tbody td {
  height: 70px;
}
.bl {
  background-color: #4862c4;
  color: #fff;
  padding: 1em;
}

.bl:hover {
  background-color: #f53f7b;
  color: #fff;
}
.cbl {
  background-color: #f53f7b;
  color: #fff;
  padding: 1em;
}
.cbl:hover {
  background-color: #4862c4;
  color: #fff;
}
</style>
