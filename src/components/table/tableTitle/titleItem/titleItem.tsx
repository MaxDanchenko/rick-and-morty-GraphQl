import React, {FC, useState} from "react"
import TableCell from "@material-ui/core/TableCell"
import styles from "../../DataTable.module.scss"



interface PropsType {
  name: string
}

export const TitleItem: FC<PropsType> = ({ name }) => {
  const [reverseArrow, setReverseArrow] = useState<boolean>(true)

  const handleClick = () => {
    setReverseArrow(!reverseArrow)
  }


  return (
    <TableCell onClick={handleClick}
               className={styles.tableTitleCell}
               align="left">
      {name}
    </TableCell>
  )
}