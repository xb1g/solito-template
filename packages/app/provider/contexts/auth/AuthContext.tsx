import React, { createContext, useEffect, useState } from 'react'
import * as Google from 'expo-auth-session/providers/google'
import { AuthSessionResult } from 'expo-auth-session/build/AuthSession.types'
import { AuthRequestPromptOptions } from 'expo-auth-session/build/AuthRequest.types'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {
  deleteCandidate,
  findOrCreateUser,
  findUser,
  onRegister,
  updateUserDB,
} from './AuthService'
import axios from 'axios'
import { AuthUser } from 'app/contexts/business/types'
// import { auth } from "../../../firebase";

interface AuthContextInterface {
  authUser: AuthUser | null
  setAuthUser: React.Dispatch<React.SetStateAction<AuthUser | null>>

  role: 'business' | 'candidate' | ''
  setRole: React.Dispatch<React.SetStateAction<'business' | 'candidate' | ''>>

  loading: boolean

  businessSignIn: (provider: string) => Promise<AuthSessionResult | undefined>
  candidateSignIn: (provider: string) => Promise<AuthSessionResult | undefined>

  // accessToken: String | undefined;
  // setAccessToken: React.Dispatch<React.SetStateAction<String | undefined>>;
  onLogout: () => void
  onDeleteAccount: () => void

  error: string | undefined
  setError: React.Dispatch<React.SetStateAction<string | undefined>>
}

type AuthContextProviderProps = {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [error, setError] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState(true)
  const [authUser, setAuthUser] = useState<AuthUser | null>({} as AuthUser)
  const [provider, setProvider] = useState<any>(null)
  const [role, setRole] = useState<'business' | 'candidate' | ''>('')
  // const [accessToken, setAccessToken] = useState<String>();
  useEffect(() => {
    getUserFromStorage()
  }, [])

  const [googleRequest, googleResponse, googlePromptAsync] =
    Google.useAuthRequest({
      expoClientId:
        '675010549971-6gvr3h29qatgaekiquvii87se6utisp6.apps.googleusercontent.com',
      webClientId:
        '675010549971-4e9uhj0hq7btrdhqvfrj5mrg3b3dafb9.apps.googleusercontent.com',
    })

  useEffect(() => {
    console.log('user Changed', authUser, !!authUser, role)
    if (authUser?._id) {
      storeData(authUser)
    }
  }, [authUser, role])

  useEffect(() => {
    // console.log(googleResponse);
    if (
      googleResponse?.type === 'success' &&
      googleResponse.authentication &&
      googleResponse.authentication.accessToken
    ) {
      // console.log("google response success");
      // // console.log(googleResponse);

      // // console.log("PAR", googleResponse.params);
      // // console.log("AUTH", googleResponse.authentication);
      getGoogleUserData(googleResponse.authentication.accessToken).then(
        (data) => {
          // console.log("CMON YOU KNOW", data);
          if (data) console.log('USE', data._id, data.email)
          else console.log('user info', authUser)
        }
      )

      setProvider('google')
      // setUserInfo(googleResponse.authentication.user);
    }
  }, [googleResponse])

  const getUserFromStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('@user')
      if (value !== null) {
        console.log('storage data', value)
        const user = JSON.parse(value)
        console.log(user, 'PARSED')
        setAuthUser(user)
        setRole(user.role)
      } else {
        console.log('no user')
      }
    } catch (e) {
      // error reading value
      console.log('error reading value', e)
    }
  }

  const storeData = async (userInfo: AuthUser) => {
    try {
      await AsyncStorage.setItem('@user', JSON.stringify(userInfo))
    } catch (error) {
      // console.log("ere storing", error);
    }
  }

  const businessSignIn = async (provider: string) => {
    setRole('business')
    if (provider == 'google') {
      const res = await googlePromptAsync({ showInRecents: true })
      console.log('google bus login res', res)
      console.log('hihi')
      return res
      // return x;
    }
  }

  const candidateSignIn = async (provider: string) => {
    setRole('candidate')
    if (provider == 'google') {
      const res = await googlePromptAsync({ showInRecents: true })

      return res
    }
  }

  // these should run once
  async function getGoogleUserData(accessToken: string) {
    let userInfoResponse = await fetch(
      'https://www.googleapis.com/userinfo/v2/me',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    let _userInfo = await userInfoResponse.json()
    // TODO use token and check in server
    _userInfo = {
      name: _userInfo.name,
      email: _userInfo.email,
      picture: _userInfo.picture,
      googleId: _userInfo.id,
      provider: 'google',
    }

    console.log('_userInfo from google', _userInfo.email)
    // setUserInfo(_userInfo);

    const dbUser = await findUser(_userInfo, role)
    console.log('user in db is', dbUser.email, dbUser._id)
    //found user
    if (dbUser._id && dbUser.email) {
      // console.log("got user from db", res);
      const updatedUser: AuthUser = {
        _id: dbUser._id,
        __v: dbUser.__v,
        email: dbUser.email,
        googleId: dbUser.googleId,
        profileImage: dbUser.profileImage,
        role,
        provider: 'google',
      }
      setAuthUser(updatedUser)
      storeData(updatedUser)
      return dbUser
    } else {
      // if not found

      //create user
      if (dbUser.message == 'candidate not found' && role == 'candidate') {
        // TODO Fix candidate form
        // set google things and create user
        setAuthUser(_userInfo)
      } else if (dbUser.message == 'business not found' && role == 'business') {
        // save google things and go to form
        setAuthUser(_userInfo)
      } else {
        setError(dbUser.error)
      }
    }
  }

  // async function getFacebookUserData(accessToken: string) {
  //   try {
  //     let userInfoResponse = await fetch(
  //       "https://graph.facebook.com/v13.0/me?fields=email,name,picture{url}&access_token=" +
  //         accessToken,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       }
  //     );
  //     const userData = await userInfoResponse.json();
  //     // // console.log("fb", userData);
  //     if (userData) {
  //       const _userInfo = {
  //         ...userData,
  //         picture: userData.picture.data.url,
  //         facebookId: userData.id,
  //         provider: "facebook",
  //         createdAt: new Date().toISOString(),
  //       };

  //       const res = await findOrCreateUser(_userInfo, role);
  //       // console.log("RESULT FROM CREATE", res);
  //       setUserInfo(res);
  //       storeData(res);
  //     }
  //   } catch (e) {
  //     // console.log("error", e);
  //   }
  // }

  const onLogout = async () => {
    await AsyncStorage.removeItem('@user')
    // setAccessToken(undefined);
    setAuthUser(null)
  }

  const onDeleteAccount = async () => {
    await AsyncStorage.removeItem('@user')
    const res = await deleteCandidate(authUser?._id!)
    // setAccessToken(undefined);
    setAuthUser(null)
  }

  // Get the user's access token from response after login & store in async storage

  return (
    <AuthContext.Provider
      value={{
        authUser,
        setAuthUser,

        role,
        setRole,

        businessSignIn,
        candidateSignIn,

        onLogout,
        onDeleteAccount,

        loading,
        error,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
