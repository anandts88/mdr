import Ember from 'ember';

const {
  Component,
  isEmpty,
  get,
  set,
  computed
} = Ember;

const {
  oneWay
} = computed;

export default Component.extend({
  tagName: 'section',
  selected: null,
  filtered: oneWay('model.clients'),

  actions: {
    filter() {
      const model     = this.get('model');
      const firstName = model.get('firstName');
      const lastName  = model.get('lastName');
      const clients   = model.get('clients');

      if (!isEmpty(clients)) {
        set(this, 'filtered', clients.filter((client) => {
          let result = true;
          if (firstName) {
            result = get(client, 'first_name').toLowerCase().indexOf(firstName.toLowerCase()) !== -1;
          }

          if (lastName) {
            result = get(client, 'last_name').toLowerCase().indexOf(lastName.toLowerCase()) !== -1;
          }

          return result;
        }));
      }
    }
  }
});
