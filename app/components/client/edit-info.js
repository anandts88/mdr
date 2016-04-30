import Ember from 'ember';
import Constants from 'mdr/utility/constants';

const {
  Component,
  computed
} = Ember;

const {
  oneWay
} = computed;

export default Component.extend({
  client: undefined,
  languages: Constants.LANGAUAGES,
  insurance_plans: Constants.INSURANCE_PLANS,
  races: Constants.RACES,
  ethnicities: Constants.ETHNICITIES,

  dob_formatted: oneWay('client.dob_formatted'),
  first_name: oneWay('client.first_name'),
  last_name: oneWay('client.last_name'),
  gender: oneWay('client.gender'),
  ssn: oneWay('client.ssn'),
  language_obj: oneWay('client.language_obj'),
  race_obj: oneWay('client.race_obj'),
  ethnicity: oneWay('client.ethnicity'),
  pcd_name: oneWay('client.pcd_name'),
  pcd_phone: oneWay('client.pcd_phone'),
  email_id: oneWay('client.email_id'),
  insurance_plan_obj: oneWay('client.insurance_plan_obj'),

  actions: {
    update() {
      const client = this.get('client');

      client.setProperties(this.getProperties(
        'dob_formatted',
        'first_name',
        'last_name',
        'gender',
        'ssn',
        'language_obj',
        'race_obj',
        'ethnicity',
        'pcd_name',
        'pcd_phone',
        'email_id',
        'insurance_plan_obj'
      ));

      client.save();
    }
  }
});
