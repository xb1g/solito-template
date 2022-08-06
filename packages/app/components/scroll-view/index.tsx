import { ScrollView as DefaultScrollView, styled } from 'dripsy'

export const ScrollView = styled(DefaultScrollView)((props) => ({
  flex: 1,
  bg: '$background',
}))
