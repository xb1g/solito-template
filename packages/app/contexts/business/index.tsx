import { AuthContext } from 'app/provider/contexts/auth/AuthContext'
import { Job, JobCreate } from 'app/types'
import { createContext, useContext, useEffect, useState } from 'react'
import { getUserData, saveBusinessData, createJob } from './services'
import { BusinessUser } from './types'

type Props = {
  children: React.ReactNode
}

interface BusinessContextInterface {
  userData: BusinessUser
  setUserData: React.Dispatch<React.SetStateAction<BusinessUser>>
  saveUserData: (userData: BusinessUser) => Promise<any>

  jobs: Job[]
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>

  createJob: (jobData: JobCreate) => Promise<Job>
}

export const BusinessContext = createContext<BusinessContextInterface>(
  {} as BusinessContextInterface
)

export const BusinessContextProvider = ({ children }: Props) => {
  const { authUser } = useContext(AuthContext)
  const [userData, setUserData] = useState<BusinessUser>({
    ...authUser,
  } as BusinessUser)

  const [jobs, setJobs] = useState<Job[]>([])

  useEffect(() => {
    console.log('candidate context')
  }, [])

  useEffect(() => {
    ;(async () => {
      if (authUser?._id) {
        const data = await getUserData(authUser._id)
        console.log(data._id, 'id at business context')

        setUserData(data)
        setJobs(data.jobs)
      }
    })()
  }, [authUser])

  async function saveUserData(userData: BusinessUser) {
    // setLoading(true);
    console.log('firsasdasdasdt')
    const res = await saveBusinessData(userData)
      .then((res) => {
        if (res) {
          setUserData(res)
          // setLoading(false);
          return res
        }
      })
      .catch((err) => {
        console.log(err, 'er')
        // setLoading(false);
        return err
      })

    return res
  }

  return (
    <BusinessContext.Provider
      value={{ userData, setUserData, saveUserData, jobs, setJobs, createJob }}
    >
      {children}
    </BusinessContext.Provider>
  )
}
