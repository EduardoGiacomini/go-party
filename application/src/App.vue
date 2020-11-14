<template>
  <default-template>
    <router-view/>
  </default-template>
</template>

<script>
  import DefaultTemplate from "./views/commons/template/DefaultTemplate";
  export default {
    name: "App",
    components: {DefaultTemplate}
  }
</script>
