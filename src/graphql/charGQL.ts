import {gql} from "@apollo/client"



export const getChar = (id: number) => {
  return gql`
  query Character {
    character(id: ${id}) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
      created
    }
  }
  `
}


export const getCharsById = (ids: number[]) => {
  return gql`
  query Character {
  charactersByIds(ids: "${ids}") {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
      created
    }
  }
  `
}

export const getCharList = (page: number, { gender, status, species }: Record<string, string>) => {
  return gql`
   query Characters {
    characters(page: ${page || 1}, filter: {
      gender: "${gender}", 
      status: "${status}", 
      species: "${species}"
    }) 
    {
      info {
        count
        pages
      }
      results {
        id
        name
        status
        species
        type
        gender
        image
      }
    }
   }
  `
}