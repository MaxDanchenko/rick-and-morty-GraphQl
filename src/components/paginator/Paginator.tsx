import React, {FC} from "react"
import Pagination from "@material-ui/lab/Pagination"
import styles from "./Paginator.module.scss"



interface PropsType {
  count: number
  setPage: (num: number) => void
  page: number
}

export const Paginator: FC<PropsType> = ({ page, count, setPage }) => {

  const handleChange = (event: any, value: number) => {
    setPage(value)
  }

  return (
    <Pagination onChange={handleChange}
                page={page}
                className={styles.wrapper}
                count={count}
                color="primary"/>
  )
}