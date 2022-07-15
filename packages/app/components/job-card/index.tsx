import { Job } from 'app/types'
import { Image, Pressable, Row, Text, View } from 'dripsy'
import { Link } from 'solito/link'
import { MotiLink } from 'solito/moti'

export const JobCard = ({ job }: { job: Job }) => {
  return (
    <MotiLink
      href={`/jobs/${job.title}`}
      animate={({ pressed }) => {
        'worklet'
        return {
          scale: pressed ? 0.9 : 1,
        }
      }}
      onPress={() => console.log(`/jobs/${job.title}`)}
    >
      <View>
        {/* <IconButton
            style={
              job.like
                ? {
                    position: "absolute",
                    zIndex: 200,
                    top: 10,
                    right: 10,
                    ...shadow.glow1,
                  }
                : {
                    position: "absolute",
                    zIndex: 200,
                    top: 10,
                    right: 10,
                    ...shadow.glow0,
                  }
            }
            color={job.like ? "#FADDFC" : "white"}
            size={40}
            name="heart"
            onPress={() => {
              // job.like = !job.like;
              console.log("like and change color");
            }}
          /> */}

        <View>
          {/* <LinearGradient
            // Background Linear Gradient
            colors={[
              'transparent',
              'transparent',
              'transparent',
              'transparent',
              '#00000040',
              '#000000ca',
            ]}
            style={[styles.image, { position: 'absolute', zIndex: 4 }]}
          /> */}
          <Text>THB {job.salary}</Text>
          <Image
            resizeMode="cover"
            source={{
              //   uri: job?.images[0],
              uri: 'https://yt3.ggpht.com/fFA7ivGH9xb_hM06HQiW0qN9qJbW_npZOZ8wXeV8J4NNDyCgd425lKoCVzGbqhB16iUysePI8MP0=s1012-c-fcrop64=1,0000130effffecf1-nd-v1',
            }}
            // alt="job"
          />
        </View>
        <Row>
          <Pressable
            onPress={() => {
              navigation.navigate('BusinessProfile', { id: job.business.id })
            }}
          >
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
              //   style={styles.profileImage}
            />
            {/* </CircularProgressBase> */}
          </Pressable>
          <View>
            <View />
            <Text>{job.title}</Text>
            <Text
              style={{
                maxWidth: '92%',
              }}
            >
              {(job.business && job.business.companyName) || '...'},{' '}
              {(job.business && job.business.location) || 'location'}
            </Text>
          </View>
        </Row>
      </View>
    </MotiLink>
  )
}
