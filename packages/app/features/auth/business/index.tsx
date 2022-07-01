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

WebBrowser.maybeCompleteAuthSession()

export function BusinessAuthScreen({ navigation }: any) {
  const [loading, setLoading] = useState(false)
  const { businessSignIn, authUser, error } = useContext(AuthContext)

  // useEffect(() => {
  //   setRole("business");
  // }, []);

  useEffect(() => {
    console.log(Object.keys(authUser || {}), !authUser?._id)
    console.log('TRU?', authUser && authUser?._id)
    if (authUser?.email && !authUser?._id && loading) {
      console.log('nav')
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
      <View>
        <SafeTop />
        {/* <LogoText size={64} /> */}
        <H1>For Business</H1>
        <Pressable
          style={{ marginTop: 350, alignSelf: 'center' }}
          onPress={async () => {
            const res = await businessSignIn('google')
            setLoading(true)
            // console.log("reszz", res);
            console.log('sign in pressed')
            console.log('got', res)
            if (res?.type !== 'success') {
              setLoading(false)
            }
            // if (res.type === "success" && !!!userInfo?._id) {
            //   navigation.navigate("BusinessProfileForm");
            // }
            // navigation.navigate("BusinessProfileForm");
            // getUserData();
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

        {/* <Row style={styles.footer}>
          <Text size="body">Individual </Text>
          <Pressable
            onPress={() => {
              navigation.navigate('CandidateAuth')
            }}
          >
            <Text size="body" style={styles.button}>
              Registration{' '}
            </Text>
          </Pressable>
          <Text size="body">and </Text>
          <Pressable
            onPress={() => {
              navigation.navigate('Pricing')
            }}
          >
            <Text size="body" style={styles.button}>
              Pricing.
            </Text>
          </Pressable>
        </Row> */}
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
