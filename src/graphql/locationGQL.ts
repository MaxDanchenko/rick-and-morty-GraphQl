import {gql} from "@apollo/client"



export const getLocation = (id: number) => {
  return gql`
   query Location {
    location(id: ${id}) {
    id
    name
    type
    dimension
    created
    residents {
      image   
    }
    }
   }
  `
}
export const getLocationList = (page: number, { name, type, dimension }: Record<string, string>) => {
  return gql`
    query Locations {
      locations(page: ${page}, filter: {
        name: "${name}"
        type: "${type}"
        dimension: "${dimension}"
      }) 
      {
      info {
        count
        pages
      }
       results {
        id
        name
        type
        dimension
        residents {
          image
        }
        created
       }
      }
    }
  `
}