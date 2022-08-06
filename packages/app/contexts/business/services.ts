import endpoints from 'app/constants/Endpoints'
import { Job, JobCreate } from 'app/types'
import axios from 'axios'
import { BusinessUser } from './types'

export async function getUserData(userId: string) {
  const url = endpoints.getBusiness.url + '/' + userId

  // console.log(url, 'U')
  const res = await axios.get(url)

  // const res = await fetch(url, {
  //   method: Endpoints.findBusiness.method,
  // });

  // const data = await res.json();
  const data = res.data
  // console.log(data, 'user data service')
  return data
}

// save candidate data to the database
export const saveBusinessData = async (business: BusinessUser) => {
  const url = endpoints.updateBusinessUser.url + '/' + business._id

  // console.log(business, 'business saving to db')
  // console.log(url)
  const data = axios
    .put(url, business)
    .then((res) => {
      // console.log('Got data from saving business')
      return res.data
    })
    .catch((err) => {
      // console.log('ERR SAVE', err)

      return err
    })

  return data
}

export async function createJob(jobData: JobCreate) {
  const url = endpoints.createJob.url
  const res = await fetch(url, {
    method: endpoints.createJob.method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jobData),
  })
  const data: Job = await res.json()
  return data
}
