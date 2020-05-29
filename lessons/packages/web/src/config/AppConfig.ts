import * as R from 'ramda';

export default {
  apiUrl: R.defaultTo(
    'http://localhost:4000',
    process.env.REACT_APP_UNCHARTECH_API_URL,
  ),
};
