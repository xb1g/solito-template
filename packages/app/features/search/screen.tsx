import { useSearchQuery } from 'app/hooks/useSearchQuery'
import { Text, useSx, View, H1, P, Row, A, TextInput } from 'dripsy'
import { useState } from 'react'
import { Link, TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import { useRouter } from 'solito/router'
import { useDripsyTheme } from 'dripsy'

export function SearchScreen() {
  const { theme } = useDripsyTheme()
  console.log(useDripsyTheme, 'colors')
  const { q } = useSearchQuery()
  console.log('asd', q)

  return (
    <View
      sx={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        p: 16,
        backgroundColor: '$background',
        // padding: ['$0', '$2', '$4', '$6'],
      }}
    >
      {/* <Ionicons name="ios-search" icon={{ color: '$text', name: 'close' }} /> */}
      <H1 sx={{ fontWeight: '800' }}>Search, </H1>
      <H1 sx={{ fontWeight: '800' }}>{q}</H1>
    </View>
  )
}

export function SearchDefaultScreen() {
  const { push, replace, back, parseNextPath } = useRouter()
  const [loading, setLoading] = useState(false)

  const onPress = () => {
    push('/')
  }

  return (
    <>
      <Text>SEARCH STH</Text>
      <TextInput
        sx={{
          width: '100px',
          height: '28px',
          bg: '$primary',
          borderRadius: '$4',
          m: '$3',
        }}
        onSubmitEditing={(value) => {
          console.log('value', value.nativeEvent.text)
          push('/search/' + value.nativeEvent.text)
          setLoading(true)
        }}
      />
    </>
  )
}
