<template>
  <div>
    <back-button/>
    <v-card class="ma-4 mx-auto" max-width="700px" outlined>
      <v-card-title class="pb-0">
        <div>
          <h3 class="grey--text text--darken-3 headline font-weight-medium">
            Editar Festa
          </h3>
          <p class="subtitle-1 grey--text text--darken-2">
            Edite os campos abaixo e confirme para atualizar a festa
          </p>
        </div>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <party-form v-model="party" @submit="update"/>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  import BackButton from "../../../commons/BackButton";
  import PartyForm from "./components/PartyForm";
  import {actions} from "../../../../constants";
  export default {
    name: "update-party",
    components: {BackButton, PartyForm},
    data() {
      return {
        partyId: null,
        party: {}
      }
    },
    async mounted() {
      this.getPartyIdFromUrl();
      await this.findParty();
    },
    methods: {
      getPartyIdFromUrl() {
        this.partyId = this.$route.params.id
      },
      async findParty() {
        try {
          this.party = await this.$store.dispatch(actions.FIND_PARTY_BY_ID, this.partyId);
        } catch (error) {
          // TODO: exibir mensagem de erro.
          console.log(error);
        }
      },
      async update() {
        try {
          this.party = await this.$store.dispatch(actions.UPDATE_PARTY, {partyId: this.partyId, party: this.party});
        } catch (error) {
          // TODO: exibir mensagem de erro
          console.log(error);
        }
      }
    }
  }
</script>
