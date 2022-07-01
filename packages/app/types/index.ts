export type Job = {
  __v: number
  _id: string

  //business
  business: {
    id: string
    companyName: string
    profileImage: string
    location: string
  }

  status: string

  //data
  title: string
  description: string
  images: Images
  video: string
  videoDetail: string

  benefits: string
  requirements: string
  salary: number
  educations: Education[]
  like: any[]

  preference: {
    employmentType: string
    location: string
    workingDay: string
    workingTime: string
  }

  skills: Skill[]

  highlights: string
  createdAt: string
  updatedAt: string

  //application
  applications: Application[]

  // everything else
}
export type Preference = {
  employmentType: string
  location: string
  workingDay: string | string[]
  workingTime: string
}

export type JobCreate = {
  business: {
    id: string
    companyName: string
    profileImage: string
    location: string
  }

  title: string
  images: Images
  salary: number

  educations: Education[]
  skills: Skill[]
  preference: Preference

  highlights: string
  benefits: string
  requirements: string

  video: string
  videoDetail: string
}

export type Application = {
  _id?: string
  status: string
  //profile
  candidate: {
    id: string
    fullName: string
    profileImage: string
    location: string
  }
  resume: string

  //job
  job: {
    id: string
    title: string
  }

  //business
  business: {
    id: string
    companyName: string
    profileImage: string
    location: string
  }

  //applications
  salary: number
  video: string
}
export type CreateApplication = {
  //profile
  candidate: {
    id: string
    fullName: string
    profileImage: string
    location: string
  }
  resume: string

  //job
  job: {
    id: string
    title: string
  }

  //business
  business: {
    id: string
    companyName: string
    profileImage: string
    location: string
  }

  //applications
  salary: number
  video: string
}

export type PreferenceData = {
  key: keyof Preference
  title: string
  data: { label: string; value: string }[]
  customType?: 'day' | 'time'
}[]

export interface Skill {
  name: string
  year: number
}

export interface Offer {
  title: string
  description: string
  price: number
  skills: Skill[]
  currency: 'USD' | 'EUR' | 'GBP' | 'JPY' | 'CNY' | 'THB'
  location?: string
}

export interface Contact {
  line: string
  email: string
  phone: string
}
export interface ContactData {
  url: string
  icon: string
  color: string
  value: string
}
export interface ContactDatas {
  line: ContactData
  email: ContactData
  phone: ContactData
}
export interface Education {
  title: string
  level: 'choose' | 'associate' | 'bachelor' | 'master' | 'doctoral'
}

export interface Address {
  address: {
    city: string
    countryCode: string
    countryName: string
    county: string
    houseNumber: string
    label: string
    postalCode: string
    state?: string
    stateCode?: string
    street: string
  }
  coordinate: {
    latitude: number
    longitude: number
  }
  title: string
}
export type Resume = {
  name: string
  uri: string
  size: number | undefined
}

export type ImageType = string
// export type Image = {
//   uri: string;
//   width: number;
//   height: number;
// };

type ArrayLengthMutationKeys = 'splice' | 'push' | 'pop' | 'shift' | 'unshift'
export type FixedLengthArray<
  T,
  L extends number,
  TObj = [T, ...Array<T>]
> = Pick<TObj, Exclude<keyof TObj, ArrayLengthMutationKeys>> & {
  readonly length: L
  [I: number]: T
  [Symbol.iterator]: () => IterableIterator<T>
}

export type Images = FixedLengthArray<ImageType, 6>
