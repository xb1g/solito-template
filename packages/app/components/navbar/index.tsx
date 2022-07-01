import { Box, H1, H2, H3, TextInput, View } from 'dripsy'
import React from 'react'
import { Link } from 'solito/link'
import { CenteredRow } from '../row'

export function NavBar() {
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
      <CenteredRow>
        <Link href="/">
          <H1 sx={{ color: '$text' }}>Jobtion</H1>
        </Link>

        <View
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: '$4',
            // bg: '$secondary',
            // paddingX: '1rem',
          }}
        >
          <Link href="/profile">
            <H3 sx={{ color: '$text', paddingX: '$2' }}>Profile</H3>
          </Link>
          <Link href="/like">
            <H3 sx={{ color: '$text', paddingX: '$2' }}>like</H3>
          </Link>
        </View>
      </CenteredRow>
      <TextInput sx={{ width: '100px', height: '28px' }} />
    </View>
  )
}
