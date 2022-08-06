import { H1, P, Row, Text, View } from 'dripsy'
import React from 'react'
import { Platform } from 'react-native'
import { useRouter } from 'solito/router'
import IconButton from '../../icon-button'
import { SafeTop } from 'app/components/safe-area'

export default function MobileHomeTopBar() {
  const { push } = useRouter()
  return Platform.OS != 'web' ? (
    <>
      <SafeTop />
      <Row
        sx={{
          mx: '$2',
        }}
      >
        <H1>Solito</H1>
        <IconButton
          name="search"
          style={{ marginLeft: 'auto', marginRight: 5 }}
          onPress={() => {
            push('/search/')
          }}
        />
      </Row>
    </>
  ) : null
}
