import Ember from 'ember';
import Form from 'mdr/models/form';
import Api from 'mdr/mixins/api';
import EmberValidator from 'ember-validator';

const {
  Component,
  inject,
  on
} = Ember;

const {
  service
} = inject;

export default Component.extend(Api, EmberValidator, {
  appointments: service(),
  assessments: service(),

  props: [
    'eight_nothip24m',
    'eight_ehdtdoa',
    'eight_nosip24m',
    'eight_nopad',
    'eight_gbip12m',
    'eight_cp',
    'eight_iphmm',
    'eight_lpe',
    'eight_lpv',
    'eight_lbe',
    'eight_lps',
    'eight_dyhapp',
    'eight_dyhhi',
    'eight_lttfh',
    'eight_lha',
    'eight_los',
    'eight_hospital',
    'eight_tp',
    'eight_reason',
    'eight_disch_status',
    'eight_disch_date',
    'eight_lpv2',
    'eight_tp2',
    'eight_reason2',
    'eight_status',
    'eight_lacmyatatrfsm',
    'eight_lakayh',
    'eight_cmc',
    'eight_omhn'
  ],

  set_form(source, target) {
    target.setProperties(_.pick(source, this.get('props')));
    this.set('form', target);
  },

  init_props: on('didInitAttrs', function() {
    this.set_form(this.get('form_model'), Form.create());
  }),

  validations() {
    return {
      eight_nothip24m: {
        required: 'This field is required'
      },
      eight_ehdtdoa: {
        required: 'This field is required'
      },
      eight_nosip24m: {
        required: 'This field is required'
      },
      eight_nopad: {
        required: 'This field is required'
      },
      eight_gbip12m: {
        required: 'This field is required'
      },
      eight_cp: {
        required: 'This field is required'
      },
      eight_iphmm: {
        required: 'This field is required'
      },
      eight_lpe_formatted: {
        required: 'This field is required'
      },
      eight_lpv_formatted: {
        required: 'This field is required'
      },
      eight_lbe_formatted: {
        required: 'This field is required'
      },
      eight_lps_formatted: {
        required: 'This field is required'
      },
      eight_dyhapp: {
        required: 'This field is required'
      },
      eight_dyhhi: {
        required: 'This field is required'
      },
      eight_lttfh_formatted: {
        required: 'This field is required'
      },
      eight_lha_formatted: {
        required: 'This field is required'
      },
      eight_los: {
        required: 'This field is required'
      },
      eight_hospital: {
        required: 'This field is required'
      },
      eight_tp: {
        required: 'This field is required'
      },
      eight_reason: {
        required: 'This field is required'
      },
      eight_disch_status: {
        required: 'This field is required'
      },
      eight_disch_date_formatted: {
        required: 'This field is required'
      },
      eight_lpv2_formatted: {
        required: 'This field is required'
      },
      eight_tp2: {
        required: 'This field is required'
      },
      eight_reason2: {
        required: 'This field is required'
      },
      eight_status: {
        required: 'This field is required'
      },
      eight_lacmyatatrfsm: {
        required: 'This field is required'
      },
      eight_lakayh: {
        required: 'This field is required'
      },
      eight_cmc: {
        required: 'This field is required'
      },
      eight_omhn: {
        required: 'This field is required'
      }
    };
  },

  actions: {
    next() {
      const self        = this;
      const appointment = self.get('model');
      const page        = this.get('page');
      let form          = this.get('form');
      const validations = this.validations(form);
      let data;

      form.set('validationResult', null);

      if (appointment.get('form_completed')) {
        if (page) {
          page(8);
        }
      } else {
        self.validateMap({ model: form, validations }).then(() => {
          data = _.pick(form, self.get('props'));

          data.eight_lpe = moment(form.get('eight_lpe_formatted'), 'MMM DD YYYY').format('YYYY-MM-DD');
          data.eight_lpv = moment(form.get('eight_lpv_formatted'), 'MMM DD YYYY').format('YYYY-MM-DD');
          data.eight_lbe = moment(form.get('eight_lbe_formatted'), 'MMM DD YYYY').format('YYYY-MM-DD');
          data.eight_lps = moment(form.get('eight_lps_formatted'), 'MMM DD YYYY').format('YYYY-MM-DD');
          data.eight_lttfh = moment(form.get('eight_lttfh_formatted'), 'MMM DD YYYY').format('YYYY-MM-DD');
          data.eight_lha = moment(form.get('eight_lha_formatted'), 'MMM DD YYYY').format('YYYY-MM-DD');
          data.eight_disch_date = moment(form.get('eight_disch_date_formatted'), 'MMM DD YYYY').format('YYYY-MM-DD');
          data.eight_lpv2 = moment(form.get('eight_lpv2_formatted'), 'MMM DD YYYY').format('YYYY-MM-DD');

          self.ajax({
            id: 'assessmentformpost',
            path: {
              id: appointment.get('id'),
              pageNo: 7
            },
            data
          }).then(() => {
            self.set('appointments.cache', false);
            self.set('assessments.cache', false);
            self.set_form(form, self.get('form_model'));
            if (page) {
              page(8);
            }
          }).catch(Ember.K);
        });
      }
    },

    previous() {
      const page = this.get('page');
      if (page) {
        page(6);
      }
    }
  }
});
