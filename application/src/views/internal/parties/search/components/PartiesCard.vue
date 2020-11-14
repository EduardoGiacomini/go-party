<template>
  <v-card class="ma-4" max-width="400" height="140" outlined>
    <v-card-title>{{party.name}}</v-card-title>
    <v-card-subtitle v-if="party.dateTime">{{party.dateTime}}</v-card-subtitle>
    <v-card-subtitle v-else><span class="font-italic">Data não definida</span></v-card-subtitle>
    <v-card-text>{{party.description}}</v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: "parties-card",
    props: {
      party: {
        type: Object,
        required: true
      }
    }
  }
</script>
