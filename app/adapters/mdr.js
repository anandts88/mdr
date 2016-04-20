import DS from 'ember-data';

const {
  RESTAdapter
} = DS;

export default DS.RESTAdapter.extend({
  namespace: 'mdrapi'
});
