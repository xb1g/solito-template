import Ionicons from 'app/components/icon'
import { JobList } from 'app/components/job-list'
import { useSafeArea } from 'app/provider/safe-area/use-safe-area'
import { Text, useSx, View, H1, P, Row, A, ScrollView } from 'dripsy'
import { Link, TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
// import IonIcons from '@expo/vector-icons/Ionicons'
// import { Search } from '@showtime-xyz/universal.icon'

export function HomeScreen() {
  const sx = useSx()
  const insets = useSafeArea()
  console.log(insets)

  return (
    <View sx={{ flex: 1, bg: '$primary' }}>
      <ScrollView
        sx={{
          flex: 1,
          paddingTop: insets.top,
          backgroundColor: '$background',
        }}
      >
        <Ionicons name="alert" size={64} color="$tertiary" />
        <H1>For you</H1>
        {/* <JobList
          jobs={[
            {
              _id: '62bb04314afb5c5ea6ef1c7c',
              business: {
                companyName: 'oaass',
                profileImage:
                  'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656398502389-Screen%20Shot%202022-06-13%20at%2012.12.14%20PM%20%282%29.png',
                location: 'undefined, الإمارات العربية المتحدة',
              },
              title: 'what',
              images: [
                'https://amazon-eshop.s3.amazonaws.com/1656423109246-Screen%20Shot%202022-06-26%20at%2010.51.43%20PM.png',
                'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656423111776-Screen%20Shot%202022-06-22%20at%207.22.41%20PM.png',
                '',
                '',
                '',
                '',
              ],
              salary: 100,
              educations: [
                {
                  level: 'doctoral',
                  title: 'Doctor of Health Science',
                },
              ],
              skills: [
                {
                  name: 'python',
                  year: 1,
                },
              ],
              preference: {
                employmentType: 'freelance',
                location: 'anywhere',
                workingDay: 'any',
                workingTime: 'any',
              },
              highlights: 'sleep in',
              benefits: 'asd',
              requirements: 'aa',
              video:
                'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656423116589-Simulator%20Screen%20Recording%20-%20iPhone%2013%20-%202022-05-17%20at%2018.13.41.mp4',
              videoDetail: 'placeholder // TODO do this bro',
              like: [],
              applications: [
                {
                  id: '62bb047a4afb5c5ea6ef1c86',
                  candidate: {
                    profileImage:
                      'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656398070567-1653882742553-image.jpg',
                    fullName: 'jnkk',
                    location: 'undefined, undefined',
                  },
                  _id: '62bb047a4afb5c5ea6ef1c89',
                },
                {
                  id: '62bc486dc9c7c6a01a0a5460',
                  candidate: {
                    profileImage:
                      'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656506262927-cover%20clip_edited.jpg',
                    fullName: 'Nattapat Suwansipaisan',
                    location: 'Bangkok, undefined',
                  },
                  _id: '62bc486dc9c7c6a01a0a5463',
                },
                {
                  id: '62c62a07fdbee0e633b9228c',
                  candidate: {
                    profileImage:
                      'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656398070567-1653882742553-image.jpg',
                    fullName: 'Doggo',
                    location: 'undefined, undefined',
                  },
                  _id: '62c62a07fdbee0e633b9228f',
                },
              ],
              __v: 0,
            },
            {
              _id: '62bb04314afb5c5ea6ef1c7c',
              business: {
                companyName: 'oaass',
                profileImage:
                  'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656398502389-Screen%20Shot%202022-06-13%20at%2012.12.14%20PM%20%282%29.png',
                location: 'undefined, الإمارات العربية المتحدة',
              },
              title: 'what',
              images: [
                'https://amazon-eshop.s3.amazonaws.com/1656423109246-Screen%20Shot%202022-06-26%20at%2010.51.43%20PM.png',
                'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656423111776-Screen%20Shot%202022-06-22%20at%207.22.41%20PM.png',
                '',
                '',
                '',
                '',
              ],
              salary: 100,
              educations: [
                {
                  level: 'doctoral',
                  title: 'Doctor of Health Science',
                },
              ],
              skills: [
                {
                  name: 'python',
                  year: 1,
                },
              ],
              preference: {
                employmentType: 'freelance',
                location: 'anywhere',
                workingDay: 'any',
                workingTime: 'any',
              },
              highlights: 'sleep in',
              benefits: 'asd',
              requirements: 'aa',
              video:
                'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656423116589-Simulator%20Screen%20Recording%20-%20iPhone%2013%20-%202022-05-17%20at%2018.13.41.mp4',
              videoDetail: 'placeholder // TODO do this bro',
              like: [],
              applications: [
                {
                  id: '62bb047a4afb5c5ea6ef1c86',
                  candidate: {
                    profileImage:
                      'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656398070567-1653882742553-image.jpg',
                    fullName: 'jnkk',
                    location: 'undefined, undefined',
                  },
                  _id: '62bb047a4afb5c5ea6ef1c89',
                },
                {
                  id: '62bc486dc9c7c6a01a0a5460',
                  candidate: {
                    profileImage:
                      'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656506262927-cover%20clip_edited.jpg',
                    fullName: 'Nattapat Suwansipaisan',
                    location: 'Bangkok, undefined',
                  },
                  _id: '62bc486dc9c7c6a01a0a5463',
                },
                {
                  id: '62c62a07fdbee0e633b9228c',
                  candidate: {
                    profileImage:
                      'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656398070567-1653882742553-image.jpg',
                    fullName: 'Doggo',
                    location: 'undefined, undefined',
                  },
                  _id: '62c62a07fdbee0e633b9228f',
                },
              ],
              __v: 0,
            },
            {
              _id: '62bb04314afb5c5ea6ef1c7c',
              business: {
                companyName: 'oaass',
                profileImage:
                  'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656398502389-Screen%20Shot%202022-06-13%20at%2012.12.14%20PM%20%282%29.png',
                location: 'undefined, الإمارات العربية المتحدة',
              },
              title: 'what',
              images: [
                'https://amazon-eshop.s3.amazonaws.com/1656423109246-Screen%20Shot%202022-06-26%20at%2010.51.43%20PM.png',
                'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656423111776-Screen%20Shot%202022-06-22%20at%207.22.41%20PM.png',
                '',
                '',
                '',
                '',
              ],
              salary: 100,
              educations: [
                {
                  level: 'doctoral',
                  title: 'Doctor of Health Science',
                },
              ],
              skills: [
                {
                  name: 'python',
                  year: 1,
                },
              ],
              preference: {
                employmentType: 'freelance',
                location: 'anywhere',
                workingDay: 'any',
                workingTime: 'any',
              },
              highlights: 'sleep in',
              benefits: 'asd',
              requirements: 'aa',
              video:
                'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656423116589-Simulator%20Screen%20Recording%20-%20iPhone%2013%20-%202022-05-17%20at%2018.13.41.mp4',
              videoDetail: 'placeholder // TODO do this bro',
              like: [],
              applications: [
                {
                  id: '62bb047a4afb5c5ea6ef1c86',
                  candidate: {
                    profileImage:
                      'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656398070567-1653882742553-image.jpg',
                    fullName: 'jnkk',
                    location: 'undefined, undefined',
                  },
                  _id: '62bb047a4afb5c5ea6ef1c89',
                },
                {
                  id: '62bc486dc9c7c6a01a0a5460',
                  candidate: {
                    profileImage:
                      'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656506262927-cover%20clip_edited.jpg',
                    fullName: 'Nattapat Suwansipaisan',
                    location: 'Bangkok, undefined',
                  },
                  _id: '62bc486dc9c7c6a01a0a5463',
                },
                {
                  id: '62c62a07fdbee0e633b9228c',
                  candidate: {
                    profileImage:
                      'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656398070567-1653882742553-image.jpg',
                    fullName: 'Doggo',
                    location: 'undefined, undefined',
                  },
                  _id: '62c62a07fdbee0e633b9228f',
                },
              ],
              __v: 0,
            },
            {
              _id: '62bb04314afb5c5ea6ef1c7c',
              business: {
                companyName: 'oaass',
                profileImage:
                  'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656398502389-Screen%20Shot%202022-06-13%20at%2012.12.14%20PM%20%282%29.png',
                location: 'undefined, الإمارات العربية المتحدة',
              },
              title: 'what',
              images: [
                'https://amazon-eshop.s3.amazonaws.com/1656423109246-Screen%20Shot%202022-06-26%20at%2010.51.43%20PM.png',
                'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656423111776-Screen%20Shot%202022-06-22%20at%207.22.41%20PM.png',
                '',
                '',
                '',
                '',
              ],
              salary: 100,
              educations: [
                {
                  level: 'doctoral',
                  title: 'Doctor of Health Science',
                },
              ],
              skills: [
                {
                  name: 'python',
                  year: 1,
                },
              ],
              preference: {
                employmentType: 'freelance',
                location: 'anywhere',
                workingDay: 'any',
                workingTime: 'any',
              },
              highlights: 'sleep in',
              benefits: 'asd',
              requirements: 'aa',
              video:
                'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656423116589-Simulator%20Screen%20Recording%20-%20iPhone%2013%20-%202022-05-17%20at%2018.13.41.mp4',
              videoDetail: 'placeholder // TODO do this bro',
              like: [],
              applications: [
                {
                  id: '62bb047a4afb5c5ea6ef1c86',
                  candidate: {
                    profileImage:
                      'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656398070567-1653882742553-image.jpg',
                    fullName: 'jnkk',
                    location: 'undefined, undefined',
                  },
                  _id: '62bb047a4afb5c5ea6ef1c89',
                },
                {
                  id: '62bc486dc9c7c6a01a0a5460',
                  candidate: {
                    profileImage:
                      'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656506262927-cover%20clip_edited.jpg',
                    fullName: 'Nattapat Suwansipaisan',
                    location: 'Bangkok, undefined',
                  },
                  _id: '62bc486dc9c7c6a01a0a5463',
                },
                {
                  id: '62c62a07fdbee0e633b9228c',
                  candidate: {
                    profileImage:
                      'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656398070567-1653882742553-image.jpg',
                    fullName: 'Doggo',
                    location: 'undefined, undefined',
                  },
                  _id: '62c62a07fdbee0e633b9228f',
                },
              ],
              __v: 0,
            },
            {
              _id: '62bb04314afb5c5ea6ef1c7c',
              business: {
                companyName: 'oaass',
                profileImage:
                  'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656398502389-Screen%20Shot%202022-06-13%20at%2012.12.14%20PM%20%282%29.png',
                location: 'undefined, الإمارات العربية المتحدة',
              },
              title: 'what',
              images: [
                'https://amazon-eshop.s3.amazonaws.com/1656423109246-Screen%20Shot%202022-06-26%20at%2010.51.43%20PM.png',
                'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656423111776-Screen%20Shot%202022-06-22%20at%207.22.41%20PM.png',
                '',
                '',
                '',
                '',
              ],
              salary: 100,
              educations: [
                {
                  level: 'doctoral',
                  title: 'Doctor of Health Science',
                },
              ],
              skills: [
                {
                  name: 'python',
                  year: 1,
                },
              ],
              preference: {
                employmentType: 'freelance',
                location: 'anywhere',
                workingDay: 'any',
                workingTime: 'any',
              },
              highlights: 'sleep in',
              benefits: 'asd',
              requirements: 'aa',
              video:
                'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656423116589-Simulator%20Screen%20Recording%20-%20iPhone%2013%20-%202022-05-17%20at%2018.13.41.mp4',
              videoDetail: 'placeholder // TODO do this bro',
              like: [],
              applications: [
                {
                  id: '62bb047a4afb5c5ea6ef1c86',
                  candidate: {
                    profileImage:
                      'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656398070567-1653882742553-image.jpg',
                    fullName: 'jnkk',
                    location: 'undefined, undefined',
                  },
                  _id: '62bb047a4afb5c5ea6ef1c89',
                },
                {
                  id: '62bc486dc9c7c6a01a0a5460',
                  candidate: {
                    profileImage:
                      'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656506262927-cover%20clip_edited.jpg',
                    fullName: 'Nattapat Suwansipaisan',
                    location: 'Bangkok, undefined',
                  },
                  _id: '62bc486dc9c7c6a01a0a5463',
                },
                {
                  id: '62c62a07fdbee0e633b9228c',
                  candidate: {
                    profileImage:
                      'https://amazon-eshop.s3.us-east-2.amazonaws.com/1656398070567-1653882742553-image.jpg',
                    fullName: 'Doggo',
                    location: 'undefined, undefined',
                  },
                  _id: '62c62a07fdbee0e633b9228f',
                },
              ],
              __v: 0,
            },
          ]}
        /> */}
      </ScrollView>
    </View>
  )
}
