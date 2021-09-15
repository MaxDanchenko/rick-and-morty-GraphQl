import React, {FC} from "react"
import styles from "../ModalItem.module.scss"
import {CharType} from "../../types/types"



interface PropsType {
  char: CharType
}

export const CharModalItem: FC<PropsType> = ({ char }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{char.name}</p>
      <img src={char.image} alt={char.name} className={styles.itemImg}/>
      <ul className={styles.table}>
        <li className={styles.tableList}>
          <span>Location:</span>
          {char.location.name}
        </li>
        <li className={styles.tableList}>
          <span>Gender:</span>
          {char.gender}
        </li>
        <li className={styles.tableList}>
          <span>Status:</span>
          {char.status}
        </li>
        <li className={styles.tableList}>
          <span>Species:</span>
          {char.species}
        </li>
        <li className={styles.tableList}>
          <span>Type:</span>
          {char.type || "Undefined"}
        </li>
        <li className={styles.tableList}>
          <span>Origin name:</span>
          {char.origin.name}
        </li>
        <li className={styles.tableList}>
          <span>Created:</span>
          {char.created}
        </li>
      </ul>
    </div>
  )
}