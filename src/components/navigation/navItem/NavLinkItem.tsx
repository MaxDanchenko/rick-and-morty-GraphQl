import React, {FC} from "react"
import {NavLink} from "react-router-dom"
import styles from "./NavLinkItem.module.scss"



interface PropsType {
  el: string
}

export const NavLinkItem: FC<PropsType> = ({ el }) => {
  return (
    <NavLink className={styles.navigationLink} to={el}>
      {el}
    </NavLink>
  )
}