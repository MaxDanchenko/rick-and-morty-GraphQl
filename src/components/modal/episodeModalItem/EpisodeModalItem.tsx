import React, {FC} from "react"
import styles from "../ModalItem.module.scss"
import {EpisodeType} from "../../types/types"
import {Preloader} from "../../preloader/Preloader"
import {useQuery} from "@apollo/client"
import {getCharsById} from "../../../graphql/charGQL"



interface PropsType {
  episode: EpisodeType
}

export const EpisodeModalItem: FC<PropsType> = ({ episode }) => {

  const getIdFromArr = () => {
    const result: number[] = []
    episode.characters.map((el: any) => result.push(parseInt(el.image.split("avatar/")[1])))
    return result
  }

  const charsId = getIdFromArr()
  const { data, loading } = useQuery(getCharsById(charsId))

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{episode.name}</p>
      <ul className={styles.table}>
        <li className={styles.tableList}>
          <span>Id:</span>
          {episode.id}
        </li>
        <li className={styles.tableList}>
          <span>Air date:</span>
          {episode.air_date}
        </li>
        <li className={styles.tableList}>
          <span>Episode:</span>
          {episode.episode}
        </li>
        <li className={styles.tableList}>
          <span>Created:</span>
          {episode.created}
        </li>
        <div className={styles.charsImgBlock}>
          <p className={styles.charsImgTitle}>
            Characters:
          </p>
          {data?.charactersByIds.map((el: any) => {
            return <div key={el.id} className={styles.charsImgWrap}>
              {loading
                ? <Preloader/>
                : <img src={el.image} alt={el.name} className={styles.itemImgSmall}/>
              }
            </div>
          })}
        </div>
      </ul>
    </div>
  )
}