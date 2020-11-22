import {mutations} from "../../constants";
import { getMessageError, getTranslatedMessageError } from "../../utils";

export default {
  methods: {
    showError(error) {
      const message = getMessageError(error);
      const translatedMessage = getTranslatedMessageError(message);
      this.$store.commit(mutations.SET_ALERT, {
        message: translatedMessage,
        color: 'error',
        icon: 'mdi-alert-circle'
      });
    },
    showWarning(message) {
      this.$store.commit(mutations.SET_ALERT, {
        message: message,
        color: 'warning',
        icon: 'mdi-alert'
      })
    },
    showSuccess(message) {
      this.$store.commit(mutations.SET_ALERT, {
        message: message,
        color: 'secondary',
        icon: 'mdi-check'
      })
    },
    showInfo(message) {
      this.$store.commit(mutations.SET_ALERT, {
        message: message,
        color: 'blue',
        icon: 'mdi-alert'
      })
    }
  }
}
