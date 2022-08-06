import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSafeArea } from 'app/provider/safe-area/use-safe-area'
import { ProfileScreen } from 'app/features/profile/screen'
import { AuthScreen } from 'app/features/auth'
import { useContext, useEffect, useLayoutEffect } from 'react'
import { AuthContext } from 'app/provider/contexts/auth/AuthContext'
import SearchScreen from '../../../../apps/next/pages/search/[q]'
import { H1, Text, useDripsyTheme, View } from 'dripsy'
import Ionicons from 'app/components/icon'
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from '@react-navigation/native'

const Stack =
  createNativeStackNavigator<{
    auth: undefined
    root: undefined
  }>()

export function NativeNavigation() {
  const { authUser } = useContext(AuthContext)

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!!!authUser?._id ? (
        <Stack.Screen name="auth" component={AuthNavigation} />
      ) : (
        <Stack.Screen name="root" component={RootTab} />
      )}
    </Stack.Navigator>
  )
}

const AuthStack =
  createNativeStackNavigator<{
    authScreen: undefined
  }>()

export function AuthNavigation() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="authScreen" component={AuthScreen} />
    </AuthStack.Navigator>
  )
}

const BottomTab =
  createBottomTabNavigator<{
    home: undefined
    profile: undefined
    search: undefined
  }>()

function RootTab() {
  const insets = useSafeArea()
  const { theme } = useDripsyTheme()
  // console.log(theme)
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          marginBottom: 10 + insets.bottom,
          marginHorizontal: 20,
          borderRadius: 20,
          borderWidth: 0,
          backgroundColor: theme.colors.$background2,
          paddingBottom: 0,
          borderTopWidth: 0,
          borderTopColor: 'transparent',
        },
        headerShown: false,
        tabBarActiveTintColor: theme.colors.$primary,
      }}
    >
      <BottomTab.Screen
        name="home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

const HomeStack = createNativeStackNavigator()

function HomeNavigator() {
  const insets = useSafeArea()
  const navigation = useNavigation()
  const { theme } = useDripsyTheme()
  const route = useRoute()

  return (
    <HomeStack.Navigator
      defaultScreenOptions={{
        headerShown: false,
      }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="home-screen" component={HomeScreen} />
    </HomeStack.Navigator>
  )
}
