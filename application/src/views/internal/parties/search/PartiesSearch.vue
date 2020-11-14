<template>
  <v-layout row wrap v-if="parties.length > 0">
    <v-flex class="xs12 px-4 pt-2">
      <v-btn color="secondary" depressed @click="goToCreatePartyPage">
        Nova Festa
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-flex>
    <v-flex class="xs12 sm6 md4" v-for="(party, index) in parties" :key="index">
      <parties-card :party="party"/>
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
        parties: [],
        isLoading: true
      }
    },
    async mounted() {
      await this.findParties();
    },
    methods: {
      async findParties() {
        const foundParties = await this.$store.dispatch(actions.FIND_PARTIES);
        this.parties = foundParties;
        this.isLoading = false;
      },
      goToCreatePartyPage() {
        this.$router.push({ name: "createParty" });
      }
    }
  }
</script>
