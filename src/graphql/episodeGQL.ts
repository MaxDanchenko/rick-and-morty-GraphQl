import {gql} from "@apollo/client"



export const getEpisode = (id: number) => {
  return gql`
    query Episode {
    episode(id: ${id}) {
      id
      name
      air_date
      episode
      characters {
        image
      }
      created
   }
  }
 `
}


export const getEpisodeList = (page: number, name: string) => {
  return gql`
   query Episodes {
   episodes(page: ${page}, filter: {name: "${name}"}) {
    info {
      count
      pages
    }
    results {
      id
      name
      air_date
      episode
      characters {
        image
      }
      created
    }
  }
}
 `
}