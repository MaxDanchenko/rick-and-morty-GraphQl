import React, {FC} from "react"
import styles from "./FormItem.module.scss"



interface PropsType {
  name: string
  value: string[]
}

export const FormItem: FC<PropsType> = ({ name, value }) => {
  return (
    <optgroup label={name} className={styles.optGroup}>
      {
        value.map((el, i) => <option className={styles.option} key={i} value={el}>{el}</option>)
      }
    </optgroup>
  )
}