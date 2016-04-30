import Ember from 'ember';
import DS from 'ember-data';
import Constants from 'mdr/utility/constants';
import { ageCalculator } from 'mdr/utility/utils';

const {
  Model,
  attr
} = DS;

const {
  computed
} = Ember;

export default Model.extend({
  customer_id: attr('string'),
  agency_id: attr('string'),
  dob: attr('string'),
  email_id: attr('string'),
  first_name: attr('string'),
  gender: attr('string'),
  insurance_plan: attr('number'),
  language: attr('number'),
  last_name: attr('string'),
  pcd_name: attr('string'),
  pcd_phone: attr('string'),
  race: attr('number'),
  ssn: attr('string'),
  ethnicity: attr('string'),

  // Contact
  address1: attr('string'),
  city1: attr('string'),
  country1: attr('string'),
  phone1: attr('string'),
  phone2: attr('string'),
  state1: attr('number'),
  zip1: attr('number'),

  dob_moment: computed('dob', {
    get() {
      const dob = this.get('dob');
      if (dob) {
        return moment(dob, 'YYYY-MM-DD');
      }
    },

    set() {
      const value  = arguments[1];
      const dob    = value.format('YYYY-MM-DD');
      this.set('dob', dob);
      return value;
    }
  }),

  dob_date: computed('dob_moment', function() {
    const dob_moment = this.get('dob_moment');
    if (dob_moment) {
      return dob_moment.toDate();
    }
  }),

  dob_formatted: computed('dob_moment', {
    get() {
      const dob_moment = this.get('dob_moment');
      if (dob_moment) {
        return dob_moment.format('MMM DD YYYY');
      }
    },

    set() {
      const value       = arguments[1];
      const dob_moment  = moment(value, 'MMM DD YYYY');
      this.set('dob_moment', dob_moment);
      return value;
    }
  }),

  age: computed('dob_moment', function() {
    const dob   = this.get('dob_moment');
    const today = moment();
    return ageCalculator(dob, today);
  }),

  insurance_plan_obj: computed('insurance_plan', {
    get() {
      const insurance_plan = this.get('insurance_plan');
      return Constants.INSURANCE_PLANS.findBy('id', insurance_plan);
    },
    set() {
      const value           = arguments[1];
      const insurance_plan  = value.id;
      this.set('insurance_plan', insurance_plan);
      return value;
    }
  }),

  language_obj: computed('language', {
    get() {
      const language = this.get('language');
      return Constants.LANGAUAGES.findBy('id', language);
    },
    set() {
      const value     = arguments[1];
      const language  = value.id;
      this.set('language', language);
      return value;
    }
  }),

  race_obj: computed('race', {
    get() {
      const race = this.get('race');
      return Constants.RACES.findBy('id', race);
    },
    set() {
      const value = arguments[1];
      const race  = value.id;
      this.set('race', race);
      return value;
    }
  }),

  state1_obj: computed('state1', {
    get() {
      const state1 = this.get('state1');
      return Constants.STATES.findBy('id', state1);
    },
    set() {
      const value  = arguments[1];
      const state1 = value.id;
      this.set('state1', state1);
      return value;
    }
  })
});
