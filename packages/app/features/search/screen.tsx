import { useSearchQuery } from 'app/hooks/useSearchQuery'
import { Text, useSx, View, H1, P, Row, A, TextInput } from 'dripsy'
import { useState } from 'react'
import { Link, TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import { useRouter } from 'solito/router'
import { useDripsyTheme } from 'dripsy'
import { ScrollView } from 'app/components/scroll-view'
import MobileSearchTopBar from 'app/components/mobile-top-bar/search'
import { SafeTop } from 'app/components/safe-area'

export function SearchScreen() {
  const { theme } = useDripsyTheme()
  const { q } = useSearchQuery()

  const [search, setSearch] = useState(q)
  const onSearch = (q: string) => {
    console.log(q)
    setSearch(q)
  }

  return (
    <ScrollView>
      <MobileSearchTopBar onSearch={onSearch} />
      <View
        sx={{
          flex: 1,
          alignItems: 'center',
          p: 16,
          backgroundColor: '$background',
          // padding: ['$0', '$2', '$4', '$6'],
        }}
      >
        {/* <H1 sx={{ fontWeight: '800' }}>Search, </H1> */}
        <H1 sx={{ fontWeight: '800' }}>{search}</H1>
      </View>
    </ScrollView>
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
          // console.log('value', value.nativeEvent.text)
          push('/search/' + value.nativeEvent.text)
          setLoading(true)
        }}
      />
    </>
  )
}
