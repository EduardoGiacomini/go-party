<template>
  <v-container class="register" fill-height>
    <v-row justify="center" align="center">
      <v-col cols="12" xs="10" md="6">
        <v-card outlined>
          <v-card-title class="px-2 py-6">
            <h2 class="register__title font-weight-medium text-center grey--text text--darken-2">
              Criar conta
            </h2>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <register-form @submit="submit"/>
          </v-card-text>
          <v-card-actions>
            <p class="text-center mx-auto grey--text text--darken-2">
              Já possui uma conta?
              <router-link class="blue--text text--darken-2 font-weight-medium" to="/">
                Faça login
              </router-link>
            </p>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import {actions} from "@/constants";
  import RegisterForm from "./RegisterForm";
  import {alert} from "../../mixins";
  export default {
    name: "register",
    mixins: [alert],
    components: {RegisterForm},
    methods: {
      async submit({name, email, phone}) {
        try {
          await this.$store.dispatch(actions.REGISTER, {name, email, phone});
          this.showSuccess('Conta registrada com sucesso.');
          this.$router.push({ name: "parties" });
        } catch (error) {
          this.showError(error);
        }
      }
    }
  }
</script>

<style scoped>
  .register__title {
    width: 100%;
  }
</style>
