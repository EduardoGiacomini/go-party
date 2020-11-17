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
        <create-party-form v-model="party" @submit="submit"/>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  import {actions} from "../../../../constants";
  import CreatePartyForm from "./components/CreatePartyForm";
  import BackButton from "../../../commons/BackButton";
  export default {
    name: 'create-party',
    components: {CreatePartyForm, BackButton},
    data() {
      return {
        party: {
          name: null,
          description: null,
          dateTime: null
        }
      }
    },
    methods: {
      async submit() {
        try {
          await this.$store.dispatch(actions.CREATE_PARTY, this.party);
          this.$router.push({ name: "parties" });
          // TODO: exibir mensagem
        } catch (error) {
          // TODO: exibir mensagem
          console.log(error);
        }
      }
    }
  }
</script>
