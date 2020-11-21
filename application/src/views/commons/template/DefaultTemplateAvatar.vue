<template>
  <v-list-item class="px-0" two-line>
    <v-list-item-avatar>
      <v-avatar color="grey darken-1">
        <v-icon dark>mdi-account</v-icon>
      </v-avatar>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>{{user.name}}</v-list-item-title>
      <v-list-item-subtitle>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <span v-bind="attrs" v-on="on">{{user.email}}</span>
          </template>
          <span>{{user.email}}</span>
        </v-tooltip>
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "default-template-avatar",
    computed: mapState(['user'])
  }
</script>
