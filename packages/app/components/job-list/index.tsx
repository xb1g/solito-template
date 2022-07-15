import { FlatList } from 'dripsy'
import { JobCard } from '../job-card'

export function JobList({ jobs }) {
  const renderJob = ({ item }) => {
    return <JobCard job={item} />
  }
  return <FlatList data={jobs} renderItem={renderJob} horizontal />
}
