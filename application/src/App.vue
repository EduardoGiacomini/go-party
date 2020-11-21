<template>
  <default-template v-if="$route.meta.requiresAuthentication">
    <router-view/>
  </default-template>
  <v-app class="custom-theme-color" v-else>
    <router-view/>
  </v-app>
</template>

<script>
  import DefaultTemplate from "./views/commons/template/DefaultTemplate";
  export default {
    name: "App",
    components: {DefaultTemplate}
  }
</script>
