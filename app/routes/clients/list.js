import Ember from 'ember';

const {
  Route,
  inject
} = Ember;

const {
  service
} = inject;

export default Route.extend({
  clients: service(),

  activate() {
    this._super(...arguments);
    this.get('titlebar').set('right_content', 'right-content-client');
  },

  model() {
    return this.store.findAll('client');
  },

  deactivate() {
    this._super(...arguments);
    this.get('titlebar').set('right_content', undefined);
  }
});
