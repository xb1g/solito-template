import { SafeTop } from 'app/components/safe-area'
import { useUserProfile } from 'app/hooks/useUserProfile'
import { AuthContext } from 'app/provider/contexts/auth/AuthContext'
import { Text, useSx, View, H1, P, Row, A, H2 } from 'dripsy'
import { MotiPressable } from 'moti/interactions'
import { useContext } from 'react'
import { Link, TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'

export function ProfileScreen() {
  const sx = useSx()
  const { onLogout } = useContext(AuthContext)
  const { id } = useUserProfile()

  if (!id) {
    return (
      <View
        sx={{
          backgroundColor: '$background',
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Link href="/about">
          <H1 sx={{ fontWeight: '800' }}>Profile</H1>
          <H1 sx={{ fontWeight: '800' }}>{id}</H1>
        </Link>
        <MotiPressable
          onPress={() => {
            onLogout()
          }}
        >
          <H2 sx={{ fontWeight: '800' }}>Logout</H2>
        </MotiPressable>
      </View>
    )
  }

  return (
    <View
      sx={{
        backgroundColor: '$background',
        flex: 1,
        alignItems: 'center',
      }}
    >
      <SafeTop />
      <Link href="/about">
        <H1 sx={{ fontWeight: '800' }}>Profile</H1>
        <H1 sx={{ fontWeight: '800' }}>{id}</H1>
      </Link>
    </View>
  )
}
