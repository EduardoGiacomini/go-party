<template>
  <v-layout>
    <v-flex class="d-flex flex-column align-center xs12 sm6 mt-8 mx-auto">
      <v-img class="mb-8" max-width="350" :src="image" :alt="imageAlt" v-if="image"/>
      <h3 class="headline font-weight-medium grey--text text--darken-3 text-center">
        {{title}}
      </h3>
      <p class="subtitle-1 grey--text text--darken-2 text-center">
        {{subtitle}}
      </p>
      <v-btn v-if="button" color="secondary" depressed large @click="$emit('action')">
        {{button}}
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: "empty",
    props: {
      image: {
        type: String,
        required: false
      },
      imageAlt: {
        type: String,
        required: false
      },
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        required: true
      },
      button: {
        type: String,
        required: true
      }
    }
  }
</script>
