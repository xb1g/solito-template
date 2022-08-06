import { Box, H2, H3, P, Pressable, Text, View } from 'dripsy'
import React from 'react'
import { Gradient } from '@dripsy/gradient'
import { useRouter } from 'solito/router'

export default function ProfileCard({
  name,
  bio,
}: {
  name: string
  bio: string
}) {
  const { push } = useRouter()
  return (
    <Pressable
      onPress={() => {
        push(`/profile/${name}`)
      }}
    >
      <Gradient
        colors={['$primary', '$secondary']}
        sx={{
          width: 200,
          height: 200,
          borderRadius: 20,
          p: '$3',
          m: '$2',
          bg: '$background2',
        }}
      >
        <Box>
          <H3>{name}</H3>
          <P>{bio}</P>
        </Box>
      </Gradient>
    </Pressable>
  )
}
