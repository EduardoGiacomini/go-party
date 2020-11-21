<template>
  <v-form @submit.prevent="submit" class="px-4">
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
    <v-text-field
      prepend-inner-icon="mdi-phone"
      v-model="phone"
      v-mask="'(##) #####-####'"
      label="Celular (opcional)"
      outlined
      required/>
    <v-btn type="submit" color="secondary" depressed block large>
      Criar conta
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    name: "register-form",
    data() {
      return {
        name: null,
        email: null,
        phone: null,
        rules: {
          name: [
            value => !!value || 'O nome é obrigatório',
          ],
          email: [
            value => !!value || 'O e-mail é obrigatório',
            value => /.+@.+/.test(value) || 'O e-mail deve ser válido'
          ]
        }
      }
    },
    methods: {
      submit() {
        const phone = this.getFormattedPhone()
        this.$emit('submit', {name: this.name, email: this.email, phone: phone});
      },
      getFormattedPhone() {
        if (this.phone) {
          return this.phone.replace(/[\W_]/g, '');
        } else {
          return null;
        }
      }
    }
  }
</script>
