import ENV from 'ember-example/config/environment';
import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
  host: ENV.API_HOST,
  namespace: 'api'
});
