// import { Search } from '@showtime-xyz/universal.icon'
import { Box, H1, H2, H3, Row, TextInput, View } from 'dripsy'
import React from 'react'
import { Link } from 'solito/link'
import { useRouter } from 'solito/router'
import Ionicons from '../icon'

// import { Switch } from '@showtime-xyz/universal.switch'

export function NavBar() {
  const { push } = useRouter()
  return (
    <View
      sx={{
        display: 'flex',
        paddingX: '1rem',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        bg: '$primary',
      }}
    >
      <Row
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Link href="/">
          <H1 sx={{ color: '$text' }}>Solito</H1>
        </Link>
        <View sx={{ marginLeft: '$3' }} />

        <Link href="/profile">
          <H3 sx={{ color: '$text' }}>Profile</H3>
        </Link>
      </Row>

      <View
        sx={{
          flexDirection: 'row',
          padding: '$2',
          ml: '$2',
          borderRadius: 15,
          bg: '$background2',
        }}
      >
        <Ionicons name="md-search" size={24} color="$text" />
        <TextInput
          sx={{
            // flex: 1,
            marginLeft: '$1',
            height: '28px',
            borderRadius: '$4',
            color: '$text',
            margin: '$0',
          }}
          onSubmitEditing={(e) => {
            push('/search/' + e.nativeEvent.text)
          }}
        />
      </View>
    </View>
  )
}
