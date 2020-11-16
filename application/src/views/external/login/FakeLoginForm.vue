<template>
  <v-form @submit.prevent="submit">
    <v-text-field
      class="mb-2"
      prepend-inner-icon="mdi-account"
      v-model="name"
      :rules="rules.name"
      label="Nome"
      outlined
      required/>
    <v-text-field
      prepend-inner-icon="mdi-email"
      v-model="email"
      :rules="rules.email"
      label="E-mail"
      outlined
      required/>
    <v-btn type="submit" color="secondary" depressed block large>
      Entrar
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    name: "fake-login-form",
    data() {
      return {
        email: null,
        name: null,
        rules: {
          email: [
            value => !!value || 'O e-mail é obrigatório',
            value => /.+@.+/.test(value) || 'O e-mail deve ser válido'
          ],
          name: [
            value => !!value || 'O nome é obrigatório',
          ]
        }
      }
    },
    methods: {
      submit() {
        this.$emit('submit', {email: this.email, name: this.name})
      }
    }
  }
</script>
