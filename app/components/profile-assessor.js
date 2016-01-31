import Ember from 'ember';
import Assessor from 'mdr/models/assessor';
import Api from 'mdr/mixins/api';

const {
  Component,
  on,
  inject
} = Ember;

const {
  service
} = inject;

export default Component.extend(Api, {
  session: service(),
  assessors: service(),

  edit_personal: false,
  edit_contact: false,
  edit_billing: false,

  model: null,

  set_model() {
    const assessor = Assessor.create();

    assessor.setProperties(_.pick(this.get('assessor'), [
      'active',
      'last_name',
      'first_name',
      'dob',
      'gender',
      'email_id',
      'phone1',
      'phone2',
      'address1',
      'state1',
      'city1',
      'zip1',
      'rater_id',
      'employee_number',
      'assessor_id'
    ]));

    this.set('model', assessor);
  },

  init_props: on('didInitAttrs', function() {
    this.set_model();
  }),

  actions: {
    togglePersonal() {
      this.set_model();
      this.toggleProperty('edit_personal');
    },

    toggleContact() {
      this.toggleProperty('edit_contact');
    },

    approve() {
      const self = this;
      const data = {};
      data.isApproved = true;
      data.assessor_id = self.get('assessor.assessor_id');

      self.ajax({
        id: 'patchprospect',
        data
      }).then(() => {
        self.set('assessors.cache', false);
        self.set('model.assessor.active', 1);
        self.set('assessor.active', 1);
      });
    },

    reject() {

    }
  }
});
