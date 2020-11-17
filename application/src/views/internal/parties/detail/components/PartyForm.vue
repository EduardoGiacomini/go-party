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
      <v-btn type="submit" color="secondary" depressed block large>
        Criar
      </v-btn>
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
        this.$emit('submit')
      }
    }
  }
</script>
