<template>
  <default-template v-if="$route.meta.requiresAuthentication">
    <router-view/>
  </default-template>
  <v-app class="custom-theme-color" v-else>
    <alert/>
    <router-view/>
  </v-app>
</template>

<script>
  import DefaultTemplate from "./views/commons/template/DefaultTemplate";
  import Alert from "./views/commons/Alert";
  export default {
    name: "App",
    components: {DefaultTemplate, Alert}
  }
</script>
