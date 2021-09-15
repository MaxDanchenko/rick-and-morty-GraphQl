import React, {FC} from "react"
import styles from "./Navigation.module.scss"
import {NavLinkItem} from "./navItem/NavLinkItem"



interface PropsTypes {
  pagesName: string[]
}

export const Navigation: FC<PropsTypes> = ({ pagesName }) => {

  return (
    <div className={styles.appNavigationBlock}>
      {pagesName.map((el, i) => <NavLinkItem key={i} el={el}/>)}
    </div>
  )
}