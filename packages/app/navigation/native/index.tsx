import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSafeArea } from 'app/provider/safe-area/use-safe-area'
import { ProfileScreen } from 'app/features/profile/screen'
import { BusinessAuthScreen } from 'app/features/auth/business'
import { useContext, useEffect, useLayoutEffect } from 'react'
import { AuthContext } from 'app/provider/contexts/auth/AuthContext'
import { LikeScreen } from 'app/features/like/screen'
import { JobScreen } from 'app/features/job/screen'
import SearchScreen from '../../../../apps/next/pages/search/[q]'
import { H1, Text, View } from 'dripsy'

const Stack =
  createNativeStackNavigator<{
    auth: undefined
    businessRoot: undefined
    'user-detail': { id: string }
    candidateRoot: undefined
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
      ) : authUser?.role === 'business' ? (
        <Stack.Screen name="businessRoot" component={BusinessRootTab} />
      ) : (
        <Stack.Screen name="candidateRoot" component={CandidateRootTab} />
      )}
      {/* <Stack.Screen name="user-detail" component={UserDetailScreen} /> */}
      {/* <Stack.Screen name="candidateRoot" component={CandidateRootTab} /> */}
    </Stack.Navigator>
  )
}

const AuthStack =
  createNativeStackNavigator<{
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

const BusinessTab =
  createBottomTabNavigator<{
    home: undefined
    profile: undefined
    like: undefined
    search: undefined
  }>()

function BusinessRootTab() {
  const insets = useSafeArea()
  return (
    <BusinessTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarBadgeStyle: {},
        // tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          position: 'absolute',
          marginBottom: 10 + insets.bottom,
          marginHorizontal: 20,
          borderRadius: 30,
          borderWidth: 0,
          // backgroundColor:
          //   colorScheme === 'dark'
          //     ? Colors.dark.business.bottomBar
          //     : Colors.light.business.bottomBar,
          paddingBottom: 0,
          borderTopWidth: 0,
          borderTopColor: 'transparent',
        },
        headerShown: false,
        // tabBarActiveTintColor: Colors[colorScheme].business.tint,
      }}
    >
      <BusinessTab.Screen
        name="home"
        component={HomeNavigator}
        options={
          {
            // tabBarIcon: ({ color }) => (
            //   <IonIcons name="home" size={24} color={color} />
            // ),
          }
        }
      />
      <BusinessTab.Screen name="profile" component={ProfileScreen} />
      <BusinessTab.Screen name="like" component={LikeScreen} />
      <BusinessTab.Screen name="search" component={SearchScreen} />
      {/* <BusinessTab.Screen name="job" component={JobScreen} /> */}
    </BusinessTab.Navigator>
  )
}

const HomeStack = createNativeStackNavigator()

function HomeNavigator() {
  const insets = useSafeArea()
  const tabHiddenRoutes = ['Job', 'Apply']

  // useLayoutEffect(() => {
  //   if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route)!)) {
  //     navigation.setOptions({ tabBarStyle: { display: 'none' } })
  //   } else {
  //     navigation.setOptions({
  //       tabBarStyle: {
  //         position: 'absolute',
  //         marginBottom: 10 + insets.bottom,
  //         marginHorizontal: 30,
  //         borderRadius: 150,
  //         borderWidth: 0,
  //         // alignItems: "center",
  //         backgroundColor:
  //           colorScheme === 'dark'
  //             ? Colors.dark.candidate.bottomBar
  //             : Colors.light.candidate.bottomBar,
  //         paddingBottom: 0,

  //         ...shadow.shadowIn,
  //         borderTopWidth: 0,
  //         borderTopColor: 'transparent',
  //       },
  //     })
  //   }
  // }, [navigation, route])

  return (
    <HomeStack.Navigator
      defaultScreenOptions={{
        headerShown: false,
      }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Job" component={JobScreen} />
    </HomeStack.Navigator>
  )
}

const CandidateTab = createBottomTabNavigator()

function CandidateRootTab() {
  return (
    <CandidateTab.Navigator>
      <CandidateTab.Screen name="home" component={HomeScreen} />
      <CandidateTab.Screen name="job" component={JobScreen} />
      <CandidateTab.Screen name="user-detail" component={UserDetailScreen} />
      <CandidateTab.Screen name="like" component={LikeScreen} />
    </CandidateTab.Navigator>
  )
}
