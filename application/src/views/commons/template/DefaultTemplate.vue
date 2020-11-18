<template>
  <v-app>
    <alert/>
    <default-template-app-bar />
    <v-main>
      <v-container class="default-template-container" fluid>
        <slot/>
      </v-container>
    </v-main>
    <default-template-footer />
  </v-app>
</template>

<script>
  import Alert from "../Alert";
  import DefaultTemplateAppBar from "./DefaultTemplateAppBar";
  import DefaultTemplateFooter from "./DefaultTemplateFooter";
  export default {
    name: "default-template",
    components: {Alert, DefaultTemplateAppBar, DefaultTemplateFooter}
  }
</script>

<style scoped>
  .default-template-container {
    min-height: calc(100vh - 64px - 36px);
    background-color: #F4F4F9;
  }
</style>
