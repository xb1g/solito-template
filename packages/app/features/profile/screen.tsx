import { Text, useSx, View, H1, P, Row, A } from 'dripsy'
import { Link, TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'

export function ProfileScreen() {
  const sx = useSx()

  return (
    <View
      sx={{
        backgroundColor: '$primary',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link href="/about">
        <H1 sx={{ fontWeight: '800' }}>Profile</H1>
      </Link>
      <View
        sx={{
          height: [100, 400],
          width: [100, 400],
          backgroundColor: '$primary',
          marginX: 10,
        }}
      />
    </View>
  )
}
