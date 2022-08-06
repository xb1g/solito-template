import {
  ActivityIndicator,
  Button,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

import * as WebBrowser from 'expo-web-browser'
import { AuthContext } from 'app/provider/contexts/auth/AuthContext'
import { H1, H2, Text, View } from 'dripsy'
import { SafeBottom, SafeTop } from 'app/components/safe-area'
import { ScrollView } from 'app/components/scroll-view'

WebBrowser.maybeCompleteAuthSession()

export function AuthScreen({ navigation }: any) {
  const [loading, setLoading] = useState(false)
  const { signIn, authUser, error } = useContext(AuthContext)

  useEffect(() => {
    if (authUser?.email && !authUser?._id && loading) {
      setLoading(false)
      navigation.navigate('BusinessProfileForm')
    }
  }, [authUser, loading, navigation])

  if (loading)
    return (
      <View
        sx={{
          flex: 1,
        }}
      >
        <H1>loading user</H1>
        <ActivityIndicator />
      </View>
    )
  else
    return (
      <View
        sx={{
          bg: '$background',
          flex: 1,
          p: '$3',
        }}
      >
        <SafeTop />
        <H1>Log in</H1>
        <Pressable
          style={{ marginTop: 350, alignSelf: 'center' }}
          onPress={async () => {
            const res = await signIn('google')
            setLoading(true)
            if (res?.type !== 'success') {
              setLoading(false)
            }
          }}
        >
          <View>
            <Image
              source={{
                uri: 'https://cdn.freebiesupply.com/logos/large/2x/google-icon-logo-png-transparent.png',
              }}
              style={{ width: 28, height: 29 }}
            />
            <H2>Sign in with Google</H2>
          </View>
        </Pressable>
        <SafeBottom />
      </View>
    )
}

const styles = StyleSheet.create({
  button: {
    color: '#9f8aff',
    textDecorationLine: 'underline',
  },
  footer: {
    marginTop: 'auto',
    marginBottom: 50,
  },
})
