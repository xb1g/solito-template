import { Job } from 'app/types'
import { FlatList, Row } from 'dripsy'
import { JobCard } from '../job-card'

export function JobList({ jobs }: { jobs: Job[] }) {
  const renderJob = ({ item }: { item: Job }) => {
    return <JobCard job={item} />
  }
  return (
    <FlatList
      style={{
        flex: 1,
      }}
      contentContainerStyle={{
        margin: 10,
      }}
      data={jobs}
      renderItem={renderJob}
      horizontal
    />
  )
}
