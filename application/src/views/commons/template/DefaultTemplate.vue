<template>
  <v-app>
    <default-template-app-bar />
    <v-main>
      <v-container fluid>
        <slot/>
      </v-container>
    </v-main>
    <default-template-footer />
  </v-app>
</template>

<script>
  import DefaultTemplateAppBar from "./DefaultTemplateAppBar";
  import DefaultTemplateFooter from "./DefaultTemplateFooter";
  export default {
    name: "default-template",
    components: {DefaultTemplateAppBar, DefaultTemplateFooter}
  }
</script>
