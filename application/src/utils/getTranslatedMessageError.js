import {exceptions} from "../constants";

export default function getTranslatedMessageError(errorMessage) {
  if (!errorMessage || !exceptions[errorMessage]) {
    return exceptions.DEFAULT;
  }

  return exceptions[errorMessage];
}
