import { Text, View } from 'dripsy'
import { createParam } from 'solito'

type Query = {
  id: string
}

const { useParam } = createParam<Query>()

export function JobScreen() {
  const [id] = useParam('id')
  return (
    <View>
      <Text>Job Screen, {id}</Text>
      <Text
        sx={{ textAlign: 'center', mb: 16, fontWeight: 'bold' }}
      >{`User ID: ${id}`}</Text>
    </View>
  )
}
