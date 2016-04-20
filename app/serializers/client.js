import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: 'customer_id',

  normalize(modelClass, resourceHash, prop) {
    return this._super(...arguments);
  }
});
