import { DripsyProvider, makeTheme } from 'dripsy'
import { useColorScheme } from 'react-native'

const darkColors = {
  $text: 'white',
  $text2: 'white',
  $background: 'black',
  $primary: '#0070f3',
  $secondary: '#ff4081',
}

const space = {
  // recommended: set 0 first, then double for consistent nested spacing
  $0: 0,
  $1: 4,
  $2: 8,
  $3: 16,
  $4: 32,
  $5: 64,
  $6: 128,
  $7: 256,
}

const fontSizes = {
  $0: 12,
  $1: 14,
  $2: 16,
  $3: 18,
  $4: 24,
  $5: 28,
  $6: 32,
}

const darkTheme = makeTheme({
  colors: darkColors,
  space,
  fontSizes,
  h1: {
    color: '$text',
  },
  p: {
    color: '$text',
  },
  view: {
    backgroundColor: '$background',
  },
  box: {
    backgroundColor: '$background',
    borderRadius: '0.5rem',
  },
})

type MyTheme = typeof darkTheme
declare module 'dripsy' {
  interface DripsyCustomTheme extends MyTheme {}
}

const lightColors: typeof darkColors = {
  $text: 'black',
  $text2: '#222',
  $background: 'white',
  $primary: 'blue',
  $secondary: 'red',
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
