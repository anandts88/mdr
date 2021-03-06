import Ember from 'ember';
import Staff from 'mdr/models/staff';

const {
  Service,
  isEmpty
} = Ember;

export default Service.extend({
  createStaffs(response) {
    const result = Ember.A();

    if (!isEmpty(response)) {
      result.addObjects(_.map(response, (item) => this.createStaff(item)));
    }

    return result;
  },

  createStaff(response) {
    const data = [
      'active',
      'agency_staff_id',
      'dob',
      'email_id',
      'employee_number',
      'first_name',
      'gender',
      'graduation_year',
      'last_name',
      'photo',
      'rater_id',
      'address1',
      'city1',
      'state1',
      'zip1',
      'phone1',
      'phone2'
    ];

    return Staff.create(_.pick(response, data));
  }
});
