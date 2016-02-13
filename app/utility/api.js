export default {
  MDR_API: './mdrapi/',

  session: {
    path: 'session',
    method: 'POST'
  },

  logout: {
    path: 'session',
    method: 'DELETE'
  },

  doctors: {
    path: 'doctor',
    method: 'GET'
  },

  adddoctor: {
    path: 'doctor',
    method: 'POST'
  },

  clients: {
    path: 'client',
    method: 'GET'
  },

  addclient: {
    path: 'client',
    method: 'POST'
  },

  assessors: {
    path: 'assessor',
    method: 'GET'
  },

  adddassessor: {
    path: 'assessor',
    method: 'POST'
  },

  appointments: {
    path: 'appointment',
    method: 'GET'
  },

  addappointment: {
    path: 'appointment',
    method: 'POST'
  },

  addagencystaff: {
    path: 'agencystaff',
    method: 'POST'
  },

  chatsession: {
    path: 'appointment/{id}/chat',
    method: 'GET'
  },

  pendingprospect: {
    path: 'prospect/pending',
    method: 'GET'
  },

  patchprospect: {
    path: 'prospect/pending',
    method: 'PATCH'
  },

  contact: {
    path: 'session/contact',
    method: 'GET'
  },

  patchappointment: {
    path: 'appointment/{id}',
    method: 'PATCH'
  },

  doctordetails: {
    path: 'doctor/{id}',
    method: 'GET'
  },

  clientdetails: {
    path: 'client/{id}',
    method: 'GET'
  },

  assessordetails: {
    path: 'assessor/{id}',
    method: 'GET'
  },

  staffdetails: {
    path: 'agencystaff/{id}',
    method: 'GET'
  },

  updatedoctorinfo: {
    path: 'doctor/{id}/info',
    method: 'PATCH'
  },

  updatedoctorcontact: {
    path: 'doctor/{id}/contact',
    method: 'PATCH'
  }
};
