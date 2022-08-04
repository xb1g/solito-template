// import { Search } from '@showtime-xyz/universal.icon'
import { Box, H1, H2, H3, Row, TextInput, View } from 'dripsy'
import React from 'react'
import { Link } from 'solito/link'
import { useRouter } from 'solito/router'

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
      <Link href="/">
        <H1 sx={{ color: '$text' }}>Jobtion</H1>
      </Link>

      <View
        sx={{
          display: 'flex',
          flexDirection: 'row',
          paddingLeft: '$4',
        }}
      >
        {/* <Search />
        <Switch checked={false} onChange={() => null} /> */}
        <TextInput
          sx={{
            width: '100px',
            height: '28px',
            borderRadius: '$4',
            bg: '$background2',
            color: '$text',
          }}
          onSubmitEditing={(e) => {
            console.log(e.nativeEvent.text)
            push('/search/' + e.nativeEvent.text)
          }}
        />
      </View>
    </View>
  )
}
