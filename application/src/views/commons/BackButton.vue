<template>
  <v-btn text @click="goToBackPage">
    <v-icon>mdi-arrow-left</v-icon>
  </v-btn>
</template>

<script>
  export default {
    name: "back-button",
    methods: {
      goToBackPage() {
        this.$router.go(-1);
      }
    }
  }
</script>
