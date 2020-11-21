import {mutations} from "../../constants";
import { getMessageError, getTranslatedMessageError } from "../../utils";

export default {
  methods: {
    showError(error) {
      const message = getMessageError(error);
      const translatedMessage = getTranslatedMessageError(message);
      this.$store.commit(mutations.SET_ALERT, {
        message: translatedMessage,
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
