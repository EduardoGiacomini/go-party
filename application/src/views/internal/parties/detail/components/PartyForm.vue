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
      <v-layout row class="px-3">
        <v-flex class="xs6 pr-2">
          <v-text-field
            type="date"
            v-model="date"
            label="Data (opcional)"
            outlined
            required/>
        </v-flex>
        <v-flex class="xs6 pl-2">
          <v-text-field
            type="time"
            v-model="time"
            label="Hora (opcional)"
            outlined
            required/>
        </v-flex>
      </v-layout>
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
    data() {
      return {
        date: null,
        time: null
      }
    },
    props: {
      value: {
        type: Object,
        required: true
      }
    },
    methods: {
      submit() {
        if (this.isThereACompleteDate()) {
          this.formatDateTime();
        }
        this.$emit("submit");
      },
      isThereACompleteDate() {
        return this.date && this.time;
      },
      formatDateTime() {
        this.value.dateTime = new Date(`${this.date} ${this.time}`);
      },
      goToPartiesPage() {
        this.$router.push({ name: "parties" });
      }
    }
  }
</script>
