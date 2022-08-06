import endpoints from 'app/constants/Endpoints'
import { AuthUser } from 'app/contexts/business/types'
import axios from 'axios'

type GoogleProviderUser = {
  googleId: string
  provider: string
  email: string
  name: string
  picture: string
}

export const findUser = async (userInfo: GoogleProviderUser, role: string) => {
  const findUserUrl =
    role === 'business' ? endpoints.getBusiness.url : endpoints.getCandidate.url

  // userInfo.email = "wachaa1319@gmail.com";
  // userInfo.googleId = "113136894055517604293";

  const urlWithParams = `${findUserUrl}?email=${userInfo.email}&googleId=${userInfo.googleId}`
  // console.log(urlWithParams)
  try {
    const responseJson = await fetch(urlWithParams, {
      method: 'GET',
    })

    const response = await responseJson.json()
    return response
  } catch (error) {
    return error
  }
}

export const findOrCreateUser = async (
  user: GoogleProviderUser,
  role: string
) => {
  const createUserUrl = endpoints.createUser.url

  try {
    const res = await axios.post(createUserUrl, {
      ...user,
      role,
      createdTime: new Date(),
    })
    return res.data
  } catch (error) {
    return { error, isError: true }
  }
}

export const updateUserDB = async (userInfo: AuthUser) => {
  const updateUserUrl = `${endpoints.updateCandidateUser.url}${userInfo._id}`

  try {
    const res = await axios.put(updateUserUrl, userInfo)
    const data = await res.data
    // // console.log("data", data);
    return data
  } catch (error) {
    // // console.log("error", error);
    return error
  }
}

export const signInServer = async (token: string) => {
  const signInUrl = endpoints.signIn.url
  try {
    const res = await axios.post(signInUrl, { token })
    const data = await res.data
    // // console.log("data", data);
    return data
  } catch (error) {
    // // console.log("error", error);
    return error
  }
}

export const deleteCandidate = async (userId: string) => {
  const url = `${endpoints.deleteCandidate.url}/${userId}`
  try {
    const res = await axios.delete(url)
    const data = await res.data
    return data
  } catch (error) {
    return error
  }
}
