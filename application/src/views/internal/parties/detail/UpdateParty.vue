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
      <v-card-text v-if="party">
        <party-form :is-edit-mode="true" v-model="party" @submit="update"/>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  import BackButton from "../../../commons/BackButton";
  import PartyForm from "./components/PartyForm";
  import {actions} from "../../../../constants";
  import {alert} from "../../../mixins";
  export default {
    name: "update-party",
    mixins: [alert],
    components: {BackButton, PartyForm},
    data() {
      return {
        partyId: null,
        party: null
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
      goToPartiesPage() {
        this.$router.push({name: "parties"});
      },
      async findParty() {
        try {
          this.party = await this.$store.dispatch(actions.FIND_PARTY_BY_ID, this.partyId);
        } catch (error) {
          this.showError(error);
          this.goToPartiesPage();
        }
      },
      async update() {
        try {
          await this.$store.dispatch(actions.UPDATE_PARTY, {partyId: this.partyId, party: this.party});
          await this.findParty();
          this.showSuccess('Festa atualizada com sucesso.');
        } catch (error) {
          this.showError(error);
        }
      }
    }
  }
</script>
