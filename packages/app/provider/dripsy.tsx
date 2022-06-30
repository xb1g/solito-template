import { DripsyProvider, makeTheme } from 'dripsy'
import { useColorScheme } from 'react-native'

const darkColors = {
  $text: 'white',
  $background: 'black',
  $primary: '#0070f3',
}

const darkTheme = makeTheme({
  colors: darkColors,
  h1: {
    color: '$text',
  },
  p: {
    color: '$text',
  },
  view: {
    backgroundColor: '$background',
  },
})

type MyTheme = typeof darkTheme
declare module 'dripsy' {
  interface DripsyCustomTheme extends MyTheme {}
}
const lightColors: typeof darkColors = {
  $text: 'black',
  $background: 'white',
  $primary: 'blue',
}
const lightTheme = {
  ...darkTheme,
  colors: lightColors,
}

export function Dripsy({ children }: { children: React.ReactNode }) {
  const colorMode = useColorScheme()
  console.log(colorMode, 'cm')
  return (
    <DripsyProvider
      theme={colorMode == 'dark' ? darkTheme : lightTheme}
      // this disables SSR, since react-native-web doesn't have support for it (yet)
      ssr
    >
      {children}
    </DripsyProvider>
  )
}
