// const url = "http://143.198.206.107";
const url = 'https://jobtion.software'
const endpoints = {
  uploadImage: {
    // url: "https://goalist.xyz/api/images/upload/",
    url: url + '/upload',
    // url: "http://143.198.206.107/upload/",
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      'Content-Disposition': 'form-data',
      Accept: 'application/json',
    },
  },
  uploadVideo: {
    url: url + '/upload',
    method: 'POST',
  },
  uploadResume: {
    url: url + '/upload',
    method: 'POST',
  },
  updateCandidateUser: {
    url: url + '/candidates/update',
    method: 'PUT',
  },
  updateBusinessUser: {
    url: url + '/businesses/update',
    method: 'PUT',
  },
  createUser: {
    url: url + '/create-user',
    // url: "https://goalist.xyz/api/users/create-user/",
    method: 'POST',
  },
  findUser: {
    url: url + '/candidates/get',

    method: 'GET',
  },
  findBusiness: {
    url: url + '/businesses',
    method: 'GET',
  },
  getBusiness: {
    url: url + '/businesses/get',
  },
  createCandidate: {
    url: url + '/candidates/create',
  },
  deleteCandidate: {
    url: url + '/candidates',
    method: 'DELETE',
  },
  createBusiness: {
    url: url + '/businesses/create',
  },
  getCandidate: {
    url: url + '/candidates/get',
  },
  candidateQueryJobs: {
    url: url + '/candidates/foryou',
    method: 'GET',
  },
  getJob: {
    url: url + '/jobs',
    method: 'GET',
  },
  latestJobs: {
    url: url + '/jobs/latest',
    method: 'GET',
  },
  allJobs: {
    url: url + '/jobs',
    method: 'GET',
  },
  createJob: {
    url: url + '/jobs/create',
    method: 'POST',
  },
  updateJob: {
    url: url + '/jobs/update',
    method: 'PUT',
  },
  applyJob: {
    url: url + '/apply',
    // url: url+"/apply",
    method: 'POST',
  },
  updateApplication: {
    url: url + '/update',
  },
}

export default endpoints
