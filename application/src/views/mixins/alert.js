import {mutations} from "../../constants";

export default {
  methods: {
    showError(message) {
      this.$store.commit(mutations.SET_ALERT, {
        message: message,
        type: 'error'
      });
    },
    showWarning(message) {
      this.$store.commit(mutations.SET_ALERT, {
        message: message,
        type: 'warning'
      })
    },
    showSuccess(message) {
      this.$store.commit(mutations.SET_ALERT, {
        message: message,
        type: 'secondary'
      })
    },
    showInfo(message) {
      this.$store.commit(mutations.SET_ALERT, {
        message: message,
        type: 'info'
      })
    }
  }
}
