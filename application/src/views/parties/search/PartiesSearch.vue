<template>
  <v-layout row wrap>
    <v-flex class="xs12 sm6 md4">
      <parties-card/>
    </v-flex>
    <v-flex class="xs12 sm6 md4">
      <parties-card/>
    </v-flex>
    <v-flex class="xs12 sm6 md4">
      <parties-card/>
    </v-flex>
    <v-flex class="xs12 sm6 md4">
      <parties-card/>
    </v-flex>
  </v-layout>
</template>

<script>
  import PartiesCard from "./components/PartiesCard";
  export default {
    name: "parties-search",
    components: {PartiesCard},
    data() {
      return {
        isLoading: true,
        parties: []
      }
    }
  }
</script>
