<template>
  <v-container fill-height>
    <v-row justify="center" align="center">
      <v-col cols="12" xs="10" md="6">
        <v-card outlined>
          <v-card-title class="px-2 py-4">
            <img class="mx-auto" height="80px" src="@/assets/logo.svg"/>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <fake-login-form @submit="submit"/>
          </v-card-text>
          <v-card-actions>
            <p class="text-center mx-auto grey--text text--darken-2">
              Não possui uma conta?
              <router-link class="blue--text text--darken-2 font-weight-medium" to="/register">
                Registre-se
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
  import FakeLoginForm from "./FakeLoginForm";
  import {alert} from "../../mixins";
  export default {
    name: "fake-login",
    mixins: [alert],
    components: {FakeLoginForm},
    methods: {
      async submit({email, name}) {
        try {
          const user = await this.$store.dispatch(actions.FAKE_LOGIN, {email, name});
          this.$router.push({ name: "parties" });
        } catch (error) {
          this.showError(error);
        }
      }
    }
  }
</script>
