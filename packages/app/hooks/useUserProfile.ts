import { createParam } from 'solito'

type Param = { id: string }

const { useParam } = createParam<Param>()

export const useUserProfile = () => {
  const [id, setId] = useParam('id', {
    initial: '',
    parse: (queryFromUrl) => {
      if (queryFromUrl) {
        return queryFromUrl
      }
      return ''
    },
  })
  return {
    id,
    setId,
  }
}
