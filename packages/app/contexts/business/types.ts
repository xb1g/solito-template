import {
  Address,
  Application,
  Contact,
  Education,
  Images,
  Job,
  Offer,
  Preference,
  Skill,
} from 'app/types'

export interface AuthUser {
  _id?: string
  __v?: number

  email: string
  provider: string
  googleId: string

  profileImage: string

  role: 'candidate' | 'business' | ''
}

export interface CreateCandidateUser {
  fullName: string
  job: string
  resume: string
  profileImage: string
  bio: string
  educations: Education[]
  skills: Skill[]
  offers: Offer[]
  preference: Preference
  video: string
  address: Address
  images: Images

  email: string
  provider: string
  googleId: string
}

export interface CandidateUser extends AuthUser {
  _id: string
  fullName: string
  job: string
  resume: string
  profileImage: string
  bio: string
  educations: Education[]
  skills: Skill[]
  offers: Offer[]
  preference: Preference
  video?: string
  images: Images
  address: Address
  applications: Application[]
  contact: Contact
}

export interface BusinessUser {
  _id: string
  __v: number

  email: string
  picture?: string
  images: Images

  fullName: string
  companyName: string
  website?: string

  hiringSkills: string[]

  profileImage: string
  bio: string

  jobs: Job[]

  preference: object
  video: string
  address: Address
}

export interface CreateBusinessUser extends AuthUser {
  fullName: string
  companyName: string

  profileImage: string
  bio: string

  website?: string
  companyNumber: string
  address: Address
  video: string
  images: Images
}
