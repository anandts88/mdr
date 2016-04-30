import Ember from 'ember';
import TableHeading from 'mdr/models/table-heading';

const {
  Component,
  isEmpty,
  get,
  set,
  computed,
  on
} = Ember;

const {
  oneWay
} = computed;

export default Component.extend({
  tagName: 'section',
  selected: null,
  filtered: oneWay('model'),

  _init: on('init', function() {
    this.set('headings', [
      TableHeading.create({
        name: 'First Name',
        property: 'first_name'
      }),
      TableHeading.create({
        name: 'Last Name',
        property: 'last_name'
      }),
      TableHeading.create({
        name: 'Date of Birth',
        property: 'dob_date'
      }),
      TableHeading.create({
        name: 'Gender',
        property: 'gender'
      }),
    ]);
  }),

  actions: {
    filter() {
      const clients   = this.get('model');
      const firstName = this.get('firstName');
      const lastName  = this.get('lastName');

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
