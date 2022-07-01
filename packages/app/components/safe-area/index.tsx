import { View } from 'dripsy'
import { ViewProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export function SafeTop(props: ViewProps) {
  const insets = useSafeAreaInsets()
  const { style, ...otherProps } = props
  return (
    <View
      style={[
        {
          height: insets.top,
          backgroundColor: 'transparent',
        },
        style,
      ]}
      {...otherProps}
    />
  )
}

export function SafeBottom(props: ViewProps) {
  const insets = useSafeAreaInsets()
  const { style, ...otherProps } = props
  return (
    <View
      style={[
        {
          height: insets.bottom,
          backgroundColor: 'transparent',
        },
        style,
      ]}
      {...otherProps}
    />
  )
}
