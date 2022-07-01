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

type FacebookProviderUser = {
  facebookId: string
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
  console.log(urlWithParams)
  try {
    const responseJson = await fetch(urlWithParams, {
      method: 'GET',
    })
    // const response = await axios.get(findUserUrl, {
    //   params: {
    //     email: userInfo.email,
    //     googleId: userInfo.googleId,
    //     // email: "wachaa1319@gmail.com",
    //     // googleId: "",
    //   },
    // });
    const response = await responseJson.json()
    // console.log("res", response);
    // // console.log(response.data);
    return response
  } catch (error) {
    // console.log("HERROR", error);
    // console.log(typeof error);
    return error
  }
}

export const findOrCreateUser = async (
  user: GoogleProviderUser | FacebookProviderUser,
  role: string
) => {
  // const createUserUrl = "https://goalist.xyz/api/users/create-user";
  const createUserUrl = endpoints.createUser.url

  // console.log(user.email, role);
  try {
    const res = await axios.post(createUserUrl, {
      ...user,
      role,
      createdTime: new Date(),
    })
    // console.log("data", res.data);
    // console.log("status", res.status);
    return res.data
  } catch (error) {
    // console.log("error", error);

    return { error, isError: true }
  }
}

export const updateUserDB = async (userInfo: AuthUser) => {
  const updateUserUrl = `${endpoints.updateCandidateUser.url}${userInfo._id}`

  try {
    const res = await axios.put(updateUserUrl, userInfo)
    const data = await res.data
    // console.log("data", data);
    return data
  } catch (error) {
    // console.log("error", error);
    return error
  }
}

export const onRegister = async (email: string, password: string) => {
  // console.log("register");
  const res = await fetch('https://localhost:3000/auth/register', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
  // console.log(data);
}

export const deleteCandidate = async (userId: string) => {
  const url = `${endpoints.deleteCandidate.url}/${userId}`
  // const url = `http://localhost:3000/candidates/${userId}`;
  try {
    const res = await axios.delete(url)
    const data = await res.data
    // console.log("data", data);
    return data
  } catch (error) {
    console.log('error', error)
    return error
  }
}
