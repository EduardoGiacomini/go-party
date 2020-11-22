<template>
  <div>
    <back-button/>
    <v-card class="ma-4 mx-auto" max-width="700px" outlined>
      <v-card-title class="pb-0">
        <div>
          <h3 class="grey--text text--darken-3 headline font-weight-medium">
            Criar Festa
          </h3>
          <p class="subtitle-1 grey--text text--darken-2">
            Preencha os dados para criar uma nova festa
          </p>
        </div>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <party-form v-model="party" @submit="create"/>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  import {actions} from "../../../../constants";
  import PartyForm from "./components/PartyForm";
  import BackButton from "../../../commons/BackButton";
  import {alert} from "../../../mixins";
  export default {
    name: 'create-party',
    mixins: [alert],
    components: {PartyForm, BackButton},
    data() {
      return {
        party: {
          name: null,
          description: null,
          date_time: null
        }
      }
    },
    methods: {
      async create() {
        try {
          await this.$store.dispatch(actions.CREATE_PARTY, this.party);
          this.$router.push({ name: "parties" });
          this.showSuccess('Festa criada com sucesso.');
        } catch (error) {
          this.showError(error);
        }
      }
    }
  }
</script>
