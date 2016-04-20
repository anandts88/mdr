import DS from 'ember-data';
import computed from 'ember-computed-decorators';

const {
  Model
} = DS;

export default Model.extend({
  customer_id: DS.attr('string'),
  agency_id: DS.attr('string'),
  dob: DS.attr('string'),
  email_id: DS.attr('string'),
  first_name: DS.attr('string'),
  gender: DS.attr('string'),
  insurance_plan: DS.attr('number'),
  language: DS.attr('number'),
  last_name: DS.attr('string'),
  pcd_name: DS.attr('string'),
  pcd_phone: DS.attr('string'),
  race: DS.attr('number')
});
