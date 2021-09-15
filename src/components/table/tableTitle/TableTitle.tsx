import TableRow from "@material-ui/core/TableRow"
import React, {FC} from "react"
import {TitleItem} from "./titleItem/titleItem"
import styles from "./TableTitleRow.module.scss"



interface PropsType {
  component: string
}

const charTableItems = ["Image", "Name", "Species", "Status", "Gender"]
const episodeTableItems = ["Name", "Episode", "Air-date", "Created"]
const locationsTableItems = ["Name", "Type", "Dimension", "Url"]

export const TableTitle: FC<PropsType> = ({ component }) => {
  return (
    <TableRow className={styles.tableTitleRow}>
      {component === "characters" && charTableItems
        .map((el, i) => <TitleItem key={i} name={el}/>)
      }
      {component === "episodes" && episodeTableItems
        .map((el, i) => <TitleItem key={i} name={el}/>)
      }
      {component === "locations" && locationsTableItems
        .map((el, i) => <TitleItem key={i} name={el}/>)
      }
    </TableRow>
  )
}