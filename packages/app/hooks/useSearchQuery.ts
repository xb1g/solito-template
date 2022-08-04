import { createParam } from 'solito'

type Query = { q: string }

const { useParam } = createParam<Query>()

export const useSearchQuery = () => {
  const [q, setQ] = useParam('q', {
    initial: 'nothing',
    parse: (queryFromUrl) => {
      if (queryFromUrl) {
        return queryFromUrl
      }
      return 'nothing'
    },
  })
  return {
    q,
    setQ,
  }
}
