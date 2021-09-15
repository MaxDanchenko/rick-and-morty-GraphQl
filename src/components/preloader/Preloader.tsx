import {CircularProgress} from "@material-ui/core"
import React from "react"
import styles from "./Preloader.module.scss"



export const Preloader = () => {
  return (
    <div className={styles.wrapper}>
      <CircularProgress size={60}/>
    </div>
  )
}