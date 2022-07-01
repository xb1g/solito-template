import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSafeArea } from 'app/provider/safe-area/use-safe-area'
import { ProfileScreen } from 'app/features/profile/screen'
import { BusinessAuthScreen } from 'app/features/auth/business'
import { useContext, useEffect } from 'react'
import { AuthContext } from 'app/provider/contexts/auth/AuthContext'
import { LikeScreen } from 'app/features/like/screen'

const Stack = createNativeStackNavigator<{
  auth: undefined
  businessRoot: undefined
  'user-detail': { id: string }
  // candidateRoot: undefined
}>()

export function NativeNavigation() {
  const { authUser } = useContext(AuthContext)
  useEffect(() => {
    console.log('ROLE changed', authUser?.role, !!authUser?._id)
  }, [authUser])

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!!!authUser?._id ? (
        <Stack.Screen name="auth" component={AuthNavigation} />
      ) : (
        authUser?.role === 'business' && (
          <Stack.Screen name="businessRoot" component={BusinessRootTab} />
          // ) : (
        )
      )}
      <Stack.Screen name="user-detail" component={UserDetailScreen} />
      {/* <Stack.Screen name="candidateRoot" component={CandidateRootTab} /> */}
    </Stack.Navigator>
  )
}

const AuthStack = createNativeStackNavigator<{
  businessAuth: undefined
  candidateAuth: undefined
}>()

export function AuthNavigation() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="businessAuth" component={BusinessAuthScreen} />
      {/* <AuthStack.Screen name="candidateAuth" component={CandidateAuthScreen} /> */}
    </AuthStack.Navigator>
  )
}
const BusinessTab = createBottomTabNavigator<{
  home: undefined
  profile: undefined
  like: undefined
}>()

function BusinessRootTab() {
  const insets = useSafeArea()
  return (
    <BusinessTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          // marginBottom: 10 + insets.bottom,
          // marginHorizontal: 20,
          // borderRadius: 30,
          // borderWidth: 0,
          backgroundColor: '#aaa',
          // paddingBottom: 0,

          borderTopWidth: 0,
          borderTopColor: 'transparent',
        },
      }}
    >
      <BusinessTab.Screen name="home" component={HomeScreen} />
      <BusinessTab.Screen name="profile" component={ProfileScreen} />
      <BusinessTab.Screen name="like" component={LikeScreen} />
    </BusinessTab.Navigator>
  )
}

// const CandidateTab = createBottomTabNavigator()

// function CandidateRootTab() {
//   return (
//     <CandidateTab.Navigator>
//       <CandidateTab.Screen name="home" component={HomeScreen} />
//       <CandidateTab.Screen name="user-detail" component={UserDetailScreen} />
//     </CandidateTab.Navigator>
//   )
// }
