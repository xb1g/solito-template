import Ionicons from 'app/components/icon'
import { JobList } from 'app/components/job-list'
import MobileHomeTopBar from 'app/components/mobile-top-bar/home'
import ProfileCard from 'app/components/profile-card'
import { useSafeArea } from 'app/provider/safe-area/use-safe-area'
import { Text, useSx, View, H1, P, Row, A, ScrollView, Box } from 'dripsy'
import { Link, TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
// import IonIcons from '@expo/vector-icons/Ionicons'
// import { Search } from '@showtime-xyz/universal.icon'

export function HomeScreen() {
  const sx = useSx()
  const insets = useSafeArea()
  // console.log(insets)

  return (
    <View sx={{ flex: 1, bg: '$primary' }}>
      <ScrollView
        sx={{
          flex: 1,
          backgroundColor: '$background',
        }}
      >
        <MobileHomeTopBar />
        <Box>
          <Row>
            <Ionicons name="alert" size={64} color="$tertiary" />
            <H1>Boiler plate</H1>
          </Row>
        </Box>
        <ProfileCard name="Big" bio="lesgoooooooooo" />
      </ScrollView>
    </View>
  )
}
