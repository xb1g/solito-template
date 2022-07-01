import { Text, useSx, View, H1, P, Row, A } from 'dripsy'
import { Link, TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'

export function LikeScreen() {
  const sx = useSx()

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
      <Link href="/about">
        <H1 sx={{ fontWeight: '800' }}>LIEKK to Solito.</H1>
      </Link>
    </View>
  )
}
