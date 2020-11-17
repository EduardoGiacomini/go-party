<template>
  <v-dialog v-model="open" persistent max-width="500">
    <v-card>
      <v-card-title class="headline">{{title}}</v-card-title>
      <v-card-text>
        {{descriptionPrefix}}
        <strong>{{term}}</strong>
        {{descriptionSuffix}}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="text--secondary" text @click="$emit('reject')">
          {{rejectText}}
        </v-btn>
        <v-btn color="error" text @click="$emit('accept')">
          {{acceptText}}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: "confirm",
    props: {
      open: {
        type: Boolean,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      descriptionPrefix: {
        type: String,
        required: true
      },
      term: {
        type: String,
        required: true
      },
      descriptionSuffix: {
        type: String,
        required: true
      },
      rejectText: {
        type: String,
        required: true
      },
      acceptText: {
        type: String,
        required: true
      }
    }
  }
</script>
