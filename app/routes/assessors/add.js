import Ember from 'ember';
import EmberValidator from 'ember-validator';
import Assessor from 'mdr/models/assessor';
import Api from 'mdr/mixins/api';
import { animateTo, retainNumbers } from 'mdr/utility/utils';

const {
  Route,
  inject
} = Ember;

const {
  service
} = inject;

export default Route.extend(EmberValidator, Api, {
  assessors: service(),

  model() {
    return Assessor.create();
  },

  _validations(model) {
    return {
      employee_number: {
        required: 'Employee Id is required.',
        pattern: {
          with: /^[a-zA-Z0-9]{9}$/,
          message: 'Enter valid Employee Id.'
        }
      },

      rater_id: {
        required: 'Rater Id is required.',
        pattern: {
          with: /^[a-zA-Z0-9]{9}$/,
          message: 'Enter valid Ratee Id.'
        }
      },

      password1: {
        required: 'Password is required.'
      },

      password2: {
        required: 'Password is required.',
        equals: {
          accept: model.get('password1'),
          message: 'Must be same as password.'
        }
      },

      last_name: {
        required: 'Last Name is required.',
        length: {
          maximum: 50,
          message: 'Must be 50 characters or less.'
        }
      },

      first_name: {
        required: 'First Name is required.',
        length: {
          minimum: 3,
          maximum: 50,
          messages: {
            minimum: 'Must be 3 characters or more.',
            maximum: 'Must be 50 characters or less.'
          }
        }
      },

      email_id: {
        required: 'Email Address is required.',
        length: {
          maximum: 50,
          message: 'Must be 50 characters or less.'
        },
        email: 'Email Address is not valid.'
      },

      dob: {
        required: 'Date of Birth is required.',
      },

      phone1: {
        required: 'Phone Number is required',
        phone: {
          format2: true,
          message: 'Phone Number is not valid (NNN) NNN-NNNN.'
        }
      },

      phone2: {
        phone: {
          format2: true,
          message: 'Confirm Phone Number is not valid (NNN) NNN-NNNN.'
        }
      },

      address1: {
        required: 'Address is required.',
        length: {
          maximum: 250,
          message: 'Must be 250 characters or less.'
        }
      },

      selected_state_1: {
        required: 'State is required.'
      },

      city1: {
        required: 'City is required.'
      },

      zip1: {
        required: 'Zip is required',
        zip: 'Zip is not valid(NNNNN or NNNNN-NNNN).'
      }
    };
  },

  actions: {
    add() {
      const self        = this;
      const model       = self.get('controller.model');
      const validations = this._validations(model);
      let data;

      model.setProperties({
        validationResult: null,
        created: false
      });

      model.set('validationResult', null);
      animateTo();
      self.validateMap({ model, validations }).then(() => {
        data = _.pick(model, [
          'first_name',
          'last_name',
          'email_id',
          'gender',
          'address1',
          'city1',
          'zip1',
          'employee_number',
          'rater_id'
        ]);

        data.phone1 = retainNumbers(model.get('phone1'));
        data.phone2 = retainNumbers(model.get('phone2'));
        data.dob = moment(model.get('dob'), 'MMM DD YYYY').format('YYYY-MM-DD');
        data.state1 = model.get('selected_state_1.id');
        data.country1 = 'US';
        data.password = model.get('password1');
        data.timezone = model.get('selected_timezone.id');

        self.ajax({
          id: 'adddassessor',
          data
        }).then(() => {
          self.refresh().then(() => {
            const model = self.get('controller.model');
            model.set('created', true);
            self.set('assessors.cache', false);
          });
        }).catch(() => {

        });
      }).catch((validationResult) => {
        model.set('validationResult', validationResult);
      });
    }
  }
});
