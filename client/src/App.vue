<template>
  <q-layout view="lHh Lpr lFf" >
    <app-header v-if="!$route.meta.hideNavbar"/>
    <router-view :key="$route.fullPath" />
    <app-footer v-if="!$route.meta.hideFooter"/>
  </q-layout>
</template>
<script>
import { defineComponent } from "vue";
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";

export default defineComponent({
  components: { AppHeader, AppFooter },
  name: "App",
});
</script>
<style scoped>
</style>
