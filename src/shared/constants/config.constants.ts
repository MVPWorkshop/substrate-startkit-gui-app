const {
  REACT_APP_API_BASE_URL,
  REACT_APP_API_VERSION,
  REACT_APP_FEATURE_REQUEST_MAIL
} = process.env;

if (!REACT_APP_API_BASE_URL || !REACT_APP_API_VERSION) {
  throw new Error("Please provide API data in .env config!")
}

if (!REACT_APP_FEATURE_REQUEST_MAIL) {
  throw new Error("Please provide the email address used for feature requests")
}

export default {
  API_BASE_URL: REACT_APP_API_BASE_URL,
  API_VERSION: REACT_APP_API_VERSION,
  FEATURE_REQUEST_MAIL: REACT_APP_FEATURE_REQUEST_MAIL
}
