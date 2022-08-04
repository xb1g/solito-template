import { Job } from 'app/types'
import { Box, H2, Image, P, Pressable, Row, Text, View } from 'dripsy'
import { Link } from 'solito/link'
import { MotiLink } from 'solito/moti'
import { Gradient } from '@dripsy/gradient'

export const JobCard = ({ job }: { job: Job }) => {
  return (
    <MotiLink
      href={`/jobs/${job.title}`}
      animate={({ pressed, hovered }) => {
        'worklet'
        return {
          scale: pressed ? 0.9 : hovered ? 1.05 : 1,
          // rotateZ: pressed ? '0deg' : hovered ? '4deg' : '0deg',
        }
      }}
      onPress={() => console.log(`/jobs/${job.title}`)}
    >
      <View
        sx={{
          margin: 10,
          width: 300,
          borderRadius: 30,
          backgroundColor: '$primary',
        }}
      >
        <View>
          <Gradient
            gradient="fade"
            sx={{
              position: 'absolute',
              zIndex: 1,
              width: '100%',
              height: 200,
              borderRadius: 30,
              overflow: 'hidden',
            }}
          />
          <H2
            sx={{
              position: 'absolute',
              zIndex: 90,
              marginLeft: 10,
              bottom: 5,
              color: '#fff',
            }}
          >
            THB {job.salary}
          </H2>
          <Image
            resizeMode="cover"
            source={{
              uri:
                job?.images[0] ||
                'https://yt3.ggpht.com/fFA7ivGH9xb_hM06HQiW0qN9qJbW_npZOZ8wXeV8J4NNDyCgd425lKoCVzGbqhB16iUysePI8MP0=s1012-c-fcrop64=1,0000130effffecf1-nd-v1',
            }}
            alt="job"
            sx={{
              width: 300,
              height: 300,
              borderRadius: 30,
            }}
          />
        </View>
        <Row
          sx={{
            margin: 10,
            width: 300,
            borderRadius: 30,
          }}
        >
          <Link href={`/jobs/${job.title}`}>
            {/* <CircularProgressBase
                value={20}
                activeStrokeColor={"#2465FD"}
                activeStrokeSecondaryColor={"#C25AFF"}
                radius={56}
                activeStrokeWidth={25}
                inActiveStrokeWidth={25}
              > */}
            <Image
              source={{
                uri: job.business
                  ? job.business.profileImage
                  : 'https://i.ytimg.com/vi/EhFYlrjjtmI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzr9g-8ou41KidJ0F9Y2qZt-Xgfw',
              }}
              sx={{
                width: 60,
                height: 60,
                borderRadius: 30,
                marginRight: 10,
              }}
              alt="job"
              //   style={styles.profileImage}
            />
            {/* </CircularProgressBase> */}
          </Link>
          <Box>
            <H2 sx={{ maxWidth: '92%', marginY: 0 }}>{job.title}</H2>
            <P
              sx={{
                maxWidth: '92%',
                color: '$text',
                marginY: 0,
              }}
            >
              {(job.business && job.business.companyName) || '...'},{' '}
              {(job.business && job.business.location) || 'location'}
            </P>
          </Box>
        </Row>
      </View>
    </MotiLink>
  )
}
