import Ember from 'ember';
import Constants from 'mdr/utility/constants';
import { ageCalculator } from 'mdr/utility/utils';

const {
  Object: EmberObject,
  computed
} = Ember;
export default EmberObject.extend({
  // Page 1
  // Section 1
  races: Constants.RACES_NAMES,
  one_race: undefined,
  ethnicities: Constants.ETHNICITIES,
  one_ethnicity: undefined,
  one_gender: 'Male',
  one_ssn: undefined,
  one_dob: undefined,
  one_dob_formatted: computed('one_dob', function() {
    const dob = this.get('one_dob');
    if (dob) {
      return moment(dob, 'YYYY-MM-DD', true).format('MMM DD YYYY');
    }
  }),
  one_age: computed('one_dob_formatted', function() {
    const dob   = this.get('one_dob_formatted');
    const today = moment();
    if (dob) {
      return ageCalculator(moment(dob, 'MMM DD YYYY'), today);
    }
  }),
  // Section 2
  primary_drugs: Constants.PRIMARY_DRUGS,
  drugs_frequencies: Constants.DRUGS_FREQUENCIES,
  drugs_methods_of_admin: Constants.DRUGS_METHODS_OF_ADMIN,
  two_referral_source: undefined,
  two_referral_contact_name: undefined,
  two_referral_agency_name: undefined,
  two_contact_phone: undefined,
  two_child_welfare_case: undefined,
  two_marchman_act_case: undefined,
  two_criminal_justice_case: undefined,
  two_drug_court: undefined,
  two_referral_date: undefined,
  two_referral_date_formatted: computed('two_referral_date', function() {
    const referral_date = this.get('two_referral_date');
    if (referral_date) {
      return moment(referral_date, 'YYYY-MM-DD', true).format('MMM DD YYYY');
    }
  }),
  two_time: undefined,
  two_type: undefined,
  two_mode: undefined,
  two_case_number: undefined,
  two_referral_reason: undefined,
  two_pdpf: undefined,

  // Page 2
  // Section 3
  three_primary_drug_used: undefined,
  three_frequency: undefined,
  three_method_of_admin: undefined,
  three_last_used: undefined,
  three_last_used_formatted: computed('three_last_used', function() {
    const three_last_used = this.get('three_last_used');
    if (three_last_used) {
      return moment(three_last_used, 'YYYY-MM-DD', true).format('MMM DD YYYY');
    }
  }),
  three_age_of_first_use: undefined,
  three_hours_since_last_use: undefined,

  three_secondary_drug_used: undefined,
  three_frequence_2: undefined,
  three_method_of_admin_2: undefined,
  three_last_used_2: undefined,
  three_last_used_2_formatted: computed('three_last_used_2', function() {
    const three_last_used_2 = this.get('three_last_used_2');
    if (three_last_used_2) {
      return moment(three_last_used_2, 'YYYY-MM-DD', true).format('MMM DD YYYY');
    }
  }),
  three_age_of_first_use_2: undefined,
  three_hours_since_last_use_2: undefined,

  three_tertiary_drug_used: undefined,
  three_frequence_3: undefined,
  three_method_of_admin_3: undefined,
  three_last_used_3: undefined,
  three_last_used_3_formatted: computed('three_last_used_3', function() {
    const three_last_used_3 = this.get('three_last_used_3');
    if (three_last_used_3) {
      return moment(three_last_used_3, 'YYYY-MM-DD', true).format('MMM DD YYYY');
    }
  }),
  three_age_of_first_use_3: undefined,
  three_hours_since_last_use_3: undefined,

  three_ldodyhu: undefined,
  three_iv_drug_user: undefined,
  three_habitual_drug_user: undefined,
  three_sees_drug_use_as_harmful: undefined,
  three_sees_alcohol_use_as_harmful: undefined,
  three_sees_tobacco_use_as_harmful: undefined,
  three_uses_tobacco: undefined,
  three_eubootip24h: undefined,
  three_ccfdoa: undefined,
  three_cews: undefined,
  three_aecaydau: undefined,
  three_dyfydoudtm: undefined,
  three_eescdtdodu: undefined,
  three_eftylcoydodu: undefined,
  three_dyftyntcborydodu: undefined,
  three_ehtsmtdtydodu: undefined,
  three_eadtydodu: undefined,
  three_oniadu: undefined,

  // Page 3
  // Section 4
  four_notywataduip12m: undefined,
  four_notywatstpip24m: undefined,
  four_ecott: undefined,
  four_efteit: undefined,
  four_last_detox_admit: undefined,
  four_last_detox_admit_formatted: computed('four_last_detox_admit', function() {
    const four_last_detox_admit = this.get('four_last_detox_admit');
    if (four_last_detox_admit) {
      return moment(four_last_detox_admit, 'YYYY-MM-DD', true).format('MMM DD YYYY');
    }
  }),
  four_last_detox_admit_lentgh_of_stay: undefined,
  four_treating_agency: undefined,
  four_drug_detoxed_from: undefined,
  four_drug_detoxed_from_disch_date: undefined,
  four_drug_detoxed_from_disch_date_formatted: computed('four_drug_detoxed_from_disch_date', function() {
    const four_drug_detoxed_from_disch_date = this.get('four_drug_detoxed_from_disch_date');
    if (four_drug_detoxed_from_disch_date) {
      return moment(four_drug_detoxed_from_disch_date, 'YYYY-MM-DD', true).format('MMM DD YYYY');
    }
  }),
  four_detox_disch_status: undefined,
  four_last_sa_tx_admit: undefined,
  four_last_sa_tx_admit_formatted: computed('four_last_sa_tx_admit', function() {
    const four_last_sa_tx_admit = this.get('four_last_sa_tx_admit');
    if (four_last_sa_tx_admit) {
      return moment(four_last_sa_tx_admit, 'YYYY-MM-DD', true).format('MMM DD YYYY');
    }
  }),
  four_last_sa_tx_admit_length_of_stay: undefined,
  four_last_sa_tx_admit_treating_agency: undefined,
  four_admit_reason: undefined,
  four_last_sa_tx_disch_date: undefined,
  four_last_sa_tx_disch_date_formatted: computed('four_last_sa_tx_disch_date', function() {
    const four_last_sa_tx_disch_date = this.get('four_last_sa_tx_disch_date');
    if (four_last_sa_tx_disch_date) {
      return moment(four_last_sa_tx_disch_date, 'YYYY-MM-DD', true).format('MMM DD YYYY');
    }
  }),
  four_last_sa_tx_disch_status: undefined,
  four_actbstd: undefined,
  four_dyfth: undefined,
  four_ltyaan: undefined,
  four_ltyaan_formatted: computed('four_ltyaan', function() {
    const four_ltyaan = this.get('four_ltyaan');
    if (four_ltyaan) {
      return moment(four_ltyaan, 'YYYY-MM-DD', true).format('MMM DD YYYY');
    }
  }),
  four_dyhadoap: undefined,
  four_dybynhwydodu: undefined,
  four_dybstchy: undefined,
  four_hwydylomfr: undefined,
  four_iatthlaytc: undefined,
  four_wylhwydodp: undefined,
  four_daeudiyhe: undefined,
  four_dyhashre: undefined,
  four_dyfud: undefined,
  four_othn: undefined,

  // Page Four
  // Section Five
  five_notywatabauip12m: undefined,
  five_notywatmtpip24m: undefined,
  five_ecotfmt: undefined,
  five_efteimht: undefined,
  five_last_baker_act_admit: undefined,
  five_last_baker_act_admit_formatted: computed('five_last_baker_act_admit', function() {
    const five_last_baker_act_admit = this.get('five_last_baker_act_admit');
    if (five_last_baker_act_admit) {
      return moment(five_last_baker_act_admit, 'YYYY-MM-DD', true).format('MMM DD YYYY');
    }
  }),
  five_length_of_stay: undefined,
  five_agency: undefined,
  five_treating_psychiatrist: undefined,
  five_reason: undefined,
  five_disch_status: undefined,
  five_disch_date: undefined,
  five_disch_date_formatted: computed('five_disch_date', function() {
    const five_disch_date = this.get('five_disch_date');
    if (five_disch_date) {
      return moment(five_disch_date, 'YYYY-MM-DD', true).format('MMM DD YYYY');
    }
  }),
  five_last_baker_act_admit2: undefined,
  five_last_baker_act_admit2_formatted: computed('five_last_baker_act_admit2', function() {
    const five_last_baker_act_admit2 = this.get('five_last_baker_act_admit2');
    if (five_last_baker_act_admit2) {
      return moment(five_last_baker_act_admit2, 'YYYY-MM-DD', true).format('MMM DD YYYY');
    }
  }),
  five_length_of_stay2: undefined,
  five_agency2: undefined,
  five_treating_psychiatrist2: undefined,
  five_reason2: undefined,
  five_disch_status2: undefined,
  five_disch_date2: undefined,
  five_disch_date2_formatted: computed('five_disch_date2', function() {
    const five_disch_date2 = this.get('five_disch_date2');
    if (five_disch_date2) {
      return moment(five_disch_date2, 'YYYY-MM-DD', true).format('MMM DD YYYY');
    }
  }),
  five_dyhmcm: undefined,
  five_aycrmht: undefined,
  five_dyfymth: undefined,
  five_dyaamcsg: undefined,
  five_orientation: undefined,
  five_cc: undefined,
  five_nps: undefined,
  five_mood_affect: undefined,
  five_actamhm: undefined,
  five_lmhmyhtip12m: undefined,
  five_dolsa: undefined,
  five_dolsa_formatted: computed('five_dolsa', function() {
    const five_dolsa = this.get('five_dolsa');
    if (five_dolsa) {
      return moment(five_dolsa, 'YYYY-MM-DD', true).format('MMM DD YYYY');
    }
  }),
  five_siip30d: undefined,
  five_afmwhomp: undefined,
  five_crmhs: undefined,
  five_daeudiyhe: undefined,
  five_duhashre: undefined,
  five_dyfud: undefined,
  five_ophn: undefined,

  // Page Five
  // Section Six
  six_notywaip12m: undefined,
  six_date_of_last_arrest: undefined,
  six_date_of_last_arrest_formatted: computed('six_date_of_last_arrest', function() {
    const six_date_of_last_arrest = this.get('six_date_of_last_arrest');
    if (six_date_of_last_arrest) {
      return moment(six_date_of_last_arrest, 'YYYY-MM-DD', true).format('MMM DD YYYY');
    }
  }),
  six_reason_for_last_arrest: undefined,
  six_wladar: undefined,
  six_toduptla: undefined,
  six_ehawuda: undefined,
  six_ayciicjs: undefined,
  six_ayculs: undefined,
  six_wyopaa: undefined,
  six_pon: undefined,
  six_popn: undefined,
  six_toduptla2: undefined,
  six_wyottaacop: undefined,
  six_wycott: undefined,
  six_isbj: undefined,
  six_isbc: undefined,
  six_olhn: undefined,

  // Page Six
  // Section Seven
  seven_hgc: undefined,
  seven_dyhacdoc: undefined,
  seven_es: undefined,
  seven_psoi: undefined,
  seven_api: undefined,
  seven_afi: undefined,
  seven_ses: undefined,
  seven_nsoh: undefined,
  seven_aythoh: undefined,
  seven_ms: undefined,
  seven_noc: undefined,
  seven_nodc: undefined,
  seven_ytoar: undefined,
  seven_cla: undefined,
  seven_aych: undefined,
  seven_dyphadoap: undefined,
  seven_afmcsst: undefined,
  seven_afmwtsyr: undefined,
  seven_fmeacaydu: undefined,
  seven_ayofmiwcw: undefined,
  seven_ofhn: undefined,

  // Page Seven
  // Section Eight
  eight_nothip24m: undefined,
  eight_ehdtdoa: undefined,
  eight_nosip24m: undefined,
  eight_nopad: undefined,
  eight_gbip12m: undefined,
  eight_cp: undefined,
  eight_iphmm: undefined,
  eight_lpe: undefined,
  eight_lpe_formatted: computed('eight_lpe', function() {
    const eight_lpe = this.get('eight_lpe');
    if (eight_lpe) {
      return moment(eight_lpe, 'YYYY-MM-DD', true).format('MMM DD YYYY');
    }
  }),
  eight_lpv: undefined,
  eight_lpv_formatted: computed('eight_lpv', function() {
    const eight_lpv = this.get('eight_lpv');
    if (eight_lpv) {
      return moment(eight_lpv, 'YYYY-MM-DD', true).format('MMM DD YYYY');
    }
  }),
  eight_lbe: undefined,
  eight_lbe_formatted: computed('eight_lbe', function() {
    const eight_lbe = this.get('eight_lbe');
    if (eight_lbe) {
      return moment(eight_lbe, 'YYYY-MM-DD', true).format('MMM DD YYYY');
    }
  }),
  eight_lps: undefined,
  eight_lbs_formatted: computed('eight_lps', function() {
    const eight_lps = this.get('eight_lps');
    if (eight_lps) {
      return moment(eight_lps, 'YYYY-MM-DD', true).format('MMM DD YYYY');
    }
  }),
  eight_dyhapp: undefined,
  eight_dyhhi: undefined,
  eight_lttfh: undefined,
  eight_lttfh_formatted: computed('eight_lttfh', function() {
    const eight_lttfh = this.get('eight_lttfh');
    if (eight_lttfh) {
      return moment(eight_lttfh, 'YYYY-MM-DD', true).format('MMM DD YYYY');
    }
  }),
  eight_lha: undefined,
  eight_lha_formatted: computed('eight_lha', function() {
    const eight_lha = this.get('eight_lha');
    if (eight_lha) {
      return moment(eight_lha, 'YYYY-MM-DD', true).format('MMM DD YYYY');
    }
  }),
  eight_los: undefined,
  eight_hospital: undefined,
  eight_tp: undefined,
  eight_reason: undefined,
  eight_disch_status: undefined,
  eight_disch_date: undefined,
  eight_disch_date_formatted: computed('eight_disch_date', function() {
    const eight_disch_date = this.get('eight_disch_date');
    if (eight_disch_date) {
      return moment(eight_disch_date, 'YYYY-MM-DD', true).format('MMM DD YYYY');
    }
  }),
  eight_lpv2: undefined,
  eight_lpv2_formatted: computed('eight_lpv2', function() {
    const eight_lpv2 = this.get('eight_lpv2');
    if (eight_lpv2) {
      return moment(eight_lpv2, 'YYYY-MM-DD', true).format('MMM DD YYYY');
    }
  }),
  eight_tp2: undefined,
  eight_reason2: undefined,
  eight_status: undefined,
  eight_lacmyatatrfsm: undefined,
  eight_lakayh: undefined,
  eight_cmc: undefined,
  eight_omhn: undefined,

  // Page Eight
  // Section Nine
  nine_pd: undefined,
  nine_sd: undefined,
  nine_dir: undefined,

  // Page Nine
  // Section Ten
  ten_dim1: undefined,
  ten_dim2: undefined,
  ten_dim3: undefined,
  ten_dim4: undefined,
  ten_dim5: undefined,
  ten_dim6: undefined,

  // Page Ten
  // Section Eleven
  eleven_pr: undefined,
  eleven_disposition: undefined,
  eleven_rs: undefined,
  eleven_ai: undefined,
  eleven_at: undefined,
  eleven_atdate: undefined,
  eleven_s: undefined,
  eleven_s_date: undefined,
  eleven_eis: 'No',
  eleven_eis_date: undefined,

  educational_grades: Constants.EDUCATIONAL_GRADES,
  employment_statuses: Constants.EMPLOYMENT_STATUSES,
  living_arrangements: Constants.LIVING_ARRAGEMENTS,
  orientations: Constants.FORM_ORIENTATIONS,
  moods: Constants.FORM_MOODS
});
