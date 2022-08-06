import React, { createContext, useEffect, useState } from 'react'
import * as Google from 'expo-auth-session/providers/google'
import { AuthSessionResult } from 'expo-auth-session/build/AuthSession.types'
import { AuthRequestPromptOptions } from 'expo-auth-session/build/AuthRequest.types'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { deleteCandidate, signInServer } from './AuthService'

import axios from 'axios'
import { AuthUser } from 'app/contexts/business/types'
// import { auth } from "../../../firebase";

interface AuthContextInterface {
  authUser: AuthUser | null
  setAuthUser: React.Dispatch<React.SetStateAction<AuthUser | null>>

  loading: boolean

  signIn: (provider: string) => Promise<AuthSessionResult | undefined>
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
  const [role, setRole] = useState<'business' | 'candidate' | ''>('')
  // const [accessToken, setAccessToken] = useState<String>();
  useEffect(() => {
    getUserFromStorage()
  }, [])

  const [googleRequest, googleResponse, googlePromptAsync] =
    Google.useAuthRequest({
      expoClientId: 'EXPO_CLIENT_ID_HERE', // TODO: replace with your Expo Client ID
      webClientId: 'WEB_CLIENT_ID_HERE', // TODO: replace with your Web Client ID
      androidClientId: 'ANDROID_CLIENT_ID_HERE', // TODO: replace with your Android Client ID
      iosClientId: 'IOS_CLIENT_ID_HERE', // TODO: replace with your iOS Client ID
    })

  useEffect(() => {
    if (authUser?._id) {
      storeData(authUser)
    }
  }, [authUser, role])

  useEffect(() => {
    // // console.log(googleResponse);
    if (
      googleResponse?.type === 'success' &&
      googleResponse.authentication &&
      googleResponse.authentication.accessToken
    ) {
      signInServer(googleResponse.authentication.accessToken)
        .then((res) => {
          if (res?.type === 'success') {
            setAuthUser(res.user)
            setLoading(false)
          } else {
            setError(res.message)
            setLoading(false)
          }
        })
        .catch((err) => {
          setError(err.message)
          setLoading(false)
        })
    }
  }, [googleResponse])

  const getUserFromStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('@user')
      if (value !== null) {
        // console.log('storage data', value)
        const user = JSON.parse(value)
        // console.log(user, 'PARSED')
        setAuthUser(user)
        setRole(user.role)
      } else {
        // console.log('no user')
      }
    } catch (e) {
      // error reading value
      // console.log('error reading value', e)
    }
  }

  const storeData = async (userInfo: AuthUser) => {
    try {
      await AsyncStorage.setItem('@user', JSON.stringify(userInfo))
    } catch (error) {
      // // console.log("ere storing", error);
    }
  }

  const signIn = async (provider: string) => {
    setRole('business')
    if (provider == 'google') {
      const res = await googlePromptAsync({ showInRecents: true })
      return res
      // return x;
    }
  }

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

  return (
    <AuthContext.Provider
      value={{
        authUser,
        setAuthUser,

        signIn,
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
