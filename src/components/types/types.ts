export type InfoType = {
  count: number
  pages: number
  next: string
  prev: string
}
export type CharType = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  },
  location: {
    name: string
    url: string
  },
  image: string
  episode: string[]
  url: string
  created: string
}
export type EpisodeType = {
  id: number
  name: string
  air_date: string
  episode: string
  characters: any
  url: string
  created: string
}
export type LocationType = {
  id: number
  name: string
  type: string
  dimension: string
  residents: any
  url: string
  created: string
}
export type CharResponseType = {
  info: InfoType
  results: CharType[]
}
export type EpisodeResponseType = {
  info: InfoType
  results: EpisodeType[]
}
export type LocationResponseType = {
  info: InfoType
  results: LocationType[]
}
