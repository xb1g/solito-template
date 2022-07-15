import { JobList } from 'app/components/job-list'
import { Text, useSx, View, H1, P, Row, A } from 'dripsy'
import { Link, TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'

export function HomeScreen() {
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
      <JobList jobs={[{ title: 'SJI' }, { title: 'ASDAD' }]} />
      {/* <Link href="/about">
        <H1 sx={{ fontWeight: '800' }}>Welcome to Solito.</H1>
      </Link>
      <View sx={{ maxWidth: 600 }}>
        <P sx={{ textAlign: 'center' }}>
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </P>
        <P sx={{ textAlign: 'center' }}>
          Solito is made by{' '}
          <A
            href="https://twitter.com/fernandotherojo"
            // @ts-expect-error react-native-web only types
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
            sx={{ color: 'blue' }}
          >
            Fernando Rojo
          </A>
          .
        </P>
      </View>
      <View sx={{ height: 32 }} />
      <Row>
        <TextLink
          href="/profile"
          textProps={{
            style: sx({ fontSize: 16, fontWeight: 'bold', color: 'blue' }),
          }}
        >
          profile
        </TextLink>
        <View sx={{ width: 32 }} />
       
      </Row> */}
      <MotiLink
        href="/user/fernando"
        animate={({ hovered, pressed }) => {
          'worklet'

          return {
            scale: pressed ? 0.95 : hovered ? 1.1 : 1,
            rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
          }
        }}
        transition={{
          type: 'timing',
          duration: 150,
        }}
      >
        <Text
          selectable={false}
          sx={{ fontSize: 16, color: '$secondary', fontWeight: 'bold' }}
        >
          Moti Link
        </Text>
      </MotiLink>
    </View>
  )
}
