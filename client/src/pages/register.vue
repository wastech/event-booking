<template>
  <q-page class="events">
    <div class="bg">
      <div class="bg_cover"></div>
    </div>
    <div class="text__section">
      <div class="header__text text-white">
        <div class="text-h2 text-white ova_title q-mb-xl">Register</div>
        <q-breadcrumbs>
          <q-breadcrumbs-el label="Home" />
          <q-breadcrumbs-el label="Register" />
        </q-breadcrumbs>
      </div>
    </div>

    <div class="blog__section">
      <div class="login">
        <form action="" @submit.prevent.stop="onSubmit">
          <div class="row q-col-gutter-sm">
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
                ref="emTitle"
                type="text"
                prefix="Yoru Role:"
                v-model="emTitle"
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
          <q-input
            filled
            ref="email"
            type="email"
            prefix="Email:"
            v-model="email"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'email field can\'t be null',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="mail" />
            </template>
          </q-input>
          <div class="q-my-sm">
            <q-input
              v-model="password"
              :rules="[(val) => (val && val.length > 0) || '']"
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

          <div class="col-12 q-my-md">
            <input dark filled type="file" ref="file" @change="onSelect()" />
          </div>

          <div>
            <q-input
              filled
              rows="5"
              ref="description"
              :rules="[(val) => !!val || 'Field is required']"
              v-model="description"
              clearable
              type="textarea"
              placeholder="Your bio"
            />
          </div>
          <q-toggle v-model="accept" label="I accept the license and terms" />
          <q-btn
            style="background: #ff0080; color: white"
            class="full-width q-py-sm"
            label="register"
            type="submit"
            v-bind:disabled="!file || !description || !email"
          />
          <div class="tex-caption q-my-sm">login</div>
        </form>
      </div>
    </div>
  </q-page>
</template>

<script>
// inside of a Vue file
import AuthenticationService from "../services/AuthenticationService";
// import { useQuasar } from 'quasar'
export default {
  data() {
    return {
      password: "",
      isPwd: true,
      accept: false,
      email: "",
      name: "",
      emTitle: "",
      description: "",
      file: "",
    };
  },
  methods: {
    onSubmit() {
      this.$refs.email.validate();
      this.$refs.password.validate();
      this.$refs.name.validate();
      this.$refs.emTitle.validate();
      this.$refs.description.validate();

      this.signUp();
    },
    onSelect() {
      this.file = this.$refs.file.files[0];
    },
    async signUp() {
      try {
        let formData = new FormData();
        formData.append("avatar", this.file);
        formData.append("email", this.email);
        formData.append("name", this.name);
        formData.append("emTitle", this.emTitle);
        formData.append("password", this.password);
        formData.append("description", this.description);
        console.log("this is formData", formData);
        const response = await AuthenticationService.register(formData);
        console.log(response);
        this.$q.notify({
          type: "positive",
          timeout: 2000,
          position: "center",
          message: "success",
        });
        this.$router.push("/login");
      } catch (error) {
        this.$q.notify({
          type: "negative",
          multiLine: true,
          timeout: 2000,
          position: "center",
          message: error.response.data.error,
        });
      }
    },
  },
  // if (
  //   this.$refs.email.hasError ||
  //   this.$refs.password.hasError ||
  //   this.$refs.name.hasError ||
  //   this.$refs.role.hasError
  // ) {
  //   this.formHasError = true;
  // } else if (this.accept !== true) {
  //   this.$q.notify({
  //     color: "negative",
  //     message: "You need to accept the license and terms first",
  //   });
  // } else {
  //   this.$q.notify({
  //     icon: "done",
  //     color: "positive",
  //     message: "Submitted",
  //   });
  // }
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
  width: 60% !important;
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
