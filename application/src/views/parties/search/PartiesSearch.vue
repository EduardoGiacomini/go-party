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
  import {actions} from "@/constants";
  import PartiesCard from "./components/PartiesCard";
  export default {
    name: "parties-search",
    components: {PartiesCard},
    data() {
      return {
        isLoading: true,
        parties: []
      }
    },
    async mounted() {
      const parties = await this.$store.dispatch(actions.FIND_PARTIES);
      console.log(parties);
    }
  }
</script>
