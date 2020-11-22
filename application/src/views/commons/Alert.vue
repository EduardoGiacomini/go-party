<template>
  <v-snackbar v-model="alert.show" :color="alert.color" :timeout="alert.timeout" top right>
    <v-icon class="mr-2">{{alert.icon}}</v-icon>
    <span>{{alert.message}}</span>
    <template v-slot:action="{attrs}">
      <v-btn dark text v-bind="attrs" @click="alert.show = false">
        <v-icon color="white" small>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
  export default {
    name: "alert",
    data() {
      return {
        alert: {
          show: false,
          message: null,
          color: null,
          icon: null,
          timeout: 6000
        }
      }
    },
    created() {
      this.$store.watch(
        state => state.alert,
        () => {
          const {message, color, icon} = this.$store.state.alert
          if (message !== '') {
            this.alert.show = true
            this.alert.message = message
            this.alert.color = color
            this.alert.icon = icon
          }
        }
      )
    }
  }
</script>
