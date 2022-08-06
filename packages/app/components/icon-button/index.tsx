import { View, Text } from 'react-native'
import React from 'react'
import { Pressable, styled } from 'dripsy'
import Ionicons from '../icon'

type Props = React.ComponentProps<typeof Ionicons> &
  React.ComponentProps<typeof Pressable>
export default function IconButton(props: Props) {
  const { sx, style, ...rest } = props
  return (
    <Pressable
      {...props}
      sx={{
        ...sx,
        padding: 10,
        bg: '$background3',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1,
        borderRadius: 100,
      }}
    >
      <Ionicons {...rest} />
    </Pressable>
  )
}
