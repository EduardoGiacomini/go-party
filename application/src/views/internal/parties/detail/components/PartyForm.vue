<template>
  <div>
    <v-form @submit.prevent="submit">
      <v-text-field
        class="mb-2"
        v-model="value.name"
        label="Nome"
        outlined
        required/>
      <v-text-field
        v-model="value.description"
        label="Descrição"
        outlined
        required/>
      <v-layout class="px-3 mt-5" row wrap>
        <v-flex class="d-flex align-center justify-end xs12">
          <v-btn class="mr-5" depressed @click="goToPartiesPage">
            Cancelar
          </v-btn>
          <v-btn type="submit" color="secondary" depressed>
            Salvar
          </v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </div>
</template>

<script>
  export default {
    name: "party-form",
    props: {
      value: {
        type: Object,
        required: true
      }
    },
    methods: {
      submit() {
        this.$emit('submit');
      },
      goToPartiesPage() {
        this.$router.push({ name: "parties" });
      }
    }
  }
</script>
