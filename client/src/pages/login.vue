<template>
  <q-page class="events">
    <div class="bg">
      <div class="bg_cover"></div>
    </div>
    <div class="text__section">
      <div class="header__text text-white">
        <div class="text-h2 text-white ova_title q-mb-xl">Sign In</div>
        <q-breadcrumbs>
          <q-breadcrumbs-el label="Home" />
          <q-breadcrumbs-el label="Sign In" />
        </q-breadcrumbs>
      </div>
    </div>

    <div class="blog__section">
      <div class="login">
        <form action="" @submit.prevent="onSubmit">
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
          <div class="q-my-sm">
            <q-input
              v-model="password"
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
              filled
              prefix="password:"
              ref="password"
              :type="isPwd ? 'password' : 'text'"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </div>

          <q-btn
            style="background: #ff0080; color: white"
            class="full-width q-py-sm"
            label="login"
            type="submit"
          />
          <div class="tex-caption q-my-sm">Forgot your password?</div>
        </form>
      </div>
    </div>
  </q-page>
</template>

<script>
// inside of a Vue file
// import { useQuasar } from 'quasar'
import AuthenticationService from "../services/AuthenticationService";
export default {
  data() {
    return {
      password: "",
      isPwd: true,

      email: "",
    };
  },
  // methods: {
  //   onSubmit() {
  //     this.$refs.email.validate();
  //     this.$refs.password.validate();

  //     if (this.$refs.email.hasError || this.$refs.password.hasError) {
  //       this.formHasError = true;
  //     } else {
  //       this.$q.notify({
  //         color: "positive",
  //         message: "login",
  //       });
  //     }
  //   },
  // },

  methods: {
    onSubmit() {
      this.$refs.email.validate();
      this.$refs.password.validate();
      this.login();
    },
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        this.$q.notify({
          type: "positive",
          timeout: 1000,
          position: "center",
          message: "success",
        });
        this.$router.push("/");
      } catch (error) {
        console.log("this is error", error.response.data.error)
        this.$q.notify({
          type: "negative",
          timeout: 500,
          position: "center",
          message: error.response.data.error,
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
  width: 40% !important;
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
