export default function getMessageError(error) {
  if (error && error.response && error.response.data && error.response.data.error) {
    return error.response.data.error;
  } else {
    return null;
  }
}
