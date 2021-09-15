import React, {FC} from "react"
import styles from "../ModalItem.module.scss"
import {LocationType} from "../../types/types"
import {Preloader} from "../../preloader/Preloader"
import {useQuery} from "@apollo/client"
import {getCharsById} from "../../../graphql/charGQL"



interface PropsType {
  locations: LocationType
}

export const LocationsModalItem: FC<PropsType> = ({ locations }) => {

  const getIdFromArr = () => {
    const result: number[] = []
    locations.residents.map((el: any) => result.push(parseInt(el.image.split("avatar/")[1])))
    return result
  }

  const charsId = getIdFromArr()
  const { data, loading } = useQuery(getCharsById(charsId))


  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{locations.name}</p>
      <ul className={styles.table}>
        <li className={styles.tableList}>
          <span>Id:</span>
          {locations.id}
        </li>
        <li className={styles.tableList}>
          <span>Type:</span>
          {locations.type}
        </li>
        <li className={styles.tableList}>
          <span>Dimension:</span>
          {locations.dimension}
        </li>
        <li className={styles.tableList}>
          <span>Created:</span>
          {locations.created}
        </li>
        <div className={styles.charsImgBlock}>
          {data && <p className={styles.charsImgTitle}>Characters:</p>}
          {data?.charactersByIds.map((el: any) => {
            return <div key={el.id} className={styles.charsImgWrap}>
              {loading
                ? <Preloader/>
                : <img src={el.image}
                       alt={el.name}
                       className={styles.itemImgSmall}/>
              }
            </div>
          })}
        </div>
      </ul>
    </div>
  )
}