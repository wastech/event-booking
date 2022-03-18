<template>
  <q-page class="events">
    <div class="bg">
      <div class="bg_cover"></div>
    </div>
    <div class="text__section">
      <div class="header__text text-white">
        <div class="text-h2 text-white ova_title q-mb-xl">Register Event</div>
        <q-breadcrumbs>
          <q-breadcrumbs-el label="Home" />
          <q-breadcrumbs-el label="Event" />
        </q-breadcrumbs>
      </div>
    </div>

    <div class="blog__section">
      <div class="login">
        <form action="" @submit.prevent.stop="onSubmit">
          <div class="row q-col-gutter-sm q-my-sm">
            <div class="col-xl-6 col-lg-6 col-d-6 col-sm-6 col-xs-12">
              <q-input
                filled
                ref="name"
                type="text"
                prefix="Your Name:"
                v-model="name"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
            </div>
            <div class="col-xl-6 col-lg-6 col-d-6 col-sm-6 col-xs-12">
              <q-input
                filled
                ref="role"
                type="text"
                prefix="Yoru Role:"
                v-model="role"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="work" />
                </template>
              </q-input>
            </div>
          </div>

          <div class="row q-col-gutter-sm q-my-sm">
            <div class="col-xl-6 col-lg-6 col-d-6 col-sm-6 col-xs-12">
              <q-input
                filled
                ref="email"
                type="email"
                prefix="Email:"
                v-model="email"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="mail" />
                </template>
              </q-input>
            </div>
            <div class="col-xl-6 col-lg-6 col-d-6 col-sm-6 col-xs-12">
              <q-input
                ref="number"
                filled
                type="number"
                v-model="number"
                label="Number*"
                lazy-rules
                :rules="[
                  (val) =>
                    (val !== null && val !== '') || 'Please type your number',
                  (val) =>
                    (val > 0 && val < 3) || 'your number can\'t more than 3',
                ]"
              />
            </div>
          </div>
          <div class="row q-col-gutter-sm q-my-sm">
            <div class="col-xl-6 col-lg-6 col-d-6 col-sm-6 col-xs-12">
              <q-input
                filled
                ref="address"
                type="text"
                prefix="address:"
                v-model="address"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              >
              </q-input>
            </div>
            <div class="col-xl-6 col-lg-6 col-d-6 col-sm-6 col-xs-12">
              <q-input
                ref="company"
                filled
                type="text"
                v-model="company"
                label="company*"
                lazy-rules
                :rules="[
                  (val) =>
                    (val !== null && val !== '') || 'Please type your number',
                  (val) =>
                    (val > 0 && val < 3) || 'your number can\'t more than 3',
                ]"
              />
            </div>
          </div>

          <div class="row q-my-sm">
            <div class="col-xl-12 col-lg-12 col-d-12 col-sm-12 col-xs-12">
              <q-input
                ref="info"
                filled
                type="textarea"
                v-model="info"
                label="Additional Info*"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />
            </div>
          </div>
          <q-toggle
            v-model="accept"
            label="I have read and agree to the website terms and conditions"
          />
          <div  class=" q-py-lg">
            <q-btn
              style="background: #ff0080; color: white"
              class=" q-py-md"
              label="Register event"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  </q-page>
</template>

<script>
// inside of a Vue file
// import { useQuasar } from 'quasar'
export default {
  data() {
    return {
      isPwd: true,
      accept: false,
      email: "",
      name: "",
      role: "",
      number: "",
      address: "",
      company: "",
      info: "",
    };
  },
  methods: {
    onSubmit() {
      this.$refs.email.validate();
      this.$refs.name.validate();
      this.$refs.role.validate();
      this.$refs.email.validate();
      this.$refs.number.validate();
      this.$refs.address.validate();
      this.$refs.company.validate();
      this.$refs.info.validate();

      if (
        this.$refs.email.hasError ||
        this.$refs.name.hasError ||
        this.$refs.role.hasError ||
        this.$refs.number.hasError ||
        this.$refs.address.hasError ||
        this.$refs.company.hasError ||
        this.$refs.info.hasError
      ) {
        this.formHasError = true;
      } else if (this.accept !== true) {
        this.$q.notify({
          color: "negative",
          message: "You need to accept the license and terms first",
        });
      } else {
        this.$q.notify({
          icon: "done",
          color: "positive",
          message: "Submitted",
        });
      }
    },
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
  width: 50% !important;
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
.login {
  margin-top: 18em;
}
</style>
