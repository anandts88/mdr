import Ember from 'ember';
import DS from 'ember-data';

const {
  RESTSerializer
} = DS;

const {
  assign
} = Ember;

export default RESTSerializer.extend({
  primaryKey: 'customer_id',

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    const { clients } = payload;
    const _payload = { clients };
    return this._super(store, primaryModelClass, _payload, id, requestType);
  },

  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    const {
      customerInfo,
      customerContact
    }  = payload;
    const client    = assign(customerInfo, customerContact);
    const _payload  = { client };

    return this._super(store, primaryModelClass, _payload, id, requestType);
  }
});
