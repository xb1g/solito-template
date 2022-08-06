import Ionicons from 'app/components/icon'
import { SafeTop } from 'app/components/safe-area'
import { H1, P, Row, Text, TextInput, View } from 'dripsy'
import React from 'react'
import { Platform } from 'react-native'
import { useRouter } from 'solito/router'
import IconButton from '../../icon-button'

export default function MobileSearchTopBar({
  onSearch,
}: {
  onSearch: (q: string) => void
}) {
  const { push } = useRouter()
  return Platform.OS != 'web' ? (
    <>
      <SafeTop />
      <H1 sx={{ ml: '$2' }}>Search</H1>
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
            flex: 1,
            marginLeft: '$1',
            height: 28,
            borderRadius: 15,
            color: '$text',
            margin: '$0',
          }}
          onSubmitEditing={(e) => {
            console.log(e.nativeEvent.text)
            onSearch(e.nativeEvent.text)
          }}
        />
      </View>
    </>
  ) : null
}
