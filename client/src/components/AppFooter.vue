<template>
  <div class="main">
    <div class="row q-col-gutter-xl row___center">
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <div class="image">
          <img src="https://i.pinimg.com/736x/de/a0/f3/dea0f3b7f480b1151c08db4a402a43b9.jpg" alt="" class="decillion__logo" />
        </div>
        <div class="text-body1 q-my-sm">
          Intersection 10 Hudson Yards, 26th Floor, New York, NY 10001
        </div>
        <div class="button">
          <div class="button q-my-lg">
            <q-btn outline label="Get Contact" no-caps />
          </div>
        </div>
      </div>

      <div class="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">
        <div class="text-h4">Offices</div>

        <div class="text-h5">Osun State</div>
        <div class="text-h5">Osogbo</div>
        <div class="text-h5">OyO</div>
        <div class="text-h5">Ilorin</div>
        <div class="text-h5">Ogun State</div>
        <div class="text-h5">Lagos</div>
      </div>

      <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-12">
        <div class="text-h4">Subscribe</div>
        <div class="text-body1">
          Don’t miss Decillion Logistics latest news and events. Subscribe to our
          newsletter channel and be informed
        </div>

        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <div class="row q-my-md">
            <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12">
              <input
                style="width: 100%"
                type="email"
                label-color="white"
                class="shadow-3"
                dark
                borderless
                placeholder="Custom standout"
              />
            </div>
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-12">
              <q-btn
                color="#fd8c40"
                label="Subscribe"
                no-caps
                style="width: 170px; height: 64px; margin-left: -1em"
              />
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
.main {
  padding-top: 32px !important;
  background-image: url(https://enovathemes.com/globax/wp-content/uploads/globus_image_large_dark.jpg?id=13226) !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  margin-top: 7em;
}
.q-btn {
  color: #fff !important;
  height: 55px;
  z-index: 1;
  width: 170px;
  font-weight: 700 !important;
  /* overflow: hidden; */
  border-radius: 6px;
  position: relative;
  background-color: #fd8c40 !important;
}
.row___center {
  width: 72%;
  margin: 0 auto;
}
img {
  width: 100%;
}
.text-h5 {
  color: #fff;
  font-size: medium;
  position: relative;
}
.text-h5:before {
  left: 0;
  top: 15px;
  width: 0px;
  height: 3px;
  content: "";
  position: absolute;
  -webkit-transition: 500ms all ease;
  transition: 500ms all ease;
  background-color: #ea1e00;
}
.text-h5:hover {
  padding-left: 12px;
}
.text-h5:hover:before {
  width: 8px;
}
.text-h4 {
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 15px;
}
.main {
  /* background-color: blue-10; */
}
.text-body1 {
  color: #fff;
}
.decillion__logo {
  object-fit: contain;
  width: 100px;
  height: 100px;
}
input {
  width: 100%;
  padding: 20px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>